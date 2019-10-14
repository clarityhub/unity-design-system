(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"./packages/unity-core/lib/colors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var o={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},a={primary:{background:o.primary,color:o.white},danger:{background:o.danger,color:o.white},success:{background:o.success,color:o.white},brand:{background:o.brand,color:o.white}};t.types=a;var r=o;t.default=r},"./packages/unity-web/src/scaffolding/Box/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/scaffolding/Box/Box.js");n.d(t,"a",function(){return o.b})},"./packages/unity-web/src/scaffolding/Layout/Layout.js":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=n("./node_modules/react/index.js"),r=n.n(a),c=n("./packages/unity-web/src/scaffolding/Box/index.js");function u(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=Object(o.default)(c.a,{target:"e11730fd0"})({name:"1xz7691",styles:"display:flex;flex-direction:column;height:100vh;width:100%;position:relative;overflow:auto;"}),s=function(e){var t=e.as,n=void 0===t?"div":t,o=e.background,a=void 0===o?"muted":o,c=u(e,["as","background"]);return r.a.createElement(i,Object.assign({as:n,background:a},c))},l=function(){return r.a.createElement("div",null)};t.b=s,l.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"LayoutProps",props:{children:{type:{name:"node"},required:!1,description:""}}},s.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1},background:{defaultValue:{value:'"muted"',computed:!1},required:!1}}}},"./packages/unity-web/src/scaffolding/Layout/Layout.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var o=n("./node_modules/react/index.js"),a=n.n(o),r=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./node_modules/docz/dist/index.m.js"),u=n("./packages/unity-web/src/scaffolding/Layout/Layout.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,p(t).call(this,e))).layout=null,n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=s(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:t},a.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"layout"}},"Layout"),a.a.createElement(r.MDXTag,{name:"p",components:t},"The Layout primitive is a helpful scaffolding component that takes up the fullscreen."),a.a.createElement(r.MDXTag,{name:"p",components:t},"It will take up ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"100vh")," and ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"100%")," width."),a.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"layout--component"}},"<Layout /",">"," component"),a.a.createElement(r.MDXTag,{name:"pre",components:t},a.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Layout from '@clarityhub/unity-web/lib/scaffolding/Layout';\n")),a.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(c.f,{of:u.a}),a.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),a.a.createElement(c.e,{__position:1,__code:"<Layout style={{ border: '1px solid red' }}>Layout component</Layout>",__scope:{props:this?this.props:n,Layout:u.b,LayoutProps:u.a}},a.a.createElement(u.b,{style:{border:"1px solid red"}},"Layout component")))}}])&&l(n.prototype,o),i&&l(n,i),t}();m.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-scaffolding-layout-layout.f481283bd46839ac33f6.js.map