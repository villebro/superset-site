(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"1J4g":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a("k1TG"),s=a("8o2o"),r=(a("q1tI"),a("7ljp")),c=a("hhGP"),o=(a("qKvR"),{});void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/Miscellaneous/issue_codes.mdx"}});var b={_frontmatter:o},i=c.a;function u(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)(i,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"issue-code-reference"},"Issue Code Reference"),Object(r.b)("p",null,"This page lists issue codes that may be displayed in\nSuperset and provides additional context."),Object(r.b)("h2",{id:"issue-1000"},"Issue 1000"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The datasource is too large to query.\n")),Object(r.b)("p",null,"It's likely your datasource has grown too large to run the current\nquery, and is timing out. You can resolve this by reducing the\nsize of your datasource or by modifying your query to only process a\nsubset of your data."),Object(r.b)("h2",{id:"issue-1001"},"Issue 1001"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The database is under an unusual load.\n")),Object(r.b)("p",null,"Your query may have timed out because of unusually high load on the\ndatabase engine. You can make your query simpler, or wait until the\ndatabase is under less load and try again."),Object(r.b)("h2",{id:"issue-1002"},"Issue 1002"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The database returned an unexpected error.\n")),Object(r.b)("p",null,"Your query failed because of an error that occurred on the database.\nThis may be due to a syntax error, a bug in your query, or some other\ninternal failure within the database. This is usually not an\nissue within Superset, but instead a problem with the underlying\ndatabase that serves your query."),Object(r.b)("h2",{id:"issue-1003"},"Issue 1003"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"There is a syntax error in the SQL query. Perhaps there was a misspelling or a typo.\n")),Object(r.b)("p",null,"Your query failed because of a syntax error within the underlying query. Please\nvalidate that all columns or tables referenced within the query exist and are spelled\ncorrectly."),Object(r.b)("h2",{id:"issue-1004"},"Issue 1004"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The column was deleted or renamed in the database.\n")),Object(r.b)("p",null,"Your query failed because it is referencing a column that no longer exists in\nthe underlying datasource. You should modify the query to reference the\nreplacement column, or remove this column from your query."),Object(r.b)("h2",{id:"issue-1005"},"Issue 1005"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The table was deleted or renamed in the database.\n")),Object(r.b)("p",null,"Your query failed because it is referencing a table that no longer exists in\nthe underlying database. You should modify your query to reference the correct\ntable."),Object(r.b)("h2",{id:"issue-1006"},"Issue 1006"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"One or more parameters specified in the query are missing.\n")),Object(r.b)("p",null,"Your query was not submitted to the database because it's missing one or more\nparameters. You should define all the parameters referenced in the query in a\nvalid JSON document. Check that the parameters are spelled correctly and that\nthe document has a valid syntax."),Object(r.b)("h2",{id:"issue-1007"},"Issue 1007"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The hostname provided can't be resolved.\n")),Object(r.b)("p",null,"The hostname provided when adding a new database is invalid and cannot be\nresolved. Please check that there are no typos in the hostname."),Object(r.b)("h2",{id:"issue-1008"},"Issue 1008"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The port is closed.\n")),Object(r.b)("p",null,"The port provided when adding a new database is not open. Please check that\nthe port number is correct, and that the database is running and listening on\nthat port."),Object(r.b)("h2",{id:"issue-1009"},"Issue 1009"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The host might be down, and cannot be reached on the provided port.\n")),Object(r.b)("p",null,"The host provided when adding a new database doesn't seem to be up.\nAdditionally, it cannot be reached on the provided port. Please check that\nthere are no firewall rules preventing access to the host."),Object(r.b)("h2",{id:"issue-1010"},"Issue 1010"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Superset encountered an error while running a command.\n")),Object(r.b)("p",null,"Something unexpected happened, and Superset encountered an error while\nrunning a command. Please reach out to your administrator."),Object(r.b)("h2",{id:"issue-1011"},"Issue 1011"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Superset encountered an unexpected error.\n")),Object(r.b)("p",null,"Something unexpected happened in the Superset backend. Please reach out\nto your administrator."),Object(r.b)("h2",{id:"issue-1012"},"Issue 1012"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The username provided when connecting to a database is not valid.\n")),Object(r.b)("p",null,"The user provided a username that doesn't exist in the database. Please check\nthat the username is typed correctly and exists in the database."),Object(r.b)("h2",{id:"issue-1013"},"Issue 1013"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The password provided when connecting to a database is not valid.\n")),Object(r.b)("p",null,"The user provided a password that is incorrect. Please check that the\npassword is typed correctly."),Object(r.b)("h2",{id:"issue-1014"},"Issue 1014"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Either the username or the password used are incorrect.\n")),Object(r.b)("p",null,"Either the username provided does not exist or the password was written incorrectly. Please\ncheck that the username and password were typed correctly."),Object(r.b)("h2",{id:"issue-1015"},"Issue 1015"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Either the database is spelled incorrectly or does not exist.\n")),Object(r.b)("p",null,"Either the database was written incorrectly or it does not exist. Check that it was typed correctly."),Object(r.b)("h2",{id:"issue-1016"},"Issue 1016"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The schema was deleted or renamed in the database.\n")),Object(r.b)("p",null,"The schema was either removed or renamed. Check that the schema is typed correctly and exists."),Object(r.b)("h2",{id:"issue-1017"},"Issue 1017"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The user doesn't have the proper permissions to connect to the database\n")),Object(r.b)("p",null,"We were unable to connect to your database. Please confirm that your service account has the Viewer and Job User roles on the project."),Object(r.b)("h2",{id:"issue-1018"},"Issue 1018"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"One or more parameters needed to configure a database are missing.\n")),Object(r.b)("p",null,"Not all parameters required to test, create, or edit a database were present. Please double check which parameters are needed, and that they are present."),Object(r.b)("h2",{id:"issue-1019"},"Issue 1019"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The submitted payload has the incorrect format.\n")),Object(r.b)("p",null,"Please check that the request payload has the correct format (eg, JSON)."),Object(r.b)("h2",{id:"issue-1020"},"Issue 1020"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The submitted payload has the incorrect schema.\n")),Object(r.b)("p",null,"Please check that the request payload has the expected schema."),Object(r.b)("h2",{id:"issue-1021"},"Issue 1021"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Results backend needed for asynchronous queries is not configured.\n")),Object(r.b)("p",null,"Your instance of Superset doesn't have a results backend configured, which is needed for asynchronous queries. Please contact an administrator for further assistance."),Object(r.b)("h2",{id:"issue-1022"},"Issue 1022"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Database does not allow data manipulation.\n")),Object(r.b)("p",null,"Only ",Object(r.b)("inlineCode",{parentName:"p"},"SELECT")," statements are allowed against this database. Please contact an administrator if you need to run DML (data manipulation language) on this database."),Object(r.b)("h2",{id:"issue-1023"},"Issue 1023"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"CTAS (create table as select) doesn't have a SELECT statement at the end.\n")),Object(r.b)("p",null,"The last statement in a query run as CTAS (create table as select) MUST be a SELECT statement. Please make sure the last statement in the query is a SELECT."),Object(r.b)("h2",{id:"issue-1024"},"Issue 1024"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"CVAS (create view as select) query has more than one statement.\n")),Object(r.b)("p",null,"When running a CVAS (create view as select) the query should have a single statement. Please make sure the query has a single statement, and no extra semi-colons other than the last one."),Object(r.b)("h2",{id:"issue-1025"},"Issue 1025"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"CVAS (create view as select) query is not a SELECT statement.\n")),Object(r.b)("p",null,"When running a CVAS (create view as select) the query should be a SELECT statement. Please make sure the query has a single statement and it's a SELECT statement."))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/Miscellaneous/issue_codes.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-miscellaneous-issue-codes-mdx-03ce5f6d9c54404570a5.js.map