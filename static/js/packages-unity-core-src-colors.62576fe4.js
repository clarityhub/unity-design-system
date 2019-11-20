(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./packages/unity-core/private/Swatch.js":function(e,t,a){"use strict";var l=a("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),n=(a("./node_modules/@emotion/core/dist/core.browser.esm.js"),{name:"pwt7cn",styles:"width:auto;padding:20px;"}),r=Object(l.default)("div",{target:"e1fc96cr0"})("background-color:",function(e){return e.color},";height:50px;width:50px;",function(e){return e.wide&&n},"");t.a=r},"./packages/unity-core/src/colors.js":function(e,t,a){"use strict";var l={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}};t.a=l},"./packages/unity-core/src/colors.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var l=a("./node_modules/react/index.js"),n=a.n(l),r=a("./node_modules/@mdx-js/tag/dist/index.js"),o=a("./packages/unity-core/src/colors.js"),c=a("./packages/unity-core/private/Swatch.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function m(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function s(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=s(this,i(t).call(this,e))).layout=null,a}var a,l,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,n.a.Component),a=t,(l=[{key:"render",value:function(){var e=this.props,t=e.components;d(e,["components"]);return n.a.createElement(r.MDXTag,{name:"wrapper",components:t},n.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"colors"}},"Colors"),n.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"colors-utility"}},"Colors utility"),n.a.createElement(r.MDXTag,{name:"p",components:t},"The color utility fives you quick access the core theme colors in Unity. If you want\ncolor combinations, you can use the ",n.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"type")," export which has ",n.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"background")," and ",n.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"color")," pairings."),n.a.createElement(r.MDXTag,{name:"pre",components:t},n.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import colors, { types } from '@clarityhub/unity-core/lib/colors';\n")),n.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"palette"}},"Palette"),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.primary.default})),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.primary.default}")),n.a.createElement("td",null,"For buttons and other action items")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.success.default})),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.success.default}")),n.a.createElement("td",null,"For successful actions and confirmations")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.danger.default})),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.danger.default}")),n.a.createElement("td",null,"For deleting and destructive actions")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.notification.default})),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.notification.default}")),n.a.createElement("td",null,"For notifying the user")))),n.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"grays"}},"Grays"),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.white.default})),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.white.default}")),n.a.createElement("td",null,"For use with text")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.dove.default})),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.dove.default}")),n.a.createElement("td",null,"For document body background")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.muted.default})),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.muted.default}")),n.a.createElement("td",null,"For chat bubbles, subtle borders, etc")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.gray.default})),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.gray.default}")),n.a.createElement("td",null,"For dividers, borders, etc")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.darkGray.default})),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.darkGray.default}")),n.a.createElement("td",null,"For placeholders and labels")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.dark.default})),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.dark.default}")),n.a.createElement("td",null,"For the sidenavs and footers")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.black.default})),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.black.default}")),n.a.createElement("td",null,"For text")))),n.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"accessibility"}},"Accessibility"),n.a.createElement(r.MDXTag,{name:"p",components:t},"For accessibility purposes, certain color combinations should be used."),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.primary.default,wide:!0},n.a.createElement("b",{style:{color:o.a.white.default}},"The fix boxing wizards jump quickly"))),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.white.default}")),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.primary.default}"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.success.default,wide:!0},n.a.createElement("b",{style:{color:o.a.black.default}},"The fix boxing wizards jump quickly"))),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.black.default}")),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.success.default}"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.success.default,wide:!0},n.a.createElement("b",{style:{color:o.a.white.default}},"The fix boxing wizards jump quickly"))),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.white.default}")),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.success.default}")),n.a.createElement("td",null,"(When text does not matter)")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.danger.default,wide:!0},n.a.createElement("b",{style:{color:o.a.black.default}},"The fix boxing wizards jump quickly"))),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.white.default}")),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.danger.default}"))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(c.a,{color:o.a.danger.default,wide:!0},n.a.createElement("b",{style:{color:o.a.white.default}},"The fix boxing wizards jump quickly"))),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.white.default}")),n.a.createElement("td",null,n.a.createElement("pre",null,"{colors.success.default}")),n.a.createElement("td",null,"(When text does not matter)")))))}}])&&m(a.prototype,l),u&&m(a,u),t}();p.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-core-src-colors.b3e54f4dff1125b887b1.js.map