/*
 * @Author: Rainy
 * @Date: 2020-03-04 17:43:25
 * @LastEditors: Rainy
 * @LastEditTime: 2020-08-03 20:36:34
 */

const path = require('path');
const fs = require('fs');

const aliasPath = path.resolve('docs/.vuepress/utils/alias.json');
// 排在最后面的数据 string[]
const last = [];

/**
 *
 * @param {string} key modal name
 * @param {string} value modal alias
 */
function addAlias({ name, alias }) {
	const data = fs.readFileSync(aliasPath, 'utf-8');
	const content = JSON.parse(data);
	if (!alias) {
		alias = name;
	}
	if (!content[name]) {
		content[name] = alias;
	} else {
		throw new Error('The name is exist');
	}

	const alias = {};
	Object.keys(content).forEach(name => {
		if (!last.includes(name)) {
			alias[name] = content[name];
		}
	});

	last.forEach(name => {
		alias[name] = content[name];
	});

	const file = JSON.stringify(alias, null, 2);

	fs.writeFileSync(aliasPath, new Buffer(file))
}

module.exports = plop => {
  plop.setGenerator('docs', {
    description: 'Create zh docs',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'please input the docs model name: ',
        default: 'model'
      },
      {
        type: 'input',
        name: 'alias',
        message: 'please input the docs model alias name (default same as model name)?'
      },
      {
        type: 'input',
        name: 'path',
        message: 'generator model path (etc: docs/zh/model) ?',
        default: 'docs/zh'
      }
    ],
    actions: answer => {
			addAlias(answer);
      return [
        {
          type: 'add',
          path: '{{path}}/{{name}}/README.md',
          templateFile: 'plop-templates//README.md.hbs'
        }
      ];
    }
  });
};
