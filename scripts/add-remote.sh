###
 # @Author: Rainy
 # @Date: 2020-07-05 15:35:57
 # @LastEditors: Rainy
 # @LastEditTime: 2020-07-05 15:47:22
###

#!/usr/bin/env sh

# git@github.com:Rain120/athena.git

set -e

if [[ -n "$1" ]];then

git remote -v

echo "Old Origin"

git remote remove origin

echo "Add origin $1"

git remote add origin $1

echo "New Origin"
git remote -v

else

echo "Please add the Origin Address"

fi
