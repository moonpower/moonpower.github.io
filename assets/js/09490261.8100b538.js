"use strict";(self.webpackChunkdevlog=self.webpackChunkdevlog||[]).push([[127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>C,default:()=>D,frontMatter:()=>j,metadata:()=>I,toc:()=>P});var a=n(7462),r=n(7294),o=n(3905),l=n(6010),s=n(2466),u=n(6550),i=n(1980),c=n(7392),p=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,i]=g({queryString:n,groupId:a}),[c,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=u??c;return b({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),d(e)}),[i,d,o]),tabValues:o}}var h=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==o&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,l.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}const E={tabItem:"tabItem_Ymn6"};function T(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(E.tabItem,a),hidden:n},t)}const j={sidebar_position:2,title:"\ubc30\ud3ec",description:"\ub3c4\ud050\uc0ac\uc6b0\ub8e8\uc2a4 \ubc30\ud3ec",keywords:["\ub3c4\ud050\uc0ac\uc6b0\ub8e8\uc2a4","docusaurus","deploy","\ubc30\ud3ec"]},C=void 0,I={unversionedId:"tutorial/docusaurus/deploy",id:"tutorial/docusaurus/deploy",title:"\ubc30\ud3ec",description:"\ub3c4\ud050\uc0ac\uc6b0\ub8e8\uc2a4 \ubc30\ud3ec",source:"@site/docs/tutorial/docusaurus/deploy.mdx",sourceDirName:"tutorial/docusaurus",slug:"/tutorial/docusaurus/deploy",permalink:"/docs/tutorial/docusaurus/deploy",draft:!1,editUrl:"https://github.com/moonpower/moonpower.github.io/tree/main/docs/tutorial/docusaurus/deploy.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ubc30\ud3ec",description:"\ub3c4\ud050\uc0ac\uc6b0\ub8e8\uc2a4 \ubc30\ud3ec",keywords:["\ub3c4\ud050\uc0ac\uc6b0\ub8e8\uc2a4","docusaurus","deploy","\ubc30\ud3ec"]},sidebar:"tutorialSidebar",previous:{title:"\uc2dc\uc791\ud558\uae30",permalink:"/docs/tutorial/docusaurus/intro"},next:{title:"SEO",permalink:"/docs/tutorial/docusaurus/seo"}},O={},P=[{value:"GitHub Pages\ub85c \ubc30\ud3ec\ud558\uae30",id:"github-pages\ub85c-\ubc30\ud3ec\ud558\uae30",level:2},{value:"<code>docusaurus.config.js</code> \ud30c\uc77c \uc124\uc815\ud558\uae30",id:"docusaurusconfigjs-\ud30c\uc77c-\uc124\uc815\ud558\uae30",level:3},{value:"\uc218\ub3d9 \ubc30\ud3ec",id:"\uc218\ub3d9-\ubc30\ud3ec",level:3},{value:"\uc790\ub3d9 \ubc30\ud3ec",id:"\uc790\ub3d9-\ubc30\ud3ec",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3},{value:"Vercel\uc744 \uc0ac\uc6a9\ud574 \ubc30\ud3ec\ud558\uae30",id:"vercel\uc744-\uc0ac\uc6a9\ud574-\ubc30\ud3ec\ud558\uae30",level:2}],x={toc:P},S="wrapper";function D(e){let{components:t,...n}=e;return(0,o.kt)(S,(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc124\uce58\ud55c \ub3c4\ud050\uc0ac\uc6b0\ub8e8\uc2a4\ub97c \ubb34\ub8cc \uc815\uc801 \uc6f9\uc0ac\uc774\ud2b8 \ud638\uc2a4\ud305\uc5d0 \ubc30\ud3ec\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubd05\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"github-pages\ub85c-\ubc30\ud3ec\ud558\uae30"},"GitHub Pages\ub85c \ubc30\ud3ec\ud558\uae30"),(0,o.kt)("p",null,"GiuHub\uc5d0\uc11c GitHub Pages\ub97c \uc81c\uacf5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ubb34\ub8cc\uc0ac\uc6a9\uc790\ub294 \uacf5\uac1c\ub41c \uc800\uc7a5\uc18c\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"docusaurusconfigjs-\ud30c\uc77c-\uc124\uc815\ud558\uae30"},(0,o.kt)("inlineCode",{parentName:"h3"},"docusaurus.config.js")," \ud30c\uc77c \uc124\uc815\ud558\uae30"),(0,o.kt)("p",null,"\uba3c\uc800 ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," \ud30c\uc77c\uc5d0\uc11c \ud544\uc694\ud55c \uba87 \uac00\uc9c0 \ud56d\ubaa9\uc744 \ucd94\uac00\ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\uc635\uc158\uba85"),(0,o.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"organizationName")),(0,o.kt)("td",{parentName:"tr",align:null},"\ubc30\ud3ec \uc800\uc7a5\uc18c\ub97c \uc18c\uc720\ud558\uace0 \uc788\ub294 \uae43\ud5c8\ube0c \uc0ac\uc6a9\uc790 \ub610\ub294 \uadf8\ub8f9 \uacc4\uc815\uc744 \uc124\uc815\ud569\ub2c8\ub2e4.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"projectName")),(0,o.kt)("td",{parentName:"tr",align:null},"\ubc30\ud3ec \uc800\uc7a5\uc18c \uc774\ub984\uc744 \uc124\uc815\ud569\ub2c8\ub2e4.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"deploymentBranch")),(0,o.kt)("td",{parentName:"tr",align:null},"\ubc30\ud3ec \ube0c\ub798\ub0b4\uce58 \uc774\ub984\uc744 \uc124\uc815\ud569\ub2c8\ub2e4. \uadf8\ub8f9 \uacc4\uc815\uc774 \uc544\ub2c8\ub77c\uba74 \uae43\ud5c8\ube0c \ud398\uc774\uc9c0 \uc800\uc7a5\uc18c \uae30\ubcf8\uac12\uc740 ",(0,o.kt)("inlineCode",{parentName:"td"},"gh-pages")," \uc785\ub2c8\ub2e4(",(0,o.kt)("inlineCode",{parentName:"td"},"projectName"),"\uc774 ",(0,o.kt)("inlineCode",{parentName:"td"},".github.io"),"\ub85c \ub05d\ub098\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4). \uc544\ub2c8\uba74 \uad6c\uc131 \ud544\ub4dc \ub610\ub294 \ud658\uacbd \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud574 \uba85\uc2dc\uc801\uc73c\ub85c \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.")))),(0,o.kt)("p",null,"\uc608:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js" {6-8}',title:'"docusaurus.config.js"',"{6-8}":!0},"/** @type {import('@docusaurus/types').Config} */\nconst config = {\n    // ...\n    url: 'https://moonpower.github.io',\n    baseUrl: '/',\n    organizationName: 'moonpower', \n    projectName: 'moonpower.github.io',\n    trailingSlash: false,\n    // ...\n}\n")),(0,o.kt)("h3",{id:"\uc218\ub3d9-\ubc30\ud3ec"},"\uc218\ub3d9 \ubc30\ud3ec"),(0,o.kt)("p",null,"\uc774\uc81c \uc544\ub798 \uba85\ub839\uc744 \uc0ac\uc6a9\ud574 \uc0ac\uc774\ud2b8\ub97c \uae43\ud5c8\ube0c \ud398\uc774\uc9c0\ub85c \ubc30\ud3ec\ud569\ub2c8\ub2e4. \uc218\ub3d9\ubc30\ud3ec\ub97c \ud558\uc9c0 \uc54a\uc544\ub3c4 \uc790\ub3d9\ubc30\ud3ec\ub97c \ud1b5\ud574 \ubc30\ud3ec\ud560 \uc218 \uc788\uc73c\ub2c8 \uc790\ub3d9\ubc30\ud3ec\ub85c \ub118\uc5b4\uac00\ub3c4 \ub429\ub2c8\ub2e4."),(0,o.kt)("admonition",{title:"\uc8fc\uc758\uc0ac\ud56d",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"deploy\ud560\ub54c GitHub\uc758 \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\uc774 \ub098\ud0c0\ub0a0 \uacbd\uc6b0 \uacc4\uc815\uc758 \ube44\ubc00\ubc88\ud638\uac00 \uc544\ub2cc Personal access tokens\ub97c \uc785\ub825\ud574\uc57c\ud569\ub2c8\ub2e4.\n\uae43\ud5c8\ube0c\uc5d0\uc11c \uc624\ub978\ucabd \uc0c1\ub2e8\uc758 \uc790\uc2e0\uc758 \ud504\ub85c\ud544 \ud074\ub9ad\uc73c\ub85c \ub098\ud0c0\ub098\ub294 \uba54\ub274\uc5d0\uc11c Settings > Developer setting > Personal access tokens \ud398\uc774\uc9c0\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate new token"),"\ubc84\ud2bc\uc744 \ub20c\ub7ec \uc0dd\uc131\ud55c \ud1a0\ud070\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),(0,o.kt)(w,{mdxType:"Tabs"},(0,o.kt)(T,{value:"bash",label:"Bash",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"GIT_USER=<GITHUB_USERNAME> yarn deploy\n"))),(0,o.kt)(T,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"\n'))),(0,o.kt)(T,{value:"powershell",label:"PowerShell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cmd /C 'set \"GIT_USER=<GITHUB_USERNAME>\" && yarn deploy'\n")))),(0,o.kt)("h3",{id:"\uc790\ub3d9-\ubc30\ud3ec"},"\uc790\ub3d9 \ubc30\ud3ec"),(0,o.kt)("p",null,"\uae43\ud5c8\ube0c \uc561\uc158(GitHub Actions)\uc744 \uc0ac\uc6a9\ud574 \uc790\ub3d9\uc73c\ub85c \ubc30\ud3ec\ud569\ub2c8\ub2e4. ",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/en/actions"},"\uae43\ud5c8\ube0c \uc561\uc158"),"\uc740 \uc800\uc7a5\uc18c\uc5d0\uc11c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ubc30\ud3ec\ub97c \uc790\ub3d9\uc73c\ub85c \uc6d0\ud558\ub294 \uc2e4\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0 \ud574\ub2f9 \uacbd\ub85c\uc5d0 \ud30c\uc77c\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn.lock"),"\ud30c\uc77c\uc774 \ud544\uc694\ud558\ubbc0\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install"),"\uc744 \uc2e4\ud589\ud55c \uc801\uc774 \uc5c6\ub2e4\uba74 \ud55c\ubc88 \uc2e4\ud589\ud558\uc5ec \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc561\uc158\uc744 \ud1b5\ud574 \ub2e4\uc74c\uacfc \uac19\uc740 \ub3d9\uc791\uc744 \ud569\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"main"),"\uc5d0 \ub300\ud55c \uc0c8\ub85c\uc6b4 \ud480 \ub9ac\ud018\uc2a4\ud2b8\uac00 \uc62c\ub77c\uc624\uba74 \uc2e4\uc81c \ubc30\ud3ec\ub294 \uc9c4\ud589\ud558\uc9c0 \uc54a\uace0 \ube4c\ub4dc\ub9cc \uc131\uacf5\ud558\uac8c \ud569\ub2c8\ub2e4. \uc791\uc5c5 \uc774\ub984\uc740 ",(0,o.kt)("inlineCode",{parentName:"li"},"test-deploy"),"\ub77c\uace0 \ubd99\uc785\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\ud480 \ub9ac\ud018\uc2a4\ud2b8\uac00 ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," \ube0c\ub79c\uce58\uc5d0 \ubcd1\ud569\ub418\uac70\ub098 \ub204\uad70\uac00 \uc9c1\uc811 ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," \ube0c\ub79c\uce58\uc5d0 \ud478\uc2dc\ud558\uba74 \ube4c\ub4dc\uac00 \ub418\uba74\uc11c ",(0,o.kt)("inlineCode",{parentName:"li"},"gh-pages")," \ube0c\ub79c\uce58\uc5d0 \ubc30\ud3ec\ub429\ub2c8\ub2e4. ")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"GitHub action files"),(0,o.kt)("p",null,"\ub450 \uac00\uc9c0 \uc6cc\ud06c\ud50c\ub85c \ud30c\uc77c\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,o.kt)("admonition",{title:"\uc124\uc815\uc5d0 \ub300\ud55c \ud30c\ub77c\ubbf8\ud130 \uc870\uc815",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"\uc774 \ud30c\uc77c\uc740 yarn\uc5d0\uc11c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4. origin \ube0c\ub79c\uce58\uac00 master\uc778 \uacbd\uc6b0 \uc218\uc815\ud558\uc2dc\uae30 ",(0,o.kt)("inlineCode",{parentName:"p"},"branches"),"\uc758 \uc774\ub984\uc744 \uc218\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title=".github/workflows/deploy.yml"',title:'".github/workflows/deploy.yml"'},"name: Deploy to GitHub Pages\n\non:\n  push:\n    branches:\n      - main\n    # \ud2b8\ub9ac\uac70, \uacbd\ub85c \ub4f1\uc744 \ucd94\uac00\ub85c \uc815\uc758\ud558\ub824\uba74 gh action \ubb38\uc11c\ub97c \ucc38\uace0\ud558\uc138\uc694.\n    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on\n\njobs:\n  deploy:\n    name: Deploy to GitHub Pages\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 16.x\n          cache: yarn\n\n      - name: Install dependencies\n        run: yarn install --frozen-lockfile\n      - name: Build website\n        run: yarn build\n\n      # \uae43\ud5c8\ube0c \ud398\uc774\uc9c0\uc5d0 \ubc30\ud3ec\ud558\uae30 \uc704\ud55c \uc77c\ubc18\uc801\uc778 \uc561\uc158\n      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          # `gh-pages` \ube0c\ub79c\uce58\uc5d0 \uac8c\uc2dc\ud560 \uc0b0\ucd9c\ubb3c \ube4c\ub4dc\n          publish_dir: ./build\n          # \ub2e4\uc74c \ub77c\uc778\uc740 \uacf5\uc2dd\uc801\uc73c\ub85c \ucee4\ubc0b \uad8c\ud55c\uc744 \ud560\ub2f9\ud569\ub2c8\ub2e4.\n          # `gh-pages` \ube0c\ub79c\uce58\uc5d0 \ubc30\ud3ec\ud558\uae30 \uc704\ud55c GH-Actions \ubd07\n          # https://github.com/actions/checkout/issues/13#issuecomment-724415212\n          # \ub450 \uac1c \ud544\ub4dc\ub97c \uc124\uc815\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 GH-Actions \ubd07\uc774 \uae30\ubcf8 \uc124\uc815\ub429\ub2c8\ub2e4.\n          # \uc790\uc2e0\uc758 \uc790\uaca9\uc99d\uba85\uc73c\ub85c \uad50\uccb4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n          user_name: github-actions[bot]\n          user_email: 41898282+github-actions[bot]@users.noreply.github.com\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title=".github/workflows/test-deploy.yml"',title:'".github/workflows/test-deploy.yml"'},"name: Test deployment\n\non:\n  pull_request:\n    branches:\n      - main\n    # Review gh actions docs if you want to further define triggers, paths, etc\n    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on\n\njobs:\n  test-deploy:\n    name: Test deployment\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 16.x\n          cache: yarn\n\n      - name: Install dependencies\n        run: yarn install --frozen-lockfile\n      - name: Test build website\n        run: yarn build\n")),(0,o.kt)("p",null,"\ud30c\uc77c \ucd94\uac00\ub41c \ud6c4 \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:"{2-5}","{2-5}":!0},"helloworld.github.io\n\u251c\u2500\u2500 .github\n\u2502   \u2514\u2500\u2500 workflows\n\u2502       \u251c\u2500\u2500 deploy.yml\n\u2502       \u2514\u2500\u2500 test-deploy.yml\n\u251c\u2500\u2500 blog\n\u2502   \u251c\u2500\u2500 2019-05-28-hola.md\n\u2502   \u251c\u2500\u2500 2019-05-29-hello-world.md\n\u2502   \u2514\u2500\u2500 2020-05-30-welcome.md\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 doc1.md\n\u2502   \u251c\u2500\u2500 doc2.md\n\u2502   \u251c\u2500\u2500 doc3.md\n\u2502   \u2514\u2500\u2500 mdx.md\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 custom.css\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 static\n\u2502   \u2514\u2500\u2500 img\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 sidebars.js\n\u2514\u2500\u2500 yarn.lock\n"))),(0,o.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/ko/docs/deployment#deploying-to-github-pages"},"https://docusaurus.io/ko/docs/deployment#deploying-to-github-pages")),(0,o.kt)("h2",{id:"vercel\uc744-\uc0ac\uc6a9\ud574-\ubc30\ud3ec\ud558\uae30"},"Vercel\uc744 \uc0ac\uc6a9\ud574 \ubc30\ud3ec\ud558\uae30"),(0,o.kt)("p",null,"GitHub Page\uc758 \ub2e8\uc810\uc740 \ubb34\ub8cc \uc0ac\uc6a9\uc790\uac00 \uc800\uc7a5\uc18c\ub97c private\ub85c \uc124\uc815\ud558\uba74 \ub3d9\uc791\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\uadf8\ub7ec\ub098 Vercel\uc758 \uacbd\uc6b0 GiHub\uc758 \uc800\uc7a5\uc18c\ub97c private\ub85c \uc124\uc815\ud574\ub3c4 \uc790\ub3d9\uc73c\ub85c \ubc30\ud3ec\ud574\uc8fc\uae30 \ub54c\ubb38\uc5d0 \uc18c\uc2a4\ub97c \uacf5\uac1c\ud558\uc9c0 \uc54a\uace0 \uc815\uc801 \uc6f9 \uc0ac\uc774\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://vercel.com/"},"Vercel"),"\uc5d0\uc11c \uacc4\uc815\uc744 \uac00\uc785\ud55c \ud6c4 \ub300\uc2dc\ubcf4\ub4dc\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"New Project"),"\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Import Git Repository"),"\uc5d0\uc11c \uc790\uc2e0\uc758 \uc800\uc7a5\uc18c\ub97c ",(0,o.kt)("strong",{parentName:"p"},"Import")," \ud074\ub9ad\ud569\ub2c8\ub2e4. \uc800\uc7a5\uc18c\uac00 \uc5c6\ub294 \uacbd\uc6b0\n",(0,o.kt)("inlineCode",{parentName:"p"},"Adjust GitHub App Permissions"),"\ub97c \ud074\ub9ad\ud574\uc11c \ub098\ud0c0\ub098\ub294 \ucc3d\uc744 \ud1b5\ud574 \uae43\ud5c8\ube0c \ub85c\uadf8\uc778 \ud6c4 \ud574\ub2f9 \ud504\ub85c\uc81d\ud2b8\ub97c \uc120\ud0dd\ud574\uc11c \uc811\uadfc \uad8c\ud55c\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc2dc Vercel\uc5d0\uc11c \uc0c8 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131 \ud398\uc774\uc9c0\ub97c \uac31\uc2e0\ud574\ubcf4\uba74 \ub098\ud0c0\ub098\uace0 ",(0,o.kt)("strong",{parentName:"p"},"Import"),"\ub97c \ud074\ub9ad\ud574\uc11c \uc9c4\ud589\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Import"),"\ub97c \ub204\ub974\uba74 \ud504\ub85c\uc81d\ud2b8 \uc124\uc815 \ud398\uc774\uc9c0\uac00 \ub098\uc624\ub294\ub370 Project Name\uacfc \ub3d9\uc77c\ud558\uac8c domain(",(0,o.kt)("inlineCode",{parentName:"p"},"{id}.vercel.app"),")\uc774\n\uac19\uc774 \uc0dd\uc131\ub418\uae30 \ub54c\ubb38\uc5d0 \uc5fc\ub450\ud558\uace0 \uc791\uc131\ud558\uc2dc\uba74 \ub420 \uac83 \uac19\uc2b5\ub2c8\ub2e4. Framework Preset\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"Docusarus 2"),"\ub97c \uc124\uc815\ud55c \ud6c4\uc5d0 Deploy \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131 \ud6c4\uc5d0 Project Name, Domain\uc744 \uc218\uc815 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"Deploy\ub97c \ud074\ub9ad\ud558\uba74 Deploy\ub97c \uc2dc\uc791\ud558\uace0 ready \ud45c\uc2dc\uac00 \ub728\uba74 \uc790\uc2e0\ub9cc\uc758 \uc6f9 \uc0ac\uc774\ud2b8\uac00 \uc0dd\uae41\ub2c8\ub2e4!"))}D.isMDXComponent=!0}}]);