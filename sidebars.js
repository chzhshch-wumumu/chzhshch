/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  chzhshchSidebar: [
    'chzhshch/chzhshchintro',
    {
      type: 'category',
      label: '缠师原版',
      items: ['chzhshch/original/chzhshch001', 
              'chzhshch/original/chzhshch002', 
              'chzhshch/original/chzhshch003', 
              'chzhshch/original/chzhshch004', 
              'chzhshch/original/chzhshch005', 
              'chzhshch/original/chzhshch006',
              'chzhshch/original/chzhshch007', 
              'chzhshch/original/chzhshch008'],
    },
    {
      type: 'category',
      label: '无木目版',
      items: ['chzhshch/vwumumu/vchzhshch001', 
              'chzhshch/vwumumu/vchzhshch002', 
              'chzhshch/vwumumu/vchzhshch003', 
              'chzhshch/vwumumu/vchzhshch004', 
              'chzhshch/vwumumu/vchzhshch005', 
              'chzhshch/vwumumu/vchzhshch006'],
      collapsible: false
    },
  ],
  bookSidebar: [
    'book/bookintro',
    'book/beyond-feelings',
  ],
};

module.exports = sidebars;
