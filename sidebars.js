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
    'chzhshchintro',
    {
      type: 'category',
      label: '缠师原版',
      items: ['chzhshch001', 
              'chzhshch002', 
              'chzhshch003', 
              'chzhshch004', 
              'chzhshch005', 
              'chzhshch006',
              'chzhshch007', 
              'chzhshch008'],
    },
    {
      type: 'category',
      label: '无木目版',
      items: ['vchzhshch001', 
              'vchzhshch002', 
              'vchzhshch003', 
              'vchzhshch004', 
              'vchzhshch005', 
              'vchzhshch006'],
      collapsible: false
    },
  ],
  bookSidebar: [
    'bookintro',
    'beyond-feelings',
  ],
};

module.exports = sidebars;
