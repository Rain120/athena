#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy vuepress docs gh-pages'

git push -f git@github.com:Rain120/athena.git master:gh-pages

cd -
