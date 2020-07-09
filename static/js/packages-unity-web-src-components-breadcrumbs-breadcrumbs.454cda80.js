(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"./packages/unity-web/src/components/Breadcrumbs/Breadcrumbs.js":function(e,n,t){"use strict";t.d(n,"a",function(){return f});var r=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=t("./node_modules/react/index.js"),a=t.n(o),i=t("./packages/unity-core/lib/typography.js"),c=t("./packages/unity-core/lib/colors.js"),s=t.n(c),l=t("./packages/unity-web/src/components/Link/index.js"),p=Object(r.default)("nav",{target:"e5d63db0"})(i.variants.text.string," color:",s.a.black.default,";max-width:100%;"),u=Object(r.default)("ol",{target:"e5d63db1"})({name:"eafatv",styles:"display:flex;padding:.75rem 1rem;list-style:none;white-space:nowrap;"}),d=Object(r.default)("li",{target:"e5d63db2"})("display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:3rem;&:first-child{overflow:inherit;}& + &:before{display:inline-block;padding-right:.5rem;padding-left:.5rem;color:",s.a.gray.default,';content:"/";}a,a:visited{color:',s.a.black.default,";}"),m=function(e){var n=e.path,t=e.children;return a.a.createElement(l.a,{href:n},t)},b=function(e){var n=e.crumbs,t=e.linkRenderer,r=void 0===t?m:t;return a.a.createElement(p,{ariaLabel:"breadcrumb"},a.a.createElement(u,null,n.map(function(e,t){var o=t===n.length-1;return a.a.createElement(d,{key:t,ariaCurrent:!!o&&"page"},e.path?r({path:e.path,children:e.title}):e.title)})))},f=function(){return a.a.createElement("div",null)};n.b=b,f.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"BreadcrumbsPropTypes",props:{crumbs:{type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!0},path:{name:"string",required:!1}}}},required:!1,description:""},linkRenderer:{type:{name:"func"},required:!1,description:""}}},b.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{linkRenderer:{defaultValue:{value:"({ path, children }) => (\n\t<Link href={path}>{children}</Link>\n)",computed:!1},required:!1}}}},"./packages/unity-web/src/components/Breadcrumbs/Breadcrumbs.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return b});var r=t("./node_modules/react/index.js"),o=t.n(r),a=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),c=t("./packages/unity-web/src/components/Breadcrumbs/Breadcrumbs.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var b=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=u(this,d(n).call(this,e))).layout=null,t}var t,r,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,o.a.Component),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components,t=l(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:n},o.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"breadcrumbs"}},"Breadcrumbs"),o.a.createElement(a.MDXTag,{name:"p",components:n},"Use breadcrumbs to show a user where they are in the sitemap."),o.a.createElement(a.MDXTag,{name:"pre",components:n},o.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import Breadcrumbs from '@clarityhub/unity-web/lib/components/Breadcrumbs';\n")),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),o.a.createElement(i.e,{__position:0,__code:"<div style={{ width: '400px' }}>\n  <Breadcrumbs\n    crumbs={[\n      {\n        title: 'Home',\n      },\n    ]}\n  />\n  <Breadcrumbs\n    crumbs={[\n      {\n        title: 'Home',\n        path: '/',\n      },\n      {\n        title: 'Admin',\n      },\n    ]}\n  />\n  <Breadcrumbs\n    crumbs={[\n      {\n        title: 'Home',\n        path: '/',\n      },\n      {\n        title: 'Admin',\n        path: '/admin',\n      },\n      {\n        title: 'Long interview name \u2013\xa0October 3rd, 2019',\n        // no path\n      },\n    ]}\n  />\n</div>\n<Breadcrumbs\n  crumbs={[\n    {\n      title: 'Home',\n    },\n  ]}\n/>\n<Breadcrumbs\n  crumbs={[\n    {\n      title: 'Home',\n      path: '/',\n    },\n    {\n      title: 'Admin',\n    },\n  ]}\n/>\n<Breadcrumbs\n  crumbs={[\n    {\n      title: 'Home',\n      path: '/',\n    },\n    {\n      title: 'Admin',\n      path: '/admin',\n    },\n    {\n      title: 'Users',\n      // no path\n    },\n  ]}\n/>",__scope:{props:this?this.props:t,Breadcrumbs:c.b,BreadcrumbsPropTypes:c.a}},o.a.createElement("div",{style:{width:"400px"}},o.a.createElement(c.b,{crumbs:[{title:"Home"}]}),o.a.createElement(c.b,{crumbs:[{title:"Home",path:"/"},{title:"Admin"}]}),o.a.createElement(c.b,{crumbs:[{title:"Home",path:"/"},{title:"Admin",path:"/admin"},{title:"Long interview name \u2013\xa0October 3rd, 2019"}]})),o.a.createElement(c.b,{crumbs:[{title:"Home"}]}),o.a.createElement(c.b,{crumbs:[{title:"Home",path:"/"},{title:"Admin"}]}),o.a.createElement(c.b,{crumbs:[{title:"Home",path:"/"},{title:"Admin",path:"/admin"},{title:"Users"}]})),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"link-renderer"}},"Link Renderer"),o.a.createElement(a.MDXTag,{name:"p",components:n},"By default, the breadcrumbs will use a Link to render the given path."),o.a.createElement(a.MDXTag,{name:"p",components:n},"You can override how breadcrumbs are rendered (so you can use React Router Links for example) by providing a ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"linkRenderer"),"."),o.a.createElement(a.MDXTag,{name:"p",components:n},"The default renderer looks like:"),o.a.createElement(a.MDXTag,{name:"pre",components:n},o.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const defaultLinkRenderer = ({ path, children }) => (\n    <Link href={path}>{children}</Link>\n);\n")),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"prop-types"}},"Prop Types"),o.a.createElement(a.MDXTag,{name:"p",components:n},"The following prop types are available for the Breadcrumbs component."),o.a.createElement(i.f,{of:c.a}))}}])&&p(t.prototype,r),s&&p(t,s),n}();b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/Link/Link.js":function(e,n,t){"use strict";t.d(n,"a",function(){return s});var r=t("./node_modules/react/index.js"),o=t.n(r),a=t("./packages/unity-web/src/components/Typography/index.js");function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=function(e){var n=e.component,t=void 0===n?"a":n,r=e.children,c=e.variant,s=void 0===c?"text":c,l=e.color,p=void 0===l?"primary":l,u=e.type,d=i(e,["component","children","variant","color","type"]);return o.a.createElement(a.a,Object.assign({type:u||"link",variant:s,color:p,component:t},d),r)},s=function(){return o.a.createElement("div",null)};n.b=c,s.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"LinkPropTypes",props:{children:{type:{name:"node"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},component:{type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"string"},required:!1,description:""}}},c.__docgenInfo={description:"",methods:[],displayName:"Link",props:{component:{defaultValue:{value:"'a'",computed:!1},required:!1},variant:{defaultValue:{value:"'text'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./packages/unity-web/src/components/Link/LinkButton.js":function(e,n,t){"use strict";var r=t("./node_modules/react/index.js"),o=t.n(r),a=t("./packages/unity-web/src/components/Buttons/Button.js");function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=function(e){var n=e.history,t=e.to,r=e.onClick,c=i(e,["history","to","onClick"]);return o.a.createElement(a.b,Object.assign({},c,{onClick:function(e){r&&r(e),n.push(t)}}))};n.a=c,c.__docgenInfo={description:"",methods:[],displayName:"LinkButton",props:{children:{type:{name:"node"},required:!0,description:""},history:{type:{name:"shape",value:{push:{name:"func",required:!0}}},required:!0,description:""},to:{type:{name:"string"},required:!0,description:""}}}},"./packages/unity-web/src/components/Link/index.js":function(e,n,t){"use strict";var r=t("./packages/unity-web/src/components/Link/Link.js");t.d(n,"a",function(){return r.b});t("./packages/unity-web/src/components/Link/LinkButton.js")},"./packages/unity-web/src/components/Typography/Typography.js":function(e,n,t){"use strict";var r=t("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),o=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=t("./packages/unity-core/lib/colors.js"),i=t.n(a),c=t("./packages/unity-core/lib/typography.js"),s=t("./packages/unity-web/src/theme/fonts.js");function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=function(e){var n=e.type,t=void 0===n?"text":n,a=e.variant,p=e.color,u=void 0===p?"dark":p,d=e.children,m=e.component,b=void 0===m?"p":m,f=e.noMargin,h=void 0!==f&&f,y=e.noPadding,g=void 0!==y&&y,v=e.inline,k=void 0!==v&&v,j=e.css,w=e.center,x=void 0!==w&&w,O=l(e,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),E=[Boolean(t)?s.a[t]:{},Boolean(a)?c.variants[a]:{},Boolean(u)?{color:i.a[u].default}:{},Boolean(g)?"\n    padding: 0;\n":{},Boolean(h)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(j)?j:{},Boolean(k)?{display:"inline-block"}:{},Boolean(x)?{textAlign:"center"}:{}];if("string"===typeof b){var _=b;"p"===b&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(t)&&(_=t);var z=r.default[_](E,"");return Object(o.jsx)(z,O,d)}var B=b;return Object(o.jsx)(B,Object.assign({},O,{css:E}),d)};n.a=p,p.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(types)"},required:!1,description:""},color:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(colors)"},required:!1,description:""},component:{defaultValue:{value:"'p'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},noMargin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noPadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},css:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},variant:{type:{name:"enum",computed:!0,value:"Object.keys(variants)"},required:!1,description:""}}}},"./packages/unity-web/src/components/Typography/index.js":function(e,n,t){"use strict";var r=t("./packages/unity-web/src/components/Typography/Typography.js");t.d(n,"a",function(){return r.a})},"./packages/unity-web/src/theme/fonts.js":function(e,n,t){"use strict";t.d(n,"a",function(){return c});var r=t("./packages/unity-core/lib/typography.js"),o=t("./packages/unity-core/lib/colors.js"),a=t.n(o),i=t("./packages/unity-core/lib/utilities/color.js"),c={h1:"\n        ".concat(r.variants.heading.string,"\n\n        font-size: ").concat(r.sizes.h1.rem,"rem;\n        line-height: ").concat(r.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(r.variants.heading.string,"\n\n        font-size: ").concat(r.sizes.h2.rem,"rem;\n        line-height: ").concat(r.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(r.variants.heading.string,"\n\n        font-size: ").concat(r.sizes.h3.rem,"rem;\n        line-height: ").concat(r.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(r.variants.secondary.string,"\n\n        font-size: ").concat(r.sizes.h4.rem,"rem;\n        line-height: ").concat(r.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(r.variants.secondary.string,"\n\n        font-size: ").concat(r.sizes.h5.rem,"rem;\n        line-height: ").concat(r.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(r.variants.secondary.string,"\n\n        font-size: ").concat(r.sizes.h6.rem,"rem;\n        line-height: ").concat(r.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(r.variants.readable.string,"\n\n        font-size: ").concat(r.sizes.p.rem,"rem;\n        line-height: ").concat(r.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(r.variants.text.string,"\n\n        font-size: ").concat(r.sizes.text.rem,"rem;\n        line-height: ").concat(r.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(r.variants.text.string,"\n\n        font-size: ").concat(r.sizes.text2.rem,"rem;\n        line-height: ").concat(r.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(r.variants.text.string,"\n\n        color: ").concat(a.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(r.sizes.subtext.rem,"rem;\n        line-height: ").concat(r.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(a.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(a.a.primary.default,";\n        color: ").concat(a.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(a.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(a.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(i.darken)(a.a.primary.default,.2),";\n            color: ").concat(Object(i.darken)(a.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(a.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(a.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(a.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")}}}]);
//# sourceMappingURL=packages-unity-web-src-components-breadcrumbs-breadcrumbs.1440fd586bf40659facc.js.map