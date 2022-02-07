"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[2582],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89080:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],s={title:"Types of Contributions",hide_title:!0,sidebar_position:2,version:1},u=void 0,l={unversionedId:"Contributing/types-of-contributions",id:"Contributing/types-of-contributions",isDocsHomePage:!1,title:"Types of Contributions",description:"Types of Contributions",source:"@site/docs/Contributing/types-of-contributions.mdx",sourceDirName:"Contributing",slug:"/Contributing/types-of-contributions",permalink:"/docs/Contributing/types-of-contributions",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/Contributing/types-of-contributions.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Types of Contributions",hide_title:!0,sidebar_position:2,version:1},sidebar:"tutorialSidebar",previous:{title:"Contributing to Superset",permalink:"/docs/Contributing/contributing-page"},next:{title:"Pull Request Guidelines",permalink:"/docs/Contributing/pull-request-guidelines"}},p=[{value:"Types of Contributions",id:"types-of-contributions",children:[{value:"Report Bug",id:"report-bug",children:[],level:3},{value:"Submit Ideas or Feature Requests",id:"submit-ideas-or-feature-requests",children:[],level:3},{value:"Fix Bugs",id:"fix-bugs",children:[],level:3},{value:"Implement Features",id:"implement-features",children:[],level:3},{value:"Improve Documentation",id:"improve-documentation",children:[],level:3},{value:"Add Translations",id:"add-translations",children:[],level:3},{value:"Ask Questions",id:"ask-questions",children:[],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"types-of-contributions"},"Types of Contributions"),(0,i.kt)("h3",{id:"report-bug"},"Report Bug"),(0,i.kt)("p",null,"The best way to report a bug is to file an issue on GitHub. Please include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your operating system name and version."),(0,i.kt)("li",{parentName:"ul"},"Superset version."),(0,i.kt)("li",{parentName:"ul"},"Detailed steps to reproduce the bug."),(0,i.kt)("li",{parentName:"ul"},"Any details about your local setup that might be helpful in troubleshooting.")),(0,i.kt)("p",null,"When posting Python stack traces, please quote them using\n",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/articles/creating-and-highlighting-code-blocks/"},"Markdown blocks"),"."),(0,i.kt)("h3",{id:"submit-ideas-or-feature-requests"},"Submit Ideas or Feature Requests"),(0,i.kt)("p",null,"The best way is to file an issue on GitHub:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Explain in detail how it would work."),(0,i.kt)("li",{parentName:"ul"},"Keep the scope as narrow as possible, to make it easier to implement."),(0,i.kt)("li",{parentName:"ul"},"Remember that this is a volunteer-driven project, and that contributions are welcome :)")),(0,i.kt)("p",null,"For large features or major changes to codebase, please create ",(0,i.kt)("strong",{parentName:"p"},"Superset Improvement Proposal (SIP)"),". See template from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/superset/issues/5602"},"SIP-0")),(0,i.kt)("h3",{id:"fix-bugs"},"Fix Bugs"),(0,i.kt)("p",null,"Look through the GitHub issues. Issues tagged with ",(0,i.kt)("inlineCode",{parentName:"p"},"#bug")," are\nopen to whoever wants to implement them."),(0,i.kt)("h3",{id:"implement-features"},"Implement Features"),(0,i.kt)("p",null,"Look through the GitHub issues. Issues tagged with\n",(0,i.kt)("inlineCode",{parentName:"p"},"#feature")," is open to whoever wants to implement it."),(0,i.kt)("h3",{id:"improve-documentation"},"Improve Documentation"),(0,i.kt)("p",null,"Superset could always use better documentation,\nwhether as part of the official Superset docs,\nin docstrings, ",(0,i.kt)("inlineCode",{parentName:"p"},"docs/*.rst")," or even on the web as blog posts or\narticles. See ",(0,i.kt)("a",{parentName:"p",href:"#documentation"},"Documentation")," for more details."),(0,i.kt)("h3",{id:"add-translations"},"Add Translations"),(0,i.kt)("p",null,"If you are proficient in a non-English language, you can help translate\ntext strings from Superset's UI. You can jump in to the existing\nlanguage dictionaries at\n",(0,i.kt)("inlineCode",{parentName:"p"},"superset/translations/<language_code>/LC_MESSAGES/messages.po"),", or\neven create a dictionary for a new language altogether.\nSee ",(0,i.kt)("a",{parentName:"p",href:"#translating"},"Translating")," for more details."),(0,i.kt)("h3",{id:"ask-questions"},"Ask Questions"),(0,i.kt)("p",null,"There is a dedicated ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/apache-superset"},(0,i.kt)("inlineCode",{parentName:"a"},"apache-superset")," tag")," on ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/"},"StackOverflow"),". Please use it when asking questions."))}d.isMDXComponent=!0}}]);