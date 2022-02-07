"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7273],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38912:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),s=["components"],i={title:"Presto",hide_title:!0,sidebar_position:28,version:1},c=void 0,p={unversionedId:"connecting-to-databases/presto",id:"connecting-to-databases/presto",isDocsHomePage:!1,title:"Presto",description:"Presto",source:"@site/docs/connecting-to-databases/presto.mdx",sourceDirName:"connecting-to-databases",slug:"/connecting-to-databases/presto",permalink:"/docs/connecting-to-databases/presto",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/connecting-to-databases/presto.mdx",tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"Presto",hide_title:!0,sidebar_position:28,version:1},sidebar:"tutorialSidebar",previous:{title:"Postgres",permalink:"/docs/connecting-to-databases/postgres"},next:{title:"Snowflake",permalink:"/docs/connecting-to-databases/snowflake"}},u=[{value:"Presto",id:"presto",children:[],level:2}],l={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"presto"},"Presto"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/PyHive/"},"pyhive")," library is the recommended way to connect to Presto through SQLAlchemy."),(0,a.kt)("p",null,"The expected connection string is formatted as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"presto://{hostname}:{port}/{database}\n")),(0,a.kt)("p",null,"You can pass in a username and password as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"presto://{username}:{password}@{hostname}:{port}/{database}\n")),(0,a.kt)("p",null,"Here is an example connection string with values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"presto://datascientist:securepassword@presto.example.com:8080/hive\n")),(0,a.kt)("p",null,"By default Superset assumes the most recent version of Presto is being used when querying the\ndatasource. If you\u2019re using an older version of Presto, you can configure it in the extra parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "version": "0.123"\n}\n')))}d.isMDXComponent=!0}}]);