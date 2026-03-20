import React from 'react';
import { Copy, Settings2 } from 'lucide-react';
import { WeChatThemeOptions } from '../styles/wechatTheme';

interface ToolbarProps {
  themeOptions: WeChatThemeOptions;
  onChangeThemeOptions: (options: WeChatThemeOptions) => void;
  onCopy: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  themeOptions,
  onChangeThemeOptions,
  onCopy,
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.25 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 2C6.477 2 2 5.806 2 10.5c0 2.65 1.414 5.016 3.626 6.582-.262 1.29-.86 2.62-1.026 2.946-.07.14.044.295.195.253 1.13-.314 2.822-1.01 3.88-1.577.72.185 1.503.296 2.325.296 5.523 0 10-3.806 10-8.5S17.523 2 12 2z" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-gray-800">WeChat Markdown</h1>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Settings2 className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-600">Theme Color</span>
          <input
            type="color"
            value={themeOptions.themeColor}
            onChange={(e) =>
              onChangeThemeOptions({
                ...themeOptions,
                themeColor: e.target.value,
              })
            }
            className="w-6 h-6 p-0 border-0 rounded cursor-pointer"
          />
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-600">Font Size</span>
          <input
            type="range"
            min="12"
            max="24"
            value={themeOptions.fontSize}
            onChange={(e) =>
              onChangeThemeOptions({
                ...themeOptions,
                fontSize: parseInt(e.target.value),
              })
            }
            className="w-24"
          />
          <span className="text-sm text-gray-500 w-8">
            {themeOptions.fontSize}px
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-600">Line Height</span>
          <input
            type="range"
            min="1.2"
            max="2.5"
            step="0.1"
            value={themeOptions.lineHeight}
            onChange={(e) =>
              onChangeThemeOptions({
                ...themeOptions,
                lineHeight: parseFloat(e.target.value),
              })
            }
            className="w-24"
          />
          <span className="text-sm text-gray-500 w-8">
            {themeOptions.lineHeight}
          </span>
        </div>

        <button
          onClick={onCopy}
          className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors font-medium"
        >
          <Copy className="w-4 h-4" />
          <span>Copy to WeChat</span>
        </button>
      </div>
    </div>
  );
};
