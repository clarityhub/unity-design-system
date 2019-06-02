(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"./packages/unity-web/src/components/Menu/Menu.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return b});var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),p=t("./node_modules/docz/dist/index.m.js"),m=t("./packages/unity-web/src/components/Menu/index.js"),c=t("./packages/unity-web/src/components/Buttons/index.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function s(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,n){return!n||"object"!==u(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var b=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=l(this,f(n).call(this,e))).layout=null,t}var t,o,u;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=i(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"menu"}},"Menu"),r.a.createElement(a.MDXTag,{name:"p",components:n},"Show a pop-up menu in navigation or when there are many options\na user can select."),r.a.createElement(a.MDXTag,{name:"p",components:n},"Menus will always appear fixed to the bottom-left of the child\nelement, but will fix to the bottom-right if the window width\nwould be less than the width of the popover."),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"menu--component"}},"<Menu /",">"," component"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { Menu, MenuItem, MenuItemDivider } from '@clarityhub/unity-web/lib/components/Menu';\n")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"menu-props"}},"Menu Props"),r.a.createElement(p.f,{of:m.a}),r.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"menuitem-props"}},"MenuItem Props"),r.a.createElement(a.MDXTag,{name:"p",components:n},"All ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Button")," props can also be passed to the ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"MenuItem"),"."),r.a.createElement(p.f,{of:m.b}),r.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"menuitemdivider-props"}},"MenuItemDivider Props"),r.a.createElement(p.f,{of:m.c}),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"examples"}},"Examples"),r.a.createElement(p.e,{__position:3,__code:"<Menu\n  items={[\n    <MenuItem>Item 1</MenuItem>,\n    <MenuItem>Item 2</MenuItem>,\n    <MenuItem>Item 3</MenuItem>,\n    <MenuItemDivider />,\n    <MenuItem>Long Item 4</MenuItem>,\n  ]}\n>\n  {({ open }) => <Button onClick={open}>Open Menu</Button>}\n</Menu>",__scope:{props:this?this.props:t,Menu:m.a,MenuItem:m.b,MenuItemDivider:m.c,Button:c.b}},r.a.createElement(m.a,{items:[r.a.createElement(m.b,null,"Item 1"),r.a.createElement(m.b,null,"Item 2"),r.a.createElement(m.b,null,"Item 3"),r.a.createElement(m.c,null),r.a.createElement(m.b,null,"Long Item 4")]},function(e){var n=e.open;return r.a.createElement(c.b,{onClick:n},"Open Menu")})))}}])&&s(t.prototype,o),u&&s(t,u),n}();b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-components-menu-menu.f850e0f8c796c75f4d64.js.map