(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"./packages/unity-web/src/components/Avatar/Avatar.js":function(e,t,n){"use strict";var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n.n(o),s=n("./node_modules/react-image/umd/index.js"),i=n.n(s),c=Object(r.default)("span",{target:"e1syn5zm0"})({name:"xdgs2d",styles:"display:inline-block;img{border-radius:50%;height:2.8rem;max-height:2.8rem;max-width:2.8rem;width:2.8rem;}"}),l=function(e){var t=e.alt,n=void 0===t?"Avatar":t,r=e.url,o=e.fallbackUrl;return a.a.createElement(c,null,a.a.createElement(i.a,{src:[r,o].filter(Boolean),loader:o&&a.a.createElement("img",{alt:n,src:o}),alt:n}))};t.a=l,l.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{alt:{defaultValue:{value:"'Avatar'",computed:!1},type:{name:"string"},required:!1,description:""},fallbackUrl:{type:{name:"string"},required:!0,description:""},url:{type:{name:"string"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/ButtonGroup.js":function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return p});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n.n(o),s=n("./packages/unity-core/lib/colors.js"),i=n.n(s),c=n("./packages/unity-web/src/components/Buttons/Button.js");function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=Object(r.default)("div",{target:"e1cjzffo0"})("box-shadow:",i.a.shadow.default,";display:inline-block;",c.a,"{box-shadow:none;}",c.a," + ",c.a,"{border-left-width:0;border-left:1px solid ",i.a.muted.default,";}",c.a,":not(:last-child):not(:first-of-type){border-radius:0;}",c.a,":first-of-type{border-top-right-radius:0;border-bottom-right-radius:0;}",c.a,":last-child{border-top-left-radius:0;border-bottom-left-radius:0;}"),p=function(e){var t=e.selected,n=l(e,["selected"]);return a.a.createElement(c.b,Object.assign({type:t?"primary":"default"},n))};p.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{selected:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/ButtonSet.js":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=n("./packages/unity-web/src/components/Buttons/Button.js"),s=Object(r.default)("div",{target:"e1sq8kqm0"})(function(e){return e.spread&&Object(o.css)("display:flex;align-items:center;justify-content:flex-end;",a.a,"{&:not(:first-of-type){margin-left:auto!important;}}")}," button + button,a + a,a + button,button + a{margin-left:0.4rem;}"),i=function(){return React.createElement("div",null)};s.propTypes=i.propTypes,t.b=s,i.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"ButtonSetPropTypes",props:{spread:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/components/Buttons/Button.js");n.d(t,"b",function(){return r.b});var o=n("./packages/unity-web/src/components/Buttons/ButtonSet.js");n.d(t,"a",function(){return o.b});n("./packages/unity-web/src/components/Buttons/ButtonGroup.js")},"./packages/unity-web/src/components/UserProfile/UserProfile.js":function(e,t,n){"use strict";var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n.n(o),s=n("./packages/unity-web/src/components/Avatar/Avatar.js"),i=n("./packages/unity-web/src/components/Menu/index.js"),c=Object(r.default)("button",{target:"e5d28200"})({name:"kmy07c",styles:"background:transparent;border:0;cursor:pointer;padding:0;"}),l=function(e){var t=e.avatarUrl,n=e.avatarFallbackUrl,r=e.menuItems;return a.a.createElement(i.a,{items:r},function(e){var r=e.open;return a.a.createElement(c,{onClick:r},a.a.createElement(s.a,{url:t,fallbackUrl:n}))})};t.a=l;l.__docgenInfo={description:"",methods:[],displayName:"UserProfile",props:{avatarFallbackUrl:{type:{name:"string"},required:!0,description:""},avatarUrl:{type:{name:"string"},required:!0,description:""},menuItems:{type:{name:"arrayOf",value:{name:"node"}},required:!1,description:""}}}},"./packages/unity-web/src/components/UserProfile/UserProfile.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),i=n("./packages/unity-web/src/components/UserProfile/UserProfile.js"),c=n("./packages/unity-web/src/components/Menu/index.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,d(t).call(this,e))).layout=null,n}var n,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=u(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"userprofile"}},"UserProfile"),o.a.createElement(a.MDXTag,{name:"p",components:t},"A ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UserProfile")," component is a short-hand way of creating an\n",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Avatar")," with a ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Menu"),"."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"userprofile--component"}},"<UserProfile /",">"," component"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import UserProfile from '@clarityhub/unity-web/lib/components/UserProfile';\n")),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),o.a.createElement(s.f,{of:i.a}),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),o.a.createElement(s.e,{__position:1,__code:'<UserProfile\n  avatarUrl="/public/ivan-avatar.png"\n  avatarFallbackUrl="/public/avatar-placeholder.png"\n  menuItems={[\n    <MenuItem>Profile</MenuItem>,\n    <MenuItem>Account</MenuItem>,\n    <MenuItemDivider />,\n    <MenuItem>Logout</MenuItem>,\n  ]}\n/>',__scope:{props:this?this.props:n,UserProfile:i.a,MenuItem:c.b,MenuItemDivider:c.c}},o.a.createElement(i.a,{avatarUrl:"/public/ivan-avatar.png",avatarFallbackUrl:"/public/avatar-placeholder.png",menuItems:[o.a.createElement(c.b,null,"Profile"),o.a.createElement(c.b,null,"Account"),o.a.createElement(c.c,null),o.a.createElement(c.b,null,"Logout")]})))}}])&&p(n.prototype,r),l&&p(n,l),t}();b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-components-user-profile-user-profile.f481283bd46839ac33f6.js.map