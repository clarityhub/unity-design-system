(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./packages/unity-core/lib/borders.js":function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={borderRadius:{default:4,rem:(0,((n=r("./packages/unity-core/lib/utilities/rem.js"))&&n.__esModule?n:{default:n}).default)(4)}};t.default=o},"./packages/unity-core/lib/colors.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var n={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},o={primary:{background:n.primary,color:n.white},danger:{background:n.danger,color:n.white},success:{background:n.success,color:n.white},brand:{background:n.brand,color:n.white}};t.types=o;var a=n;t.default=a},"./packages/unity-core/lib/utilities/color.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.opacify=t.desaturate=t.saturate=t.lighten=t.darken=void 0;var n,o=(n=r("./node_modules/color/index.js"))&&n.__esModule?n:{default:n};var a={},i=function(e,t,r){var n="".concat(e,":").concat(t,":").concat(r);if(a[n])return a[n];var i=(0,o.default)(t)[e](r).rgb().string();return a[n]=i,i};t.darken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("darken",e,t)};t.lighten=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("lighten",e,t)};t.saturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("saturate",e,t)};t.desaturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("desaturate",e,t)};t.opacify=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,r="opacify:".concat(e,":").concat(t);if(a[r])return a[r];var n=(0,o.default)(e).rgb().array();n.push(t);var i="rgba(".concat(n.join(","),")");return a[r]=i,i}},"./packages/unity-core/lib/utilities/noop.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){}},"./packages/unity-core/lib/utilities/rem.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return e/t}},"./packages/unity-web/src/forms/Selection/Selection.js":function(e,t,r){"use strict";var n=r("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=r("./node_modules/react/index.js"),a=r.n(o),i=r("./node_modules/@emotion/core/dist/core.browser.esm.js"),u=r("./packages/unity-core/lib/borders.js"),c=r.n(u),l=r("./packages/unity-core/lib/colors.js"),s=r.n(l),d=r("./packages/unity-core/lib/utilities/color.js"),f=r("./packages/unity-core/lib/utilities/noop.js"),b=r.n(f);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),e}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=x(e);if(t){var o=x(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}function O(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n              border-radius: ",";\n            "]);return P=function(){return e},e}var C=function(e){switch(e){case"checkbox":return"".concat(c.a.borderRadius.rem,"rem");case"radio":default:return"50%"}},F=Object(n.default)("button",{target:"egabn5d0"})({name:"vdmqt7",styles:"background:transparent;border:0;box-sizing:border-box;cursor:pointer;display:flex;position:relative;label{cursor:pointer;display:inline-block;position:relative !important;vertical-align:middle;}"}),S=Object(n.default)("input",{target:"egabn5d1"})({name:"zid4ww",styles:"height:1px;position:absolute;left:-9999px;width:1px;"}),R=Object(n.default)("div",{target:"egabn5d2"})("border:1px solid ",s.a.gray.default,";background-color:transparent;box-sizing:border-box;display:inline-block;height:",1.4,"rem;position:relative;vertical-align:middle;width:",1.4,"rem;",(function(e){var t=e.type;return Object(i.css)("border-radius:",C(t),";")})," ",(function(e){return e.disabled&&Object(i.css)("background-color:",s.a.muted.default,";")})," ",(function(e){switch(e.variant){case"white":return"\n                border: 1px solid ".concat(s.a.white.default,";\n                background-color: ").concat(Object(d.opacify)(s.a.white.default,.1),";\n            ");default:return"\n            "}})," ",(function(e){var t=e.selected,r=e.disabled,n=e.type;return t&&Object(i.css)("&:after{content:'';background-color:",r?Object(d.desaturate)(Object(d.lighten)(s.a.primary.default,.3),.6):s.a.primary.default,";border:1px solid transparent;box-sizing:border-box;margin:",.25,"rem;height:",1.4-.5,"rem;position:absolute;top:-1px;left:-1px;width:",1.4-.5,"rem;",Object(i.css)(P(),C(n)),"}")}),"");t.a=function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"radio";return t=e=function(e){m(n,e);var t=w(n);function n(){var e;g(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return _(k(e=t.call.apply(t,[this].concat(o))),"onChange",(function(t){(0,e.props.onChange)(t,e.input)})),e}return h(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.selected,i=void 0!==o&&o,u=t.disabled,c=void 0!==u&&u,l=t.variant,s=y(t,["children","selected","disabled","variant"]);return a.a.createElement(F,{onClick:this.onChange,selected:i,role:"option","aria-checked":Boolean(i).toString(),type:"button"},a.a.createElement(S,Object.assign({ref:function(t){return e.input=t},type:"option",selected:i,disabled:c,onChange:this.onChange,tabIndex:"-1"},s)),a.a.createElement(R,{selected:i,disabled:c,type:r,variant:l}),n)}}]),n}(o.Component),_(e,"defaultProps",{selected:!1,disabled:!1,onChange:b.a}),t}}}]);
//# sourceMappingURL=packages-unity-web-src-forms-checkbox-checkbox~packages-unity-web-src-forms-index~packages-unity-web~38ebbaec.26ac8c5cdd5aa6e0d6b9.js.map