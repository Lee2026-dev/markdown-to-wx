import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getWeChatStyles, WeChatThemeOptions } from '../styles/wechatTheme';

interface PreviewProps {
  markdown: string;
  themeOptions: WeChatThemeOptions;
}

export const Preview: React.FC<PreviewProps> = ({ markdown, themeOptions }) => {
  const styles = getWeChatStyles(themeOptions);

  return (
    <div
      id="wechat-preview"
      style={styles.wrapper}
      className="prose-none max-w-none"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 style={styles.h1} {...props} />,
          h2: ({ node, ...props }) => <h2 style={styles.h2} {...props} />,
          h3: ({ node, ...props }) => <h3 style={styles.h3} {...props} />,
          p: ({ node, ...props }) => <p style={styles.p} {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote style={styles.blockquote} {...props} />
          ),
          ul: ({ node, ...props }) => <ul style={styles.ul} {...props} />,
          ol: ({ node, ...props }) => <ol style={styles.ol} {...props} />,
          li: ({ node, ...props }) => <li style={styles.li} {...props} />,
          a: ({ node, ...props }) => <a style={styles.a} {...props} />,
          strong: ({ node, ...props }) => (
            <strong style={styles.strong} {...props} />
          ),
          em: ({ node, ...props }) => <em style={styles.em} {...props} />,
          img: ({ node, ...props }) => <img style={styles.img} {...props} />,
          hr: ({ node, ...props }) => <hr style={styles.hr} {...props} />,
          table: ({ node, ...props }) => (
            <table style={styles.table} {...props} />
          ),
          th: ({ node, ...props }) => <th style={styles.th} {...props} />,
          td: ({ node, ...props }) => <td style={styles.td} {...props} />,
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            
            return !inline && match ? (
              <div style={styles.codeWrapper}>
                <table style={styles.codeHeaderTable} cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td style={styles.codeDotsTd}>
                        <span style={{ ...styles.codeDot, ...styles.codeDotRed }}>&nbsp;</span>
                        <span style={{ ...styles.codeDot, ...styles.codeDotYellow }}>&nbsp;</span>
                        <span style={{ ...styles.codeDot, ...styles.codeDotGreen }}>&nbsp;</span>
                      </td>
                      <td style={styles.codeLangTd}>
                        {language ? language : ''}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <SyntaxHighlighter
                  style={vscDarkPlus as any}
                  language={language}
                  PreTag="pre"
                  customStyle={styles.pre}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code style={styles.code} className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};
