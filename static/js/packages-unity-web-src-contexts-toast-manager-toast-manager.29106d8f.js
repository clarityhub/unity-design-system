(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"./packages/unity-core/lib/borders.js":function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={borderRadius:{default:4,rem:(0,((r=n("./packages/unity-core/lib/utilities/rem.js"))&&r.__esModule?r:{default:r}).default)(4)}};t.default=o},"./packages/unity-core/lib/colors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},highlight:{default:"rgba(0, 123, 255, .25)"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}}},"./packages/unity-core/lib/utilities/color.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.opacify=t.desaturate=t.lighten=t.darken=void 0;var r,o=(r=n("./node_modules/color/index.js"))&&r.__esModule?r:{default:r};var a={},i=function(e,t,n){var r="".concat(e,":").concat(t,":").concat(n);if(a[r])return a[r];var i=(0,o.default)(t)[e](n).rgb().string();return a[r]=i,i};t.darken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("darken",e,t)};t.lighten=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("lighten",e,t)};t.desaturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("desaturate",e,t)};t.opacify=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,n="opacify:".concat(e,":").concat(t);if(a[n])return a[n];var r=(0,o.default)(e).rgb().array();r.push(t);var i="rgba(".concat(r.join(","),")");return a[n]=i,i}},"./packages/unity-web/src/components/Modals/ModalPortal.js":function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n("./node_modules/react/index.js"),o=n("./node_modules/react-dom/index.js"),a=n.n(o);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){var e,n,r,o,a,c,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var p=arguments.length,d=new Array(p),f=0;f<p;f++)d[f]=arguments[f];return r=this,n=!(o=(e=u(t)).call.apply(e,[this].concat(d)))||"object"!==i(o)&&"function"!==typeof o?s(r):o,a=s(n),l={ready:!1},(c="state")in a?Object.defineProperty(a,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[c]=l,n}var n,o,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.el=document.createElement("div"),document.body.appendChild(this.el),this.setState({ready:!0})}},{key:"componentWillUnmount",value:function(){this.el&&document.body.removeChild(this.el)}},{key:"render",value:function(){return this.state.ready?a.a.createPortal(this.props.children,this.el):null}}])&&c(n.prototype,o),p&&c(n,p),t}();p.__docgenInfo={description:"",methods:[],displayName:"ModalPortal"}},"./packages/unity-web/src/components/Notification/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/components/Notification/Notification.js");n.d(t,"a",function(){return r.a})},"./packages/unity-web/src/contexts/ToastManager/ToastManager.js":function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n.n(o),i=n("./packages/unity-web/src/components/Modals/ModalPortal.js"),c=n("./packages/unity-web/src/components/Notification/index.js");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=Object(r.default)("div",{target:"e1wwvadz0"})({name:"eg4d83",styles:"display:flex;flex-flow:column;position:fixed;top:4rem;left:50%;z-index:99999;> *{max-width:auto;margin:0.25rem;display:inline-block;transform:translateX(-50%);width:auto !important;}"}),m=function(e){var t=e.message,n=d(e,["message"]);return a.a.createElement(c.a,n,t)},y=Object(o.createContext)(),b={toasts:[]},g=function(e,t){switch(t.type){case"create":return e.toasts.find(function(e){return e.dedupId===t.data.dedupId})?e:{toasts:[t.data].concat(p(e.toasts))};case"clear":return{toasts:e.toasts.filter(function(e){return e.dedupId!==t.dedupId})};default:return e}},h=function(e){var t=l(Object(o.useReducer)(g,b),2),n=t[0],r=t[1],c={createToast:function(e){var t=e.dedupId||Date.now();r({type:"create",data:u({dedupId:t},e)}),setTimeout(function(){r({type:"clear",dedupId:t})},3e3)}};return a.a.createElement(y.Provider,{value:c},a.a.createElement(i.a,null,a.a.createElement(f,null,n.toasts.map(function(e){return a.a.createElement(m,Object.assign({key:e.dedupId},e,{variant:"thin"}))}))),e.children)};t.b=y,h.__docgenInfo={description:"",methods:[],displayName:"ToastManagerProvider"}},"./packages/unity-web/src/contexts/ToastManager/ToastManager.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),c=n("./packages/unity-web/src/contexts/ToastManager/ToastManager.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,d(t).call(this,e))).layout=null,n}var n,r,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=s(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"toastmanager"}},"ToastManager"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Wrap your app with the provider:"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { ToastManagerProvider } from '@clarityhub/unity-web/lib/contexts/ToastManager';\n")),o.a.createElement(a.MDXTag,{name:"p",components:t},"To use toasts in your app, use the following with ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"useContext"),":"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import ToastManager from '@clarityhub/unity-web/lib/contexts/ToastManager';\n")),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"toastmanagerprovider-example"}},"ToastManagerProvider Example"),o.a.createElement(i.e,{__position:0,__code:"<ToastManagerProvider>Your content here</ToastManagerProvider>",__scope:{props:this?this.props:n,ToastManager:c.b,ToastManagerProvider:c.a}},o.a.createElement(c.a,null,"Your content here")),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"toastmanager-usage-example"}},"ToastManager Usage Example"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { useContext } from 'react';\nimport ToastManager from '@clarityhub/unity-web/lib/contexts/ToastManager';\n\nconst CopyToClipboard = ({ children }) => {\n    const { createToast } = useContext(ToastManager);\n\n    const onClick = (data) => {\n        copyToClipboard(data);\n\n        createToast({\n            dedupId: 'copy-to-clipboard',\n            message: 'Copied!',\n            type: 'success',\n        });\n    };\n\n    return children({ onClick });\n};\n")),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),o.a.createElement(a.MDXTag,{name:"p",components:t},"The following props are available for the ToastManagerProvider component."),o.a.createElement(i.f,{of:c.a}))}}])&&l(n.prototype,r),u&&l(n,u),t}();m.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-contexts-toast-manager-toast-manager.1af62d1456d21788be3d.js.map