(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./packages/unity-core/lib/spacing.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={xsmall:.5,small:1,medium:2,large:4,xlarge:8}},"./packages/unity-web/src/components/ButtonSet/ButtonSet.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var o=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),r=t("./packages/unity-web/src/components/Button/Button.js"),i=t("./packages/unity-web/src/scaffolding/Space/Space.js"),c=Object(o.default)(i.b,{target:"e869cgw0"})((function(e){return e.spread&&Object(a.css)("display:flex;align-items:center;justify-content:flex-end;",r.a,"{&:not(:first-of-type){margin-left:auto!important;}}")}),""),s=function(){return React.createElement("div",null)};c.propTypes=s.propTypes,n.b=c,s.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"ButtonSetPropTypes",props:{spread:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/ButtonSet/ButtonSets.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return b}));var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),c=t("./packages/unity-web/src/components/Button/Button.js"),s=t("./packages/unity-web/src/components/ButtonSet/ButtonSet.js"),l=t("./packages/unity-web/src/components/Typography/Typography.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function m(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function y(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=g(e);if(n){var a=g(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return f(this,t)}}function f(e,n){return!n||"object"!==u(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(f,e);var n,t,o,u=y(f);function f(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(n=u.call(this,e)).layout=null,n}return n=f,(t=[{key:"render",value:function(){var e=this.props,n=e.components,t=p(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"buttonsets"}},"ButtonSets"),a.a.createElement(r.MDXTag,{name:"p",components:n},"A ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ButtonSet")," is used to group a set of action buttons together\nand provide the appropriate spacing between them to make each button distinct, but\nstill visually grouped together."),a.a.createElement(r.MDXTag,{name:"p",components:n},a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ButtonSet")," is an extension of the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Space")," scaffolding component. You can use the\n",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Space")," props on ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ButtonSet"),"."),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import ButtonSet from '@clarityhub/unity-web/lib/components/ButtonSet';\n")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"wrapping-buttons"}},"Wrapping Buttons"),a.a.createElement(i.e,{__position:0,__code:'<Typography>Use Profile</Typography>\n<ButtonSet>\n  <Button text>Back</Button>\n  <Button type="primary">Edit</Button>\n  <Button outline type="danger">\n    Delete\n  </Button>\n</ButtonSet>\n<br />\n<br />\n<Typography>Let\'s create a new user!</Typography>\n<ButtonSet>\n  <Button>Cancel</Button>\n  <Button type="primary">Create</Button>\n</ButtonSet>\n<br />\n<br />\n<Typography>Are you sure you want to delete this user?</Typography>\n<ButtonSet>\n  <Button>Cancel</Button>\n  <Button type="danger">Delete</Button>\n</ButtonSet>',__scope:{props:this?this.props:t,Button:c.b,ButtonSet:s.b,ButtonSetPropTypes:s.a,Typography:l.a}},a.a.createElement(l.a,null,"Use Profile"),a.a.createElement(s.b,null,a.a.createElement(c.b,{text:!0},"Back"),a.a.createElement(c.b,{type:"primary"},"Edit"),a.a.createElement(c.b,{outline:!0,type:"danger"},"Delete")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(l.a,null,"Let's create a new user!"),a.a.createElement(s.b,null,a.a.createElement(c.b,null,"Cancel"),a.a.createElement(c.b,{type:"primary"},"Create")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(l.a,null,"Are you sure you want to delete this user?"),a.a.createElement(s.b,null,a.a.createElement(c.b,null,"Cancel"),a.a.createElement(c.b,{type:"danger"},"Delete"))),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"spreading-buttons"}},"Spreading Buttons"),a.a.createElement(i.e,{__position:1,__code:'<ButtonSet spread>\n  <Button text>Back</Button>\n  <Button type="primary">Edit</Button>\n  <Button outline type="danger">\n    Delete\n  </Button>\n</ButtonSet>\n<br />\n<br />\n<ButtonSet spread>\n  <Button>Cancel</Button>\n  <Button type="primary">Create</Button>\n</ButtonSet>\n<br />\n<br />\n<ButtonSet spread>\n  <Button>Cancel</Button>\n  <Button type="danger">Delete</Button>\n</ButtonSet>',__scope:{props:this?this.props:t,Button:c.b,ButtonSet:s.b,ButtonSetPropTypes:s.a,Typography:l.a}},a.a.createElement(s.b,{spread:!0},a.a.createElement(c.b,{text:!0},"Back"),a.a.createElement(c.b,{type:"primary"},"Edit"),a.a.createElement(c.b,{outline:!0,type:"danger"},"Delete")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(s.b,{spread:!0},a.a.createElement(c.b,null,"Cancel"),a.a.createElement(c.b,{type:"primary"},"Create")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(s.b,{spread:!0},a.a.createElement(c.b,null,"Cancel"),a.a.createElement(c.b,{type:"danger"},"Delete"))),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(i.f,{of:s.a}))}}])&&m(n.prototype,t),o&&m(n,o),f}(a.a.Component);b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/Typography/Typography.js":function(e,n,t){"use strict";var o=t("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),a=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),r=t("./packages/unity-core/lib/colors.js"),i=t.n(r),c=t("./packages/unity-core/lib/typography.js"),s=t("./packages/unity-web/src/theme/fonts.js");function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=function(e){var n=e.type,t=void 0===n?"text":n,r=e.variant,u=e.color,p=void 0===u?"dark":u,m=e.children,d=e.component,y=void 0===d?"p":d,f=e.noMargin,g=void 0!==f&&f,b=e.noPadding,h=void 0!==b&&b,v=e.inline,B=void 0!==v&&v,j=e.css,E=e.center,x=void 0!==E&&E,w=l(e,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),S=[Boolean(t)?s.a[t]:{},Boolean(r)?c.variants[r]:{},Boolean(p)?{color:i.a[p].default}:{},Boolean(h)?"\n    padding: 0;\n":{},Boolean(g)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(j)?j:{},Boolean(B)?{display:"inline-block"}:{},Boolean(x)?{textAlign:"center"}:{}];if("string"===typeof y){var k=y;"p"===y&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(t)&&(k=t);var O=o.default[k](S,"");return Object(a.jsx)(O,w,m)}var z=y;return Object(a.jsx)(z,Object.assign({},w,{css:S}),m)};n.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(types)"},required:!1,description:""},color:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(colors)"},required:!1,description:""},component:{defaultValue:{value:"'p'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},noMargin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noPadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},css:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},variant:{type:{name:"enum",computed:!0,value:"Object.keys(variants)"},required:!1,description:""}}}},"./packages/unity-web/src/scaffolding/Space/Space.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var o=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=t("./node_modules/react/index.js"),r=t.n(a),i=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),c=t("./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"),s=t("./packages/unity-core/lib/spacing.js"),l=t.n(s),u=Object(o.default)("div",{shouldForwardProp:function(e){return Object(c.default)(e)&&!["direction","size"].includes(e)},target:"e66oixl0"})((function(e){var n=e.direction,t=void 0===n?"horizontal":n,o=e.size,a=function(e){return"".concat(l.a[e],"rem")}(void 0===o?"xsmall":o);return"horizontal"===t?Object(i.css)("> * + *{margin-left:",a,"}"):Object(i.css)("> * + *{margin-top:",a,"}")}),""),p=function(){return r.a.createElement("div",null)};u.propTypes=p.propTypes,u.defaultProps=p.defaultProps,n.b=u,p.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"SpaceProps",props:{direction:{type:{name:"enum",value:[{value:"'vertical'",computed:!1},{value:"'horizontal'",computed:!1}]},required:!1,description:""},gap:{type:{name:"enum",value:[{value:"'xsmall'",computed:!1},{value:"'small'",computed:!1},{value:"'large'",computed:!1},{value:"'xlarge'",computed:!1},{value:"'medium'",computed:!1}]},required:!1,description:""}}}},"./packages/unity-web/src/theme/fonts.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var o=t("./packages/unity-core/lib/typography.js"),a=t("./packages/unity-core/lib/colors.js"),r=t.n(a),i=t("./packages/unity-core/lib/utilities/color.js"),c={h1:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h1.rem,"rem;\n        line-height: ").concat(o.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h2.rem,"rem;\n        line-height: ").concat(o.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h3.rem,"rem;\n        line-height: ").concat(o.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h4.rem,"rem;\n        line-height: ").concat(o.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h5.rem,"rem;\n        line-height: ").concat(o.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h6.rem,"rem;\n        line-height: ").concat(o.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(o.variants.readable.string,"\n\n        font-size: ").concat(o.sizes.p.rem,"rem;\n        line-height: ").concat(o.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(o.variants.text.string,"\n\n        font-size: ").concat(o.sizes.text.rem,"rem;\n        line-height: ").concat(o.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(o.variants.text.string,"\n\n        font-size: ").concat(o.sizes.text2.rem,"rem;\n        line-height: ").concat(o.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(o.variants.text.string,"\n\n        color: ").concat(r.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(o.sizes.subtext.rem,"rem;\n        line-height: ").concat(o.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(r.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(r.a.primary.default,";\n        color: ").concat(r.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(r.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(r.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(i.darken)(r.a.primary.default,.2),";\n            color: ").concat(Object(i.darken)(r.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(r.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(r.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(r.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")}}}]);
//# sourceMappingURL=packages-unity-web-src-components-button-set-button-sets.26ac8c5cdd5aa6e0d6b9.js.map