import React from 'react';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <textarea
      className="w-full h-full p-6 resize-none outline-none font-mono text-[15px] leading-relaxed bg-white text-gray-800"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type your markdown here..."
      spellCheck={false}
    />
  );
};
