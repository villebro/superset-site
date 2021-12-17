(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{rrAY:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return b}));var s=a("k1TG"),n=a("8o2o"),o=(a("q1tI"),a("7ljp")),i=a("hhGP"),r=(a("qKvR"),{});void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/security-page.mdx"}});var l={_frontmatter:r},c=i.a;function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(c,Object(s.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"roles"},"Roles"),Object(o.b)("p",null,"Security in Superset is handled by Flask AppBuilder (FAB), an application development framework\nbuilt on top of Flask. FAB provides authentication, user management, permissions and roles.\nPlease read its ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"https://flask-appbuilder.readthedocs.io/en/latest/security.html"}),"Security documentation"),"."),Object(o.b)("h3",{id:"provided-roles"},"Provided Roles"),Object(o.b)("p",null,"Superset ships with a set of roles that are handled by Superset itself. You can assume\nthat these roles will stay up-to-date as Superset evolves (and as you update Superset versions)."),Object(o.b)("p",null,"Even though ",Object(o.b)("strong",{parentName:"p"},"Admin")," users have the ability, we don't recommend altering the\npermissions associated with each role (e.g. by removing or adding permissions to them). The permissions\nassociated with each role will be re-synchronized to their original values when you run\nthe ",Object(o.b)("strong",{parentName:"p"},"superset init")," command (often done between Superset versions)."),Object(o.b)("h3",{id:"admin"},"Admin"),Object(o.b)("p",null,"Admins have all possible rights, including granting or revoking rights from other\nusers and altering other people’s slices and dashboards."),Object(o.b)("h3",{id:"alpha"},"Alpha"),Object(o.b)("p",null,"Alpha users have access to all data sources, but they cannot grant or revoke access\nfrom other users. They are also limited to altering the objects that they own. Alpha users can add and alter data sources."),Object(o.b)("h3",{id:"gamma"},"Gamma"),Object(o.b)("p",null,"Gamma users have limited access. They can only consume data coming from data sources\nthey have been given access to through another complementary role. They only have access to\nview the slices and dashboards made from data sources that they have access to. Currently Gamma\nusers are not able to alter or add data sources. We assume that they are mostly content consumers, though they can create slices and dashboards."),Object(o.b)("p",null,"Also note that when Gamma users look at the dashboards and slices list view, they will\nonly see the objects that they have access to."),Object(o.b)("h3",{id:"sql_lab"},"sql_lab"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"sql_lab")," role grants access to SQL Lab. Note that while ",Object(o.b)("strong",{parentName:"p"},"Admin")," users have access\nto all databases by default, both ",Object(o.b)("strong",{parentName:"p"},"Alpha")," and ",Object(o.b)("strong",{parentName:"p"},"Gamma")," users need to be given access on a per database basis."),Object(o.b)("h3",{id:"public"},"Public"),Object(o.b)("p",null,"To allow logged-out users to access some Superset features, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"PUBLIC_ROLE_LIKE")," config setting and assign it to another role whose permissions you want passed to this role."),Object(o.b)("p",null,"For example, by setting ",Object(o.b)("inlineCode",{parentName:"p"},"PUBLIC_ROLE_LIKE = Gamma")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"superset_config.py")," file, you grant\npublic role the same set of permissions as for the ",Object(o.b)("strong",{parentName:"p"},"Gamma")," role. This is useful if one\nwants to enable anonymous users to view dashboards. Explicit grant on specific datasets is\nstill required, meaning that you need to edit the ",Object(o.b)("strong",{parentName:"p"},"Public")," role and add the public data sources to the role manually."),Object(o.b)("h3",{id:"managing-data-source-access-for-gamma-roles"},"Managing Data Source Access for Gamma Roles"),Object(o.b)("p",null,"Here’s how to provide users access to only specific datasets. First make sure the users with\nlimited access have ","[only]"," the Gamma role assigned to them. Second, create a new role (Menu -> Security -> List Roles) and click the + sign."),Object(o.b)("p",null,"This new window allows you to give this new role a name, attribute it to users and select the\ntables in the ",Object(o.b)("strong",{parentName:"p"},"Permissions")," dropdown. To select the data sources you want to associate with this role, simply click on the dropdown and use the typeahead to search for your table names."),Object(o.b)("p",null,"You can then confirm with users assigned to the ",Object(o.b)("strong",{parentName:"p"},"Gamma")," role that they see the\nobjects (dashboards and slices) associated with the tables you just extended them."),Object(o.b)("h3",{id:"customizing-permissions"},"Customizing Permissions"),Object(o.b)("p",null,"The permissions exposed by FAB are very granular and allow for a great level of\ncustomization. FAB creates many permissions automagically for each model that is\ncreated (can_add, can_delete, can_show, can_edit, …) as well as for each view.\nOn top of that, Superset can expose more granular permissions like ",Object(o.b)("strong",{parentName:"p"},"all_datasource_access"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"We do not recommend altering the 3 base roles as there are a set of assumptions that\nSuperset is built upon"),". It is possible though for you to create your own roles, and union them to existing ones."),Object(o.b)("h3",{id:"permissions"},"Permissions"),Object(o.b)("p",null,"Roles are composed of a set of permissions, and Superset has many categories of\npermissions. Here are the different categories of permissions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Model & Action: models are entities like Dashboard, Slice, or User. Each model has\na fixed set of permissions, like ",Object(o.b)("strong",{parentName:"li"},"can_edit"),", ",Object(o.b)("strong",{parentName:"li"},"can_show"),", ",Object(o.b)("strong",{parentName:"li"},"can_delete"),", ",Object(o.b)("strong",{parentName:"li"},"can_list"),", ",Object(o.b)("strong",{parentName:"li"},"can_add"),",\nand so on. For example, you can allow a user to delete dashboards by adding ",Object(o.b)("strong",{parentName:"li"},"can_delete")," on\nDashboard entity to a role and granting this user that role."),Object(o.b)("li",{parentName:"ul"},"Views: views are individual web pages, like the Explore view or the SQL Lab view.\nWhen granted to a user, they will see that view in its menu items, and be able to load that page."),Object(o.b)("li",{parentName:"ul"},"Data source: For each data source, a permission is created. If the user does not have the\n",Object(o.b)("inlineCode",{parentName:"li"},"all_datasource_access permission")," granted, the user will only be able to see Slices or explore the data sources that are granted to them"),Object(o.b)("li",{parentName:"ul"},"Database: Granting access to a database allows for the user to access all\ndata sources within that database, and will enable the user to query that\ndatabase in SQL Lab, provided that the SQL Lab specific permission have been granted to the user")),Object(o.b)("h3",{id:"restricting-access-to-a-subset-of-data-sources"},"Restricting Access to a Subset of Data Sources"),Object(o.b)("p",null,"We recommend giving a user the ",Object(o.b)("strong",{parentName:"p"},"Gamma")," role plus any other roles that would add\naccess to specific data sources. We recommend that you create individual roles for\neach access profile. For example, the users on the Finance team might have access to a set of\ndatabases and data sources; these permissions can be consolidated in a single role.\nUsers with this profile then need to be assigned the ",Object(o.b)("strong",{parentName:"p"},"Gamma")," role as a foundation to\nthe models and views they can access, and that Finance role that is a collection of permissions to data objects."),Object(o.b)("p",null,"A user can have multiple roles associated with them. For example, an executive on the Finance\nteam could be granted ",Object(o.b)("strong",{parentName:"p"},"Gamma"),", ",Object(o.b)("strong",{parentName:"p"},"Finance"),", and the ",Object(o.b)("strong",{parentName:"p"},"Executive")," roles. The ",Object(o.b)("strong",{parentName:"p"},"Executive"),"\nrole could provide access to a set of data sources and dashboards made available only to executives.\nIn the ",Object(o.b)("strong",{parentName:"p"},"Dashboards")," view, a user can only see the ones they have access too\nbased on the roles and permissions that were attributed."),Object(o.b)("h3",{id:"row-level-security"},"Row Level Security"),Object(o.b)("p",null,"Using Row Level Security filters (under the ",Object(o.b)("strong",{parentName:"p"},"Security")," menu) you can create filters\nthat are assigned to a particular table, as well as a set of roles.\nIf you want members of the Finance team to only have access to\nrows where ",Object(o.b)("inlineCode",{parentName:"p"},'department = "finance"'),", you could:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a Row Level Security filter with that clause (",Object(o.b)("inlineCode",{parentName:"li"},'department = "finance"'),")"),Object(o.b)("li",{parentName:"ul"},"Then assign the clause to the ",Object(o.b)("strong",{parentName:"li"},"Finance")," role and the table it applies to")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"clause")," field, which can contain arbitrary text, is then added to the generated\nSQL statement’s WHERE clause. So you could even do something like create a filter\nfor the last 30 days and apply it to a specific role, with a clause\nlike ",Object(o.b)("inlineCode",{parentName:"p"},"date_field > DATE_SUB(NOW(), INTERVAL 30 DAY)"),". It can also support\nmultiple conditions: ",Object(o.b)("inlineCode",{parentName:"p"},"client_id = 6")," AND ",Object(o.b)("inlineCode",{parentName:"p"},'advertiser="foo"'),", etc."),Object(o.b)("p",null,"All relevant Row level security filters will be combined together (under the hood,\nthe different SQL clauses are combined using AND statements). This means it's\npossible to create a situation where two roles conflict in such a way as to limit a table subset to empty."),Object(o.b)("p",null,"For example, the filters ",Object(o.b)("inlineCode",{parentName:"p"},"client_id=4")," and ",Object(o.b)("inlineCode",{parentName:"p"},"client_id=5"),", applied to a role,\nwill result in users of that role having ",Object(o.b)("inlineCode",{parentName:"p"},"client_id=4")," AND ",Object(o.b)("inlineCode",{parentName:"p"},"client_id=5"),"\nadded to their query, which can never be true."),Object(o.b)("h3",{id:"reporting-security-vulnerabilities"},"Reporting Security Vulnerabilities"),Object(o.b)("p",null,"Apache Software Foundation takes a rigorous standpoint in annihilating the security issues in its\nsoftware projects. Apache Superset is highly sensitive and forthcoming to issues pertaining to its\nfeatures and functionality."),Object(o.b)("p",null,"If you have apprehensions regarding Superset security or you discover vulnerability or potential\nthreat, don’t hesitate to get in touch with the Apache Security Team by dropping a mail at\n",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"mailto:security@apache.org."}),"security@apache.org.")," In the mail, specify the project name Superset with the description of the\nissue or potential threat. You are also urged to recommend the way to reproduce and replicate the\nissue. The security team and the Superset community will get back to you after assessing and\nanalysing the findings."),Object(o.b)("p",null,"PLEASE PAY ATTENTION to report the security issue on the security email before disclosing it on\npublic domain. The ASF Security Team maintains a page with the description of how vulnerabilities\nand potential threats are handled, check their web page for more details."))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/security-page.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-security-page-mdx-21fb41faa4420192878c.js.map