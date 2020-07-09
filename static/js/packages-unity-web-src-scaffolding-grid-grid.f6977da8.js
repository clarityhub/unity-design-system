(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"./packages/unity-core/lib/borders.js":function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={borderRadius:{default:4,rem:(0,((r=n("./packages/unity-core/lib/utilities/rem.js"))&&r.__esModule?r:{default:r}).default)(4)}};t.default=a},"./packages/unity-core/lib/colors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var r={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},a={primary:{background:r.primary,color:r.white},danger:{background:r.danger,color:r.white},success:{background:r.success,color:r.white},brand:{background:r.brand,color:r.white}};t.types=a;var o=r;t.default=o},"./packages/unity-core/lib/utilities/color.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.opacify=t.desaturate=t.saturate=t.lighten=t.darken=void 0;var r,a=(r=n("./node_modules/color/index.js"))&&r.__esModule?r:{default:r};var o={},i=function(e,t,n){var r="".concat(e,":").concat(t,":").concat(n);if(o[r])return o[r];var i=(0,a.default)(t)[e](n).rgb().string();return o[r]=i,i};t.darken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("darken",e,t)};t.lighten=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("lighten",e,t)};t.saturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("saturate",e,t)};t.desaturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("desaturate",e,t)};t.opacify=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,n="opacify:".concat(e,":").concat(t);if(o[n])return o[n];var r=(0,a.default)(e).rgb().array();r.push(t);var i="rgba(".concat(r.join(","),")");return o[n]=i,i}},"./packages/unity-web/lib/theme/breakpoints.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={mobile:"575.98px",smartphone:"767.98px",tablet:"991.98px",xsmallMaxWidth:620,smallMaxWidth:820,maxWidth:1250}},"./packages/unity-web/src/scaffolding/Grid/Grid.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),a=n.n(r),o=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),d=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),l=n("./packages/unity-web/lib/theme/breakpoints.js"),u=n.n(l),c=Object(d.default)("div",{target:"ewvoqt80"})("display:grid;grid-template-columns:repeat(2,1fr);grid-gap:2rem;@media(max-width:",u.a.tablet,"){grid-template-columns:repeat(1,1fr);grid-gap:1rem;}"),s=Object(d.default)("div",{target:"ewvoqt81"})(""),p=n("./packages/unity-web/src/components/Card/index.js");function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return v});var v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=b(this,g(t).call(this,e))).layout=null,n}var n,d,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a.a.Component),n=t,(d=[{key:"render",value:function(){var e=this.props,t=e.components,n=m(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:t},a.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"grid"}},"Grid"),a.a.createElement(o.MDXTag,{name:"p",components:t},"Show a 2 column grid that changes to 1 column at mobile size. Useful for\ndisplaying a list of Cards."),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"grid-versus-flexgrid"}},"Grid versus FlexGrid"),a.a.createElement(o.MDXTag,{name:"p",components:t},"FlexGrid is useful when you need to layout a set of visuals and you don't care\nabout the size of the device."),a.a.createElement(o.MDXTag,{name:"p",components:t},"You should use Grid when you need to display a list of item data and you want\nto display the data in Cards (or other similar components)."),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"grid--component"}},"<Grid /",">"," Component"),a.a.createElement(o.MDXTag,{name:"pre",components:t},a.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { GridLayout, GridItem } from '@clarityhub/unity-web/lib/scaffolding/Grid';\n")),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"gridlayout-props"}},"GridLayout Props"),a.a.createElement(i.f,{of:c}),a.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"griditem-props"}},"GridItem Props"),a.a.createElement(i.f,{of:s}),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),a.a.createElement(i.e,{__position:2,__code:"<GridLayout>\n  <GridItem>\n    <Card>\n      <CardBody>1</CardBody>\n    </Card>\n  </GridItem>\n  <GridItem>\n    <Card>\n      <CardBody>2</CardBody>\n    </Card>\n  </GridItem>\n  <GridItem>\n    <Card>\n      <CardBody>3</CardBody>\n    </Card>\n  </GridItem>\n  <GridItem>\n    <Card>\n      <CardBody>4</CardBody>\n    </Card>\n  </GridItem>\n  <GridItem>\n    <Card>\n      <CardBody>5</CardBody>\n    </Card>\n  </GridItem>\n</GridLayout>",__scope:{props:this?this.props:n,Component:r.Component,GridLayout:c,GridItem:s,Card:p.f,CardBody:p.b}},a.a.createElement(c,null,a.a.createElement(s,null,a.a.createElement(p.f,null,a.a.createElement(p.b,null,"1"))),a.a.createElement(s,null,a.a.createElement(p.f,null,a.a.createElement(p.b,null,"2"))),a.a.createElement(s,null,a.a.createElement(p.f,null,a.a.createElement(p.b,null,"3"))),a.a.createElement(s,null,a.a.createElement(p.f,null,a.a.createElement(p.b,null,"4"))),a.a.createElement(s,null,a.a.createElement(p.f,null,a.a.createElement(p.b,null,"5"))))))}}])&&y(n.prototype,d),l&&y(n,l),t}();v.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-scaffolding-grid-grid.1440fd586bf40659facc.js.map