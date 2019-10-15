(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./packages/unity-core/src/GettingStarted.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function p(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,n){return!n||"object"!==i(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=s(this,m(n).call(this,e))).layout=null,t}var t,a,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;c(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"getting-started"}},"Getting Started"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Unity Design System")," is broken into multiple packages to make it easier to work with depending on your use-case."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"installation"}},"Installation"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"unity-core"}},"unity-core"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The unity-core packages contains colors, typography, spacing, and other utilities that can be used in any JavaScript environment."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"npm i --save @clarityhub/unity-core\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"unity-web"}},"unity-web"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The unity-core package uses React and Emotion to render components\nand CSS. These are peer dependencies, so you will need to install them seperately\nfrom the design system:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"npm i --save @clarityhub/unity-web\nnpm i --save react react-dom prop-types @emotion/core @emotion/styled\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"unity-email"}},"unity-email"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The unity-email package is for generating HTML emails from React."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"npm i --save @clarityhub/unity-email\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"initialize-styleguide"}},"Initialize Styleguide"),o.a.createElement(r.MDXTag,{name:"p",components:n},"This will normalize your css and load in webfonts from Google."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import '@clarityhub/unity-web/lib/init';\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Simply use the above line in your entrypoint of your application (usually ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"index.js"),")."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"icons"}},"Icons"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The prefered icon set to use is the one provided by Material UI:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"npm i --save @material-ui/core @material-ui/icons\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"These are not marked as peerDependencies since they are not actually\nrequired to get the One Design System to run."))}}])&&p(t.prototype,a),i&&p(t,i),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-core-src-getting-started.0ad923aad6c52481227a.js.map