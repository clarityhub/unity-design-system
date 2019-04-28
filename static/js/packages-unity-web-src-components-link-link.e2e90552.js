(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./packages/unity-web/src/components/Link/Link.js":function(n,e,t){"use strict";t.d(e,"a",function(){return s});var o=t("./node_modules/react/index.js"),r=t.n(o),i=t("./packages/unity-web/src/components/Typography/index.js");function a(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=function(n){var e=n.component,t=void 0===e?"a":e,o=n.children,c=n.variant,s=void 0===c?"text":c,p=n.color,l=void 0===p?"primary":p,u=n.type,m=a(n,["component","children","variant","color","type"]);return r.a.createElement(i.a,Object.assign({type:u||"link",variant:s,color:l,component:t},m),o)},s=function(){return r.a.createElement("div",null)};e.b=c,s.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"LinkPropTypes",props:{children:{type:{name:"node"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},component:{type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"string"},required:!1,description:""}}},c.__docgenInfo={description:"",methods:[],displayName:"Link",props:{component:{defaultValue:{value:"'a'",computed:!1},required:!1},variant:{defaultValue:{value:"'text'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./packages/unity-web/src/components/Link/Link.mdx":function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return y});var o=t("./node_modules/react/index.js"),r=t.n(o),i=t("./node_modules/@mdx-js/tag/dist/index.js"),a=t("./node_modules/docz/dist/index.m.js"),c=t("./packages/unity-web/src/components/Link/Link.js"),s=t("./packages/unity-web/src/components/Link/LinkButton.js");function p(n){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function l(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function u(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function m(n,e){return!e||"object"!==p(e)&&"function"!==typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function d(n){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function f(n,e){return(f=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var y=function(n){function e(n){var t;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=m(this,d(e).call(this,n))).layout=null,t}var t,o,p;return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&f(n,e)}(e,r.a.Component),t=e,(o=[{key:"render",value:function(){var n=this.props,e=n.components,t=l(n,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:e},r.a.createElement(i.MDXTag,{name:"h1",components:e,props:{id:"link"}},"Link"),r.a.createElement(i.MDXTag,{name:"h2",components:e,props:{id:"link--component"}},"<Link /",">"," component"),r.a.createElement(i.MDXTag,{name:"pre",components:e},r.a.createElement(i.MDXTag,{name:"code",components:e,parentName:"pre",props:{className:"language-js"}},"import Link, { LinkButton } from '@clarityhub/unity-web/lib/components/Link';\n")),r.a.createElement(i.MDXTag,{name:"h2",components:e,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(a.f,{of:c.a}),r.a.createElement(i.MDXTag,{name:"h2",components:e,props:{id:"examples"}},"Examples"),r.a.createElement(a.e,{__position:1,__code:'<Link href="#">Link</Link>\n<Link type="blockLink" href="#">\n  Block Link\n</Link>\n<Link href="#" component="div">\n  Custom Component\n</Link>',__scope:{props:this?this.props:t,Link:c.b,LinkPropTypes:c.a,LinkButton:s.a}},r.a.createElement(c.b,{href:"#"},"Link"),r.a.createElement(c.b,{type:"blockLink",href:"#"},"Block Link"),r.a.createElement(c.b,{href:"#",component:"div"},"Custom Component")),r.a.createElement(i.MDXTag,{name:"h2",components:e,props:{id:"linkbutton-examples"}},"LinkButton Examples"),r.a.createElement(i.MDXTag,{name:"p",components:e},"You can use a Link as a Button by using the ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"LinkButton")," component and passing\nthrough the ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"history")," prop."),r.a.createElement(i.MDXTag,{name:"pre",components:e},r.a.createElement(i.MDXTag,{name:"code",components:e,parentName:"pre",props:{className:"language-jsx"}},"import React from 'react';\nimport { withRouter } from 'react-router';\nimport { LinkButton } from '@clarityhub/unity-web/lib/components/Link';\n\nconst Wrapper = ({ history }) => (\n    <LinkButton type=\"danger\" history={history} to=\"my/href\">\n        Danger\n    </LinkButton>\n);\n\nexport default withRouter(Wrapper);\n")),r.a.createElement(a.e,{__position:2,__code:'<LinkButton history={{ push: function() {} }} to="#">\n  Link\n</LinkButton>\n<LinkButton type="danger" history={{ push: function() {} }} to="#">\n  Link\n</LinkButton>',__scope:{props:this?this.props:t,Link:c.b,LinkPropTypes:c.a,LinkButton:s.a}},r.a.createElement(s.a,{history:{push:function(){}},to:"#"},"Link"),r.a.createElement(s.a,{type:"danger",history:{push:function(){}},to:"#"},"Link")))}}])&&u(t.prototype,o),p&&u(t,p),e}();y.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/Link/LinkButton.js":function(n,e,t){"use strict";var o=t("./node_modules/react/index.js"),r=t.n(o),i=t("./packages/unity-web/src/components/Buttons/Button.js");function a(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=function(n){var e=n.history,t=n.to,o=n.onClick,c=a(n,["history","to","onClick"]);return r.a.createElement(i.b,Object.assign({},c,{onClick:function(n){o&&o(n),e.push(t)}}))};e.a=c,c.__docgenInfo={description:"",methods:[],displayName:"LinkButton",props:{children:{type:{name:"node"},required:!0,description:""},history:{type:{name:"shape",value:{push:{name:"func",required:!0}}},required:!0,description:""},to:{type:{name:"string"},required:!0,description:""}}}},"./packages/unity-web/src/components/Typography/Typography.js":function(n,e,t){"use strict";var o=t("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),r=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),i=t("./packages/unity-core/lib/colors.js"),a=t.n(i),c=t("./packages/unity-core/lib/typography.js"),s=t("./packages/unity-core/lib/utilities/color.js"),p={h1:"\n        ".concat(c.variants.heading.string,"\n\n        font-size: ").concat(c.sizes.h1.rem,"rem;\n        line-height: ").concat(c.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(c.variants.heading.string,"\n\n        font-size: ").concat(c.sizes.h2.rem,"rem;\n        line-height: ").concat(c.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(c.variants.heading.string,"\n\n        font-size: ").concat(c.sizes.h3.rem,"rem;\n        line-height: ").concat(c.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(c.variants.secondary.string,"\n\n        font-size: ").concat(c.sizes.h4.rem,"rem;\n        line-height: ").concat(c.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(c.variants.secondary.string,"\n\n        font-size: ").concat(c.sizes.h5.rem,"rem;\n        line-height: ").concat(c.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(c.variants.secondary.string,"\n\n        font-size: ").concat(c.sizes.h6.rem,"rem;\n        line-height: ").concat(c.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(c.variants.readable.string,"\n\n        font-size: ").concat(c.sizes.p.rem,"rem;\n        line-height: ").concat(c.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(c.variants.text.string,"\n\n        font-size: ").concat(c.sizes.text.rem,"rem;\n        line-height: ").concat(c.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(c.variants.text.string,"\n\n        font-size: ").concat(c.sizes.text2.rem,"rem;\n        line-height: ").concat(c.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(c.variants.text.string,"\n\n        color: ").concat(a.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(c.sizes.subtext.rem,"rem;\n        line-height: ").concat(c.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(a.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(a.a.primary.default,";\n        color: ").concat(a.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(a.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(a.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(s.darken)(a.a.primary.default,.2),";\n            color: ").concat(Object(s.darken)(a.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(a.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(a.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(a.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")};function l(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var u=function(n){var e=n.type,t=void 0===e?"text":e,i=n.variant,s=n.color,u=void 0===s?"dark":s,m=n.children,d=n.component,f=void 0===d?"p":d,y=n.noMargin,h=void 0!==y&&y,g=n.noPadding,b=void 0!==g&&g,k=n.inline,v=void 0!==k&&k,j=n.css,x=n.center,L=void 0!==x&&x,O=l(n,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),w=[Boolean(t)?p[t]:{},Boolean(i)?c.variants[i]:{},Boolean(u)?{color:a.a[u].default}:{},Boolean(b)?"\n    padding: 0;\n":{},Boolean(h)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(j)?j:{},Boolean(v)?{display:"inline-block"}:{},Boolean(L)?{textAlign:"center"}:{}];if("string"===typeof f){var _=f;"p"===f&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(t)&&(_=t);var z=o.default[_](w,"");return Object(r.jsx)(z,O,m)}var E=f;return Object(r.jsx)(E,Object.assign({},O,{css:w}),m)};e.a=u;u.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(types)"},required:!1,description:""},color:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(colors)"},required:!1,description:""},component:{defaultValue:{value:"'p'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},noMargin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noPadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},css:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"enum",computed:!0,value:"Object.keys(variants)"},required:!1,description:""}}}},"./packages/unity-web/src/components/Typography/index.js":function(n,e,t){"use strict";var o=t("./packages/unity-web/src/components/Typography/Typography.js");t.d(e,"a",function(){return o.a})}}]);
//# sourceMappingURL=packages-unity-web-src-components-link-link.e0bce119375f652fbe57.js.map