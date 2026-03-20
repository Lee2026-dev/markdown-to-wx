# Markdown to Wx (微信公众号 Markdown 编辑器)

一款专为「微信公众号」排版设计的 Markdown 编辑器。可以非常方便地将 Markdown 文本实时转换为适合微信公众号文章发布的富文本格式，并支持一键无缝复制。

## ✨ 特性

- 📝 **极简编辑**：支持纯净的 Markdown 实时预览和编辑体验
- 🎨 **样式自定义**：支持高度自定义主题色、正文字体、代码主题、正文字号、排版间距等样式设定
- 💻 **代码高亮**：完整支持多语言的代码高亮渲染，微信公众号文章插入代码不再头疼
- 🧮 **数学公式**：可通过相应插件和解析器渲染复杂的数学公式格式
- 📋 **一键复制**：一键将渲染好的富文本内容复制到剪贴板，直接包含行内及块级 CSS，粘贴到微信后台即可完美展示
- 📱 **响应式与侧边交互**：自适应左右分栏或响应式布局体验

## 🛠 技术栈

本项目为现代 Web 应用架构（React + Vite）：
- [**React**](https://react.dev) + [**Vite**](https://vitejs.dev/) ⚡️
- [**Tailwind CSS**](https://tailwindcss.com/) 🎨
- [**react-markdown**](https://github.com/remarkjs/react-markdown) & **remark-gfm** 📝
- [**react-syntax-highlighter**](https://github.com/react-syntax-highlighter/react-syntax-highlighter) 🔍

## 🚀 本地开发与运行

**1. 克隆本仓库**
```bash
git clone git@github.com:Lee2026-dev/markdown-to-wx.git
cd markdown-to-wx
```

**2. 安装依赖**
```bash
npm install
```

**3. 启动开发服务器**
```bash
npm run dev
```

**4. 构建打包**
```bash
npm run build
```

## 🌐 线上预览站点

项目已经通过 GitHub Pages 在线免费托管，随时随地可用：
👉 **[https://lee2026-dev.github.io/markdown-to-wx/](https://lee2026-dev.github.io/markdown-to-wx/)**

> **关于部署的提示：** 如果项目已迁移至 React/Vite，使用 GitHub Pages 静态网站部署时，你通常需要构建 `dist` 文件夹，并在此库的 GitHub Actions 部署分支上指向发布构建文件。可以在 `vite.config.ts` 中配置 `base: '/markdown-to-wx/'` 来兼容 GitHub Pages 的子路径资源访问。
