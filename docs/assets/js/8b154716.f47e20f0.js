"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[342],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(r),k=a,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||l;return r?n.createElement(d,o(o({ref:e},p),{},{components:r})):n.createElement(d,o({ref:e},p))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[m]="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8807:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:5},o="Husky",i={unversionedId:"repository/husky",id:"repository/husky",title:"Husky",description:"Husky permit execute scripts during some actions of git",source:"@site/docs/repository/husky.md",sourceDirName:"repository",slug:"/repository/husky",permalink:"/docs/repository/husky",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/repository/husky.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Conventional commits",permalink:"/docs/repository/conventional-commits"},next:{title:"Semver",permalink:"/docs/repository/semver"}},s={},u=[{value:"Git Hooks",id:"git-hooks",level:2},{value:"Installation",id:"installation",level:2}],p={toc:u},m="wrapper";function c(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"husky"},"Husky"),(0,a.kt)("p",null,"Husky permit execute scripts during some actions of git"),(0,a.kt)("h2",{id:"git-hooks"},"Git Hooks"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Hook"),(0,a.kt)("th",{parentName:"tr",align:null},"Actions"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pre-commit"),(0,a.kt)("td",{parentName:"tr",align:null},"- Commit ",(0,a.kt)("br",null)," - Amend ",(0,a.kt)("br",null)," - Merge Resolve")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"prepare-commit-msg"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2013 Commit ",(0,a.kt)("br",null)," \u2013 Amend ",(0,a.kt)("br",null)," \u2013 Cherrypick ",(0,a.kt)("br",null)," \u2013 Merge ",(0,a.kt)("br",null)," \u2013 Squash ",(0,a.kt)("br",null)," \u2013 Revert")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"commit-msg"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2013 Commit ",(0,a.kt)("br",null)," \u2013 Amend ",(0,a.kt)("br",null)," \u2013 Merge Resolve")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"post-commit"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2013 Commit ",(0,a.kt)("br",null)," \u2013 Amend ",(0,a.kt)("br",null)," \u2013 Cherrypick ",(0,a.kt)("br",null)," \u2013 Merge Resolve ",(0,a.kt)("br",null)," \u2013 Revert")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pre-rebase"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2013 Rebase ",(0,a.kt)("br",null)," \u2013 Squash")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"post-checkout"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2013 Checkout ",(0,a.kt)("br",null)," \u2013 Discard Changes (selectively)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"post-merge"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2013 Merge (Without Conflicts) ",(0,a.kt)("br",null)," \u2013 Fast-Forward")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"post-rewrite"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2013 Amend ",(0,a.kt)("br",null)," \u2013 Squash ",(0,a.kt)("br",null)," \u2013 Rebase")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pre-push"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2013 Push Branch ",(0,a.kt)("br",null)," \u2013 Push Tag ",(0,a.kt)("br",null)," \u2013 Delete Remote Branch ",(0,a.kt)("br",null)," \u2013 Delete Remote Tag")))),(0,a.kt)("p",null,"\u200b"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm i husky -D\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="In file commit-msg inside of folder husky"',title:'"In',file:!0,"commit-msg":!0,inside:!0,of:!0,folder:!0,'husky"':!0},'#!/usr/bin/env sh\n. "$(dirname -- "$0")/_/husky.sh"\n\nnpx commitlint --edit $1\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="In file pre-commit inside of folder husky"',title:'"In',file:!0,"pre-commit":!0,inside:!0,of:!0,folder:!0,'husky"':!0},'#!/usr/bin/env sh\n. "$(dirname -- "$0")/_/husky.sh"\n\nnpx nx lint --project=example-api\n')))}c.isMDXComponent=!0}}]);