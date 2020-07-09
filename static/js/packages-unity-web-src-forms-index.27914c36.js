(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"./packages/unity-web/src/components/Notification/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/components/Notification/Notification.js");n.d(t,"a",function(){return r.a})},"./packages/unity-web/src/forms/Input/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/Input/Input.js");n.d(t,"a",function(){return r.b})},"./packages/unity-web/src/forms/InputGroup/InputGroup.js":function(e,t,n){"use strict";var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=n("./packages/unity-web/src/forms/Input/Input.js"),o=Object(r.default)("div",{target:"eys7a3w0"})("display:flex;padding-top:1rem;position:relative;& + &{margin-top:1rem;}& >:not(:last-child) ",a.a,"{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important;}");t.a=o},"./packages/unity-web/src/forms/InputGroup/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/InputGroup/InputGroup.js");n.d(t,"a",function(){return r.a})},"./packages/unity-web/src/forms/Label/Label.js":function(e,t,n){"use strict";var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),o=n("./packages/unity-core/lib/typography.js"),l=n("./packages/unity-core/lib/colors.js"),i=n.n(l),u=Object(r.default)("label",{target:"e25mnj60"})("color:",i.a.darkGray.default,";cursor:text;display:block;flex:1;font-size:0.9rem;line-height:1.2rem;left:0;padding:0 0.4rem;position:absolute;text-align:left;top:0;transition:0.2s ease-out;",o.variants.text.string," ",function(e){switch(e.variant){case"white":return"\n                color: ".concat(i.a.white.default,";\n                ");default:return""}}," ",function(e){return e.error&&Object(a.css)("color ",i.a.danger.default,";")},"");t.a=u},"./packages/unity-web/src/forms/Label/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/Label/Label.js");n.d(t,"a",function(){return r.a})},"./packages/unity-web/src/forms/LabelledInput/LabelledInput.js":function(e,t,n){"use strict";n.d(t,"a",function(){return v});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=n("./node_modules/react/index.js"),o=n.n(a),l=n("./packages/unity-web/src/forms/Input/index.js"),i=n("./packages/unity-web/src/forms/Label/index.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,m,y,h=Object(r.default)("div",{target:"e14k2y3z0"})({name:"8atqhb",styles:"width:100%;"}),g=0,v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,d(t).call(this,e))).inputId="input-".concat(String(g)),g++,n}var n,r,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.label,n=e.error,r=e.value,a=e.defaultValue,u=e.prefixIcon,c=s(e,["label","error","value","defaultValue","prefixIcon"]),p={};return(a||r)&&(p["data-not-empty"]=!0),o.a.createElement(h,null,o.a.createElement(l.a,Object.assign({},c,{id:this.inputId,defaultValue:a,error:n,prefixIcon:u,value:r},p,{label:t}),o.a.createElement(i.a,{htmlFor:this.inputId,error:n},t)))}}])&&c(n.prototype,r),u&&c(n,u),t}();y={type:"text"},(m="defaultProps")in(b=v)?Object.defineProperty(b,m,{value:y,enumerable:!0,configurable:!0,writable:!0}):b[m]=y,v.__docgenInfo={description:"",methods:[],displayName:"LabelledInput",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1},defaultValue:{type:{name:"string"},required:!1,description:""},label:{type:{name:"string"},required:!0,description:""},prefixIcon:{type:{name:"node"},required:!1,description:""},value:{type:{name:"string"},required:!1,description:""}}}},"./packages/unity-web/src/forms/LabelledInput/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/LabelledInput/LabelledInput.js");n.d(t,"a",function(){return r.a})},"./packages/unity-web/src/forms/LabelledRadio/LabelledRadio.js":function(e,t,n){"use strict";var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=n("./node_modules/react/index.js"),o=n.n(a),l=n("./packages/unity-web/src/forms/Radio/Radio.js"),i=n("./packages/unity-web/src/forms/Label/index.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return v});var b,m,y,h=Object(r.default)("div",{target:"ehdlq7p0"})({name:"8atqhb",styles:"width:100%;"}),g=0,v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,d(t).call(this,e))).radioId="Radio-".concat(String(g)),g++,n}var n,r,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.label,n=e.value,r=e.defaultValue,a=e.variant,u=s(e,["label","value","defaultValue","variant"]),c={};return(r||n)&&(c["data-not-empty"]=!0),o.a.createElement(h,null,o.a.createElement(l.a,Object.assign({},u,{id:this.radioId,defaultValue:r,value:n,variant:a},c,{label:t}),o.a.createElement(i.a,{htmlFor:this.radioId,variant:a},t)))}}])&&c(n.prototype,r),u&&c(n,u),t}();y={type:"text"},(m="defaultProps")in(b=v)?Object.defineProperty(b,m,{value:y,enumerable:!0,configurable:!0,writable:!0}):b[m]=y,v.__docgenInfo={description:"",methods:[],displayName:"LabelledRadio",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1},defaultValue:{type:{name:"string"},required:!1,description:""},label:{type:{name:"string"},required:!0,description:""},value:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"string"},required:!1,description:""}}}},"./packages/unity-web/src/forms/LabelledTextarea/LabelledTextarea.js":function(e,t,n){"use strict";var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=n("./node_modules/react/index.js"),o=n.n(a),l=n("./packages/unity-web/src/forms/Textarea/Textarea.js"),i=n("./packages/unity-web/src/forms/Label/index.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return h});var m=Object(r.default)("div",{target:"e1qloykc0"})({name:"8atqhb",styles:"width:100%;"}),y=0,h=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=p(t).call(this,e),n=!a||"object"!==u(a)&&"function"!==typeof a?d(r):a,b(d(n),"calcSize",function(){var e=n.props.maxLines;if(n.textarea){var t=n.textarea.scrollHeight+20,r=20*e+20;e&&t>r?n.setState({height:r}):n.setState({height:n.textarea.scrollHeight+20})}}),b(d(n),"animationFrameCb",function(){n.calcSize(),n.stop||window.requestAnimationFrame(n.animationFrameCb)}),b(d(n),"onMouseDown",function(){n.stop=!1,window.requestAnimationFrame(n.animationFrameCb),window.addEventListener("mouseup",n._onMouseUp)}),b(d(n),"onMouseUp",function(){n.stop=!0,window.removeEventListener("mouseup",n._onMouseUp)}),n.textareaId="textarea-".concat(String(y)),y++,n.state={height:0},n._onMouseUp=n.onMouseUp.bind(d(n)),n}var n,r,h;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){this.calcSize()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.calcSize()}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,r=t.value,a=t.defaultValue,u=s(t,["label","value","defaultValue"]),c=this.state.height,p={};return(a||r)&&(p["data-not-empty"]=!0),o.a.createElement(m,null,o.a.createElement(l.a,Object.assign({},u,{id:this.textareaId,targetRef:function(t){return e.textarea=t},defaultValue:a,value:r},p,{onMouseDown:this.onMouseDown,label:n,height:"".concat(c,"px")}),o.a.createElement(i.a,{htmlFor:this.textareaId},n)))}}])&&c(n.prototype,r),h&&c(n,h),t}();b(h,"defaultProps",{maxLines:5,type:"text"}),h.__docgenInfo={description:"",methods:[{name:"calcSize",docblock:null,modifiers:[],params:[],returns:null},{name:"animationFrameCb",docblock:null,modifiers:[],params:[],returns:null},{name:"onMouseDown",docblock:null,modifiers:[],params:[],returns:null},{name:"onMouseUp",docblock:null,modifiers:[],params:[],returns:null}],displayName:"LabelledTextarea",props:{maxLines:{defaultValue:{value:"5",computed:!1},type:{name:"number"},required:!1,description:""},type:{defaultValue:{value:"'text'",computed:!1},required:!1},defaultValue:{type:{name:"string"},required:!1,description:""},label:{type:{name:"string"},required:!0,description:""},value:{type:{name:"string"},required:!1,description:""}}}},"./packages/unity-web/src/forms/LabelledTextarea/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/LabelledTextarea/LabelledTextarea.js");n.d(t,"a",function(){return r.a})},"./packages/unity-web/src/forms/Radio/Radio.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/Selection/index.js");t.a=Object(r.a)("radio")},"./packages/unity-web/src/forms/RadioGroup/RadioGroup.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),a=n.n(r),o=n("./packages/unity-core/lib/utilities/noop.js"),l=n.n(o);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,f,b,m=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=s(t).call(this,e))||"object"!==i(a)&&"function"!==typeof a?c(r):a).state={selected:e.defaultSelected},n.handleChange=n._handleChange.bind(c(n)),n}var n,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),n=t,(o=[{key:"_handleChange",value:function(e,t){var n=this;this.setState({selected:t.value},function(){(0,n.props.onChange)(e,t)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.selected,o=this.state.selected;return a.a.createElement("div",{role:"radiogroup"},a.a.Children.map(n,function(t){return a.a.cloneElement(t,{onChange:e.handleChange,selected:t.props.value===r||t.props.value===o})}))}}])&&u(n.prototype,o),l&&u(n,l),t}();d=m,f="defaultProps",b={defaultSelected:null,onChange:l.a,selectOverride:null},f in d?Object.defineProperty(d,f,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[f]=b,t.a=m,m.__docgenInfo={description:"",methods:[{name:"_handleChange",docblock:null,modifiers:[],params:[{name:"e",type:null},{name:"input",type:null}],returns:null}],displayName:"RadioGroup",props:{defaultSelected:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},onChange:{defaultValue:{value:"noop",computed:!0},type:{name:"func"},required:!1,description:""},selectOverride:{defaultValue:{value:"null",computed:!1},required:!1},children:{type:{name:"func"},required:!0,description:""},selected:{type:{name:"string"},required:!1,description:"The onChange callback will be called with an event and a checkbox reference:\n`(event, input) => {}`."}}}},"./packages/unity-web/src/forms/RadioGroup/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/RadioGroup/RadioGroup.js");n.d(t,"a",function(){return r.a})},"./packages/unity-web/src/forms/Textarea/Textarea.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),a=n.n(r),o=n("./packages/unity-web/src/forms/Input/index.js");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=function(e){var t=l({},e);return a.a.createElement(o.a,Object.assign({},t,{inputType:"textarea",as:"textarea"}))};t.a=i,i.__docgenInfo={description:"",methods:[],displayName:"Textarea"}},"./packages/unity-web/src/forms/index.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),a=n.n(r),o=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),i=n("./packages/unity-web/src/forms/InputGroup/index.js"),u=n("./packages/unity-web/src/forms/LabelledInput/index.js"),s=n("./packages/unity-web/src/forms/LabelledTextarea/index.js"),c=n("./packages/unity-web/src/forms/RadioGroup/index.js"),p=n("./packages/unity-web/src/forms/LabelledRadio/LabelledRadio.js"),d=n("./packages/unity-web/src/components/Typography/index.js"),f=n("./packages/unity-web/src/components/Notification/index.js");function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return w});var w=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=h(this,g(t).call(this,e))).layout=null,n}var n,r,b;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=m(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:t},a.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"forms"}},"Forms"),a.a.createElement(o.MDXTag,{name:"p",components:t},"Forms are a standard way for users to provide, submit,\nand edit data."),a.a.createElement(o.MDXTag,{name:"ul",components:t},a.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"Use labelled form fields to provide accessibile ways\nfor users to enter data."),a.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"Use input groups to space out fields correctly.")),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),a.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"simple-uncontrolled-form"}},"Simple (Uncontrolled) Form"),a.a.createElement(l.e,{__position:0,__code:'<Typography>Tell us about yourself:</Typography>\n<InputGroup>\n  <LabelledInput label="First Name" />\n</InputGroup>\n<InputGroup>\n  <LabelledInput label="Last Name" />\n</InputGroup>\n<InputGroup>\n  <LabelledTextarea label="Short bio" />\n</InputGroup>\n<InputGroup>\n  <Typography type="sectionLabel">\n    What gender do you identify with?\n  </Typography>\n  <RadioGroup defaultSelected="noselection">\n    <LabelledRadio value="male" label="Male" />\n    <LabelledRadio value="female" label="Female" />\n    <LabelledRadio value="other" label="Other" />\n    <LabelledRadio value="noselection" label="Choose not to disclose" />\n  </RadioGroup>\n</InputGroup>',__scope:{props:this?this.props:n,InputGroup:i.a,LabelledInput:u.a,LabelledTextarea:s.a,RadioGroup:c.a,LabelledRadio:p.a,Typography:d.a,Notification:f.a}},a.a.createElement(d.a,null,"Tell us about yourself:"),a.a.createElement(i.a,null,a.a.createElement(u.a,{label:"First Name"})),a.a.createElement(i.a,null,a.a.createElement(u.a,{label:"Last Name"})),a.a.createElement(i.a,null,a.a.createElement(s.a,{label:"Short bio"})),a.a.createElement(i.a,null,a.a.createElement(d.a,{type:"sectionLabel"},"What gender do you identify with?"),a.a.createElement(c.a,{defaultSelected:"noselection"},a.a.createElement(p.a,{value:"male",label:"Male"}),a.a.createElement(p.a,{value:"female",label:"Female"}),a.a.createElement(p.a,{value:"other",label:"Other"}),a.a.createElement(p.a,{value:"noselection",label:"Choose not to disclose"})))),a.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"error-states"}},"Error states"),a.a.createElement(l.e,{__position:1,__code:'<Notification type="danger" variant="block">\n  There were problems with processing your request. We encountered the\n  following issues:\n  <ul>\n    <li>Our servers are offline</li>\n  </ul>\n</Notification>\n<Typography>Tell us about yourself:</Typography>\n<InputGroup>\n  <LabelledInput label="First Name" />\n</InputGroup>\n<InputGroup>\n  <LabelledInput label="Last Name" />\n</InputGroup>\n<InputGroup>\n  <LabelledTextarea label="Short bio" />\n</InputGroup>\n<InputGroup>\n  <Typography type="sectionLabel">\n    What gender do you identify with?\n  </Typography>\n  <RadioGroup defaultSelected="noselection">\n    <LabelledRadio value="male" label="Male" />\n    <LabelledRadio value="female" label="Female" />\n    <LabelledRadio value="other" label="Other" />\n    <LabelledRadio value="noselection" label="Choose not to disclose" />\n  </RadioGroup>\n</InputGroup>',__scope:{props:this?this.props:n,InputGroup:i.a,LabelledInput:u.a,LabelledTextarea:s.a,RadioGroup:c.a,LabelledRadio:p.a,Typography:d.a,Notification:f.a}},a.a.createElement(f.a,{type:"danger",variant:"block"},"There were problems with processing your request. We encountered the following issues:",a.a.createElement("ul",null,a.a.createElement("li",null,"Our servers are offline"))),a.a.createElement(d.a,null,"Tell us about yourself:"),a.a.createElement(i.a,null,a.a.createElement(u.a,{label:"First Name"})),a.a.createElement(i.a,null,a.a.createElement(u.a,{label:"Last Name"})),a.a.createElement(i.a,null,a.a.createElement(s.a,{label:"Short bio"})),a.a.createElement(i.a,null,a.a.createElement(d.a,{type:"sectionLabel"},"What gender do you identify with?"),a.a.createElement(c.a,{defaultSelected:"noselection"},a.a.createElement(p.a,{value:"male",label:"Male"}),a.a.createElement(p.a,{value:"female",label:"Female"}),a.a.createElement(p.a,{value:"other",label:"Other"}),a.a.createElement(p.a,{value:"noselection",label:"Choose not to disclose"})))))}}])&&y(n.prototype,r),b&&y(n,b),t}();w.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-forms-index.1440fd586bf40659facc.js.map