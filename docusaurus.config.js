/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Fate/stay night Dominate Grail War',
  tagline: '桌遊中文規則',
  url: 'https://richard02110.github.io',
  baseUrl: '/fsn-tabletop-game-rule/',
  favicon: 'img/favicon.ico',
  organizationName: 'whoisback', // Usually your GitHub org/user name.
  projectName: 'fsn-tabletop-game-rule', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Fate/stay night',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      links: [
        /*
        {to: 'docs/doc1', label: '觀看規則', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '桌遊官方網站',
          items: [
            {
              label: '前往',
              href: 'https://www.delightworks.co.jp/games/boardgame/dominate-grail-war/',
            },
          ],
        },
        {
          title: '官方購物網站',
          items: [
            {
              label: '購買',
              href: 'https://store-delightworks.jp/category/FSNBG/',
            },
          ],
        },
        {
          title: '巴哈姆特介紹文章',
          items: [
            {
              label: '閱讀',
              to: 'https://gnn.gamer.com.tw/detail.php?sn=183007',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
