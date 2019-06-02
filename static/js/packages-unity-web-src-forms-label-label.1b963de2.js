(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"./packages/unity-core/lib/colors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},highlight:{default:"rgba(0, 123, 255, .25)"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}}},"./packages/unity-web/src/forms/Label/Label.js":function(e,t,n){"use strict";var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=n("./packages/unity-core/lib/typography.js"),l=n("./packages/unity-core/lib/colors.js"),s=n.n(l),c=Object(r.default)("label",{target:"e25mnj60"})("color:",s.a.darkGray.default,";cursor:text;display:block;flex:1;font-size:0.9rem;line-height:1.2rem;left:0;padding:0 0.4rem;position:absolute;text-align:left;top:0;transition:0.2s ease-out;",a.variants.text.string," ",function(e){switch(e.variant){case"white":return"\n                color: ".concat(s.a.white.default,";\n                ");default:return""}}," ",function(e){return e.error&&Object(o.css)("color ",s.a.danger.default,";")},"");t.a=c},"./packages/unity-web/src/forms/Label/Label.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),s=n("./packages/unity-web/src/forms/Label/Label.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,f(t).call(this,e))).layout=null,n}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=i(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"label"}},"Label"),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"label--component"}},"<Label /",">"," component"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Label from '@clarityhub/unity-web/lib/forms/Label';\n")),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),o.a.createElement(l.f,{of:s.a}),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),o.a.createElement(l.e,{__position:1,__code:"<Label>Hello World</Label>\n<br />\n<br />\n<Label error>Hello World</Label>",__scope:{props:this?this.props:n,Label:s.a}},o.a.createElement(s.a,null,"Hello World"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(s.a,{error:!0},"Hello World")))}}])&&u(n.prototype,r),c&&u(n,c),t}();b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-forms-label-label.f850e0f8c796c75f4d64.js.map