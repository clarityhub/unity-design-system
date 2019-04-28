(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"./packages/unity-core/lib/borders.js":function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={borderRadius:{default:4,rem:(0,((a=n("./packages/unity-core/lib/utilities/rem.js"))&&a.__esModule?a:{default:a}).default)(4)}};t.default=r},"./packages/unity-core/lib/colors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},highlight:{default:"rgba(0, 123, 255, .25)"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}}},"./packages/unity-core/lib/utilities/color.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.opacify=t.desaturate=t.lighten=t.darken=void 0;var a,r=(a=n("./node_modules/color/index.js"))&&a.__esModule?a:{default:a};var o={},l=function(e,t,n){var a="".concat(e,":").concat(t,":").concat(n);if(o[a])return o[a];var l=(0,r.default)(t)[e](n).rgb().string();return o[a]=l,l};t.darken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return l("darken",e,t)};t.lighten=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return l("lighten",e,t)};t.desaturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return l("desaturate",e,t)};t.opacify=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,n="opacify:".concat(e,":").concat(t);if(o[n])return o[n];var a=(0,r.default)(e).rgb().array();a.push(t);var l="rgba(".concat(a.join(","),")");return o[n]=l,l}},"./packages/unity-web/src/forms/Input/index.js":function(e,t,n){"use strict";var a=n("./packages/unity-web/src/forms/Input/Input.js");n.d(t,"a",function(){return a.a})},"./packages/unity-web/src/forms/InputGroup/InputGroup.js":function(e,t,n){"use strict";var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=Object(a.default)("div",{target:"eys7a3w0"})({name:"dqhpni",styles:"padding-top:1rem;position:relative;& + &{margin-top:1rem;}"});t.a=r},"./packages/unity-web/src/forms/InputGroup/index.js":function(e,t,n){"use strict";var a=n("./packages/unity-web/src/forms/InputGroup/InputGroup.js");n.d(t,"a",function(){return a.a})},"./packages/unity-web/src/forms/Label/Label.js":function(e,t,n){"use strict";var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),o=n("./packages/unity-core/lib/typography.js"),l=n("./packages/unity-core/lib/colors.js"),u=n.n(l),i=Object(a.default)("label",{target:"e25mnj60"})("color:",u.a.darkGray.default,";cursor:text;display:block;flex:1;font-size:0.9rem;line-height:1.2rem;left:0;padding:0 0.4rem;position:absolute;text-align:left;top:0;transition:0.2s ease-out;",o.variants.text.string," ",function(e){switch(e.variant){case"white":return"\n                color: ".concat(u.a.white.default,";\n                ");default:return""}}," ",function(e){return e.error&&Object(r.css)("color ",u.a.danger.default,";")},"");t.a=i},"./packages/unity-web/src/forms/Label/index.js":function(e,t,n){"use strict";var a=n("./packages/unity-web/src/forms/Label/Label.js");n.d(t,"a",function(){return a.a})},"./packages/unity-web/src/forms/LabelledInput/LabelledInput.js":function(e,t,n){"use strict";n.d(t,"a",function(){return v});var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/react/index.js"),o=n.n(r),l=n("./packages/unity-web/src/forms/Input/index.js"),u=n("./packages/unity-web/src/forms/Label/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,b,y,g=Object(a.default)("div",{target:"e14k2y3z0"})({name:"8atqhb",styles:"width:100%;"}),h=0,v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,d(t).call(this,e))).inputId="input-".concat(String(h)),h++,n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.label,n=e.error,a=e.value,r=e.defaultValue,i=p(e,["label","error","value","defaultValue"]),s={};return(r||a)&&(s["data-not-empty"]=!0),o.a.createElement(g,null,o.a.createElement(l.a,Object.assign({},i,{id:this.inputId,defaultValue:r,error:n,value:a},s,{label:t}),o.a.createElement(u.a,{htmlFor:this.inputId,error:n},t)))}}])&&s(n.prototype,a),i&&s(n,i),t}();y={type:"text"},(b="defaultProps")in(f=v)?Object.defineProperty(f,b,{value:y,enumerable:!0,configurable:!0,writable:!0}):f[b]=y,v.__docgenInfo={description:"",methods:[],displayName:"LabelledInput",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1},defaultValue:{type:{name:"string"},required:!1,description:""},label:{type:{name:"string"},required:!0,description:""},value:{type:{name:"string"},required:!1,description:""}}}},"./packages/unity-web/src/forms/LabelledInput/LabelledInput.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return w});var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),u=n("./packages/unity-web/src/forms/LabelledInput/LabelledInput.js"),i=n("./packages/unity-web/src/forms/InputGroup/index.js"),p=n("./packages/unity-web/src/forms/Input/index.js"),s=n("./packages/unity-web/src/scaffolding/Box/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function y(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(e){var n;return m(this,t),(n=y(this,g(t).call(this,e))).layout=null,n}return h(t,r.a.Component),b(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=d(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"labelledinput"}},"LabelledInput"),r.a.createElement(o.MDXTag,{name:"p",components:t},"The ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"LabelledInput")," component is a controlled input. You ",r.a.createElement("b",null,"must")," provide a\n",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"value")," and ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onChange"),"."),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"labelledinput--component"}},"<LabelledInput /",">"," component"),r.a.createElement(o.MDXTag,{name:"pre",components:t},r.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import LabelledInput from '@clarityhub/unity-web/lib/forms/LabelledInput';\n")),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(l.f,{of:u.a}),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"basic"}},"Basic"),r.a.createElement(o.MDXTag,{name:"p",components:t},"The following are basic examples of the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"LabelledInput")," which incorrectly do\nnot have values or listeners."),r.a.createElement(l.e,{__position:1,__code:'<p>Normal Input:</p>\n<Input value="Normal text input for comparison" />\n<p>LabelledInputs:</p>\n<InputGroup>\n  <LabelledInput label="State, Province, or Region" type="text" name="test" />\n</InputGroup>\n<InputGroup>\n  <LabelledInput\n    defaultValue="Arizona"\n    label="State, Province, or Region"\n    type="text"\n    name="test"\n    error\n  />\n</InputGroup>\n<InputGroup>\n  <LabelledInput label="Name" value="Hello World" disabled />\n</InputGroup>',__scope:{props:this?this.props:n,Component:a.Component,LabelledInput:u.a,InputGroup:i.a,Input:p.a,Box:s.a}},r.a.createElement("p",null,"Normal Input:"),r.a.createElement(p.a,{value:"Normal text input for comparison"}),r.a.createElement("p",null,"LabelledInputs:"),r.a.createElement(i.a,null,r.a.createElement(u.a,{label:"State, Province, or Region",type:"text",name:"test"})),r.a.createElement(i.a,null,r.a.createElement(u.a,{defaultValue:"Arizona",label:"State, Province, or Region",type:"text",name:"test",error:!0})),r.a.createElement(i.a,null,r.a.createElement(u.a,{label:"Name",value:"Hello World",disabled:!0}))),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"controlled"}},"Controlled"),r.a.createElement(l.e,{__position:2,__code:'() => {\n  class Example extends Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        value: \'\',\n      }\n    }\n    render() {\n      return (\n        <div>\n          <InputGroup>\n            <LabelledInput\n              label="Name"\n              onChange={e => this.setState({ value: e.target.value })}\n              value={this.state.value}\n            />\n          </InputGroup>\n          <InputGroup>\n            <LabelledInput\n              label="Name"\n              placeholder="Hello World"\n              onChange={e => this.setState({ value: e.target.value })}\n              value={this.state.value}\n            />\n          </InputGroup>\n        </div>\n      )\n    }\n  }\n\n  return <Example />\n}',__scope:{props:this?this.props:n,Component:a.Component,LabelledInput:u.a,InputGroup:i.a,Input:p.a,Box:s.a}},function(){var e=function(e){function t(e){var n;return m(this,t),(n=y(this,g(t).call(this,e))).state={value:""},n}return h(t,a["Component"]),b(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(u.a,{label:"Name",onChange:function(t){return e.setState({value:t.target.value})},value:this.state.value})),r.a.createElement(i.a,null,r.a.createElement(u.a,{label:"Name",placeholder:"Hello World",onChange:function(t){return e.setState({value:t.target.value})},value:this.state.value})))}}]),t}();return r.a.createElement(e,null)}),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"types"}},"Types"),r.a.createElement(l.e,{__position:3,__code:'<InputGroup>\n  <LabelledInput label="Your Email" type="email" name="email" />\n</InputGroup>\n<InputGroup>\n  <LabelledInput label="Select an amount" type="number" name="number" />\n</InputGroup>\n\n<InputGroup>\n  <LabelledInput label="This is a textarea" name="textarea" />\n</InputGroup>',__scope:{props:this?this.props:n,Component:a.Component,LabelledInput:u.a,InputGroup:i.a,Input:p.a,Box:s.a}},r.a.createElement(i.a,null,r.a.createElement(u.a,{label:"Your Email",type:"email",name:"email"})),r.a.createElement(i.a,null,r.a.createElement(u.a,{label:"Select an amount",type:"number",name:"number"})),r.a.createElement(i.a,null,r.a.createElement(u.a,{label:"This is a textarea",name:"textarea"}))),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"white-variant"}},"White Variant"),r.a.createElement(l.e,{__position:4,__code:'<Box style={{ backgroundColor: \'red\', padding: \'20px\' }}>\n  <InputGroup>\n    <LabelledInput\n      variant="white"\n      label="State, Province, or Region"\n      type="text"\n      name="test"\n    />\n  </InputGroup>\n  <InputGroup>\n    <LabelledInput\n      variant="white"\n      defaultValue="Arizona"\n      label="State, Province, or Region"\n      type="text"\n      name="test"\n      error\n    />\n  </InputGroup>\n  <InputGroup>\n    <LabelledInput\n      variant="white"\n      label="Name"\n      value="Hello World"\n      disabled\n    />\n  </InputGroup>\n</Box>',__scope:{props:this?this.props:n,Component:a.Component,LabelledInput:u.a,InputGroup:i.a,Input:p.a,Box:s.a}},r.a.createElement(s.a,{style:{backgroundColor:"red",padding:"20px"}},r.a.createElement(i.a,null,r.a.createElement(u.a,{variant:"white",label:"State, Province, or Region",type:"text",name:"test"})),r.a.createElement(i.a,null,r.a.createElement(u.a,{variant:"white",defaultValue:"Arizona",label:"State, Province, or Region",type:"text",name:"test",error:!0})),r.a.createElement(i.a,null,r.a.createElement(u.a,{variant:"white",label:"Name",value:"Hello World",disabled:!0})))))}}]),t}();w.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/scaffolding/Box/Box.js":function(e,t,n){"use strict";var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/prop-types/index.js"),o=Object(a.default)("div",{target:"e1b7liwf0"})("padding-top:",function(e){var t=e.withGutterTop,n=e.withGutter;return t||n?"1rem":"0rem"},";padding-bottom:",function(e){var t=e.withGutterBottom,n=e.withGutter;return t||n?"1rem":"0rem"},";padding-left:",function(e){var t=e.withGutterLeft,n=e.withGutter;return t||n?"1rem":"0rem"},";padding-right:",function(e){var t=e.withGutterRight,n=e.withGutter;return t||n?"1rem":"0rem"},";float:",function(e){var t=e.pull;return t||"inherit"},";");o.propTypes={pull:Object(r.oneOf)(["left","right"]),withGutter:r.bool,withGutterBottom:r.bool,withGutterLeft:r.bool,withGutterRight:r.bool,withGutterTop:r.bool},o.defaultProps={withGutter:!1,withGutterTop:!1,withGutterBottom:!1,withGutterLeft:!1,withGutterRight:!1},t.a=o},"./packages/unity-web/src/scaffolding/Box/index.js":function(e,t,n){"use strict";var a=n("./packages/unity-web/src/scaffolding/Box/Box.js");n.d(t,"a",function(){return a.a})}}]);
//# sourceMappingURL=packages-unity-web-src-forms-labelled-input-labelled-input.e0bce119375f652fbe57.js.map