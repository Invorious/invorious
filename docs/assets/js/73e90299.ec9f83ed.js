"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1230],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,y=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return t?r.createElement(y,s(s({ref:n},p),{},{components:t})):r.createElement(y,s({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5922:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2},s="Eslint",a={unversionedId:"repository/eslint",id:"repository/eslint",title:"Eslint",description:"Comes for default in NX",source:"@site/docs/repository/eslint.md",sourceDirName:"repository",slug:"/repository/eslint",permalink:"/docs/repository/eslint",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/repository/eslint.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"NX",permalink:"/docs/repository/nx"},next:{title:"Prettier",permalink:"/docs/repository/prettier"}},l={},c=[{value:"Configuration",id:"configuration",level:2}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"eslint"},"Eslint"),(0,o.kt)("p",null,"Comes for default in NX"),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "root": true,\n  "ignorePatterns": ["**/*"],\n  "plugins": ["@nrwl/nx", "@typescript-eslint"],\n  "overrides": [\n    {\n      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],\n      "rules": {\n        "@nrwl/nx/enforce-module-boundaries": [\n          "error",\n          {\n            "enforceBuildableLibDependency": true,\n            "allow": [],\n            "depConstraints": [\n              {\n                "sourceTag": "*",\n                "onlyDependOnLibsWithTags": ["*"]\n              }\n            ]\n          }\n        ]\n      }\n    },\n    {\n      "files": ["*.ts", "*.tsx"],\n      "extends": ["plugin:@nrwl/nx/typescript"],\n      "rules": {}\n    },\n    {\n      "files": ["*.js", "*.jsx"],\n      "extends": ["plugin:@nrwl/nx/javascript"],\n      "rules": {}\n    },\n    {\n      "files": ["*.spec.ts", "*.spec.tsx", "*.spec.js", "*.spec.jsx"],\n      "env": {\n        "jest": true\n      },\n      "rules": {}\n    }\n  ]\n}\n')))}f.isMDXComponent=!0}}]);