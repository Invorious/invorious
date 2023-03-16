"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6684],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:7},i="Upload library to NPM",s={unversionedId:"repository/npm",id:"repository/npm",title:"Upload library to NPM",description:"For upload a library should be verify than exist the package.json.",source:"@site/docs/repository/npm.md",sourceDirName:"repository",slug:"/repository/npm",permalink:"/invorious/docs/repository/npm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/repository/npm.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Semver",permalink:"/invorious/docs/repository/semver"},next:{title:"Access Control",permalink:"/invorious/docs/category/access-control"}},l={},p=[{value:"Execute script",id:"execute-script",level:2},{value:"Post installation",id:"post-installation",level:2},{value:"Example with video",id:"example-with-video",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upload-library-to-npm"},"Upload library to NPM"),(0,o.kt)("p",null,"For upload a library should be verify than exist the package.json."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "@invorious/package",\n  "version": "0.0.0",\n  "scripts": {\n    "release": "standard-version",\n    "release:major": "standard-version --release-as major",\n    "release:minor": "standard-version --release-as minor",\n    "release:patch": "standard-version --release-as patch"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/Invorious/invorious.git"\n  },\n  "homepage": "https://github.com/Invorious/invorious#readme"\n}\n')),(0,o.kt)("h2",{id:"execute-script"},"Execute script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="In terminal or powershell execute this script. Is optional minor major or patch"',title:'"In',terminal:!0,or:!0,powershell:!0,execute:!0,this:!0,"script.":!0,Is:!0,optional:!0,minor:!0,major:!0,'patch"':!0},"npm login\nnpm run upload-npm name_package (minor|major|patch)\n")),(0,o.kt)("h2",{id:"post-installation"},"Post installation"),(0,o.kt)("p",null,"The script had generate un changelog de changes between versions of the package.json too uploaded the library to NPM"),(0,o.kt)("h2",{id:"example-with-video"},"Example with video"),(0,o.kt)("p",null,"In progress"))}m.isMDXComponent=!0}}]);