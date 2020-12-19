(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./packages/unity-web/src/components/Notification/Notification.js":function(n,e,t){"use strict";var o=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),i=t("./packages/unity-core/lib/borders.js"),a=t.n(i),r=t("./packages/unity-core/lib/colors.js"),c=t.n(r),s=t("./packages/unity-web/src/components/Typography/Typography.js");function l(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var d=Object(o.css)("border-radius:",a.a.borderRadius.rem,"rem;padding:2rem;position:relative;"),u={danger:Object(o.css)("background-color:",c.a.danger.default,";color:",c.a.white.default,";"),primary:Object(o.css)("background-color:",c.a.primary.default,";color:",c.a.white.default,";"),success:Object(o.css)("background-color:",c.a.success.default,";color:",c.a.white.default,";")},p={block:{name:"1033rfx",styles:"padding:2rem;"},thin:{name:"1prs64a",styles:"padding:0.6rem 2rem;"}},m=function(n){var e=n.type,t=void 0===e?"danger":e,i=n.variant,a=void 0===i?"block":i;return Object(o.css)(d," ",u[t]," ",p[a],"")},g=function(n){var e=n.children,t=n.component,i=void 0===t?"div":t,a=n.type,r=void 0===a?"danger":a,c=n.variant,d=void 0===c?"block":c,u=l(n,["children","component","type","variant"]);return Object(o.jsx)(i,Object.assign({css:m({type:r,variant:d}),role:"alert"},u),Object(o.jsx)(s.a,{color:"white",type:"text2",noMargin:!0,noPadding:!0,component:"div"},e))};e.a=g,g.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{component:{defaultValue:{value:"'div'",computed:!1},type:{name:"union",value:[{name:"func"},{name:"string"}]},required:!1,description:""},type:{defaultValue:{value:"'danger'",computed:!1},type:{name:"enum",value:[{value:"'danger'",computed:!1},{value:"'primary'",computed:!1},{value:"'success'",computed:!1}]},required:!1,description:""},variant:{defaultValue:{value:"'block'",computed:!1},type:{name:"enum",value:[{value:"'block'",computed:!1},{value:"'thin'",computed:!1}]},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""}}}},"./packages/unity-web/src/components/Typography/Typography.js":function(n,e,t){"use strict";var o=t("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),i=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=t("./packages/unity-core/lib/colors.js"),r=t.n(a),c=t("./packages/unity-core/lib/typography.js"),s=t("./packages/unity-web/src/theme/fonts.js");function l(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var d=function(n){var e=n.type,t=void 0===e?"text":e,a=n.variant,d=n.color,u=void 0===d?"dark":d,p=n.children,m=n.component,g=void 0===m?"p":m,h=n.noMargin,b=void 0!==h&&h,f=n.noPadding,y=void 0!==f&&f,v=n.inline,j=void 0!==v&&v,k=n.css,x=n.center,z=void 0!==x&&x,O=l(n,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),w=[Boolean(t)?s.a[t]:{},Boolean(a)?c.variants[a]:{},Boolean(u)?{color:r.a[u].default}:{},Boolean(y)?"\n    padding: 0;\n":{},Boolean(b)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(k)?k:{},Boolean(j)?{display:"inline-block"}:{},Boolean(z)?{textAlign:"center"}:{}];if("string"===typeof g){var q=g;"p"===g&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(t)&&(q=t);var H=o.default[q](w,"");return Object(i.jsx)(H,O,p)}var V=g;return Object(i.jsx)(V,Object.assign({},O,{css:w}),p)};e.a=d,d.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(types)"},required:!1,description:""},color:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(colors)"},required:!1,description:""},component:{defaultValue:{value:"'p'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},noMargin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noPadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},css:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},variant:{type:{name:"enum",computed:!0,value:"Object.keys(variants)"},required:!1,description:""}}}},"./packages/unity-web/src/theme/fonts.js":function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var o=t("./packages/unity-core/lib/typography.js"),i=t("./packages/unity-core/lib/colors.js"),a=t.n(i),r=t("./packages/unity-core/lib/utilities/color.js"),c={h1:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h1.rem,"rem;\n        line-height: ").concat(o.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h2.rem,"rem;\n        line-height: ").concat(o.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h3.rem,"rem;\n        line-height: ").concat(o.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h4.rem,"rem;\n        line-height: ").concat(o.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h5.rem,"rem;\n        line-height: ").concat(o.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h6.rem,"rem;\n        line-height: ").concat(o.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(o.variants.readable.string,"\n\n        font-size: ").concat(o.sizes.p.rem,"rem;\n        line-height: ").concat(o.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(o.variants.text.string,"\n\n        font-size: ").concat(o.sizes.text.rem,"rem;\n        line-height: ").concat(o.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(o.variants.text.string,"\n\n        font-size: ").concat(o.sizes.text2.rem,"rem;\n        line-height: ").concat(o.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(o.variants.text.string,"\n\n        color: ").concat(a.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(o.sizes.subtext.rem,"rem;\n        line-height: ").concat(o.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(a.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(a.a.primary.default,";\n        color: ").concat(a.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(a.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(a.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(r.darken)(a.a.primary.default,.2),";\n            color: ").concat(Object(r.darken)(a.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(a.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(a.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(a.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")}}}]);
//# sourceMappingURL=packages-unity-web-src-components-messaging-error~packages-unity-web-src-components-notification-not~241204a4.26ac8c5cdd5aa6e0d6b9.js.map