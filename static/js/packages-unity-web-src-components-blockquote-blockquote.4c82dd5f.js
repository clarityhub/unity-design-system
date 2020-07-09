(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./packages/unity-core/lib/colors.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.types=void 0;var o={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},a={primary:{background:o.primary,color:o.white},danger:{background:o.danger,color:o.white},success:{background:o.success,color:o.white},brand:{background:o.brand,color:o.white}};n.types=a;var r=o;n.default=r},"./packages/unity-core/lib/utilities/color.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.opacify=n.desaturate=n.saturate=n.lighten=n.darken=void 0;var o,a=(o=t("./node_modules/color/index.js"))&&o.__esModule?o:{default:o};var r={},i=function(e,n,t){var o="".concat(e,":").concat(n,":").concat(t);if(r[o])return r[o];var i=(0,a.default)(n)[e](t).rgb().string();return r[o]=i,i};n.darken=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("darken",e,n)};n.lighten=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("lighten",e,n)};n.saturate=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("saturate",e,n)};n.desaturate=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("desaturate",e,n)};n.opacify=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,t="opacify:".concat(e,":").concat(n);if(r[t])return r[t];var o=(0,a.default)(e).rgb().array();o.push(n);var i="rgba(".concat(o.join(","),")");return r[t]=i,i}},"./packages/unity-web/src/components/Blockquote/Blockquote.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),c=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),s=t("./packages/unity-core/lib/colors.js"),l=t.n(s),u=Object(c.default)("blockquote",{target:"e9ltruz0"})("border-left:4px solid ",l.a.dark.default,";padding-left:calc(2rem - 4px);font-style:italic;margin-left:-2rem;p + &{margin-top:1.6rem;}& + p{margin-top:1.6rem;}"),p=t("./packages/unity-web/src/components/Typography/index.js");function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function f(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,n){return!n||"object"!==d(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}t.d(n,"default",function(){return b});var b=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=g(this,h(n).call(this,e))).layout=null,t}var t,o,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(n,a.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=m(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"blockquote"}},"Blockquote"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use blockquotes to show that text was taken from another source."),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import Blockquote from '@clarityhub/unity-web/lib/components/Blockquote';\n")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),a.a.createElement(i.e,{__position:0,__code:"<Typography>\n  Normal paragraph text. Notice the alignment of the blockquote is to the left\n  of the paragraph.\n</Typography>\n<Blockquote>\n  <Typography>This is a block quote with some text</Typography>\n  <Typography>There can be multiple paragraphs</Typography>\n</Blockquote>",__scope:{props:this?this.props:t,Blockquote:u,Typography:p.a}},a.a.createElement(p.a,null,"Normal paragraph text. Notice the alignment of the blockquote is to the left of the paragraph."),a.a.createElement(u,null,a.a.createElement(p.a,null,"This is a block quote with some text"),a.a.createElement(p.a,null,"There can be multiple paragraphs"))),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Blockquote will pass through all props to the blockquote element."),a.a.createElement(i.f,{of:u}))}}])&&f(t.prototype,o),c&&f(t,c),n}();b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/Typography/Typography.js":function(e,n,t){"use strict";var o=t("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),a=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),r=t("./packages/unity-core/lib/colors.js"),i=t.n(r),c=t("./packages/unity-core/lib/typography.js"),s=t("./packages/unity-web/src/theme/fonts.js");function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=function(e){var n=e.type,t=void 0===n?"text":n,r=e.variant,u=e.color,p=void 0===u?"dark":u,d=e.children,m=e.component,f=void 0===m?"p":m,g=e.noMargin,h=void 0!==g&&g,y=e.noPadding,b=void 0!==y&&y,v=e.inline,k=void 0!==v&&v,x=e.css,j=e.center,w=void 0!==j&&j,O=l(e,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),z=[Boolean(t)?s.a[t]:{},Boolean(r)?c.variants[r]:{},Boolean(p)?{color:i.a[p].default}:{},Boolean(b)?"\n    padding: 0;\n":{},Boolean(h)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(x)?x:{},Boolean(k)?{display:"inline-block"}:{},Boolean(w)?{textAlign:"center"}:{}];if("string"===typeof f){var _=f;"p"===f&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(t)&&(_=t);var T=o.default[_](z,"");return Object(a.jsx)(T,O,d)}var q=f;return Object(a.jsx)(q,Object.assign({},O,{css:z}),d)};n.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(types)"},required:!1,description:""},color:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(colors)"},required:!1,description:""},component:{defaultValue:{value:"'p'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},noMargin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noPadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},css:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},variant:{type:{name:"enum",computed:!0,value:"Object.keys(variants)"},required:!1,description:""}}}},"./packages/unity-web/src/components/Typography/index.js":function(e,n,t){"use strict";var o=t("./packages/unity-web/src/components/Typography/Typography.js");t.d(n,"a",function(){return o.a})},"./packages/unity-web/src/theme/fonts.js":function(e,n,t){"use strict";t.d(n,"a",function(){return c});var o=t("./packages/unity-core/lib/typography.js"),a=t("./packages/unity-core/lib/colors.js"),r=t.n(a),i=t("./packages/unity-core/lib/utilities/color.js"),c={h1:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h1.rem,"rem;\n        line-height: ").concat(o.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h2.rem,"rem;\n        line-height: ").concat(o.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h3.rem,"rem;\n        line-height: ").concat(o.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h4.rem,"rem;\n        line-height: ").concat(o.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h5.rem,"rem;\n        line-height: ").concat(o.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h6.rem,"rem;\n        line-height: ").concat(o.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(o.variants.readable.string,"\n\n        font-size: ").concat(o.sizes.p.rem,"rem;\n        line-height: ").concat(o.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(o.variants.text.string,"\n\n        font-size: ").concat(o.sizes.text.rem,"rem;\n        line-height: ").concat(o.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(o.variants.text.string,"\n\n        font-size: ").concat(o.sizes.text2.rem,"rem;\n        line-height: ").concat(o.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(o.variants.text.string,"\n\n        color: ").concat(r.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(o.sizes.subtext.rem,"rem;\n        line-height: ").concat(o.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(r.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(r.a.primary.default,";\n        color: ").concat(r.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(r.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(r.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(i.darken)(r.a.primary.default,.2),";\n            color: ").concat(Object(i.darken)(r.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(r.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(r.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(r.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")}}}]);
//# sourceMappingURL=packages-unity-web-src-components-blockquote-blockquote.1440fd586bf40659facc.js.map