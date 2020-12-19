(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"./packages/unity-core/lib/borders.js":function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={borderRadius:{default:4,rem:(0,((o=n("./packages/unity-core/lib/utilities/rem.js"))&&o.__esModule?o:{default:o}).default)(4)}};t.default=i},"./packages/unity-core/lib/colors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var o={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},i={primary:{background:o.primary,color:o.white},danger:{background:o.danger,color:o.white},success:{background:o.success,color:o.white},brand:{background:o.brand,color:o.white}};t.types=i;var r=o;t.default=r},"./packages/unity-core/lib/typography.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sizes=t.variants=t.fontFamilies=void 0;var o,i=(o=n("./packages/unity-core/lib/utilities/rem.js"))&&o.__esModule?o:{default:o};t.fontFamilies={"Crimson Text":"300,400,600,700",Roboto:"400,800","Open Sans":"300,400,600,700"};t.variants={heading:{fontFamily:"Futura, 'Trebuchet MS', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: Futura, 'Trebuchet MS', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},secondary:{fontFamily:"'Roboto', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: 'Roboto', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},text:{fontFamily:"'Open Sans', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: 'Open Sans', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},readable:{fontFamily:'\'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontWeight:400,string:'\n\t\t\tfont-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\t\t\tfont-weight: 400;\n\t\t'},button:{fontFamily:"'Open Sans', Arial, sans-serif",fontWeight:600,letterSpacing:"0.35px",string:"\n\t\t\tfont-family: 'Open Sans', Arial, sans-serif;\n\t\t\tfont-weight: 600;\n\t\t\tletter-spacing: 0.35px;\n\t\t"}};var r={h1:{px:32,rem:(0,i.default)(32),lineHeight:{px:44.8,unitless:1.4}},h2:{px:26,rem:(0,i.default)(26),lineHeight:{px:36.4,unitless:1.4}},h3:{px:21,rem:(0,i.default)(21),lineHeight:{px:25.2,unitless:1.2}},h4:{px:19,rem:(0,i.default)(19),lineHeight:{px:22.8,unitless:1.2}},h5:{px:16,rem:(0,i.default)(16),lineHeight:{px:19.2,unitless:1.2}},h6:{px:14,rem:(0,i.default)(14),lineHeight:{px:16.8,unitless:1.2}},p:{px:21,rem:(0,i.default)(21),lineHeight:{px:33.6,unitless:1.6}},text:{px:16,rem:(0,i.default)(16),lineHeight:{px:24,unitless:1.5}},text2:{px:16,rem:(0,i.default)(16),lineHeight:{px:25.6,unitless:1.6}},subtext:{px:14.4,rem:(0,i.default)(14.4),lineHeight:{px:19.6,unitless:1.4}}};t.sizes=r},"./packages/unity-core/lib/utilities/color.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.opacify=t.desaturate=t.saturate=t.lighten=t.darken=void 0;var o,i=(o=n("./node_modules/color/index.js"))&&o.__esModule?o:{default:o};var r={},a=function(e,t,n){var o="".concat(e,":").concat(t,":").concat(n);if(r[o])return r[o];var a=(0,i.default)(t)[e](n).rgb().string();return r[o]=a,a};t.darken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return a("darken",e,t)};t.lighten=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return a("lighten",e,t)};t.saturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return a("saturate",e,t)};t.desaturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return a("desaturate",e,t)};t.opacify=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,n="opacify:".concat(e,":").concat(t);if(r[n])return r[n];var o=(0,i.default)(e).rgb().array();o.push(t);var a="rgba(".concat(o.join(","),")");return r[n]=a,a}},"./packages/unity-core/lib/utilities/noop.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){}},"./packages/unity-core/lib/utilities/rem.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return e/t}},"./packages/unity-web/src/components/Notification/Notification.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),i=n.n(o),r=n("./node_modules/@mdx-js/tag/dist/index.js"),a=n("./node_modules/docz/dist/index.m.js"),s=n("./packages/unity-web/src/components/Notification/Notification.js"),l=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),u=n("./packages/unity-core/lib/utilities/noop.js"),c=n.n(u);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=g(e);if(t){var i=g(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=Object(l.default)("button",{target:"e1jp307v0"})({name:"snv6q",styles:"position:absolute;cursor:pointer;font-size:1.2rem;top:0;right:0;padding:.75rem 1.25rem;color:inherit;background-color:transparent;border:0;appearance:none;"}),_=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,o,r=y(a);function a(){var e;p(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return v(h(e=r.call.apply(r,[this].concat(n))),"state",{status:"show"}),v(h(e),"onDismiss",(function(t){t.preventDefault(),t.stopPropagation();var n=e.props,o=n.dismissImmediately,i=n.onDismiss;o?e.setState({status:"hidden"},i):e.setState({status:"hiding"},(function(){e.timer=setTimeout((function(){var t=e.props.onDismiss;e.setState({status:"hidden"},t)}),300)}))})),v(h(e),"reset",(function(){e.setState({status:"show"})})),e}return t=a,(n=[{key:"componentWillUnmount",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"render",value:function(){var e=this,t=this.props.children;return"hidden"===this.state.status?null:t({onDismiss:this.onDismiss,Dismiss:function(){return i.a.createElement(w,{onClick:e.onDismiss,type:"button","aria-label":"Dismiss"},i.a.createElement("span",{"aria-hidden":"true"},"\xd7"))}})}}])&&d(t.prototype,n),o&&d(t,o),a}(o.Component);function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=T(e);if(t){var i=T(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}v(_,"defaultProps",{dismissImmediately:!1,onDismiss:c.a}),_.__docgenInfo={description:"",methods:[{name:"onDismiss",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"reset",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Dismissable",props:{dismissImmediately:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},onDismiss:{defaultValue:{value:"noop",computed:!0},type:{name:"func"},required:!1,description:""},children:{type:{name:"func"},required:!0,description:""}}},n.d(t,"default",(function(){return k}));var k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(u,e);var t,n,o,l=D(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=l.call(this,e)).layout=null,t}return t=u,(n=[{key:"render",value:function(){var e=this.props,t=e.components,n=x(e,["components"]);return i.a.createElement(r.MDXTag,{name:"wrapper",components:t},i.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"notification"}},"Notification"),i.a.createElement(r.MDXTag,{name:"p",components:t},"The notification component can be used to display contextual user messages."),i.a.createElement(r.MDXTag,{name:"pre",components:t},i.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Notification from '@clarityhub/unity-web/lib/components/Notification';\n")),i.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"basic-notifications"}},"Basic Notifications"),i.a.createElement(r.MDXTag,{name:"p",components:t},"Notifications come in various theme colors"),i.a.createElement(a.e,{__position:0,__code:'<Notification type="danger">\n  There were problems with processing your request. We encountered the\n  following issues:\n  <ul>\n    <li>Our servers are offline</li>\n  </ul>\n</Notification>\n<br />\n<Notification type="primary">\n  Welcome to Clarity Hub, we\'ve updated our Terms and Conditions\n</Notification>\n<br />\n<Notification type="success">\n  Congratulations, you\'ve enabled your first integration!\n</Notification>',__scope:{props:this?this.props:n,Notification:s.a,Dismissable:_}},i.a.createElement(s.a,{type:"danger"},"There were problems with processing your request. We encountered the following issues:",i.a.createElement("ul",null,i.a.createElement("li",null,"Our servers are offline"))),i.a.createElement("br",null),i.a.createElement(s.a,{type:"primary"},"Welcome to Clarity Hub, we've updated our Terms and Conditions"),i.a.createElement("br",null),i.a.createElement(s.a,{type:"success"},"Congratulations, you've enabled your first integration!")),i.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"thin-notifications"}},"Thin Notifications"),i.a.createElement(r.MDXTag,{name:"p",components:t},"The padding on notifications can be reduced to create thin notifications."),i.a.createElement(a.e,{__position:1,__code:'<Notification variant="thin" type="danger">\n  There were problems with processing your request. We encountered the\n  following issues:\n  <ul>\n    <li>Our servers are offline</li>\n  </ul>\n</Notification>\n<br />\n<Notification variant="thin" type="primary">\n  Welcome to Clarity Hub, we\'ve updated our Terms and Conditions\n</Notification>\n<br />\n<Notification variant="thin" type="success">\n  Congratulations, you\'ve enabled your first integration!\n</Notification>',__scope:{props:this?this.props:n,Notification:s.a,Dismissable:_}},i.a.createElement(s.a,{variant:"thin",type:"danger"},"There were problems with processing your request. We encountered the following issues:",i.a.createElement("ul",null,i.a.createElement("li",null,"Our servers are offline"))),i.a.createElement("br",null),i.a.createElement(s.a,{variant:"thin",type:"primary"},"Welcome to Clarity Hub, we've updated our Terms and Conditions"),i.a.createElement("br",null),i.a.createElement(s.a,{variant:"thin",type:"success"},"Congratulations, you've enabled your first integration!")),i.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"dismissable-notifications"}},"Dismissable Notifications"),i.a.createElement(r.MDXTag,{name:"p",components:t},"You can use the Dismissable interaction to create dismissable notifications."),i.a.createElement(a.e,{__position:2,__code:'<Dismissable>\n  {({ Dismiss }) => (\n    <Notification type="danger" variant="block">\n      <Dismiss />\n      There were problems with processing your request. We encountered the\n      following issues:\n      <ul>\n        <li>Our servers are offline</li>\n      </ul>\n    </Notification>\n  )}\n</Dismissable>',__scope:{props:this?this.props:n,Notification:s.a,Dismissable:_}},i.a.createElement(_,null,(function(e){var t=e.Dismiss;return i.a.createElement(s.a,{type:"danger",variant:"block"},i.a.createElement(t,null),"There were problems with processing your request. We encountered the following issues:",i.a.createElement("ul",null,i.a.createElement("li",null,"Our servers are offline")))}))),i.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),i.a.createElement(r.MDXTag,{name:"p",components:t},"The following props are available for the Notification component. Any props not specified here will be passed through to the wrapping div."),i.a.createElement(a.f,{of:s.a}))}}])&&E(t.prototype,n),o&&E(t,o),u}(i.a.Component);k.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-components-notification-notification.26ac8c5cdd5aa6e0d6b9.js.map