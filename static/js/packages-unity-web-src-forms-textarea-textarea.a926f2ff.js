(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"./packages/unity-core/lib/borders.js":function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={borderRadius:{default:4,rem:(0,((a=r("./packages/unity-core/lib/utilities/rem.js"))&&a.__esModule?a:{default:a}).default)(4)}};t.default=n},"./packages/unity-core/lib/colors.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var a={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},n={primary:{background:a.primary,color:a.white},danger:{background:a.danger,color:a.white},success:{background:a.success,color:a.white},brand:{background:a.brand,color:a.white}};t.types=n;var o=a;t.default=o},"./packages/unity-core/lib/utilities/color.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.opacify=t.desaturate=t.saturate=t.lighten=t.darken=void 0;var a,n=(a=r("./node_modules/color/index.js"))&&a.__esModule?a:{default:a};var o={},l=function(e,t,r){var a="".concat(e,":").concat(t,":").concat(r);if(o[a])return o[a];var l=(0,n.default)(t)[e](r).rgb().string();return o[a]=l,l};t.darken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return l("darken",e,t)};t.lighten=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return l("lighten",e,t)};t.saturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return l("saturate",e,t)};t.desaturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return l("desaturate",e,t)};t.opacify=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,r="opacify:".concat(e,":").concat(t);if(o[r])return o[r];var a=(0,n.default)(e).rgb().array();a.push(t);var l="rgba(".concat(a.join(","),")");return o[r]=l,l}},"./packages/unity-web/src/forms/Input/index.js":function(e,t,r){"use strict";var a=r("./packages/unity-web/src/forms/Input/Input.js");r.d(t,"a",function(){return a.b})},"./packages/unity-web/src/forms/Textarea/Textarea.js":function(e,t,r){"use strict";var a=r("./node_modules/react/index.js"),n=r.n(a),o=r("./packages/unity-web/src/forms/Input/index.js");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var c=function(e){var t=l({},e);return n.a.createElement(o.a,Object.assign({},t,{inputType:"textarea",as:"textarea"}))};t.a=c,c.__docgenInfo={description:"",methods:[],displayName:"Textarea"}},"./packages/unity-web/src/forms/Textarea/Textarea.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return b});var a=r("./node_modules/react/index.js"),n=r.n(a),o=r("./node_modules/@mdx-js/tag/dist/index.js"),l=r("./node_modules/docz/dist/index.m.js"),c=r("./packages/unity-web/src/forms/Textarea/Textarea.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function s(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=d(this,p(t).call(this,e))).layout=null,r}var r,a,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,n.a.Component),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components,r=i(e,["components"]);return n.a.createElement(o.MDXTag,{name:"wrapper",components:t},n.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"textarea"}},"Textarea"),n.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"textarea--component"}},"<Textarea /",">"," component"),n.a.createElement(o.MDXTag,{name:"pre",components:t},n.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Textarea from '@clarityhub/unity-web/lib/forms/Textarea';\n")),n.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),n.a.createElement(l.f,{of:c.a}),n.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),n.a.createElement(l.e,{__position:1,__code:'<Textarea value="Hello world" />\n<br />\n<br />\n<Textarea placeholder="Hello world placeholder" />\n<br />\n<br />\n<Textarea placeholder="Hello world placeholder" error />\n<br />\n<br />\n<Textarea placeholder="Hello world placeholder" disabled />',__scope:{props:this?this.props:r,Textarea:c.a}},n.a.createElement(c.a,{value:"Hello world"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(c.a,{placeholder:"Hello world placeholder"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(c.a,{placeholder:"Hello world placeholder",error:!0}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(c.a,{placeholder:"Hello world placeholder",disabled:!0})))}}])&&s(r.prototype,a),u&&s(r,u),t}();b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-forms-textarea-textarea.1440fd586bf40659facc.js.map