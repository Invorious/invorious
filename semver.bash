#! /bin/bash

semver=('major' 'minor' 'patch')
packages=('access-control')
type=''
package=''

while getopts "t:p:" flag; do
  case "${flag}" in
    p)
      package=${OPTARG}
      ;;
    t)
      type=${OPTARG}
      ;;
  esac
done

if [ $package == '' ] || [ $type == '' ]; then
  echo "Flag p and t are required" && exit
fi

exist='no'
for value in ${semver[@]}
do
  if [ $type == $value ]; then
    exist='yes'
    break
  fi
done

if [ $exist == 'no' ]; then
  echo "Flag t shoulbe (major|minor|patch)" && exit
fi

exist='no'
for value in ${packages[@]}
do
  if [ $package == $value ]; then
    exist='yes'
    break
  fi
done

if [ $exist == 'no' ]; then
  echo "Library $package doesn't exist in array of packages inside semver.bash" && exit
fi

cd "./packages/$package" && npm run release:$type -- -t=$package.v && \
  npx nx build $package && cd "../../dist/packages/$package" && \
  npm publish && git push origin --tags  && \
  echo "Library $package updated with semver, builded and uploaded in npm"
