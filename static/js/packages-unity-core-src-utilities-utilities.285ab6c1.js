(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./packages/unity-core/private/Swatch.js":function(e,t,r){"use strict";var n=r("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");r("./node_modules/@emotion/core/dist/core.browser.esm.js");var a={name:"pwt7cn",styles:"width:auto;padding:20px;"},o=Object(n.default)("div",{target:"e1fc96cr0"})("background-color:",(function(e){return e.color}),";height:50px;width:50px;",(function(e){return e.wide&&a}),"");t.a=o},"./packages/unity-core/src/colors.js":function(e,t,r){"use strict";var n={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}};t.a=n},"./packages/unity-core/src/utilities/utilities.mdx":function(e,t,r){"use strict";r.r(t);var n=r("./node_modules/react/index.js"),a=r.n(n),o=r("./node_modules/@mdx-js/tag/dist/index.js"),l=r("./node_modules/docz/dist/index.m.js"),c=r("./packages/unity-core/src/colors.js"),u=r("./node_modules/color/index.js"),i=r.n(u),d={},s=function(e,t,r){var n="".concat(e,":").concat(t,":").concat(r);if(d[n])return d[n];var a=i()(t)[e](r).rgb().string();return d[n]=a,a},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return s("darken",e,t)},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return s("lighten",e,t)},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return s("desaturate",e,t)},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,r="opacify:".concat(e,":").concat(t);if(d[r])return d[r];var n=i()(e).rgb().array();n.push(t);var a="rgba(".concat(n.join(","),")");return d[r]=a,a},h=r("./packages/unity-core/private/Swatch.js");function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=_(e);if(t){var a=_(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return j(this,r)}}function j(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"default",(function(){return k}));var k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(i,e);var t,r,n,u=w(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=u.call(this,e)).layout=null,t}return t=i,(r=[{key:"render",value:function(){var e=this.props,t=e.components,r=g(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:t},a.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"utilities"}},"Utilities"),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"color-utilities"}},"Color Utilities"),a.a.createElement(o.MDXTag,{name:"p",components:t},"The color utilities provide functions to manipulate colors."),a.a.createElement(o.MDXTag,{name:"pre",components:t},a.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { darken, lighten, desaturate, opacify } from '@clarityhub/unity-core/lib/utilities/color';\n")),a.a.createElement(o.MDXTag,{name:"p",components:t},"Color transformations are cached to help improve speed when used in components."),a.a.createElement(l.e,{__position:0,__code:"<table>\n  <tbody>\n    <tr>\n      <td>\n        <Swatch color={colors.primary.default} />\n      </td>\n      <td>\n        <pre>{'{colors.primary.default}'}</pre>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <Swatch color={darken(colors.primary.default)} />\n      </td>\n      <td>\n        <pre>{'{darken(colors.primary.default)}'}</pre>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <Swatch color={lighten(colors.primary.default)} />\n      </td>\n      <td>\n        <pre>{'{lighten(colors.primary.default)}'}</pre>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <Swatch color={desaturate(colors.primary.default)} />\n      </td>\n      <td>\n        <pre>{'{desaturate(colors.primary.default)}'}</pre>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <Swatch color={opacify(colors.primary.default)} />\n      </td>\n      <td>\n        <pre>{'{opacify(colors.primary.default)}'}</pre>\n      </td>\n    </tr>\n  </tbody>\n</table>",__scope:{props:this?this.props:r,colors:c.a,lighten:f,darken:p,desaturate:m,opacify:y,Swatch:h.a}},a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(h.a,{color:c.a.primary.default})),a.a.createElement("td",null,a.a.createElement("pre",null,"{colors.primary.default}"))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(h.a,{color:p(c.a.primary.default)})),a.a.createElement("td",null,a.a.createElement("pre",null,"{darken(colors.primary.default)}"))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(h.a,{color:f(c.a.primary.default)})),a.a.createElement("td",null,a.a.createElement("pre",null,"{lighten(colors.primary.default)}"))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(h.a,{color:m(c.a.primary.default)})),a.a.createElement("td",null,a.a.createElement("pre",null,"{desaturate(colors.primary.default)}"))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(h.a,{color:y(c.a.primary.default)})),a.a.createElement("td",null,a.a.createElement("pre",null,"{opacify(colors.primary.default)}")))))))}}])&&E(t.prototype,r),n&&E(t,n),i}(a.a.Component);k.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-core-src-utilities-utilities.26ac8c5cdd5aa6e0d6b9.js.map