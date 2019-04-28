(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./packages/unity-web/src/components/Avatar/Avatar.js":function(e,n,t){"use strict";var r=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=t("./node_modules/react/index.js"),o=t.n(a),s=t("./node_modules/react-image/umd/index.js"),i=t.n(s),l=Object(r.default)("span",{target:"e1syn5zm0"})({name:"xdgs2d",styles:"display:inline-block;img{border-radius:50%;height:2.8rem;max-height:2.8rem;max-width:2.8rem;width:2.8rem;}"}),c=function(e){var n=e.alt,t=void 0===n?"Avatar":n,r=e.url,a=e.fallbackUrl;return o.a.createElement(l,null,o.a.createElement(i.a,{src:[r,a].filter(Boolean),loader:a&&o.a.createElement("img",{alt:t,src:a}),alt:t}))};n.a=c,c.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{alt:{defaultValue:{value:"'Avatar'",computed:!1},type:{name:"string"},required:!1,description:""},fallbackUrl:{type:{name:"string"},required:!0,description:""},url:{type:{name:"string"},required:!1,description:""}}}},"./packages/unity-web/src/components/UserProfile/UserProfile.js":function(e,n,t){"use strict";var r=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),a=t("./node_modules/react/index.js"),o=t.n(a),s=t("./packages/unity-web/src/components/Avatar/Avatar.js"),i=t("./packages/unity-web/src/components/Menu/index.js"),l=Object(r.default)("button",{target:"e5d28200"})({name:"kmy07c",styles:"background:transparent;border:0;cursor:pointer;padding:0;"}),c=function(e){var n=e.avatarUrl,t=e.avatarFallbackUrl,r=e.menuItems;return o.a.createElement(i.a,{items:r},function(e){var r=e.open;return o.a.createElement(l,{onClick:r},o.a.createElement(s.a,{url:n,fallbackUrl:t}))})};n.a=c;c.__docgenInfo={description:"",methods:[],displayName:"UserProfile",props:{avatarFallbackUrl:{type:{name:"string"},required:!0,description:""},avatarUrl:{type:{name:"string"},required:!0,description:""},menuItems:{type:{name:"arrayOf",value:{name:"node"}},required:!1,description:""}}}},"./packages/unity-web/src/components/UserProfile/UserProfile.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return b});var r=t("./node_modules/react/index.js"),a=t.n(r),o=t("./node_modules/@mdx-js/tag/dist/index.js"),s=t("./node_modules/docz/dist/index.m.js"),i=t("./packages/unity-web/src/components/UserProfile/UserProfile.js"),l=t("./packages/unity-web/src/components/Menu/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,n){return!n||"object"!==c(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var b=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=m(this,d(n).call(this,e))).layout=null,t}var t,r,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(n,a.a.Component),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components,t=p(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:n},a.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"userprofile"}},"UserProfile"),a.a.createElement(o.MDXTag,{name:"p",components:n},"A ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"UserProfile")," component is a short-hand way of creating an\n",a.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Avatar")," with a ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Menu"),"."),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"userprofile--component"}},"<UserProfile /",">"," component"),a.a.createElement(o.MDXTag,{name:"pre",components:n},a.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import UserProfile from '@clarityhub/unity-web/lib/components/UserProfile';\n")),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(s.f,{of:i.a}),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"examples"}},"Examples"),a.a.createElement(s.e,{__position:1,__code:'<UserProfile\n  avatarUrl="/public/ivan-avatar.png"\n  avatarFallbackUrl="/public/avatar-placeholder.png"\n  menuItems={[\n    <MenuItem>Profile</MenuItem>,\n    <MenuItem>Account</MenuItem>,\n    <MenuItemDivider />,\n    <MenuItem>Logout</MenuItem>,\n  ]}\n/>',__scope:{props:this?this.props:t,UserProfile:i.a,MenuItem:l.b,MenuItemDivider:l.c}},a.a.createElement(i.a,{avatarUrl:"/public/ivan-avatar.png",avatarFallbackUrl:"/public/avatar-placeholder.png",menuItems:[a.a.createElement(l.b,null,"Profile"),a.a.createElement(l.b,null,"Account"),a.a.createElement(l.c,null),a.a.createElement(l.b,null,"Logout")]})))}}])&&u(t.prototype,r),c&&u(t,c),n}();b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-components-user-profile-user-profile.e0bce119375f652fbe57.js.map