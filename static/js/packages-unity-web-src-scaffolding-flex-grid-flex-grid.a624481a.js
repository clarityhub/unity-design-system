(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"./packages/unity-core/lib/colors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var r={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},o={primary:{background:r.primary,color:r.white},danger:{background:r.danger,color:r.white},success:{background:r.success,color:r.white},brand:{background:r.brand,color:r.white}};t.types=o;var a=r;t.default=a},"./packages/unity-web/src/scaffolding/Box/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/scaffolding/Box/Box.js");n.d(t,"a",function(){return r.b})},"./packages/unity-web/src/scaffolding/FlexGrid/FlexColumn.js":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n.n(o),i=(n("./node_modules/@emotion/core/dist/core.browser.esm.js"),n("./packages/unity-web/src/scaffolding/Box/index.js"));function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s={name:"zcxndt",styles:"align-items:center;"},d=Object(r.default)(i.a,{target:"e1leuols0"})("height:100%;",function(e){return e.center&&s},""),c=function(e){e.flex;var t=l(e,["flex"]);return a.a.createElement(d,Object.assign({flex:1},t))},u=function(){return a.a.createElement("div",null)};t.b=c,u.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"FlexColumnProps",props:{center:{type:{name:"bool"},required:!1,description:""}}},c.__docgenInfo={description:"",methods:[],displayName:"FlexColumn",props:{flex:{defaultValue:{value:"1",computed:!1},required:!1}}}},"./packages/unity-web/src/scaffolding/FlexGrid/FlexGrid.js":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n.n(o),i=(n("./node_modules/@emotion/core/dist/core.browser.esm.js"),n("./packages/unity-web/src/scaffolding/Box/index.js"));function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s={name:"zcxndt",styles:"align-items:center;"},d=Object(r.default)(i.a,{target:"e18tsg4b0"})("height:100%;position:relative;width:100%;",function(e){return e.center&&s},""),c=function(e){var t=e.direction,n=void 0===t?"row":t,r=l(e,["direction"]);return a.a.createElement(d,Object.assign({direction:n},r))},u=function(){return a.a.createElement("div",null)};t.b=c,u.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"FlexGridProps",props:{center:{type:{name:"bool"},required:!1,description:""}}},c.__docgenInfo={description:"",methods:[],displayName:"FlexGrid",props:{direction:{defaultValue:{value:'"row"',computed:!1},required:!1}}}},"./packages/unity-web/src/scaffolding/FlexGrid/FlexGrid.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return x});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),l=n("./packages/unity-web/src/scaffolding/FlexGrid/FlexGrid.js"),s=n("./packages/unity-web/src/scaffolding/FlexGrid/FlexColumn.js"),d=n("./packages/unity-web/src/scaffolding/FlexGrid/FlexGridContainer.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,m(t).call(this,e))).layout=null,n}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=u(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"flexgrid"}},"FlexGrid"),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"flexgrid--component"}},"<FlexGrid /",">"," component"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { FlexGridContainer, FlexGrid, FlexColumn } from '@clarityhub/unity-web/lib/scaffolding/FlexGrid';\n")),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"flexgridcontainer"}},"FlexGridContainer"),o.a.createElement(i.f,{of:d.a}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"flexgrid-1"}},"FlexGrid"),o.a.createElement(i.f,{of:l.a}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"flexcolumn"}},"FlexColumn"),o.a.createElement(i.f,{of:s.a}),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),o.a.createElement(i.e,{__position:3,__code:"<FlexGridContainer>\n  <FlexGrid gap=\"small\" style={{ border: '1px solid red' }}>\n    <FlexColumn style={{ border: '1px solid blue' }}>Col 1</FlexColumn>\n    <FlexColumn style={{ border: '1px solid blue' }}>Col 2</FlexColumn>\n    <FlexColumn style={{ border: '1px solid blue' }}>Col 3</FlexColumn>\n  </FlexGrid>\n</FlexGridContainer>",__scope:{props:this?this.props:n,FlexGrid:l.b,FlexGridProps:l.a,FlexColumn:s.b,FlexColumnProps:s.a,FlexGridContainer:d.b,FlexGridContainerProps:d.a}},o.a.createElement(d.b,null,o.a.createElement(l.b,{gap:"small",style:{border:"1px solid red"}},o.a.createElement(s.b,{style:{border:"1px solid blue"}},"Col 1"),o.a.createElement(s.b,{style:{border:"1px solid blue"}},"Col 2"),o.a.createElement(s.b,{style:{border:"1px solid blue"}},"Col 3")))))}}])&&p(n.prototype,r),c&&p(n,c),t}();x.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/scaffolding/FlexGrid/FlexGridContainer.js":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=n("./packages/unity-web/src/theme/breakpoints.js"),i=n("./packages/unity-web/src/scaffolding/Box/index.js"),l=n("./packages/unity-web/src/scaffolding/FlexGrid/config.js"),s=Object(r.default)(i.a,{target:"e1cks8la0"})("box-sizing:border-box;margin:0 auto;width:100%;",function(e){switch(e.size){case"xsmall":return Object(o.css)("max-width:",a.a.xsmallMaxWidth,"px;@media (max-width:",a.a.xsmallMaxWidth+16*l.a,"px){padding:0 ",l.a,"rem;width:100%;}");case"small":return Object(o.css)("max-width:",a.a.smallMaxWidth,"px;@media (max-width:",a.a.smallMaxWidth+16*l.a,"px){padding:0 ",l.a,"rem;width:100%;}");default:return Object(o.css)("max-width:",a.a.maxWidth,"px;@media (max-width:",a.a.maxWidth+16*l.a,"px){padding:0 ",l.a,"rem;width:100%;}")}},""),d=function(){return Object(o.jsx)("div",null)};s.propTypes=d.propTypes,t.b=s,d.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"FlexGridContainerProps",props:{size:{type:{name:"string"},required:!1,description:""}}}},"./packages/unity-web/src/scaffolding/FlexGrid/config.js":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=2},"./packages/unity-web/src/theme/breakpoints.js":function(e,t,n){"use strict";t.a={mobile:"575.98px",smartphone:"767.98px",tablet:"991.98px",xsmallMaxWidth:620,smallMaxWidth:820,maxWidth:1250}}}]);
//# sourceMappingURL=packages-unity-web-src-scaffolding-flex-grid-flex-grid.1440fd586bf40659facc.js.map