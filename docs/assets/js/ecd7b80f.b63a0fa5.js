"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9926],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=s,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[u]="string"==typeof e?e:s,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},679:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(7462),s=(t(7294),t(3905));const a={sidebar_position:3},o="Username and password",c={unversionedId:"access-control/strategies/username-password",id:"access-control/strategies/username-password",title:"Username and password",description:"Username and password is a mechanism of authentication. For more information passport-local",source:"@site/docs/access-control/strategies/username-password.md",sourceDirName:"access-control/strategies",slug:"/access-control/strategies/username-password",permalink:"/invorious/docs/access-control/strategies/username-password",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/access-control/strategies/username-password.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Metamask",permalink:"/invorious/docs/access-control/strategies/metamask"},next:{title:"Access Control Front",permalink:"/invorious/docs/category/access-control-front"}},i={},l=[{value:"How to use",id:"how-to-use",level:2}],p={toc:l},u="wrapper";function m(e){let{components:r,...t}=e;return(0,s.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"username-and-password"},"Username and password"),(0,s.kt)("p",null,"Username and password is a mechanism of authentication. For more information ",(0,s.kt)("a",{parentName:"p",href:"https://www.passportjs.org/packages/passport-local"},"passport-local")),(0,s.kt)("h2",{id:"how-to-use"},"How to use"),(0,s.kt)("p",null,"In array of strategies from the client, add strategy with properties, example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { AccessControlModule, localStrategy } from '@invorious/access-control';\n\nAccessControlModule.forRoot({\n  strategies: [localStrategy()],\n});\n")),(0,s.kt)("p",null,"The client should be implements the interface in the entity and inyectable, example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { IUsersService, IUsernameAndPassword } from '@invorious/access-control';\n\nexport class User implements IUsernameAndPassword {\n  id: number;\n  username: string;\n  password: string;\n}\n\n@Injectable()\nexport class UserService implements IUsersService<User> {\n  users: User[] = [];\n\n  findByUsername(username: string) {\n    return this.users.find(\n      (user) => user.username === username.toLowerCase().trim(),\n    );\n  }\n\n  register(data: Partial<User>) {\n    const newUser: User = {\n      id: Date.now(),\n      username: data.username,\n      password: data.password,\n    };\n    this.users.push(newUser);\n    return newUser;\n  }\n}\n")))}m.isMDXComponent=!0}}]);