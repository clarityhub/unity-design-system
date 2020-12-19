(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"./packages/unity-core/lib/borders.js":function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={borderRadius:{default:4,rem:(0,((r=n("./packages/unity-core/lib/utilities/rem.js"))&&r.__esModule?r:{default:r}).default)(4)}};t.default=a},"./packages/unity-core/lib/colors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var r={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},a={primary:{background:r.primary,color:r.white},danger:{background:r.danger,color:r.white},success:{background:r.success,color:r.white},brand:{background:r.brand,color:r.white}};t.types=a;var o=r;t.default=o},"./packages/unity-core/lib/typography.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sizes=t.variants=t.fontFamilies=void 0;var r,a=(r=n("./packages/unity-core/lib/utilities/rem.js"))&&r.__esModule?r:{default:r};t.fontFamilies={"Crimson Text":"300,400,600,700",Roboto:"400,800","Open Sans":"300,400,600,700"};t.variants={heading:{fontFamily:"Futura, 'Trebuchet MS', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: Futura, 'Trebuchet MS', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},secondary:{fontFamily:"'Roboto', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: 'Roboto', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},text:{fontFamily:"'Open Sans', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: 'Open Sans', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},readable:{fontFamily:'\'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontWeight:400,string:'\n\t\t\tfont-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\t\t\tfont-weight: 400;\n\t\t'},button:{fontFamily:"'Open Sans', Arial, sans-serif",fontWeight:600,letterSpacing:"0.35px",string:"\n\t\t\tfont-family: 'Open Sans', Arial, sans-serif;\n\t\t\tfont-weight: 600;\n\t\t\tletter-spacing: 0.35px;\n\t\t"}};var o={h1:{px:32,rem:(0,a.default)(32),lineHeight:{px:44.8,unitless:1.4}},h2:{px:26,rem:(0,a.default)(26),lineHeight:{px:36.4,unitless:1.4}},h3:{px:21,rem:(0,a.default)(21),lineHeight:{px:25.2,unitless:1.2}},h4:{px:19,rem:(0,a.default)(19),lineHeight:{px:22.8,unitless:1.2}},h5:{px:16,rem:(0,a.default)(16),lineHeight:{px:19.2,unitless:1.2}},h6:{px:14,rem:(0,a.default)(14),lineHeight:{px:16.8,unitless:1.2}},p:{px:21,rem:(0,a.default)(21),lineHeight:{px:33.6,unitless:1.6}},text:{px:16,rem:(0,a.default)(16),lineHeight:{px:24,unitless:1.5}},text2:{px:16,rem:(0,a.default)(16),lineHeight:{px:25.6,unitless:1.6}},subtext:{px:14.4,rem:(0,a.default)(14.4),lineHeight:{px:19.6,unitless:1.4}}};t.sizes=o},"./packages/unity-core/lib/utilities/color.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.opacify=t.desaturate=t.saturate=t.lighten=t.darken=void 0;var r,a=(r=n("./node_modules/color/index.js"))&&r.__esModule?r:{default:r};var o={},l=function(e,t,n){var r="".concat(e,":").concat(t,":").concat(n);if(o[r])return o[r];var l=(0,a.default)(t)[e](n).rgb().string();return o[r]=l,l};t.darken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return l("darken",e,t)};t.lighten=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return l("lighten",e,t)};t.saturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return l("saturate",e,t)};t.desaturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return l("desaturate",e,t)};t.opacify=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,n="opacify:".concat(e,":").concat(t);if(o[n])return o[n];var r=(0,a.default)(e).rgb().array();r.push(t);var l="rgba(".concat(r.join(","),")");return o[n]=l,l}},"./packages/unity-core/lib/utilities/rem.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return e/t}},"./packages/unity-web/src/forms/Textarea/Textarea.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),a=n.n(r),o=n("./packages/unity-web/src/forms/Input/Input.js");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=function(e){var t=l({},e);return a.a.createElement(o.b,Object.assign({},t,{inputType:"textarea",as:"textarea"}))};t.a=i,i.__docgenInfo={description:"",methods:[],displayName:"Textarea"}},"./packages/unity-web/src/forms/Textarea/Textarea.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n("./node_modules/react/index.js"),a=n.n(r),o=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),i=n("./packages/unity-web/src/forms/Textarea/Textarea.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(d,e);var t,n,r,s=p(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=s.call(this,e)).layout=null,t}return t=d,(n=[{key:"render",value:function(){var e=this.props,t=e.components,n=u(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:t},a.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"textarea"}},"Textarea"),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"textarea--component"}},"<Textarea /",">"," component"),a.a.createElement(o.MDXTag,{name:"pre",components:t},a.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Textarea from '@clarityhub/unity-web/lib/forms/Textarea';\n")),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(l.f,{of:i.a}),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),a.a.createElement(l.e,{__position:1,__code:'<Textarea value="Hello world" />\n<br />\n<br />\n<Textarea placeholder="Hello world placeholder" />\n<br />\n<br />\n<Textarea placeholder="Hello world placeholder" error />\n<br />\n<br />\n<Textarea placeholder="Hello world placeholder" disabled />',__scope:{props:this?this.props:n,Textarea:i.a}},a.a.createElement(i.a,{value:"Hello world"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.a,{placeholder:"Hello world placeholder"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.a,{placeholder:"Hello world placeholder",error:!0}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.a,{placeholder:"Hello world placeholder",disabled:!0})))}}])&&c(t.prototype,n),r&&c(t,r),d}(a.a.Component);g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-forms-textarea-textarea.26ac8c5cdd5aa6e0d6b9.js.map