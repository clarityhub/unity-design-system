(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"./packages/unity-core/lib/borders.js":function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={borderRadius:{default:4,rem:(0,((n=r("./packages/unity-core/lib/utilities/rem.js"))&&n.__esModule?n:{default:n}).default)(4)}};t.default=a},"./packages/unity-core/lib/colors.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var n={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},a={primary:{background:n.primary,color:n.white},danger:{background:n.danger,color:n.white},success:{background:n.success,color:n.white},brand:{background:n.brand,color:n.white}};t.types=a;var o=n;t.default=o},"./packages/unity-core/lib/typography.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sizes=t.variants=t.fontFamilies=void 0;var n,a=(n=r("./packages/unity-core/lib/utilities/rem.js"))&&n.__esModule?n:{default:n};t.fontFamilies={"Crimson Text":"300,400,600,700",Roboto:"400,800","Open Sans":"300,400,600,700"};t.variants={heading:{fontFamily:"Futura, 'Trebuchet MS', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: Futura, 'Trebuchet MS', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},secondary:{fontFamily:"'Roboto', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: 'Roboto', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},text:{fontFamily:"'Open Sans', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: 'Open Sans', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},readable:{fontFamily:'\'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontWeight:400,string:'\n\t\t\tfont-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\t\t\tfont-weight: 400;\n\t\t'},button:{fontFamily:"'Open Sans', Arial, sans-serif",fontWeight:600,letterSpacing:"0.35px",string:"\n\t\t\tfont-family: 'Open Sans', Arial, sans-serif;\n\t\t\tfont-weight: 600;\n\t\t\tletter-spacing: 0.35px;\n\t\t"}};var o={h1:{px:32,rem:(0,a.default)(32),lineHeight:{px:44.8,unitless:1.4}},h2:{px:26,rem:(0,a.default)(26),lineHeight:{px:36.4,unitless:1.4}},h3:{px:21,rem:(0,a.default)(21),lineHeight:{px:25.2,unitless:1.2}},h4:{px:19,rem:(0,a.default)(19),lineHeight:{px:22.8,unitless:1.2}},h5:{px:16,rem:(0,a.default)(16),lineHeight:{px:19.2,unitless:1.2}},h6:{px:14,rem:(0,a.default)(14),lineHeight:{px:16.8,unitless:1.2}},p:{px:21,rem:(0,a.default)(21),lineHeight:{px:33.6,unitless:1.6}},text:{px:16,rem:(0,a.default)(16),lineHeight:{px:24,unitless:1.5}},text2:{px:16,rem:(0,a.default)(16),lineHeight:{px:25.6,unitless:1.6}},subtext:{px:14.4,rem:(0,a.default)(14.4),lineHeight:{px:19.6,unitless:1.4}}};t.sizes=o},"./packages/unity-core/lib/utilities/color.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.opacify=t.desaturate=t.saturate=t.lighten=t.darken=void 0;var n,a=(n=r("./node_modules/color/index.js"))&&n.__esModule?n:{default:n};var o={},s=function(e,t,r){var n="".concat(e,":").concat(t,":").concat(r);if(o[n])return o[n];var s=(0,a.default)(t)[e](r).rgb().string();return o[n]=s,s};t.darken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return s("darken",e,t)};t.lighten=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return s("lighten",e,t)};t.saturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return s("saturate",e,t)};t.desaturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return s("desaturate",e,t)};t.opacify=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,r="opacify:".concat(e,":").concat(t);if(o[r])return o[r];var n=(0,a.default)(e).rgb().array();n.push(t);var s="rgba(".concat(n.join(","),")");return o[r]=s,s}},"./packages/unity-core/lib/utilities/rem.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return e/t}},"./packages/unity-web/src/components/Badge/Badge.js":function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=r("./node_modules/react/index.js"),o=r.n(a),s=r("./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"),i=r("./node_modules/@emotion/core/dist/core.browser.esm.js"),l=r("./packages/unity-core/lib/colors.js"),c=r.n(l),u=r("./packages/unity-core/lib/utilities/color.js"),d=r("./packages/unity-core/lib/typography.js"),p=Object(n.default)("div",{shouldForwardProp:function(e){return Object(s.default)(e)&&!["type"].includes(e)},target:"e3hul5p0"})("overflow:visible;text-transform:none;display:inline-block;",d.variants.button.string," font-weight:600;text-align:center;white-space:nowrap;vertical-align:middle;border:0 solid transparent;padding:0.1rem 0.4rem;font-size:0.8rem;line-height:1.2;border-radius:2rem;position:relative;text-transform:uppercase;",(function(e){switch(e.type){case"primary":return Object(i.css)("color:",c.a.primary.default,";background-color:",Object(u.opacify)(c.a.primary.default,.25),";");case"success":return Object(i.css)("color:",c.a.success.default,";background-color:",Object(u.opacify)(c.a.success.default,.25),";");case"danger":return Object(i.css)("color:",c.a.danger.default,";background-color:",Object(u.opacify)(c.a.danger.default,.25),";");case"notification":return Object(i.css)("color:",c.a.white.default,";background-color:",c.a.notification.default,";border-color:",c.a.notification.default,";");case"default":default:return Object(i.css)("color:",c.a.black.default,";background-color:",c.a.muted.default,";border-color:",c.a.muted.default,";")}}),""),f=function(){return o.a.createElement("div",null)};p.propTypes=f.propTypes,t.b=p,f.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"BadgePropTypes",props:{children:{type:{name:"node"},required:!1,description:""},type:{type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'success'",computed:!1},{value:"'danger'",computed:!1},{value:"'notification'",computed:!1},{value:"'default'",computed:!1}]},required:!1,description:""}}}},"./packages/unity-web/src/components/ProgressBar/Progress.mdx":function(e,t,r){"use strict";r.r(t);var n=r("./node_modules/react/index.js"),a=r.n(n),o=r("./node_modules/@mdx-js/tag/dist/index.js"),s=r("./node_modules/docz/dist/index.m.js"),i=r("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),l=r("./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"),c=r("./node_modules/@emotion/core/dist/core.browser.esm.js"),u=r("./packages/unity-core/lib/borders.js"),d=r.n(u),p=r("./packages/unity-core/lib/colors.js"),f=r.n(p);var m=Object(i.default)("div",{target:"e1u0vuor0"})({name:"79elbk",styles:"position:relative;"}),g=Object(i.default)("div",{target:"e1u0vuor1"})({name:"h6mjqw",styles:"display:flex;margin-bottom:0.5rem;align-items:center;justify-content:space-between;"}),y=Object(i.default)("div",{target:"e1u0vuor2"})("display:flex;overflow:hidden;height:0.8rem;margin-bottom:1rem;border-radius:",d.a.borderRadius.rem,"rem;background-color:",f.a.muted.default,";box-shadow:inset ",f.a.outlineShadow.default,";"),b=Object(i.default)("div",{shouldForwardProp:function(e){return Object(l.default)(e)&&!["type"].includes(e)},target:"e1u0vuor3"})("height:auto;border-radius:0;box-shadow:none;display:flex;flex-direction:column;transition:width .6s ease;text-align:center;white-space:nowrap;color:",f.a.white.default,";background-color:",f.a.primary.default,";justify-content:center;",(function(e){switch(e.type){case"notification":return Object(c.css)("background-color:",f.a.notification.default,";");case"danger":return Object(c.css)("background-color:",f.a.danger.default,";");case"success":return Object(c.css)("background-color:",f.a.success.default,";");case"primary":default:return Object(c.css)("background-color:",f.a.primary.default,";")}}),""),h=function(e){var t=e.children,r=e.progress,n=void 0===r?0:r,o=e.type,s=void 0===o?"default":o;return a.a.createElement(m,null,a.a.createElement(g,null,a.a.createElement("div",null,t),a.a.createElement("div",null,a.a.createElement("span",null,n,"%"))),a.a.createElement(y,null,a.a.createElement(b,{type:s,role:"progressbar","aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(n,"%")}})))},v=h;h.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{progress:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},type:{defaultValue:{value:"'default'",computed:!1},type:{name:"string"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""}}};var j=r("./packages/unity-web/src/components/Badge/Badge.js");function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t,r){return t&&k(e.prototype,t),r&&k(e,r),e}function O(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=F(e);if(t){var a=F(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return S(this,r)}}function S(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"default",(function(){return C}));var C=function(e){O(r,e);var t=B(r);function r(e){var n;return _(this,r),(n=t.call(this,e)).layout=null,n}return E(r,[{key:"render",value:function(){var e=this.props,t=e.components,r=x(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:t},a.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"progressbar"}},"ProgressBar"),a.a.createElement(o.MDXTag,{name:"p",components:t},"Used to display the linear progress of an action. Any children components will be rendered above the Progress Bar"),a.a.createElement(o.MDXTag,{name:"pre",components:t},a.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import ProgressBar from '@clarityhub/unity-web/lib/components/ProgressBar';\n")),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(s.f,{of:v}),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),a.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"colors-and-percentages"}},"Colors and Percentages"),a.a.createElement(s.e,{__position:1,__code:'<ProgressBar primary progress={10} type="default">\n  <Badge type="primary">Uploading...</Badge>\n</ProgressBar>\n<br />\n<br />\n<ProgressBar progress={30} type="primary" />\n<br />\n<br />\n<ProgressBar primary progress={100} type="success">\n  <Badge type="success">Task Completed</Badge>\n</ProgressBar>\n<br />\n<br />\n<ProgressBar primary progress={97} type="danger">\n  <Badge type="danger">Upload Failed</Badge>\n</ProgressBar>\n<br />\n<br />\n<ProgressBar progress={100} type="notification" />\n<br />\n<br />',__scope:{props:this?this.props:r,Component:n.Component,ProgressBar:v,Badge:j.b}},a.a.createElement(v,{primary:!0,progress:10,type:"default"},a.a.createElement(j.b,{type:"primary"},"Uploading...")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(v,{progress:30,type:"primary"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(v,{primary:!0,progress:100,type:"success"},a.a.createElement(j.b,{type:"success"},"Task Completed")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(v,{primary:!0,progress:97,type:"danger"},a.a.createElement(j.b,{type:"danger"},"Upload Failed")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(v,{progress:100,type:"notification"}),a.a.createElement("br",null),a.a.createElement("br",null)),a.a.createElement(s.e,{__position:2,__code:'() => {\n  class AnimatedProgress extends Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        progress: parseInt((+new Date() / 100) % 100),\n      }\n    }\n    componentDidMount() {\n      this.timer = setInterval(() => {\n        this.setState({\n          progress: parseInt((+new Date() / 100) % 100),\n        })\n      }, 1000)\n    }\n\n    componentWillUnmount() {\n      if (this.timer) {\n        clearInterval(this.timer)\n      }\n    }\n\n    render() {\n      const { progress } = this.state\n\n      return (\n        <ProgressBar primary progress={progress} type="default">\n          <Badge type="primary">Uploading...</Badge>\n        </ProgressBar>\n      )\n    }\n  }\n\n  return <AnimatedProgress />\n}',__scope:{props:this?this.props:r,Component:n.Component,ProgressBar:v,Badge:j.b}},(function(){var e=function(e){O(r,e);var t=B(r);function r(e){var n;return _(this,r),(n=t.call(this,e)).state={progress:parseInt(+new Date/100%100)},n}return E(r,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.setState({progress:parseInt(+new Date/100%100)})}),1e3)}},{key:"componentWillUnmount",value:function(){this.timer&&clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state.progress;return a.a.createElement(v,{primary:!0,progress:e,type:"default"},a.a.createElement(j.b,{type:"primary"},"Uploading..."))}}]),r}(n.Component);return a.a.createElement(e,null)})))}}]),r}(a.a.Component);C.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-components-progress-bar-progress.26ac8c5cdd5aa6e0d6b9.js.map