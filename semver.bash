#! /bin/bash

if [ -z "$1" ]; then
  echo 'Library name is required' && exit
fi

packages=('access-control')
packageExist='no'

for package in ${packages[@]}
do
  if [ $1 == $package ]; then
    packageExist='yes'
    break
  fi
done

if [ $packageExist == 'no' ]; then
  echo "Library $1 doesn't exist in array of packages inside semver.bash" && exit
fi

cd "./packages/$1" && npm run release:patch -- -t=$1.v && cd "../../dist/packages/$1" && \
  npm publish && echo "Library $1 updated with semver, builded and uploaded in npm"
