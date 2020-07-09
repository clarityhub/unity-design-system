(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"./packages/unity-web/src/contexts/Localization/Localization.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/docz/dist/index.m.js");function l(e){return navigator?navigator.languages?navigator.languages:navigator.language?[navigator.language]:navigator.browserLanguage?[navigator.browserLanguage]:e:e}var i=["en-US","en"],p=a.a.createContext(l(i)),s=p.Provider;function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function f(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,n){return!n||"object"!==u(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}t.d(n,"default",function(){return b});var b=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=g(this,y(n).call(this,e))).layout=null,t}var t,o,p;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,a.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=m(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"localecontext"}},"LocaleContext"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Wrap your app with the provider:"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { getLocale, DEFAULT_LOCALE, LocaleContextProvider } from '@clarityhub/unity-web/lib/contexts/Localization';\n")),a.a.createElement(r.MDXTag,{name:"p",components:n},"To use the locale, we have the following hook:"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { useLocale } from '@clarityhub/unity-web/lib/contexts/Localization';\n")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(r.MDXTag,{name:"p",components:n},"The following props are available for the ToastManagerProvider component."),a.a.createElement(c.f,{of:s}),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"localecontextprovider-example"}},"LocaleContextProvider Example"),a.a.createElement(c.e,{__position:1,__code:"<LocaleContextProvider value={getLocale(DEFAULT_LOCALE)}>\n  Your content here\n</LocaleContextProvider>",__scope:{props:this?this.props:t,getLocale:l,DEFAULT_LOCALE:i,LocaleContextProvider:s}},a.a.createElement(s,{value:l(i)},"Your content here")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"uselocale-example"}},"useLocale Example"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { useLocale } from '@clarityhub/unity-web/lib/contexts/Localization';\n\nconst UsingLocale = ({ children }) => {\n    const [locale, locales] = useContext(useLocale);\n    \n    return (\n        <ul>\n            <li>Primary Locale: {locale}</li>\n            <li>All Locales: {JSON.stringify(locales)}</li>\n        </ul>\n    );\n};\n")))}}])&&f(t.prototype,o),p&&f(t,p),n}();b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-contexts-localization-localization.1440fd586bf40659facc.js.map