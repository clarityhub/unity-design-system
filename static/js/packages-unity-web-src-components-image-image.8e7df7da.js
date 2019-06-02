(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"./packages/unity-web/src/components/Image/Image.js":function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n.n(o);n("./node_modules/@emotion/core/dist/core.browser.esm.js");function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c={name:"q5fqw0",styles:"padding:1rem;"},s={name:"1lab8ko",styles:"margin-left:auto;margin-right:auto;text-align:center;"},p=Object(r.default)("div",{target:"e1h9019k0"})("img{box-shadow:0 2px 4px 0 rgba(0,0,0,.1);max-width:100%;}",function(e){return e.withSpacing&&c}," ",function(e){return e.center&&s},""),l=function(e){var t=e.alt,n=e.withSpacing,r=e.center,o=e.wrapperProps,c=void 0===o?{}:o,s=i(e,["alt","withSpacing","center","wrapperProps"]);return a.a.createElement(p,Object.assign({},c,{withSpacing:n,center:r}),a.a.createElement("img",Object.assign({alt:t},s)))},m=function(){return a.a.createElement("div",null)};t.b=l,m.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"ImagePropTypes",props:{alt:{type:{name:"string"},required:!0,description:""},center:{type:{name:"bool"},required:!1,description:""},src:{type:{name:"string"},required:!0,description:""},withSpacing:{type:{name:"bool"},required:!1,description:""},wrapperProps:{type:{name:"object"},required:!1,description:""}}},l.__docgenInfo={description:"",methods:[],displayName:"Image",props:{wrapperProps:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./packages/unity-web/src/components/Image/Image.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),c=n("./packages/unity-web/src/components/Image/Image.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,u(t).call(this,e))).layout=null,n}var n,r,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=p(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"image"}},"Image"),o.a.createElement(a.MDXTag,{name:"p",components:t},"This Image component is used for displaying images."),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Image from '@clarityhub/unity-web/lib/components/Image';\n")),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),o.a.createElement(i.e,{__position:0,__code:'<Image\n  style={{ width: \'20rem\' }}\n  src="/public/get-started.png"\n  alt="Get Started"\n/>\n<Image\n  style={{ width: \'20rem\' }}\n  withSpacing\n  src="/public/get-started.png"\n  alt="Get Started"\n/>\n<Image\n  style={{ width: \'20rem\' }}\n  center\n  src="/public/get-started.png"\n  alt="Get Started"\n/>\n<Image\n  style={{ width: \'20rem\' }}\n  center\n  withSpacing\n  src="/public/get-started.png"\n  alt="Get Started"\n/>',__scope:{props:this?this.props:n,Image:c.b,ImagePropTypes:c.a}},o.a.createElement(c.b,{style:{width:"20rem"},src:"/public/get-started.png",alt:"Get Started"}),o.a.createElement(c.b,{style:{width:"20rem"},withSpacing:!0,src:"/public/get-started.png",alt:"Get Started"}),o.a.createElement(c.b,{style:{width:"20rem"},center:!0,src:"/public/get-started.png",alt:"Get Started"}),o.a.createElement(c.b,{style:{width:"20rem"},center:!0,withSpacing:!0,src:"/public/get-started.png",alt:"Get Started"})),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),o.a.createElement(a.MDXTag,{name:"p",components:t},"The following prop types are available for the Card component."),o.a.createElement(i.f,{of:c.a}))}}])&&l(n.prototype,r),s&&l(n,s),t}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-components-image-image.e0ecbbab691f02bcbe70.js.map