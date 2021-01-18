#!/bin/zsh

echo 'SETING UP APP'
echo '==============='
echo 'SETTING UP GIT'
rm -rf .git
git init
git add .
git commit --quiet -m 'first commit'
yarn
