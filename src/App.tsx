/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { Toolbar } from './components/Toolbar';
import { WeChatThemeOptions } from './styles/wechatTheme';

const DEFAULT_MARKDOWN = `# 欢迎使用微信公众号 Markdown 编辑器

这里是一款专为**微信公众号**排版设计的 Markdown 编辑器。你可以直接在这里编写内容，右侧会实时预览最终的排版效果。

## 🌟 核心特性

- **实时预览**：所见即所得的编辑体验。
- **主题定制**：支持自定义主题色、字体大小和行高。
- **代码高亮**：精美的 Mac 风格代码块，支持多种语言。
- **一键复制**：完美兼容微信公众号图文编辑器。

### 💻 代码块展示

下面是一个 Python 的快速排序实现，带有 Mac 风格的窗口控制按钮：

\`\`\`python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    mid = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + mid + quicksort(right)

print(quicksort([3, 6, 8, 10, 1, 2, 1]))
\`\`\`

> "代码写出来是给人看的，附带能在机器上运行。" —— Harold Abelson

### 📊 丰富的数据展示

我们同样支持表格的精美排版：

| 功能特性 | 支持状态 | 备注说明 |
| :--- | :---: | :--- |
| 基础 Markdown | ✅ | 标题、加粗、斜体等 |
| Mac 风格代码块 | ✅ | 自动识别语言类型 |
| 自定义主题色 | ✅ | 适配品牌视觉规范 |
| 微信一键粘贴 | ✅ | 格式 100% 完美保留 |

### 🔗 更多格式

你可以使用 *斜体* 来强调文本，或者添加[超链接](https://example.com)指向外部资源。

1. 第一步：在左侧输入 Markdown
2. 第二步：在顶部调整你喜欢的主题
3. 第三步：点击右上角复制到微信

开始你的创作吧！🎉
`;

export default function App() {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);
  const [themeOptions, setThemeOptions] = useState<WeChatThemeOptions>({
    themeColor: '#07c160',
    fontSize: 16,
    lineHeight: 1.6,
  });

  const handleCopy = async () => {
    const previewElement = document.getElementById('wechat-preview');
    if (!previewElement) return;

    try {
      const html = previewElement.innerHTML;
      const text = previewElement.innerText;

      const clipboardItem = new ClipboardItem({
        'text/html': new Blob([html], { type: 'text/html' }),
        'text/plain': new Blob([text], { type: 'text/plain' }),
      });

      await navigator.clipboard.write([clipboardItem]);
      alert('Copied successfully! You can now paste it into WeChat Official Account editor.');
    } catch (err) {
      console.error('Failed to copy', err);
      // Fallback for older browsers
      try {
        const range = document.createRange();
        range.selectNodeContents(previewElement);
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
          document.execCommand('copy');
          selection.removeAllRanges();
          alert('Copied successfully! You can now paste it into WeChat Official Account editor.');
        }
      } catch (fallbackErr) {
        alert('Failed to copy. Your browser might not support this feature.');
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Toolbar
        themeOptions={themeOptions}
        onChangeThemeOptions={setThemeOptions}
        onCopy={handleCopy}
      />
      <div className="flex-1 flex overflow-hidden">
        <div className="w-1/2 flex flex-col border-r border-gray-200 bg-white">
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-500 uppercase tracking-wider">
            Markdown Input
          </div>
          <div className="flex-1 overflow-hidden">
            <Editor value={markdown} onChange={setMarkdown} />
          </div>
        </div>
        <div className="w-1/2 flex flex-col bg-gray-50">
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-500 uppercase tracking-wider">
            WeChat Preview
          </div>
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-3xl mx-auto bg-white shadow-sm border border-gray-200 min-h-full rounded-sm">
              <Preview markdown={markdown} themeOptions={themeOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

