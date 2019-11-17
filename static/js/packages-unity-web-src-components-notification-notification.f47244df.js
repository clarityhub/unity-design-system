(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./packages/unity-core/lib/borders.js":function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={borderRadius:{default:4,rem:(0,((o=n("./packages/unity-core/lib/utilities/rem.js"))&&o.__esModule?o:{default:o}).default)(4)}};t.default=r},"./packages/unity-core/lib/colors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var o={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},r={primary:{background:o.primary,color:o.white},danger:{background:o.danger,color:o.white},success:{background:o.success,color:o.white},brand:{background:o.brand,color:o.white}};t.types=r;var i=o;t.default=i},"./packages/unity-core/lib/utilities/color.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.opacify=t.desaturate=t.saturate=t.lighten=t.darken=void 0;var o,r=(o=n("./node_modules/color/index.js"))&&o.__esModule?o:{default:o};var i={},a=function(e,t,n){var o="".concat(e,":").concat(t,":").concat(n);if(i[o])return i[o];var a=(0,r.default)(t)[e](n).rgb().string();return i[o]=a,a};t.darken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return a("darken",e,t)};t.lighten=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return a("lighten",e,t)};t.saturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return a("saturate",e,t)};t.desaturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return a("desaturate",e,t)};t.opacify=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,n="opacify:".concat(e,":").concat(t);if(i[n])return i[n];var o=(0,r.default)(e).rgb().array();o.push(t);var a="rgba(".concat(o.join(","),")");return i[n]=a,a}},"./packages/unity-core/lib/utilities/noop.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){}},"./packages/unity-web/src/components/Notification/Notification.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),i=n("./node_modules/@mdx-js/tag/dist/index.js"),a=n("./node_modules/docz/dist/index.m.js"),s=n("./packages/unity-web/src/components/Notification/Notification.js"),c=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),u=n("./packages/unity-core/lib/utilities/noop.js"),l=n.n(u);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=300,g=Object(c.default)("button",{target:"e1jp307v0"})({name:"snv6q",styles:"position:absolute;cursor:pointer;font-size:1.2rem;top:0;right:0;padding:.75rem 1.25rem;color:inherit;background-color:transparent;border:0;appearance:none;"}),v=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return o=this,r=(e=d(t)).call.apply(e,[this].concat(a)),n=!r||"object"!==p(r)&&"function"!==typeof r?m(o):r,y(m(n),"state",{status:"show"}),y(m(n),"onDismiss",function(e){e.preventDefault(),e.stopPropagation(),n.setState({status:"hiding"},function(){n.timer=setTimeout(function(){var e=n.props.onDismiss;n.setState({status:"hidden"},e)},h)})}),y(m(n),"reset",function(){n.setState({status:"show"})}),n}var n,i,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o["Component"]),n=t,(i=[{key:"componentWillUnmount",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"render",value:function(){var e=this,t=this.props.children;return"hidden"===this.state.status?null:t({onDismiss:this.onDismiss,Dismiss:function(){return r.a.createElement(g,{onClick:e.onDismiss,type:"button","aria-label":"Dismiss"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))}})}}])&&f(n.prototype,i),a&&f(n,a),t}();function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}y(v,"defaultProps",{onDismiss:l.a}),v.__docgenInfo={description:"",methods:[{name:"onDismiss",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"reset",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Dismissable",props:{onDismiss:{defaultValue:{value:"noop",computed:!0},type:{name:"func"},required:!1,description:""},children:{type:{name:"func"},required:!0,description:""}}},n.d(t,"default",function(){return T});var T=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=j(this,O(t).call(this,e))).layout=null,n}var n,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=_(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:t},r.a.createElement(i.MDXTag,{name:"h1",components:t,props:{id:"notification"}},"Notification"),r.a.createElement(i.MDXTag,{name:"p",components:t},"The notification component can be used to display contextual user messages."),r.a.createElement(i.MDXTag,{name:"pre",components:t},r.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Notification from '@clarityhub/unity-web/lib/components/Notification';\n")),r.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"basic-notifications"}},"Basic Notifications"),r.a.createElement(i.MDXTag,{name:"p",components:t},"Notifications come in various theme colors"),r.a.createElement(a.e,{__position:0,__code:'<Notification type="danger">\n  There were problems with processing your request. We encountered the\n  following issues:\n  <ul>\n    <li>Our servers are offline</li>\n  </ul>\n</Notification>\n<br />\n<Notification type="primary">\n  Welcome to Clarity Hub, we\'ve updated our Terms and Conditions\n</Notification>\n<br />\n<Notification type="success">\n  Congratulations, you\'ve enabled your first integration!\n</Notification>',__scope:{props:this?this.props:n,Notification:s.a,Dismissable:v}},r.a.createElement(s.a,{type:"danger"},"There were problems with processing your request. We encountered the following issues:",r.a.createElement("ul",null,r.a.createElement("li",null,"Our servers are offline"))),r.a.createElement("br",null),r.a.createElement(s.a,{type:"primary"},"Welcome to Clarity Hub, we've updated our Terms and Conditions"),r.a.createElement("br",null),r.a.createElement(s.a,{type:"success"},"Congratulations, you've enabled your first integration!")),r.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"thin-notifications"}},"Thin Notifications"),r.a.createElement(i.MDXTag,{name:"p",components:t},"The padding on notifications can be reduced to create thin notifications."),r.a.createElement(a.e,{__position:1,__code:'<Notification variant="thin" type="danger">\n  There were problems with processing your request. We encountered the\n  following issues:\n  <ul>\n    <li>Our servers are offline</li>\n  </ul>\n</Notification>\n<br />\n<Notification variant="thin" type="primary">\n  Welcome to Clarity Hub, we\'ve updated our Terms and Conditions\n</Notification>\n<br />\n<Notification variant="thin" type="success">\n  Congratulations, you\'ve enabled your first integration!\n</Notification>',__scope:{props:this?this.props:n,Notification:s.a,Dismissable:v}},r.a.createElement(s.a,{variant:"thin",type:"danger"},"There were problems with processing your request. We encountered the following issues:",r.a.createElement("ul",null,r.a.createElement("li",null,"Our servers are offline"))),r.a.createElement("br",null),r.a.createElement(s.a,{variant:"thin",type:"primary"},"Welcome to Clarity Hub, we've updated our Terms and Conditions"),r.a.createElement("br",null),r.a.createElement(s.a,{variant:"thin",type:"success"},"Congratulations, you've enabled your first integration!")),r.a.createElement(i.MDXTag,{name:"h3",components:t,props:{id:"dismissable-notifications"}},"Dismissable Notifications"),r.a.createElement(i.MDXTag,{name:"p",components:t},"You can use the Dismissable interaction to create dismissable notifications."),r.a.createElement(a.e,{__position:2,__code:'<Dismissable>\n  {({ Dismiss }) => (\n    <Notification type="danger" variant="block">\n      <Dismiss />\n      There were problems with processing your request. We encountered the\n      following issues:\n      <ul>\n        <li>Our servers are offline</li>\n      </ul>\n    </Notification>\n  )}\n</Dismissable>',__scope:{props:this?this.props:n,Notification:s.a,Dismissable:v}},r.a.createElement(v,null,function(e){var t=e.Dismiss;return r.a.createElement(s.a,{type:"danger",variant:"block"},r.a.createElement(t,null),"There were problems with processing your request. We encountered the following issues:",r.a.createElement("ul",null,r.a.createElement("li",null,"Our servers are offline")))})),r.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(i.MDXTag,{name:"p",components:t},"The following props are available for the Notification component. Any props not specified here will be passed through to the wrapping div."),r.a.createElement(a.f,{of:s.a}))}}])&&E(n.prototype,o),c&&E(n,c),t}();T.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-components-notification-notification.f4ce4b00bd8228060463.js.map