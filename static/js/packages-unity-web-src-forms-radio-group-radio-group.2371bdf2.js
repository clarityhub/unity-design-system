(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"./packages/unity-core/lib/utilities/noop.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){}},"./packages/unity-web/src/forms/RadioGroup/RadioGroup.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./packages/unity-core/lib/utilities/noop.js"),i=n.n(a);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,d,m,y=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=l(t).call(this,e))||"object"!==u(r)&&"function"!==typeof r?p(o):r).state={selected:e.defaultSelected},n.handleChange=n._handleChange.bind(p(n)),n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o["Component"]),n=t,(a=[{key:"_handleChange",value:function(e,t){var n=this;this.setState({selected:t.value},function(){(0,n.props.onChange)(e,t)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.selected,a=this.state.selected;return r.a.createElement("div",{role:"radiogroup"},r.a.Children.map(n,function(t){return r.a.cloneElement(t,{onChange:e.handleChange,selected:t.props.value===o||t.props.value===a})}))}}])&&c(n.prototype,a),i&&c(n,i),t}();f=y,d="defaultProps",m={defaultSelected:null,onChange:i.a,selectOverride:null},d in f?Object.defineProperty(f,d,{value:m,enumerable:!0,configurable:!0,writable:!0}):f[d]=m,t.a=y,y.__docgenInfo={description:"",methods:[{name:"_handleChange",docblock:null,modifiers:[],params:[{name:"e",type:null},{name:"input",type:null}],returns:null}],displayName:"RadioGroup",props:{defaultSelected:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},onChange:{defaultValue:{value:"noop",computed:!0},type:{name:"func"},required:!1,description:""},selectOverride:{defaultValue:{value:"null",computed:!1},required:!1},children:{type:{name:"func"},required:!0,description:""},selected:{type:{name:"string"},required:!1,description:"The onChange callback will be called with an event and a checkbox reference:\n`(event, input) => {}`."}}}},"./packages/unity-web/src/forms/RadioGroup/RadioGroup.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),u=n("./packages/unity-web/src/forms/RadioGroup/RadioGroup.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,f(t).call(this,e))).layout=null,n}var n,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components;l(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"radiogroup"}},"RadioGroup"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Use a Radio Group to quickly create basic radio\nbutton behavior. The group will automatically take\ncare of handling selected and on change handlers."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"radiogroup--component"}},"<RadioGroup /",">"," component"),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import RadioGroup from '@clarityhub/unity-web/lib/forms/RadioGroup';\n")),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(i.f,{of:u.a}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),r.a.createElement(a.MDXTag,{name:"p",components:t},"See ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"../src-forms-labelled-radio-labelled-radio"}},"Labelled Radio")," for a complete example."))}}])&&p(n.prototype,o),c&&p(n,c),t}();m.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-forms-radio-group-radio-group.6bb55019f71b3ded449a.js.map