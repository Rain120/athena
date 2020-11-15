/*
 * @Author: Rainy
 * @Date: 2020-02-27 16:38:27
 * @LastEditors: Rainy
 * @LastEditTime: 2020-11-15 09:10:35
 */

const fs = require('fs');
const path = require('path');

const language = 'zh';
const filePath = path.join(__dirname, `../../${language}`);
const ignore = ['images', '.vuepress', '.DS_Store', 'en'];
const README_REG = /README/;

// INFO: 从 package.json 获取你的文档名字, 主要为了配置多层级子目录
const docsPath = process.cwd();
const pkg = require(`${docsPath}/package.json`);
const pkgName = pkg.name || docsPath.trim().split('/').slice(-1).toString();

/**
 * @description 特殊处理文档顺序
 * alias 的顺序决定了文档菜单的目录顺序，子菜单亦可
 * Eg:
 * p2: p2
 * p1: p1
 * p1-c2: p1-c2
 * p1-c1: p1-c1
 * -> 菜单顺序是
 * p2
 * p1
 *   c2
 *   c1
 */
const alias = require('./alias.json');
const { exit } = require('process');

const mapper = code => {
  return alias[code];
}

const isFile = ({ dir = filePath, fPath }) =>
  fs.statSync(path.join(dir, fPath)).isFile();

function syncDirPath(file = filePath) {
  return fs.readdirSync(file) || [];
}

function helper({ dir, fPath }) {
  const prefixPath = dir.split(`${pkgName}/docs`)[1];
  const currentPath = path.join(dir, fPath);

  const children = syncDirPath(currentPath)
    .filter(fPath => !ignore.includes(fPath))
    .map((sub, index) => {
      const fsStats = fs.statSync(path.join(currentPath, sub));

      if (fsStats.isDirectory()) {
        return helper({ dir: currentPath, fPath: sub });
      } else if (fsStats.isFile() && !README_REG.test(sub)) {
        const name = sub.replace('\.md', '');
        return {
          title: mapper(name) || `${name}`,
          key: name,
          path: `${prefixPath}/${fPath}/${name}`,
        }
      }
    }).filter(Boolean);

  return {
    title: mapper(fPath) || `${fPath}`,
    key: fPath,
    path: `${prefixPath}/${fPath}/`,
    collapsable: true,
    children: Array.isArray(children) ? children : [children],
  }
}

function sidebarHelper(dir = filePath) {
  return syncDirPath(dir)
    .filter(fPath => !isFile({ fPath }) && !ignore.includes(fPath))
    .map((fPath, dirIndex) => {
      return helper({ dir, fPath }) || [];
    });
}

function findIndex(value) {
  return Object.keys(alias).findIndex(item => item === value)
}

function sortSidebar(sidebar) {
  sidebar.sort((a, b) => {
    return findIndex(a.key) - findIndex(b.key);
  });
  for (const item of sidebar) {
    if (item && Array.isArray(item.children)) {
      item.children = sortSidebar(item.children);
    }
  }
  return sidebar;
}

module.exports = {
	ignore,
	isFile,
	syncDirPath,
  sidebarHelper,
  sortSidebar,
};
