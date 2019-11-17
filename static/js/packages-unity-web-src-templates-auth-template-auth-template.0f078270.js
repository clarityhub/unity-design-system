(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"./packages/unity-web/src/components/Buttons/ButtonGroup.js":function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return d});var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/react/index.js"),a=n.n(r),s=n("./packages/unity-core/lib/colors.js"),i=n.n(s),c=n("./packages/unity-web/src/components/Buttons/Button.js");function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(o.default)("div",{target:"e1cjzffo0"})("box-shadow:",i.a.shadow.default,";display:inline-block;",c.a,"{box-shadow:none;}",c.a," + ",c.a,"{border-left-width:0;border-left:1px solid ",i.a.muted.default,";}",c.a,":not(:last-child):not(:first-of-type){border-radius:0;}",c.a,":first-of-type{border-top-right-radius:0;border-bottom-right-radius:0;}",c.a,":last-child{border-top-left-radius:0;border-bottom-left-radius:0;}"),d=function(e){var t=e.selected,n=u(e,["selected"]);return a.a.createElement(c.b,Object.assign({type:t?"primary":"default"},n))};d.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{selected:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/ButtonSet.js":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=n("./packages/unity-web/src/components/Buttons/Button.js"),s=Object(o.default)("div",{target:"e1sq8kqm0"})(function(e){return e.spread&&Object(r.css)("display:flex;align-items:center;justify-content:flex-end;",a.a,"{&:not(:first-of-type){margin-left:auto!important;}}")}," button + button,a + a,a + button,button + a{margin-left:0.4rem;}"),i=function(){return React.createElement("div",null)};s.propTypes=i.propTypes,t.b=s,i.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"ButtonSetPropTypes",props:{spread:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/components/Buttons/Button.js");n.d(t,"b",function(){return o.b});var r=n("./packages/unity-web/src/components/Buttons/ButtonSet.js");n.d(t,"a",function(){return r.b});n("./packages/unity-web/src/components/Buttons/ButtonGroup.js")},"./packages/unity-web/src/components/Link/Link.js":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./packages/unity-web/src/components/Typography/index.js");function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=function(e){var t=e.component,n=void 0===t?"a":t,o=e.children,i=e.variant,c=void 0===i?"text":i,u=e.color,l=void 0===u?"primary":u,d=e.type,p=s(e,["component","children","variant","color","type"]);return r.a.createElement(a.a,Object.assign({type:d||"link",variant:c,color:l,component:n},p),o)},c=function(){return r.a.createElement("div",null)};t.b=i,c.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"LinkPropTypes",props:{children:{type:{name:"node"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},component:{type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"string"},required:!1,description:""}}},i.__docgenInfo={description:"",methods:[],displayName:"Link",props:{component:{defaultValue:{value:"'a'",computed:!1},required:!1},variant:{defaultValue:{value:"'text'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./packages/unity-web/src/components/Link/LinkButton.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./packages/unity-web/src/components/Buttons/Button.js");function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=function(e){var t=e.history,n=e.to,o=e.onClick,i=s(e,["history","to","onClick"]);return r.a.createElement(a.b,Object.assign({},i,{onClick:function(e){o&&o(e),t.push(n)}}))};t.a=i,i.__docgenInfo={description:"",methods:[],displayName:"LinkButton",props:{children:{type:{name:"node"},required:!0,description:""},history:{type:{name:"shape",value:{push:{name:"func",required:!0}}},required:!0,description:""},to:{type:{name:"string"},required:!0,description:""}}}},"./packages/unity-web/src/components/Link/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/components/Link/Link.js");n.d(t,"a",function(){return o.b});n("./packages/unity-web/src/components/Link/LinkButton.js")},"./packages/unity-web/src/scaffolding/Box/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/scaffolding/Box/Box.js");n.d(t,"a",function(){return o.b})},"./packages/unity-web/src/scaffolding/FlexGrid/FlexColumn.js":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/react/index.js"),a=n.n(r),s=(n("./node_modules/@emotion/core/dist/core.browser.esm.js"),n("./packages/unity-web/src/scaffolding/Box/index.js"));function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={name:"zcxndt",styles:"align-items:center;"},u=Object(o.default)(s.a,{target:"e1leuols0"})("height:100%;",function(e){return e.center&&c},""),l=function(e){e.flex;var t=i(e,["flex"]);return a.a.createElement(u,Object.assign({flex:1},t))},d=function(){return a.a.createElement("div",null)};t.b=l,d.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"FlexColumnProps",props:{center:{type:{name:"bool"},required:!1,description:""}}},l.__docgenInfo={description:"",methods:[],displayName:"FlexColumn",props:{flex:{defaultValue:{value:"1",computed:!1},required:!1}}}},"./packages/unity-web/src/scaffolding/FlexGrid/FlexGrid.js":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/react/index.js"),a=n.n(r),s=(n("./node_modules/@emotion/core/dist/core.browser.esm.js"),n("./packages/unity-web/src/scaffolding/Box/index.js"));function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={name:"zcxndt",styles:"align-items:center;"},u=Object(o.default)(s.a,{target:"e18tsg4b0"})("height:100%;position:relative;width:100%;",function(e){return e.center&&c},""),l=function(e){var t=e.direction,n=void 0===t?"row":t,o=i(e,["direction"]);return a.a.createElement(u,Object.assign({direction:n},o))},d=function(){return a.a.createElement("div",null)};t.b=l,d.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"FlexGridProps",props:{center:{type:{name:"bool"},required:!1,description:""}}},l.__docgenInfo={description:"",methods:[],displayName:"FlexGrid",props:{direction:{defaultValue:{value:'"row"',computed:!1},required:!1}}}},"./packages/unity-web/src/scaffolding/FlexGrid/FlexGridContainer.js":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=n("./packages/unity-web/src/theme/breakpoints.js"),s=n("./packages/unity-web/src/scaffolding/Box/index.js"),i=n("./packages/unity-web/src/scaffolding/FlexGrid/config.js"),c=Object(o.default)(s.a,{target:"e1cks8la0"})("box-sizing:border-box;margin:0 auto;width:100%;",function(e){switch(e.size){case"xsmall":return Object(r.css)("max-width:",a.a.xsmallMaxWidth,"px;@media (max-width:",a.a.xsmallMaxWidth+16*i.a,"px){padding:0 ",i.a,"rem;width:100%;}");case"small":return Object(r.css)("max-width:",a.a.smallMaxWidth,"px;@media (max-width:",a.a.smallMaxWidth+16*i.a,"px){padding:0 ",i.a,"rem;width:100%;}");default:return Object(r.css)("max-width:",a.a.maxWidth,"px;@media (max-width:",a.a.maxWidth+16*i.a,"px){padding:0 ",i.a,"rem;width:100%;}")}},""),u=function(){return Object(r.jsx)("div",null)};c.propTypes=u.propTypes,t.b=c,u.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"FlexGridContainerProps",props:{size:{type:{name:"string"},required:!1,description:""}}}},"./packages/unity-web/src/scaffolding/FlexGrid/config.js":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=2},"./packages/unity-web/src/scaffolding/FlexGrid/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/scaffolding/FlexGrid/FlexGrid.js");n.d(t,"b",function(){return o.b});var r=n("./packages/unity-web/src/scaffolding/FlexGrid/FlexColumn.js");n.d(t,"a",function(){return r.b});var a=n("./packages/unity-web/src/scaffolding/FlexGrid/FlexGridContainer.js");n.d(t,"c",function(){return a.b})},"./packages/unity-web/src/scaffolding/Layout/Layout.js":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/react/index.js"),a=n.n(r),s=n("./packages/unity-web/src/scaffolding/Box/index.js");function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=Object(o.default)(s.a,{target:"e11730fd0"})({name:"1xz7691",styles:"display:flex;flex-direction:column;height:100vh;width:100%;position:relative;overflow:auto;"}),u=function(e){var t=e.as,n=void 0===t?"div":t,o=e.background,r=void 0===o?"muted":o,s=i(e,["as","background"]);return a.a.createElement(c,Object.assign({as:n,background:r},s))},l=function(){return a.a.createElement("div",null)};t.b=u,l.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"LayoutProps",props:{children:{type:{name:"node"},required:!1,description:""}}},u.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1},background:{defaultValue:{value:'"muted"',computed:!1},required:!1}}}},"./packages/unity-web/src/scaffolding/Layout/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/scaffolding/Layout/Layout.js");n.d(t,"a",function(){return o.b})},"./packages/unity-web/src/templates/AuthTemplate/AuthTemplate.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),i=n("./packages/unity-web/src/components/Link/index.js"),c=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),u=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),l=n("./packages/unity-core/lib/colors.js"),d=n.n(l),p=n("./packages/unity-web/src/scaffolding/Box/index.js"),m=n("./packages/unity-web/src/scaffolding/Layout/index.js"),f=n("./packages/unity-web/src/scaffolding/FlexGrid/index.js"),b=n("./packages/unity-web/src/components/Card/index.js"),y=n("./packages/unity-web/src/components/Typography/index.js"),g=n("./packages/unity-web/src/components/Buttons/index.js"),j=n("./packages/unity-web/src/theme/breakpoints.js"),h=Object(c.default)("div",{target:"e18vqf5y0"})("flex:1;padding:3rem;max-width:520px;display:flex;flex-direction:column;justify-content:center;",b.f," + ",b.f,"{margin-top:1rem;}"),x={name:"zdpt2t",styles:"margin-left:auto;"},w={name:"29g8ej",styles:"margin-top:3rem;margin-bottom:1rem;"},v={name:"17z2eo0",styles:"color:#666;font-size:0.9rem;margin-top:3rem;margin-bottom:1rem;"},k=function(e){var t=e.newsFeed,n=e.onSignUp,r=e.onLogin,a=e.onlyLogin,s=void 0!==a&&a,i=e.termsAndConditionsHref,c=void 0===i?"#":i,l=e.privacyPolicyHref,k=void 0===l?"#":l;return Object(u.jsx)(m.a,{css:Object(u.css)("background-color:",d.a.dove.default,";")},Object(u.jsx)(f.b,{center:!0},Object(u.jsx)(f.a,{center:!0,css:Object(u.css)("background:",d.a.gradient.default,";@media(max-width:",j.a.smartphone,"){display:none;}")},Object(u.jsx)(h,{css:x},t.map(function(e,t){return Object(u.jsx)(b.f,{key:t},Object(u.jsx)(b.b,null,Object(u.jsx)(y.a,{type:"h3"},e.title),Object(u.jsx)(y.a,{type:"text"},e.content)))}))),Object(u.jsx)(f.a,{center:!0},Object(u.jsx)(h,{css:Object(u.css)("@media(max-width:",j.a.smartphone,"){margin-left:auto;margin-right:auto;}")},Object(u.jsx)(y.a,{center:!0,noMargin:!0,noPadding:!0,type:"h2"},"Welcome to Clarity Hub"),Object(u.jsx)(p.a,{margin:{top:"small"}},s?Object(u.jsx)(o.Fragment,null,Object(u.jsx)(g.b,{type:"primary",outline:!0,block:!0,onClick:r},"Login")):Object(u.jsx)(o.Fragment,null,Object(u.jsx)(g.b,{type:"primary",block:!0,onClick:n},"Sign Up"),Object(u.jsx)(y.a,{center:!0,css:w},"Already have an account?"),Object(u.jsx)(g.b,{type:"primary",outline:!0,block:!0,onClick:r},"Login"))),Object(u.jsx)(y.a,{center:!0,css:v},'By clicking on "Login" above, you acknowledge that you have read, understood, and agree to Clarity Hub\'s'," ",Object(u.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"Terms and Conditions")," and"," ",Object(u.jsx)("a",{href:k,target:"_blank",rel:"noopener noreferrer"},"Privacy Policy"),".")))))},O=k;function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}k.__docgenInfo={description:"",methods:[],displayName:"AuthTemplate",props:{onlyLogin:{defaultValue:{value:"false",computed:!1},required:!1},termsAndConditionsHref:{defaultValue:{value:'"#"',computed:!1},required:!1},privacyPolicyHref:{defaultValue:{value:'"#"',computed:!1},required:!1},newsFeed:{type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"node",required:!1},content:{name:"node",required:!1}}}},required:!0,description:""},onLogin:{type:{name:"func"},required:!0,description:""},onSignUp:{type:{name:"func"},required:!0,description:""}}},n.d(t,"default",function(){return q});var q=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=L(this,C(t).call(this,e))).layout=null,n}var n,c,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,r.a.Component),n=t,(c=[{key:"render",value:function(){var e=this.props,t=e.components,n=F(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"authtemplate"}},"AuthTemplate"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Use this template for the login page of Clarity Hub apps."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"authtemplate-"}},"<AuthTemplate /",">"),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import AuthTemplate from '@clarityhub/unity-web/libtemplates/AuthTemplate';\n")),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(s.f,{of:O}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),r.a.createElement(s.e,{__position:1,__code:'<AuthTemplate\n  onSignUp={() => {}}\n  onLogin={() => {}}\n  newsFeed={[\n    {\n      title: "What\'s new",\n      content: (\n        <Fragment>\n          Integrate with new services, get analytics, and enhance your\n          customer service.\n          <br />\n          <Link href="#">Check out our release notes</Link>\n        </Fragment>\n      ),\n    },\n    {\n      title: \'Smart Compose\',\n      content: (\n        <Fragment>\n          Download our Google Chrome extension to enable Smart Compose for\n          Intercom.\n        </Fragment>\n      ),\n    },\n  ]}\n/>',__scope:{props:this?this.props:n,Fragment:o.Fragment,Link:i.a,AuthTemplate:O}},r.a.createElement(O,{onSignUp:function(){},onLogin:function(){},newsFeed:[{title:"What's new",content:r.a.createElement(o.Fragment,null,"Integrate with new services, get analytics, and enhance your customer service.",r.a.createElement("br",null),r.a.createElement(i.a,{href:"#"},"Check out our release notes"))},{title:"Smart Compose",content:r.a.createElement(o.Fragment,null,"Download our Google Chrome extension to enable Smart Compose for Intercom.")}]})),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"only-login"}},"Only Login"),r.a.createElement(s.e,{__position:2,__code:'<AuthTemplate\n  onSignUp={() => {}}\n  onLogin={() => {}}\n  onlyLogin\n  newsFeed={[\n    {\n      title: "What\'s new",\n      content: (\n        <Fragment>\n          Integrate with new services, get analytics, and enhance your\n          customer service.\n          <br />\n          <Link href="#">Check out our release notes</Link>\n        </Fragment>\n      ),\n    },\n    {\n      title: \'Smart Compose\',\n      content: (\n        <Fragment>\n          Download our Google Chrome extension to enable Smart Compose for\n          Intercom.\n        </Fragment>\n      ),\n    },\n  ]}\n/>',__scope:{props:this?this.props:n,Fragment:o.Fragment,Link:i.a,AuthTemplate:O}},r.a.createElement(O,{onSignUp:function(){},onLogin:function(){},onlyLogin:!0,newsFeed:[{title:"What's new",content:r.a.createElement(o.Fragment,null,"Integrate with new services, get analytics, and enhance your customer service.",r.a.createElement("br",null),r.a.createElement(i.a,{href:"#"},"Check out our release notes"))},{title:"Smart Compose",content:r.a.createElement(o.Fragment,null,"Download our Google Chrome extension to enable Smart Compose for Intercom.")}]})))}}])&&E(n.prototype,c),u&&E(n,u),t}();q.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/theme/breakpoints.js":function(e,t,n){"use strict";t.a={mobile:"575.98px",smartphone:"767.98px",tablet:"991.98px",xsmallMaxWidth:620,smallMaxWidth:820,maxWidth:1250}}}]);
//# sourceMappingURL=packages-unity-web-src-templates-auth-template-auth-template.f4ce4b00bd8228060463.js.map