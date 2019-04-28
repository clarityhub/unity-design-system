(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"./packages/unity-web/src/forms/Checkbox/Checkbox.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/forms/Selection/index.js");t.a=Object(o.a)("checkbox")},"./packages/unity-web/src/forms/InputGroup/InputGroup.js":function(e,t,n){"use strict";var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=Object(o.default)("div",{target:"eys7a3w0"})({name:"dqhpni",styles:"padding-top:1rem;position:relative;& + &{margin-top:1rem;}"});t.a=r},"./packages/unity-web/src/forms/InputGroup/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/forms/InputGroup/InputGroup.js");n.d(t,"a",function(){return o.a})},"./packages/unity-web/src/forms/Label/Label.js":function(e,t,n){"use strict";var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=n("./packages/unity-core/lib/typography.js"),s=n("./packages/unity-core/lib/colors.js"),l=n.n(s),c=Object(o.default)("label",{target:"e25mnj60"})("color:",l.a.darkGray.default,";cursor:text;display:block;flex:1;font-size:0.9rem;line-height:1.2rem;left:0;padding:0 0.4rem;position:absolute;text-align:left;top:0;transition:0.2s ease-out;",a.variants.text.string," ",function(e){switch(e.variant){case"white":return"\n                color: ".concat(l.a.white.default,";\n                ");default:return""}}," ",function(e){return e.error&&Object(r.css)("color ",l.a.danger.default,";")},"");t.a=c},"./packages/unity-web/src/forms/Label/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/forms/Label/Label.js");n.d(t,"a",function(){return o.a})},"./packages/unity-web/src/forms/LabelledCheckbox/LabelledCheckbox.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),l=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),c=n("./packages/unity-web/src/forms/Checkbox/Checkbox.js"),i=n("./packages/unity-web/src/forms/Label/index.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=Object(l.default)("div",{target:"e17itcd0"})({name:"8atqhb",styles:"width:100%;"}),g=0,v=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=d(t).call(this,e),n=!r||"object"!==u(r)&&"function"!==typeof r?m(o):r,y(m(n),"onChange",function(e,t){e.preventDefault(),n.setState({selected:!t.selected})}),n.checkboxId="Checkbox-".concat(String(g)),g++,n.state={selected:n.props.selected||!1},n}var n,a,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidUpdate",value:function(e){e.selected!==this.props.selected&&this.setState({selected:this.props.selected})}},{key:"render",value:function(){var e=this.state.selected,t=this.props,n=t.label,o=t.value,a=t.defaultValue,s=t.variant,l=p(t,["label","value","defaultValue","variant"]),u={};return(a||o)&&(u["data-not-empty"]=!0),r.a.createElement(h,null,r.a.createElement(c.a,Object.assign({},l,{id:this.checkboxId,defaultValue:a,value:o,selected:e,onChange:this.onChange,variant:s},u,{label:n}),r.a.createElement(i.a,{variant:s,htmlFor:this.checkboxId},n)))}}])&&b(n.prototype,a),s&&b(n,s),t}();y(v,"defaultProps",{type:"text"}),v.__docgenInfo={description:"",methods:[{name:"onChange",docblock:null,modifiers:[],params:[{name:"e",type:null},{name:"ref",type:null}],returns:null}],displayName:"LabelledCheckbox",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1},defaultValue:{type:{name:"string"},required:!1,description:""},label:{type:{name:"string"},required:!0,description:""},value:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"string"},required:!1,description:""}}};var k=n("./packages/unity-web/src/forms/InputGroup/index.js");function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return E});var E=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=O(this,C(t).call(this,e))).layout=null,n}var n,l,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,r.a.Component),n=t,(l=[{key:"render",value:function(){var e=this.props,t=e.components,n=w(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"labelledcheckbox"}},"LabelledCheckbox"),r.a.createElement(a.MDXTag,{name:"p",components:t},"The ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"LabelledCheckbox")," component is a controlled input. You ",r.a.createElement("b",null,"must")," provide a\n",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"selected")," and ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onChange"),"."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"labelledcheckbox--component"}},"<LabelledCheckbox /",">"," component"),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import LabelledCheckbox from '@clarityhub/unity-web/lib/forms/LabelledCheckbox';\n")),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(s.f,{of:v}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"controlled-radio-group"}},"Controlled Radio Group"),r.a.createElement(s.e,{__position:1,__code:'<InputGroup>\n  <LabelledCheckbox label="Kittens" value="kittens" name="test" selected />\n  <LabelledCheckbox label="Puppies" value="puppies" name="test" error />\n  <LabelledCheckbox label="Name" value="Monkeys" disabled />\n</InputGroup>',__scope:{props:this?this.props:n,Component:o.Component,LabelledCheckbox:v,InputGroup:k.a}},r.a.createElement(k.a,null,r.a.createElement(v,{label:"Kittens",value:"kittens",name:"test",selected:!0}),r.a.createElement(v,{label:"Puppies",value:"puppies",name:"test",error:!0}),r.a.createElement(v,{label:"Name",value:"Monkeys",disabled:!0}))))}}])&&x(n.prototype,l),c&&x(n,c),t}();E.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-forms-labelled-checkbox-labelled-checkbox.e0bce119375f652fbe57.js.map