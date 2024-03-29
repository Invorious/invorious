#! /bin/bash

packages=('access-control' 'access-control-front' 'http-client-front')

if [ "$1" ]; then
  package=$1
else
  echo "First parameter (package) is required" && exit
fi

if [ "$2" ]; then
  type=$2
else
  type='release'
fi

if [ $type == 'release' ]; then
  release='release'
elif [ $type == 'patch' ] || [ $type == 'major' ] || [ $type == 'minor' ]; then
  release="release:$type"
else
  echo "Flag t should be (major | minor | patch)" && exit
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

cd "./packages/$package" && npm run $release -- -t=$package.v && \
cd "../.." && npx nx build $package && cd "./dist/packages/$package" && \
npm publish --access public && cd "../.." && git push --tags && \
echo "Library $package updated with semver, builded and uploaded in npm"
