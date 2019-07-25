(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./packages/unity-web/src/components/Badge/Badge.js":function(e,n,t){"use strict";t.d(n,"a",function(){return u});var o=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=t("./node_modules/react/index.js"),r=t.n(a),i=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),c=t("./packages/unity-core/lib/colors.js"),s=t.n(c),l=t("./packages/unity-core/lib/utilities/color.js"),p=t("./packages/unity-core/lib/typography.js"),d=Object(o.default)("div",{target:"e3hul5p0"})("overflow:visible;text-transform:none;display:inline-block;",p.variants.button.string," font-weight:600;text-align:center;white-space:nowrap;vertical-align:middle;border:0 solid transparent;padding:0.1rem 0.4rem;font-size:0.8rem;line-height:1.2;border-radius:2rem;position:relative;text-transform:uppercase;",function(e){switch(e.type){case"primary":return Object(i.css)("color:",s.a.primary.default,";background-color:",Object(l.opacify)(s.a.primary.default,.25),";");case"success":return Object(i.css)("color:",s.a.success.default,";background-color:",Object(l.opacify)(s.a.success.default,.25),";");case"danger":return Object(i.css)("color:",s.a.danger.default,";background-color:",Object(l.opacify)(s.a.danger.default,.25),";");case"notification":return Object(i.css)("color:",s.a.white.default,";background-color:",s.a.notification.default,";border-color:",s.a.notification.default,";");case"default":default:return Object(i.css)("color:",s.a.black.default,";background-color:",s.a.muted.default,";border-color:",s.a.muted.default,";")}},""),u=function(){return r.a.createElement("div",null)};d.propTypes=u.propTypes,n.b=d,u.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"BadgePropTypes",props:{children:{type:{name:"node"},required:!1,description:""},type:{type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'success'",computed:!1},{value:"'danger'",computed:!1},{value:"'notification'",computed:!1},{value:"'default'",computed:!1}]},required:!1,description:""}}}},"./packages/unity-web/src/components/Badge/Badge.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),c=t("./packages/unity-web/src/components/Badge/Badge.js"),s=t("./packages/unity-web/src/components/Link/index.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function d(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,n){return!n||"object"!==l(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=u(this,m(n).call(this,e))).layout=null,t}var t,o,l;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(n,a.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=p(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"badges"}},"Badges"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Badges are great to display informational labels and numeric values."),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import Badge from '@clarityhub/unity-web/lib/components/Badge';\n")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"basic-badges"}},"Basic Badges"),a.a.createElement(i.e,{__position:0,__code:'<Badge type="default">Default</Badge> <Badge type="primary">Primary</Badge>{\' \'}\n<Badge type="success">Success</Badge> <Badge type="danger">Danger</Badge>{\' \'}\n<Badge type="notification">Notification</Badge>',__scope:{props:this?this.props:t,Badge:c.b,BadgePropTypes:c.a,Link:s.a}},a.a.createElement(c.b,{type:"default"},"Default")," ",a.a.createElement(c.b,{type:"primary"},"Primary")," ",a.a.createElement(c.b,{type:"success"},"Success")," ",a.a.createElement(c.b,{type:"danger"},"Danger")," ",a.a.createElement(c.b,{type:"notification"},"Notification")),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"link-badges"}},"Link Badges"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Link")," component to wrap a badge and turn it into a clickable badge."),a.a.createElement(i.e,{__position:1,__code:'<Link type="text" href="#">\n  <Badge type="default">10</Badge>\n</Link>{\' \'}\n<Link type="text" href="#">\n  <Badge type="primary">10</Badge>\n</Link>{\' \'}\n<Link type="text" href="#">\n  <Badge type="success">10</Badge>\n</Link>{\' \'}\n<Link type="text" href="#">\n  <Badge type="danger">10</Badge>\n</Link>{\' \'}\n<Link type="text" href="#">\n  <Badge type="notification">10</Badge>\n</Link>',__scope:{props:this?this.props:t,Badge:c.b,BadgePropTypes:c.a,Link:s.a}},a.a.createElement(s.a,{type:"text",href:"#"},a.a.createElement(c.b,{type:"default"},"10"))," ",a.a.createElement(s.a,{type:"text",href:"#"},a.a.createElement(c.b,{type:"primary"},"10"))," ",a.a.createElement(s.a,{type:"text",href:"#"},a.a.createElement(c.b,{type:"success"},"10"))," ",a.a.createElement(s.a,{type:"text",href:"#"},a.a.createElement(c.b,{type:"danger"},"10"))," ",a.a.createElement(s.a,{type:"text",href:"#"},a.a.createElement(c.b,{type:"notification"},"10"))),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(r.MDXTag,{name:"p",components:n},"The following props are available for the Badge component."),a.a.createElement(i.f,{of:c.a}))}}])&&d(t.prototype,o),l&&d(t,l),n}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/Link/Link.js":function(e,n,t){"use strict";t.d(n,"a",function(){return s});var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./packages/unity-web/src/components/Typography/index.js");function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=function(e){var n=e.component,t=void 0===n?"a":n,o=e.children,c=e.variant,s=void 0===c?"text":c,l=e.color,p=void 0===l?"primary":l,d=e.type,u=i(e,["component","children","variant","color","type"]);return a.a.createElement(r.a,Object.assign({type:d||"link",variant:s,color:p,component:t},u),o)},s=function(){return a.a.createElement("div",null)};n.b=c,s.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"LinkPropTypes",props:{children:{type:{name:"node"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},component:{type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"string"},required:!1,description:""}}},c.__docgenInfo={description:"",methods:[],displayName:"Link",props:{component:{defaultValue:{value:"'a'",computed:!1},required:!1},variant:{defaultValue:{value:"'text'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./packages/unity-web/src/components/Link/LinkButton.js":function(e,n,t){"use strict";var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./packages/unity-web/src/components/Buttons/Button.js");function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=function(e){var n=e.history,t=e.to,o=e.onClick,c=i(e,["history","to","onClick"]);return a.a.createElement(r.b,Object.assign({},c,{onClick:function(e){o&&o(e),n.push(t)}}))};n.a=c,c.__docgenInfo={description:"",methods:[],displayName:"LinkButton",props:{children:{type:{name:"node"},required:!0,description:""},history:{type:{name:"shape",value:{push:{name:"func",required:!0}}},required:!0,description:""},to:{type:{name:"string"},required:!0,description:""}}}},"./packages/unity-web/src/components/Link/index.js":function(e,n,t){"use strict";var o=t("./packages/unity-web/src/components/Link/Link.js");t.d(n,"a",function(){return o.b});t("./packages/unity-web/src/components/Link/LinkButton.js")},"./packages/unity-web/src/components/Typography/Typography.js":function(e,n,t){"use strict";var o=t("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),a=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),r=t("./packages/unity-core/lib/colors.js"),i=t.n(r),c=t("./packages/unity-core/lib/typography.js"),s=t("./packages/unity-web/src/theme/fonts.js");function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=function(e){var n=e.type,t=void 0===n?"text":n,r=e.variant,p=e.color,d=void 0===p?"dark":p,u=e.children,m=e.component,g=void 0===m?"p":m,f=e.noMargin,y=void 0!==f&&f,b=e.noPadding,h=void 0!==b&&b,v=e.inline,k=void 0!==v&&v,j=e.css,x=e.center,O=void 0!==x&&x,w=l(e,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),B=[Boolean(t)?s.a[t]:{},Boolean(r)?c.variants[r]:{},Boolean(d)?{color:i.a[d].default}:{},Boolean(h)?"\n    padding: 0;\n":{},Boolean(y)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(j)?j:{},Boolean(k)?{display:"inline-block"}:{},Boolean(O)?{textAlign:"center"}:{}];if("string"===typeof g){var E=g;"p"===g&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(t)&&(E=t);var _=o.default[E](B,"");return Object(a.jsx)(_,w,u)}var z=g;return Object(a.jsx)(z,Object.assign({},w,{css:B}),u)};n.a=p,p.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(types)"},required:!1,description:""},color:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(colors)"},required:!1,description:""},component:{defaultValue:{value:"'p'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},noMargin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noPadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},css:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"enum",computed:!0,value:"Object.keys(variants)"},required:!1,description:""}}}},"./packages/unity-web/src/components/Typography/index.js":function(e,n,t){"use strict";var o=t("./packages/unity-web/src/components/Typography/Typography.js");t.d(n,"a",function(){return o.a})},"./packages/unity-web/src/theme/fonts.js":function(e,n,t){"use strict";t.d(n,"a",function(){return c});var o=t("./packages/unity-core/lib/typography.js"),a=t("./packages/unity-core/lib/colors.js"),r=t.n(a),i=t("./packages/unity-core/lib/utilities/color.js"),c={h1:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h1.rem,"rem;\n        line-height: ").concat(o.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h2.rem,"rem;\n        line-height: ").concat(o.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h3.rem,"rem;\n        line-height: ").concat(o.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h4.rem,"rem;\n        line-height: ").concat(o.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h5.rem,"rem;\n        line-height: ").concat(o.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h6.rem,"rem;\n        line-height: ").concat(o.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(o.variants.readable.string,"\n\n        font-size: ").concat(o.sizes.p.rem,"rem;\n        line-height: ").concat(o.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(o.variants.text.string,"\n\n        font-size: ").concat(o.sizes.text.rem,"rem;\n        line-height: ").concat(o.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(o.variants.text.string,"\n\n        font-size: ").concat(o.sizes.text2.rem,"rem;\n        line-height: ").concat(o.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(o.variants.text.string,"\n\n        color: ").concat(r.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(o.sizes.subtext.rem,"rem;\n        line-height: ").concat(o.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(r.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(r.a.primary.default,";\n        color: ").concat(r.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(r.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(r.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(i.darken)(r.a.primary.default,.2),";\n            color: ").concat(Object(i.darken)(r.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(r.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(r.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(r.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")}}}]);
//# sourceMappingURL=packages-unity-web-src-components-badge-badge.1af62d1456d21788be3d.js.map