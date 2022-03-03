"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8853],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),l=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||o;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},47777:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"Teradata",hide_title:!0,sidebar_position:31,version:1},d=void 0,l={unversionedId:"databases/teradata",id:"databases/teradata",title:"Teradata",description:"Teradata",source:"@site/docs/databases/teradata.mdx",sourceDirName:"databases",slug:"/databases/teradata",permalink:"/docs/databases/teradata",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/teradata.mdx",tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"Teradata",hide_title:!0,sidebar_position:31,version:1},sidebar:"tutorialSidebar",previous:{title:"Microsoft SQL Server",permalink:"/docs/databases/sql-server"},next:{title:"Vertica",permalink:"/docs/databases/vertica"}},s=[{value:"Teradata",id:"teradata",children:[],level:2},{value:"ODBC Driver",id:"odbc-driver",children:[],level:2}],u={toc:s};function p(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"teradata"},"Teradata"),(0,o.kt)("p",null,"The recommended connector library is\n",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/teradatasqlalchemy/"},"teradatasqlalchemy"),"."),(0,o.kt)("p",null,"The connection string for Teradata looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"teradata://{user}:{password}@{host}\n")),(0,o.kt)("h2",{id:"odbc-driver"},"ODBC Driver"),(0,o.kt)("p",null,"There's also an older connector named\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Teradata/sqlalchemy-teradata"},"sqlalchemy-teradata")," that\nrequires the installation of ODBC drivers. The Teradata ODBC Drivers\nare available\nhere: ",(0,o.kt)("a",{parentName:"p",href:"https://downloads.teradata.com/download/connectivity/odbc-driver/linux"},"https://downloads.teradata.com/download/connectivity/odbc-driver/linux")),(0,o.kt)("p",null,"Here are the required environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export ODBCINI=/.../teradata/client/ODBC_64/odbc.ini\nexport ODBCINST=/.../teradata/client/ODBC_64/odbcinst.ini\n")),(0,o.kt)("p",null,"We recommend using the first library because of the\nlack of requirement around ODBC drivers and\nbecause it's more regularly updated."))}p.isMDXComponent=!0}}]);