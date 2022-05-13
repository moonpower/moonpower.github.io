// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Youngdongbot',
  tagline: 'React, Javascript, Algorithm, ...',
  url: 'https://moonpower.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn', // 기본값 throw
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'moonpower',
  projectName: 'moonpower.github.io',
  themes: ['@saucelabs/theme-github-codeblock'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/moonpower/moonpower.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/moonpower/moonpower.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-XB9QB6J16C'
        },
      }),
      /** @type {import('@docusaurus/preset-classic').gooA} */
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'keywords', content: 'youngdongbot, 영동봇' }
      ],
      navbar: {
        hideOnScroll: true, // 사용자가 아래로 스크롤 시 메뉴바를 숨길지 여부를 설정합니다.
        title: 'Youngdongbot',
        logo: {
          alt: 'Moonpower sketch',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'react/intro',
            position: 'left',
            label: '리액트',
          },
          {
            type: 'doc',
            docId: 'javascript/intro',
            position: 'left',
            label: '자바스크립트',
          },
          {
            type: 'doc',
            docId: 'java/intro',
            position: 'left',
            label: '자바',
          },
          {
            type: 'doc',
            docId: 'algorithm/intro',
            position: 'left',
            label: '알고리즘',
          },
          {
            type: 'doc',
            docId: 'tutorial/intro',
            position: 'left',
            label: '무작정 따라하기',
          },
          { to: '/blog', label: '블로그', position: 'left' },
          {
            href: 'https://github.com/moonpower/moonpower.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '문서',
            items: [
              {
                label: '리액트',
                to: '/docs/react/intro',
              },
              {
                label: '자바스크립트',
                to: '/docs/javascript/intro',
              },
              {
                label: '알고리즘',
                to: '/docs/algorithm/intro',
              },
              {
                label: '무작정 따라하기',
                to: '/docs/tutorial/intro',
              },
            ],
          },
          {
            title: '커뮤니티',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/moonpower/moonpower.github.io/discussions'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: '블로그',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/moonpower/moonpower.github.io',
              },
            ],
          },
          {
            title: '관리',
            items: [
              {
                label: 'Google Search',
                href: 'https://search.google.com/search-console'
              },
              {
                label: 'Google Analytics',
                href: 'https://analytics.google.com/analytics/web/'
              },
              {
                label: 'Naver Search',
                href: 'https://searchadvisor.naver.com/console/board'
              },
            ]
          }
        ],
        copyright: `${new Date().getFullYear()} Youngdongbot. Built with Docusaurus.`,
      },
      hideableSidebar: true, // 사이드바를 숨기는 기능
      autoCollapseSidebarCategories: true, // 특정 요소를 확장하면 그 외 요소들은 축소됨.
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
