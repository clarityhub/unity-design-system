(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./packages/unity-core/lib/colors.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},highlight:{default:"rgba(0, 123, 255, .25)"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}}},"./packages/unity-core/lib/utilities/color.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.opacify=n.desaturate=n.lighten=n.darken=void 0;var o,r=(o=t("./node_modules/color/index.js"))&&o.__esModule?o:{default:o};var i={},a=function(e,n,t){var o="".concat(e,":").concat(n,":").concat(t);if(i[o])return i[o];var a=(0,r.default)(n)[e](t).rgb().string();return i[o]=a,a};n.darken=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return a("darken",e,n)};n.lighten=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return a("lighten",e,n)};n.desaturate=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return a("desaturate",e,n)};n.opacify=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,t="opacify:".concat(e,":").concat(n);if(i[t])return i[t];var o=(0,r.default)(e).rgb().array();o.push(n);var a="rgba(".concat(o.join(","),")");return i[t]=a,a}},"./packages/unity-web/src/components/List/Lists.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),i=t("./node_modules/@mdx-js/tag/dist/index.js"),a=t("./node_modules/docz/dist/index.m.js"),s=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),c=Object(s.default)("ol",{target:"e50npi0"})({name:"ulm6jk",styles:"list-style:decimal;margin-left:1.6rem;margin-top:1.6rem;li{padding-left:1.6rem;}"}),l=Object(s.default)("ul",{target:"e1udorkj0"})({name:"8mb64p",styles:"list-style:disc;margin-left:1.6rem;margin-top:1.6rem;li{padding-left:1.6rem;}"}),d=t("./packages/unity-web/src/components/Typography/index.js"),p=function(e){var n=e.children;return r.a.createElement(d.a,{type:"p",component:"li",noMargin:!0},n)},u=p;function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function g(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}p.__docgenInfo={description:"",methods:[],displayName:"ListItem"},t.d(n,"default",function(){return v});var v=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=h(this,y(n).call(this,e))).layout=null,t}var t,o,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=f(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:n},r.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"lists"}},"Lists"),r.a.createElement(i.MDXTag,{name:"p",components:n},"There are two types of lists available - ordered and unordered."),r.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"components"}},"Components"),r.a.createElement(i.MDXTag,{name:"pre",components:n},r.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { OrderedList, UnorderedList, ListItem} from '@clarityhub/unity-web/lib/components/List';\n")),r.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"examples"}},"Examples"),r.a.createElement(i.MDXTag,{name:"h3",components:n,props:{id:"ordered-list"}},"Ordered List"),r.a.createElement(a.e,{__position:0,__code:"<OrderedList>\n  <ListItem>First item</ListItem>\n  <ListItem>Second item</ListItem>\n  <ListItem>Third item</ListItem>\n</OrderedList>",__scope:{props:this?this.props:t,ListItem:u,OrderedList:c,UnorderedList:l}},r.a.createElement(c,null,r.a.createElement(u,null,"First item"),r.a.createElement(u,null,"Second item"),r.a.createElement(u,null,"Third item"))),r.a.createElement(i.MDXTag,{name:"h3",components:n,props:{id:"unordered-list"}},"Unordered list"),r.a.createElement(a.e,{__position:1,__code:"<UnorderedList>\n  <ListItem>First item</ListItem>\n  <ListItem>Second item</ListItem>\n  <ListItem>Third item</ListItem>\n</UnorderedList>",__scope:{props:this?this.props:t,ListItem:u,OrderedList:c,UnorderedList:l}},r.a.createElement(l,null,r.a.createElement(u,null,"First item"),r.a.createElement(u,null,"Second item"),r.a.createElement(u,null,"Third item"))),r.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(i.MDXTag,{name:"p",components:n},"This component does not take any props besides ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"children"),"."))}}])&&g(t.prototype,o),s&&g(t,s),n}();v.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/Typography/Typography.js":function(e,n,t){"use strict";var o=t("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),r=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),i=t("./packages/unity-core/lib/colors.js"),a=t.n(i),s=t("./packages/unity-core/lib/typography.js"),c=t("./packages/unity-web/src/theme/fonts.js");function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=function(e){var n=e.type,t=void 0===n?"text":n,i=e.variant,d=e.color,p=void 0===d?"dark":d,u=e.children,m=e.component,f=void 0===m?"p":m,g=e.noMargin,h=void 0!==g&&g,y=e.noPadding,b=void 0!==y&&y,v=e.inline,j=void 0!==v&&v,x=e.css,k=e.center,O=void 0!==k&&k,w=l(e,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),_=[Boolean(t)?c.a[t]:{},Boolean(i)?s.variants[i]:{},Boolean(p)?{color:a.a[p].default}:{},Boolean(b)?"\n    padding: 0;\n":{},Boolean(h)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(x)?x:{},Boolean(j)?{display:"inline-block"}:{},Boolean(O)?{textAlign:"center"}:{}];if("string"===typeof f){var z=f;"p"===f&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(t)&&(z=t);var L=o.default[z](_,"");return Object(r.jsx)(L,w,u)}var E=f;return Object(r.jsx)(E,Object.assign({},w,{css:_}),u)};n.a=d,d.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(types)"},required:!1,description:""},color:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(colors)"},required:!1,description:""},component:{defaultValue:{value:"'p'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},noMargin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noPadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},css:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"enum",computed:!0,value:"Object.keys(variants)"},required:!1,description:""}}}},"./packages/unity-web/src/components/Typography/index.js":function(e,n,t){"use strict";var o=t("./packages/unity-web/src/components/Typography/Typography.js");t.d(n,"a",function(){return o.a})},"./packages/unity-web/src/theme/fonts.js":function(e,n,t){"use strict";t.d(n,"a",function(){return s});var o=t("./packages/unity-core/lib/typography.js"),r=t("./packages/unity-core/lib/colors.js"),i=t.n(r),a=t("./packages/unity-core/lib/utilities/color.js"),s={h1:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h1.rem,"rem;\n        line-height: ").concat(o.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h2.rem,"rem;\n        line-height: ").concat(o.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h3.rem,"rem;\n        line-height: ").concat(o.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h4.rem,"rem;\n        line-height: ").concat(o.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h5.rem,"rem;\n        line-height: ").concat(o.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h6.rem,"rem;\n        line-height: ").concat(o.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(o.variants.readable.string,"\n\n        font-size: ").concat(o.sizes.p.rem,"rem;\n        line-height: ").concat(o.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(o.variants.text.string,"\n\n        font-size: ").concat(o.sizes.text.rem,"rem;\n        line-height: ").concat(o.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(o.variants.text.string,"\n\n        font-size: ").concat(o.sizes.text2.rem,"rem;\n        line-height: ").concat(o.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(o.variants.text.string,"\n\n        color: ").concat(i.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(o.sizes.subtext.rem,"rem;\n        line-height: ").concat(o.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(i.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(i.a.primary.default,";\n        color: ").concat(i.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(i.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(i.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(a.darken)(i.a.primary.default,.2),";\n            color: ").concat(Object(a.darken)(i.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(i.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(i.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(i.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")}}}]);
//# sourceMappingURL=packages-unity-web-src-components-list-lists.6bb55019f71b3ded449a.js.map