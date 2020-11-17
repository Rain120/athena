/*
 * @Author: Rainy [https://github.com/rain120]
 * @Date: 2020-11-14 20:53:53
 * @LastEditors: Rainy
 * @LastEditTime: 2020-11-15 17:21:27
 */

const fs = require('fs');
const path = require('path');

const language = 'zh';
const filePath = path.join(__dirname, `../../${language}`);
const { syncDirPath, isFile, ignore } = require('./sidebarHelper');
const alias = require('./alias.json');

const isMd = file => /\.md$/.test(file);
const removeMd = (file = '') => file.replace(/\.md$/, '');

function sortable({
	nav,
	path = filePath,
	lang = language,
	// INFO: priority 0 - 10, 11 - 20, 21 - 30, 默认是 11
	// [{ label: '', priority: 10 }]
	sortList = [],
	noTitleList = [],
	collapsableList = []
}) {
	function findObj(obj) {
		return (sortList.find(_ => _.label === (obj.key || '')) || {});
	}
	return createSidebar({
		nav,
		path,
		lang,
		collapsableList,
		noTitleList,
	}).filter(Boolean).sort((front, end) => {
		if (!sortList.length) {
			return;
		}
		const { priority: ap = 10 } = findObj(front);
		const { priority: bp = 10 } = findObj(end);
		return ap - bp;
	})
}

function createSidebar({
	nav,
	path = filePath,
	lang = language,
	collapsableList = [],
	noTitleList = []
}) {
	const located = `${path}/${nav}`;
	const prefixPath = located.split(filePath)[1]
	const current = syncDirPath(located);
	let children = [];

	return current
    .filter(fPath => !ignore.includes(fPath))
    .filter(Boolean)
      .map((file, dirIndex) => {
        // INFO: 默认以 .md 结尾就是文档
        const isDoc = isMd(file);
        let fileName = isDoc ? removeMd(file) : file;
        // INFO: 是否展开
        const collapsable = !collapsableList.includes(fileName);
        // INFO: 重组 children 中的路径, 也是这篇文档唯一的 key 值
        const docPath = `/${lang}${prefixPath}/${fileName}`;

        // INFO: 配置别名
        const docAlias = alias[fileName];

        if (isDoc) {
          // INFO: 有别名复制别名, 默认重组 path
          // fileName = docAlias ? [docPath, docAlias] : docPath;
					children.push(docPath);
        } else {
          // INFO: 文件夹递归
          children = createSidebar({nav: file, path: located});
        }
        const title = (docAlias ? docAlias : file || '').replace(/\.md$/, '');
        const key = removeMd(file);
        return {
          title,
          key,
          collapsable,
          children: (children || [])
            .filter(_ =>
              Boolean && Array.isArray(_)
                ? (_[0] || '').includes(key)
                : typeof _ === 'string'
                  ? _.includes(key)
                  : !_.children.includes(key)
            ).map(_ => {
              if (noTitleList.filter(Boolean).includes(key)) {
                _.title = '';
                _.collapsable = false;
              }
              return _;
            }),
        };
	});
}

module.exports = {
	sortable,
	createSidebar,
}
