(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./packages/unity-marketing/src/components/LeaveNewsletterModal/LeaveNewsletterModal.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),u=n("./packages/unity-web/lib/components/Modals/index.js"),l=n.n(u),s=n("./packages/unity-web/lib/components/Card/index.js"),c=n("./packages/unity-web/lib/components/Buttons/index.js"),d=n.n(c),p=n("./packages/unity-web/lib/components/Typography/index.js"),f=n.n(p),m=n("./packages/unity-web/lib/forms/InputGroup/InputGroup.js"),b=n.n(m);function y(e){var t=e||{},n=t.aggressive||!1,o=f(t.sensitivity,20),r=f(t.timer,1e3),a=f(t.delay,0),i=t.callback||function(){},u=m(t.cookieExpire)||"",l=t.cookieDomain?";domain="+t.cookieDomain:"",s=t.cookieName?t.cookieName:"viewedOuibounceModal",c=!0===t.sitewide?";path=/":"",d=null,p=document.documentElement;function f(e,t){return"undefined"===typeof e?t:e}function m(e){var t=24*e*60*60*1e3,n=new Date;return n.setTime(n.getTime()+t),"; expires="+n.toUTCString()}function b(e){e.clientY>o||(d=setTimeout(j,a))}function y(){d&&(clearTimeout(d),d=null)}setTimeout(function(){if(w())return;p.addEventListener("mouseleave",b),p.addEventListener("mouseenter",y),p.addEventListener("keydown",v)},r);var g=!1;function v(e){g||e.metaKey&&76===e.keyCode&&(g=!0,d=setTimeout(j,a))}function h(e,t){return function(){for(var e=document.cookie.split("; "),t={},n=e.length-1;n>=0;n--){var o=e[n].split("=");t[o[0]]=o[1]}return t}()[e]===t}function w(){return h(s,"true")&&!n}function j(){w()||(i(),i(),k())}function _(){p.removeEventListener("mouseleave",b),p.removeEventListener("mouseenter",y),p.removeEventListener("keydown",v)}function k(e){var t=e||{};"undefined"!==typeof t.cookieExpire&&(u=m(t.cookieExpire)),!0===t.sitewide&&(c=";path=/"),"undefined"!==typeof t.cookieDomain&&(l=";domain="+t.cookieDomain),"undefined"!==typeof t.cookieName&&(s=t.cookieName),"undefined"!==typeof window&&(window.document.cookie=s+"=true"+u+l+c),_()}return{fire:j,disable:k,isDisabled:w,teardown:_}}function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return o=this,r=(e=h(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==g(r)&&"function"!==typeof r?w(o):r,_(w(n),"state",{show:!1}),_(w(n),"setup",function(){var e=n.props.force,t=y({aggressive:Boolean(e),callback:n.onFire}),o=t.disable,r=t.teardown;n.ouibounceTeardown=r,n.ouibounceDismiss=o}),_(w(n),"teardown",function(){n.ouibounceTeardown()}),_(w(n),"onFire",function(){n.setState({show:!0})}),_(w(n),"onDismiss",function(){n.ouibounceDismiss(),n.setState({show:!1})}),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,o["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){this.setup()}},{key:"componentWillUnmount",value:function(){this.teardown()}},{key:"render",value:function(){return(0,this.props.children)({show:this.state.show,onDismiss:this.onDismiss})}}])&&v(n.prototype,r),a&&v(n,a),t}();k.__docgenInfo={description:"",methods:[{name:"setup",docblock:null,modifiers:[],params:[],returns:null},{name:"teardown",docblock:null,modifiers:[],params:[],returns:null},{name:"onFire",docblock:null,modifiers:[],params:[],returns:null},{name:"onDismiss",docblock:null,modifiers:[],params:[],returns:null}],displayName:"LeaveIntent",props:{force:{type:{name:"bool"},required:!1,description:""}}};var O=n("./packages/unity-marketing/src/components/NewsletterForm/NewsletterForm.js");function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,P(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props.force;return r.a.createElement(k,{force:e},function(e){var t=e.show,n=e.onDismiss;return r.a.createElement(l.a,{onClose:n,type:"notification",open:t},r.a.createElement(s.CardBody,null,r.a.createElement(O.a,{simple:!0},function(e){var t=e.status,a=e.Form,i=e.subscribe;return r.a.createElement(o.Fragment,null,r.a.createElement(f.a,{color:"white",center:!0,type:"h2",noMargin:!0,noPadding:!0},"Interesting Issues, Straight to Your Inbox"),r.a.createElement(f.a,{color:"white",center:!0,type:"text"},"We send you a weekly newsletter with open-source issues that need your help and programming articles to help you grow as a developer"),r.a.createElement(a,{variant:"white"},r.a.createElement(b.a,null,r.a.createElement(c.ButtonSet,{spread:!0},r.a.createElement(d.a,{text:!0,type:"white",onClick:n},"No Thanks"),r.a.createElement(d.a,{type:"white",buttonType:"submit",loading:"sending"===t,disabled:"sending"===t,onClick:i},"Sign Up")))))})))})}}])&&x(n.prototype,a),i&&x(n,i),t}();function T(e){return(T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function N(e,t){return!t||"object"!==T(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}S.__docgenInfo={description:"",methods:[],displayName:"LeaveNewsLetterModal",props:{force:{type:{name:"bool"},required:!1,description:""}}},n.d(t,"default",function(){return R});var R=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=N(this,I(t).call(this,e))).layout=null,n}var n,u,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,r.a.Component),n=t,(u=[{key:"render",value:function(){var e=this.props,t=e.components,n=D(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"leavenewslettermodal"}},"LeaveNewsLetterModal"),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"leavenewslettermodal--component"}},"<LeaveNewsLetterModal /",">"," component"),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import LeaveNewsLetterModal from '@clarityhub/unity-marketing/lib/components/LeaveNewsLetterModal';\n")),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(i.f,{of:S}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),r.a.createElement(o.Fragment,null,(document.cookie="viewedOuibounceModal=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",r.a.createElement("div",null))),r.a.createElement(i.e,{__position:2,__code:"<LeaveNewsLetterModal force />",__scope:{props:this?this.props:n,Component:o.Component,Fragment:o.Fragment,LeaveNewsLetterModal:S}},r.a.createElement(S,{force:!0})))}}])&&L(n.prototype,u),l&&L(n,l),t}();R.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/lib/components/Card/Card.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.CardPropTypes=void 0;var o=s(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),r=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=s(n("./packages/unity-core/lib/borders.js")),i=s(n("./packages/unity-core/lib/colors.js")),u=n("./packages/unity-web/lib/components/Card/CardHeader.js"),l=s(n("./packages/unity-web/lib/components/Card/CardBody.js"));function s(e){return e&&e.__esModule?e:{default:e}}var c={name:"2mf806-Card",styles:"box-shadow:0 0 0 1px rgba(0,0,0,0);label:Card;"},d={name:"pq4n33-Card",styles:"text-align:center;label:Card;"},p={name:"16ae7a3-Card",styles:"transition:box-shadow 0.2s ease-in-out;&:hover{box-shadow:0 0 0 1px rgba(50,50,93,.1),0 7px 14px 0 rgba(50,50,93,.1),0 3px 6px 0 rgba(0,0,0,.07)}label:Card;"},f=(0,o.default)("div",{target:"e6pferz0",label:"Card"})((0,r.css)("position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-clip:border-box;border-radius:",a.default.borderRadius.rem,"rem;label:Card;"),function(e){return e.flat?c:(0,r.css)("box-shadow:",i.default.shadow.default,";label:Card;")},function(e){switch(e.type){case"notification":return(0,r.css)("background:",i.default.gradient.default,";",l.default,"{padding-top:2rem;padding-bottom:2rem;}label:Card;");case"highlight":return(0,r.css)("background:",i.default.highlight.default,";label:Card;");default:return(0,r.css)("background-color:",i.default.white.default,";label:Card;")}},(0,r.css)(">:not(",u.CardHeaderWrapper,"){h3{margin:0;padding:0;}h4{margin-top:0.6rem;}p:only-child{margin:0;}}label:Card;"),function(e){return e.center&&d},function(e){return e.hoverable&&p},""),m=function(){return React.createElement("div",null)};t.CardPropTypes=m,m.defaultProps={center:!1,hoverable:!1,flat:!1},f.propTypes=m.propTypes;var b=f;t.default=b},"./packages/unity-web/lib/components/Card/CardActions.js":function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,((o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"))&&o.__esModule?o:{default:o}).default)("div",{target:"eq07m5o0",label:"CardActions"})({name:"15g2oxy",styles:"margin-top:1rem;"});t.default=r},"./packages/unity-web/lib/components/Card/CardBody.js":function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,((o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"))&&o.__esModule?o:{default:o}).default)("div",{target:"em76frp0",label:"CardBody"})({name:"1xljzoe",styles:"flex:1 1 auto;padding:1.25rem;"});t.default=r},"./packages/unity-web/lib/components/Card/CardFooter.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),r=n("./packages/unity-core/lib/typography.js"),a=u(n("./packages/unity-core/lib/borders.js")),i=u(n("./packages/unity-core/lib/colors.js"));function u(e){return e&&e.__esModule?e:{default:e}}var l=(0,o.default)("div",{target:"e1xi9xbg0",label:"CardFooter"})(r.variants.text.string," color:",i.default.dark.default,";padding:.75rem 1.25rem;border-top:1px solid ",i.default.muted.default,";&:last-child{border-radius:0 0 calc(",a.default.borderRadius.rem,"rem - 1px) calc(",a.default.borderRadius.rem,"rem - 1px);}");t.default=l},"./packages/unity-web/lib/components/Card/CardHeader.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.CardHeaderWrapper=void 0;var o=l(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),r=l(n("./node_modules/react/index.js")),a=l(n("./packages/unity-core/lib/borders.js")),i=l(n("./packages/unity-core/lib/colors.js")),u=l(n("./packages/unity-web/lib/components/Typography/index.js"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=(0,o.default)("div",{target:"eedi62r0",label:"CardHeaderWrapper"})("padding:.75rem 1.25rem;margin-bottom:0;border-bottom:1px solid ",i.default.muted.default,";&:first-of-type{border-radius:calc(",a.default.borderRadius.rem,"rem - 1px) calc(",a.default.borderRadius.rem,"rem - 1px) 0 0;}");t.CardHeaderWrapper=c;var d=function(e){var t=e.children,n=s(e,["children"]);return r.default.createElement(c,n,r.default.createElement(u.default,{noMargin:!0,noPadding:!0,type:"h3"},t))};t.default=d},"./packages/unity-web/lib/components/Card/CardImage.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),r=a(n("./packages/unity-core/lib/borders.js"));function a(e){return e&&e.__esModule?e:{default:e}}var i=(0,o.default)("img",{target:"e1d18klp0",label:"CardImage"})("display:block;margin:0 auto;max-width:100%;border-top-left-radius:calc(",r.default.borderRadius.rem,"rem - 1px);border-top-right-radius:calc(",r.default.borderRadius.rem,"rem - 1px);");t.default=i},"./packages/unity-web/lib/components/Card/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"CardActions",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"CardBody",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"CardFooter",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"CardHeader",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"CardImage",{enumerable:!0,get:function(){return l.default}});var o=s(n("./packages/unity-web/lib/components/Card/Card.js")),r=s(n("./packages/unity-web/lib/components/Card/CardActions.js")),a=s(n("./packages/unity-web/lib/components/Card/CardBody.js")),i=s(n("./packages/unity-web/lib/components/Card/CardFooter.js")),u=s(n("./packages/unity-web/lib/components/Card/CardHeader.js")),l=s(n("./packages/unity-web/lib/components/Card/CardImage.js"));function s(e){return e&&e.__esModule?e:{default:e}}},"./packages/unity-web/lib/components/Modals/Modal.js":function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js")),i=n("./node_modules/prop-types/index.js"),u=(n("./node_modules/@emotion/core/dist/core.browser.esm.js"),n("./packages/unity-core/lib/utilities/color.js")),l=p(n("./packages/unity-core/lib/colors.js")),s=p(n("./packages/unity-web/lib/theme/zIndexes.js")),c=p(n("./packages/unity-web/lib/components/Card/index.js")),d=p(n("./packages/unity-web/lib/components/Modals/ModalPortal.js"));function p(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h={name:"1yylpe-ModalWrapper",styles:"display:none;label:ModalWrapper;"},w=(0,r.default)("div",{target:"e1bxx9lo0",label:"ModalWrapper"})("position:fixed;top:0;bottom:0;left:0;right:0;background-color:",(0,u.opacify)(l.default.dark.default,.6),";display:flex;z-index:",s.default.modal,";",function(e){return!e.open&&h},""),j={name:"1lghawf-ModalDialog",styles:"opacity:1;transform:translate(0,0);label:ModalDialog;"},_=(0,r.default)("div",{target:"e1bxx9lo1",label:"ModalDialog"})("transition:all .3s ease-out;transition-property:opacity,transform;transform:translate(0,-25%);display:flex;min-height:calc(100% - (.5rem * 2));opacity:0;align-items:center;max-width:500px;margin:1.75rem auto;position:relative;width:100%;@media screen and (prefers-reduced-motion:reduce){transition:none;}",function(e){return e.open&&j}," ",c.default,"{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;}"),k=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return o=this,r=(e=b(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==f(r)&&"function"!==typeof r?y(o):r,v(y(n),"state",{delayedOpen:!1}),v(y(n),"setup",function(){n._onClickOutside=n.onClickOutside.bind(y(n)),n._onKeyUp=n.onKeyUp.bind(y(n)),document.addEventListener("click",n._onClickOutside),window.addEventListener("keyup",n._onKeyUp),n.checkOpen()}),v(y(n),"teardown",function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];n.openTimer&&clearTimeout(n.openTimer),document.removeEventListener("click",n._onClickOutside),window.removeEventListener("keyup",n._onKeyUp),n.setState({delayedOpen:!1}),e||(n.closeTimer=setTimeout(function(){n.setState({delayedClose:!1})},100))}),v(y(n),"checkOpen",function(){n.props.open&&!n.state.delayedOpen&&(n.doneOpening=!1,n.openTimer&&clearTimeout(n.openTimer),n.setState({delayedClose:!0}),n.openTimer=setTimeout(function(){n.doneOpening=!0,n.setState({delayedOpen:!0})},100))}),v(y(n),"onClickOutside",function(e){if(n.modal&&n.doneOpening&&n.props.open){var t=e.target;n.modal!==t&&!n.modal.contains(t)&&n.close()}}),v(y(n),"onKeyUp",function(e){n.props.open&&"Escape"===e.key&&n.close()}),v(y(n),"close",function(){var e=n.props.onClose;e&&e()}),n}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.setup()}},{key:"componentDidUpdate",value:function(e){!e.open&&this.props.open&&this.setup(),e.open&&!this.props.open&&this.teardown()}},{key:"componentWillUnmount",value:function(){this.teardown(!0)}},{key:"render",value:function(){var e=this,t=this.props,n=t.center,o=t.children,r=t.type,i=this.state,u=i.delayedOpen,l=i.delayedClose;return a.default.createElement(d.default,null,a.default.createElement(w,{open:l},a.default.createElement(_,{open:u},a.default.createElement(c.default,{ref:function(t){return e.modal=t},type:r,center:n},o))))}}])&&m(n.prototype,o),r&&m(n,r),t}();t.default=k,v(k,"propTypes",{center:i.bool,children:i.node,onClose:i.func,open:i.bool.isRequired,type:i.string})},"./packages/unity-web/lib/components/Modals/ModalPortal.js":function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=n("./node_modules/react/index.js"),i=(r=n("./node_modules/react-dom/index.js"))&&r.__esModule?r:{default:r};function u(e){return(u="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){var e,n,o,r,a,i,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var d=arguments.length,p=new Array(d),f=0;f<d;f++)p[f]=arguments[f];return o=this,n=!(r=(e=s(t)).call.apply(e,[this].concat(p)))||"object"!==u(r)&&"function"!==typeof r?c(o):r,a=c(n),l={ready:!1},(i="state")in a?Object.defineProperty(a,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[i]=l,n}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.el=document.createElement("div"),document.body.appendChild(this.el),this.setState({ready:!0})}},{key:"componentWillUnmount",value:function(){this.el&&document.body.removeChild(this.el)}},{key:"render",value:function(){return this.state.ready?i.default.createPortal(this.props.children,this.el):null}}])&&l(n.prototype,o),r&&l(n,r),t}();t.default=p},"./packages/unity-web/lib/components/Modals/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var o,r=(o=n("./packages/unity-web/lib/components/Modals/Modal.js"))&&o.__esModule?o:{default:o}},"./packages/unity-web/lib/theme/zIndexes.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={base:1,modal:9999}}}]);
//# sourceMappingURL=packages-unity-marketing-src-components-leave-newsletter-modal-leave-newsletter-modal.0ad923aad6c52481227a.js.map