#!/usr/bin/env sh

# прерывание при ошибках
set -e

# build
npm run build

# перейти в каталог вывода сборки
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# если вы развертываете на https: // <USERNAME> .github.io / <REPO>
# git push -f git@github.com:valntyn/react-tailwind-practice.git main:gh-pages

cd -