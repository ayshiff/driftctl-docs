(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),i=(t(0),t(159)),c={id:"ghaction",title:"GitHub Action"},o={unversionedId:"ci_cd/guides/ghaction",id:"version-0.7.0/ci_cd/guides/ghaction",isDocsHomePage:!1,title:"GitHub Action",description:"You can run a full driftctl scan in your GitHub Actions workflow by using the official action.",source:"@site/versioned_docs/version-0.7.0/ci_cd/guides/ghaction.mdx",slug:"/ci_cd/guides/ghaction",permalink:"/0.7.0/ci_cd/guides/ghaction",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/versioned_docs/version-0.7.0/ci_cd/guides/ghaction.mdx",version:"0.7.0",sidebar:"version-0.7.0/docs",previous:{title:"CircleCI",permalink:"/0.7.0/ci_cd/guides/circleci"},next:{title:"GitlabCI",permalink:"/0.7.0/ci_cd/guides/gitlabci"}},u=[{value:"Scheduled example",id:"scheduled-example",children:[]},{value:"GitOps example",id:"gitops-example",children:[]}],s={toc:u};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can run a full driftctl scan in your GitHub Actions workflow by using the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/marketplace/actions/driftctl-action"},"official action"),"."),Object(i.b)("h2",{id:"scheduled-example"},"Scheduled example"),Object(i.b)("p",null,"Below you can find a GitHub Actions workflow example with a scheduled run of driftctl."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},'name: driftctl\n\non:\n  # Triggers driftctl every 10 minutes\n  schedule:\n    - cron: "*/10 * * * *"\n\njobs:\n  scheduled:\n    runs-on: ubuntu-latest\n    env:\n      AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}\n      AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n      AWS_DEFAULT_REGION: us-east-1\n    steps:\n      - name: Run driftctl\n        uses: cloudskiff/driftctl-action@v1\n        env:\n          DCTL_FILTER: "Type==\'aws_instance\'"\n        with:\n          version: 0.6.0\n')),Object(i.b)("h2",{id:"gitops-example"},"GitOps example"),Object(i.b)("p",null,"Below you can find a GitOps GitHub Actions workflow example."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yml"},"name: gitops\n\non:\n  push:\n    branches:\n      - main\n\nenv:\n  AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}\n  AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n  AWS_DEFAULT_REGION: us-east-1\n\njobs:\n  validate-fmt:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2\n      - name: Setup Terraform\n        uses: hashicorp/setup-terraform@v1\n      - name: Terraform Init\n        run: terraform init\n      - name: Terraform Format\n        run: terraform fmt -check\n      - name: Terraform Validate\n        run: terraform validate\n  driftctl:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Run driftctl\n        uses: cloudskiff/driftctl-action@v1\n        env:\n          DCTL_FROM: tfstate+s3://my-path/terraform.tfstate\n  plan:\n    needs: [validate-fmt, driftctl]\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2\n      - name: Setup Terraform\n        uses: hashicorp/setup-terraform@v1\n      - name: Terraform Init\n        run: terraform init\n      - name: Terraform Plan\n        run: terraform plan\n")))}l.isMDXComponent=!0},159:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return t?a.a.createElement(m,o(o({ref:n},s),{},{components:t})):a.a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);