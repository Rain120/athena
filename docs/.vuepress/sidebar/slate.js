/*
 * @Author: Rainy [https://github.com/rain120]
 * @Date: 2020-11-21 16:49:12
 * @LastEditors: Rainy
 * @LastEditTime: 2020-11-22 11:31:16
 */

const { sortable } = require('../utils/navSidebar');

function getSlateSidebar() {
	return sortable({
		nav: 'slate',
		sortList: [
			{
				label: 'SlateStart',
				priority: 0,
			},
			{
				label: 'Introduction',
				priority: 1,
			},
			{
				label: 'Summary',
				priority: 3,
			},
			{
				label: 'walkthroughs',
				priority: 5,
			},
			{
				label: 'Contributing',
				priority: 25,
			},
			{
				label: 'general',
				priority: 30,
			}
		],
		noTitleList: [
			'api',
			'walkthroughs',
			'concepts',
			'libraries',
			'general',
			'note'
		],
		collapsableList: [
			'SlateStart',
			'Introduction',
			'Summary'
		]
	});
}

module.exports = getSlateSidebar()
