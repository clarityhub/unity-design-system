(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"./packages/unity-core/lib/borders.js":function(e,r,t){"use strict";var n;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a={borderRadius:{default:4,rem:(0,((n=t("./packages/unity-core/lib/utilities/rem.js"))&&n.__esModule?n:{default:n}).default)(4)}};r.default=a},"./packages/unity-core/lib/colors.js":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.types=void 0;var n={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},a={primary:{background:n.primary,color:n.white},danger:{background:n.danger,color:n.white},success:{background:n.success,color:n.white},brand:{background:n.brand,color:n.white}};r.types=a;var o=n;r.default=o},"./packages/unity-core/lib/utilities/color.js":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.opacify=r.desaturate=r.saturate=r.lighten=r.darken=void 0;var n,a=(n=t("./node_modules/color/index.js"))&&n.__esModule?n:{default:n};var o={},s=function(e,r,t){var n="".concat(e,":").concat(r,":").concat(t);if(o[n])return o[n];var s=(0,a.default)(r)[e](t).rgb().string();return o[n]=s,s};r.darken=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return s("darken",e,r)};r.lighten=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return s("lighten",e,r)};r.saturate=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return s("saturate",e,r)};r.desaturate=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return s("desaturate",e,r)};r.opacify=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,t="opacify:".concat(e,":").concat(r);if(o[t])return o[t];var n=(0,a.default)(e).rgb().array();n.push(r);var s="rgba(".concat(n.join(","),")");return o[t]=s,s}},"./packages/unity-web/src/components/Badge/Badge.js":function(e,r,t){"use strict";t.d(r,"a",function(){return p});var n=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=t("./node_modules/react/index.js"),o=t.n(a),s=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),c=t("./packages/unity-core/lib/colors.js"),i=t.n(c),l=t("./packages/unity-core/lib/utilities/color.js"),u=t("./packages/unity-core/lib/typography.js"),d=Object(n.default)("div",{target:"e3hul5p0"})("overflow:visible;text-transform:none;display:inline-block;",u.variants.button.string," font-weight:600;text-align:center;white-space:nowrap;vertical-align:middle;border:0 solid transparent;padding:0.1rem 0.4rem;font-size:0.8rem;line-height:1.2;border-radius:2rem;position:relative;text-transform:uppercase;",function(e){switch(e.type){case"primary":return Object(s.css)("color:",i.a.primary.default,";background-color:",Object(l.opacify)(i.a.primary.default,.25),";");case"success":return Object(s.css)("color:",i.a.success.default,";background-color:",Object(l.opacify)(i.a.success.default,.25),";");case"danger":return Object(s.css)("color:",i.a.danger.default,";background-color:",Object(l.opacify)(i.a.danger.default,.25),";");case"notification":return Object(s.css)("color:",i.a.white.default,";background-color:",i.a.notification.default,";border-color:",i.a.notification.default,";");case"default":default:return Object(s.css)("color:",i.a.black.default,";background-color:",i.a.muted.default,";border-color:",i.a.muted.default,";")}},""),p=function(){return o.a.createElement("div",null)};d.propTypes=p.propTypes,r.b=d,p.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"BadgePropTypes",props:{children:{type:{name:"node"},required:!1,description:""},type:{type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'success'",computed:!1},{value:"'danger'",computed:!1},{value:"'notification'",computed:!1},{value:"'default'",computed:!1}]},required:!1,description:""}}}},"./packages/unity-web/src/components/Badge/index.js":function(e,r,t){"use strict";var n=t("./packages/unity-web/src/components/Badge/Badge.js");t.d(r,"a",function(){return n.b})},"./packages/unity-web/src/components/ProgressBar/Progress.mdx":function(e,r,t){"use strict";t.r(r);var n=t("./node_modules/react/index.js"),a=t.n(n),o=t("./node_modules/@mdx-js/tag/dist/index.js"),s=t("./node_modules/docz/dist/index.m.js"),c=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),i=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),l=t("./packages/unity-core/lib/borders.js"),u=t.n(l),d=t("./packages/unity-core/lib/colors.js"),p=t.n(d),m=Object(c.default)("div",{target:"e1u0vuor0"})({name:"79elbk",styles:"position:relative;"}),f=Object(c.default)("div",{target:"e1u0vuor1"})({name:"h6mjqw",styles:"display:flex;margin-bottom:0.5rem;align-items:center;justify-content:space-between;"}),g=Object(c.default)("div",{target:"e1u0vuor2"})("display:flex;overflow:hidden;height:0.8rem;margin-bottom:1rem;border-radius:",u.a.borderRadius.rem,"rem;background-color:",p.a.muted.default,";box-shadow:inset ",p.a.outlineShadow.default,";"),b=Object(c.default)("div",{target:"e1u0vuor3"})("height:auto;border-radius:0;box-shadow:none;display:flex;flex-direction:column;transition:width .6s ease;text-align:center;white-space:nowrap;color:",p.a.white.default,";background-color:",p.a.primary.default,";justify-content:center;",function(e){switch(e.type){case"notification":return Object(i.css)("background-color:",p.a.notification.default,";");case"danger":return Object(i.css)("background-color:",p.a.danger.default,";");case"success":return Object(i.css)("background-color:",p.a.success.default,";");case"primary":default:return Object(i.css)("background-color:",p.a.primary.default,";")}},""),y=function(e){var r=e.children,t=e.progress,n=void 0===t?0:t,o=e.type,s=void 0===o?"default":o;return a.a.createElement(m,null,a.a.createElement(f,null,a.a.createElement("div",null,r),a.a.createElement("div",null,a.a.createElement("span",null,n,"%"))),a.a.createElement(g,null,a.a.createElement(b,{type:s,role:"progressbar","aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(n,"%")}})))},h=y;y.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{progress:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},type:{defaultValue:{value:"'default'",computed:!1},type:{name:"string"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""}}};var v=t("./packages/unity-web/src/components/Badge/index.js");function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function k(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function E(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,r,t){return r&&E(e.prototype,r),t&&E(e,t),e}function O(e,r){return!r||"object"!==j(r)&&"function"!==typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&x(e,r)}function x(e,r){return(x=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}t.d(r,"default",function(){return C});var C=function(e){function r(e){var t;return k(this,r),(t=O(this,B(r).call(this,e))).layout=null,t}return P(r,a.a.Component),_(r,[{key:"render",value:function(){var e=this.props,r=e.components,t=w(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:r},a.a.createElement(o.MDXTag,{name:"h1",components:r,props:{id:"progressbar"}},"ProgressBar"),a.a.createElement(o.MDXTag,{name:"p",components:r},"Used to display the linear progress of an action. Any children components will be rendered above the Progress Bar"),a.a.createElement(o.MDXTag,{name:"pre",components:r},a.a.createElement(o.MDXTag,{name:"code",components:r,parentName:"pre",props:{className:"language-js"}},"import ProgressBar from '@clarityhub/unity-web/lib/components/ProgressBar';\n")),a.a.createElement(o.MDXTag,{name:"h2",components:r,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(s.f,{of:h}),a.a.createElement(o.MDXTag,{name:"h2",components:r,props:{id:"examples"}},"Examples"),a.a.createElement(o.MDXTag,{name:"h3",components:r,props:{id:"colors-and-percentages"}},"Colors and Percentages"),a.a.createElement(s.e,{__position:1,__code:'<ProgressBar primary progress={10} type="default">\n  <Badge type="primary">Uploading...</Badge>\n</ProgressBar>\n<br />\n<br />\n<ProgressBar progress={30} type="primary" />\n<br />\n<br />\n<ProgressBar primary progress={100} type="success">\n  <Badge type="success">Task Completed</Badge>\n</ProgressBar>\n<br />\n<br />\n<ProgressBar primary progress={97} type="danger">\n  <Badge type="danger">Upload Failed</Badge>\n</ProgressBar>\n<br />\n<br />\n<ProgressBar progress={100} type="notification" />\n<br />\n<br />',__scope:{props:this?this.props:t,Component:n.Component,ProgressBar:h,Badge:v.a}},a.a.createElement(h,{primary:!0,progress:10,type:"default"},a.a.createElement(v.a,{type:"primary"},"Uploading...")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(h,{progress:30,type:"primary"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(h,{primary:!0,progress:100,type:"success"},a.a.createElement(v.a,{type:"success"},"Task Completed")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(h,{primary:!0,progress:97,type:"danger"},a.a.createElement(v.a,{type:"danger"},"Upload Failed")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(h,{progress:100,type:"notification"}),a.a.createElement("br",null),a.a.createElement("br",null)),a.a.createElement(s.e,{__position:2,__code:'() => {\n  class AnimatedProgress extends Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        progress: parseInt((+new Date() / 100) % 100),\n      }\n    }\n    componentDidMount() {\n      this.timer = setInterval(() => {\n        this.setState({\n          progress: parseInt((+new Date() / 100) % 100),\n        })\n      }, 1000)\n    }\n\n    componentWillUnmount() {\n      if (this.timer) {\n        clearInterval(this.timer)\n      }\n    }\n\n    render() {\n      const { progress } = this.state\n\n      return (\n        <ProgressBar primary progress={progress} type="default">\n          <Badge type="primary">Uploading...</Badge>\n        </ProgressBar>\n      )\n    }\n  }\n\n  return <AnimatedProgress />\n}',__scope:{props:this?this.props:t,Component:n.Component,ProgressBar:h,Badge:v.a}},function(){var e=function(e){function r(e){var t;return k(this,r),(t=O(this,B(r).call(this,e))).state={progress:parseInt(+new Date/100%100)},t}return P(r,n["Component"]),_(r,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){e.setState({progress:parseInt(+new Date/100%100)})},1e3)}},{key:"componentWillUnmount",value:function(){this.timer&&clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state.progress;return a.a.createElement(h,{primary:!0,progress:e,type:"default"},a.a.createElement(v.a,{type:"primary"},"Uploading..."))}}]),r}();return a.a.createElement(e,null)}))}}]),r}();C.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-components-progress-bar-progress.1440fd586bf40659facc.js.map