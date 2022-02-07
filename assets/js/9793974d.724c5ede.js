"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6714],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76947:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),s=["components"],i={title:"Snowflake",hide_title:!0,sidebar_position:29,version:1},c=void 0,l={unversionedId:"connecting-to-databases/snowflake",id:"connecting-to-databases/snowflake",isDocsHomePage:!1,title:"Snowflake",description:"Snowflake",source:"@site/docs/connecting-to-databases/snowflake.mdx",sourceDirName:"connecting-to-databases",slug:"/connecting-to-databases/snowflake",permalink:"/docs/connecting-to-databases/snowflake",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/connecting-to-databases/snowflake.mdx",tags:[],version:"current",sidebarPosition:29,frontMatter:{title:"Snowflake",hide_title:!0,sidebar_position:29,version:1},sidebar:"tutorialSidebar",previous:{title:"Presto",permalink:"/docs/connecting-to-databases/presto"},next:{title:"Microsoft SQL Server",permalink:"/docs/connecting-to-databases/sql-server"}},u=[{value:"Snowflake",id:"snowflake",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"snowflake"},"Snowflake"),(0,a.kt)("p",null,"The recommended connector library for Snowflake is\n",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/snowflake-sqlalchemy/1.2.4/"},"snowflake-sqlalchemy"),"<=1.2.4. (This version is required until Superset migrates to sqlalchemy>=1.4.0)"),(0,a.kt)("p",null,"The connection string for Snowflake looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"snowflake://{user}:{password}@{account}.{region}/{database}?role={role}&warehouse={warehouse}\n")),(0,a.kt)("p",null,"The schema is not necessary in the connection string, as it is defined per table/query. The role and\nwarehouse can be omitted if defaults are defined for the user, i.e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"snowflake://{user}:{password}@{account}.{region}/{database}\n")),(0,a.kt)("p",null,"Make sure the user has privileges to access and use all required\ndatabases/schemas/tables/views/warehouses, as the Snowflake SQLAlchemy engine does not test for\nuser/role rights during engine creation by default. However, when pressing the \u201cTest Connection\u201d\nbutton in the Create or Edit Database dialog, user/role credentials are validated by passing\n\u201cvalidate_default_parameters\u201d: True to the connect() method during engine creation. If the user/role\nis not authorized to access the database, an error is recorded in the Superset logs."))}d.isMDXComponent=!0}}]);