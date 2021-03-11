(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(139)),o={id:"filtering",title:"Filtering Resources"},c={unversionedId:"usage/cmd/scan/filtering",id:"version-0.5.0/usage/cmd/scan/filtering",isDocsHomePage:!1,title:"Filtering Resources",description:"driftctl offers two ways to filter resources:",source:"@site/versioned_docs/version-0.5.0/usage/cmd/scan/filter.mdx",slug:"/usage/cmd/scan/filtering",permalink:"/0.5.0/usage/cmd/scan/filtering",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.5.0/usage/cmd/scan/filter.mdx",version:"0.5.0",sidebar:"version-0.5.0/docs",previous:{title:"Output Format",permalink:"/0.5.0/usage/cmd/scan/output"},next:{title:"Completion Script",permalink:"/0.5.0/usage/cmd/completion/script"}},l=[{value:".driftignore",id:"driftignore",children:[{value:"Examples",id:"examples",children:[]}]},{value:"Filter rules",id:"filter-rules",children:[{value:"Examples",id:"examples-1",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"driftctl offers two ways to filter resources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},".driftignore"),Object(i.b)("li",{parentName:"ul"},"Filter rules")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},".driftignore")," is a simple way to ignore resources, you put resources in a ",Object(i.b)("inlineCode",{parentName:"p"},".driftignore")," file like a ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Filter rules")," allow you to build complex expression to include and exclude a set of resources in your workflow.\nPowered by expression language ",Object(i.b)("a",{parentName:"p",href:"https://jmespath.org/"},"JMESPath")," you could build a complex include and exclude expression."),Object(i.b)("p",null,"If you need only to exclude a set of resources you should use .driftignore, if you need something more advanced, check filter rules."),Object(i.b)("h2",{id:"driftignore"},".driftignore"),Object(i.b)("p",null,"Create the .driftignore file where you launch driftctl (usually the root of your IaC repo)."),Object(i.b)("p",null,"Each line must be of kind"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resource_type.resource_id"),", resource_id could be a wildcard to exclude all resources of a given type."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resource_type.resource_id.path.to.FieldName"),", resource_id can be wildcard to ignore a drift on given field for a given type, path could also contain wildcards.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Fields are not case-sensitive."))),Object(i.b)("p",null,"If your resource id or the path of a field contains dot or backslash you can escape them with backslashes:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ignore"},"resource_type.resource\\.id\\.containing\\.dots.path.to.dotted\\.FieldName\nresource_type.resource_id_containing\\\\backslash.path.to.backslash\\\\FieldName\n")),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ignore"},"# Will ignore S3 bucket called my-bucket\naws_s3_bucket.my-buckey\n# Will ignore every aws_instance resource\naws_instance.*\n# Will ignore environment for all lambda functions\naws_lambda_function.*.Environment\n# Will ignore lastModified for my-lambda-name lambda function\naws_lambda_function.my-lambda-name.LastModified\n")),Object(i.b)("h2",{id:"filter-rules"},"Filter rules"),Object(i.b)("p",null,"Filter rules could be passed to ",Object(i.b)("inlineCode",{parentName:"p"},"scan")," cmd with ",Object(i.b)("inlineCode",{parentName:"p"},"--filter")," flag.\nYou could also use the environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"DCTL_FILTER"),".\nFilter rules syntax in use is actually ",Object(i.b)("a",{parentName:"p",href:"https://jmespath.org/specification.html"},"JMESPath"),"."),Object(i.b)("p",null,"Filter are applied on a normalized struct which contains the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Type"),": Type of the resource, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"aws_s3_bucket")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Id"),": Id of the resource, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"my-bucket-name")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Attr"),": Contains every resource attributes (check ",Object(i.b)("inlineCode",{parentName:"li"},"pkg/resource/aws/aws_s3_bucket.go")," for a full list of supported attributes of a bucket)")),Object(i.b)("h3",{id:"examples-1"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"# Will include only S3 bucket in the search\n$ driftctl scan --filter \"Type=='aws_s3_bucket'\"\n# OR (beware of escape your shell special chars between double quotes)\n$ driftctl scan --filter $'Type==\\'aws_s3_bucket\\''\n\n# Excludes only s3 bucket named 'my-bucket-name'\n$ driftctl scan --filter $'Type==\\'aws_s3_bucket\\' && Id!=\\'my-bucket-name\\''\n\n# Ignore buckets that have tags terraform equal to 'false'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && Attr.Tags.terraform==\\'false\\')'\n\n# Ignore buckets that don't have tag terraform\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && Attr.Tags != null && !contains(keys(Attr.Tags), \\'terraform\\'))'\n\n# Ignore buckets with an ID prefix of 'terraform-'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && starts_with(Id, \\'terraform-\\'))'\n\n# Ignore buckets with an ID suffix of '-test'\n$ driftctl scan --filter $'!(Type==\\'aws_s3_bucket\\' && ends_with(Id, \\'-test\\'))'\n\n")))}u.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);