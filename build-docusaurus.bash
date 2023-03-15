cd ./docusaurus && npm i && npm run build
cd .. && rm -r docs
mv ./docusaurus/build ./docs