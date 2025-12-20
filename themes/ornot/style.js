/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      /* 浅色模式背景：柔和灰 */
      body {
        background-color: #f5f5f4; /* suu 风格的 matte light gray */
      }

      /* 深色模式背景：柔和黑 */
      .dark body {
        background-color: #111111; /* 比纯黑更柔和 */
      }
    `}</style>
  );
};

export { Style }
