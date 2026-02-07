import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: '个人知识库',
  tagline: '专注技术，持续学习',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://aixuexi.online',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // 将文档设为首页
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false, // 禁用博客
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    require.resolve('docusaurus-lunr-search'),
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
        width: 28,
        height: 28,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'javaSidebar',
          position: 'left',
          label: 'Java基础',
        },
        {
          type: 'docSidebar',
          sidebarId: 'middlewareSidebar',
          position: 'left',
          label: '框架与中间件',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectSidebar',
          position: 'left',
          label: '视频项目实战',
        },
        {
          type: 'docSidebar',
          sidebarId: 'interviewSidebar',
          position: 'left',
          label: '面试梳理',
        },
        {
          href: 'https://github.com/djr8527/blog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `© ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'sql', 'bash', 'yaml', 'json', 'properties'],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
