(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"9BGn":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));var o=n("k1TG"),a=n("8o2o"),r=(n("q1tI"),n("7ljp")),c=n("hhGP"),i=(n("qKvR"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/Connecting to Databases/google-bigquery.mdx"}});var l={_frontmatter:i},b=c.a;function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(b,Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"google-bigquery"},"Google BigQuery"),Object(r.b)("p",null,"The recommended connector library for BigQuery is\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/mxmzdlv/pybigquery"}),"pybigquery"),"."),Object(r.b)("p",null,"The connection string for BigQuery looks like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"bigquery://{project_id}\n")),Object(r.b)("p",null,"When adding a new BigQuery connection in Superset, you'll also need to add the GCP Service Account\ncredentials file (as a JSON)."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create your Service Account via the Google Cloud Platform control panel, provide it access to the\nappropriate BigQuery datasets, and download the JSON configuration file for the service account.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"n Superset, Add a JSON blob to the ",Object(r.b)("strong",{parentName:"p"},"Secure Extra")," field in the database configuration form with\nthe following format:"))),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'{\n    "credentials_info": <contents of credentials JSON file>\n}\n')),Object(r.b)("p",null,"The resulting file should have this structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'{\n    "credentials_info": {\n        "type": "service_account",\n        "project_id": "...",\n        "private_key_id": "...",\n        "private_key": "...",\n        "client_email": "...",\n        "client_id": "...",\n        "auth_uri": "...",\n        "token_uri": "...",\n        "auth_provider_x509_cert_url": "...",\n        "client_x509_cert_url": "..."\n    }\n}\n')),Object(r.b)("p",null,"You should then be able to connect to your BigQuery datasets."),Object(r.b)("p",null,"To be able to upload CSV or Excel files to BigQuery in Superset, you'll need to also add the\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/pydata/pandas-gbq"}),"pandas_gbq")," library."))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/Connecting to Databases/google-bigquery.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-connecting-to-databases-google-bigquery-mdx-515e7d0137a352a0a438.js.map