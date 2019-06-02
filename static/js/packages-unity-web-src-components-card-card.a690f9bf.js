(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./packages/unity-web/src/components/Buttons/ButtonGroup.js":function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"b",function(){return l});var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/react/index.js"),o=n.n(r),p=n("./packages/unity-core/lib/colors.js"),s=n.n(p),i=n("./packages/unity-web/src/components/Buttons/Button.js");function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=Object(a.default)("div",{target:"e1cjzffo0"})("box-shadow:",s.a.shadow.default,";display:inline-block;",i.a,"{box-shadow:none;}",i.a," + ",i.a,"{border-left-width:0;border-left:1px solid ",s.a.muted.default,";}",i.a,":not(:last-child):not(:first-of-type){border-radius:0;}",i.a,":first-of-type{border-top-right-radius:0;border-bottom-right-radius:0;}",i.a,":last-child{border-top-left-radius:0;border-bottom-left-radius:0;}"),l=function(e){var t=e.selected,n=c(e,["selected"]);return o.a.createElement(i.b,Object.assign({type:t?"primary":"default"},n))};l.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{selected:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/ButtonSet.js":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),o=n("./packages/unity-web/src/components/Buttons/Button.js"),p=Object(a.default)("div",{target:"e1sq8kqm0"})(function(e){return e.spread&&Object(r.css)("display:flex;align-items:center;justify-content:flex-end;",o.a,"{&:not(:first-of-type){margin-left:auto!important;}}")}," button + button,a + a,a + button,button + a{margin-left:0.4rem;}"),s=function(){return React.createElement("div",null)};p.propTypes=s.propTypes,t.b=p,s.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"ButtonSetPropTypes",props:{spread:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/index.js":function(e,t,n){"use strict";var a=n("./packages/unity-web/src/components/Buttons/Button.js");n.d(t,"b",function(){return a.b});var r=n("./packages/unity-web/src/components/Buttons/ButtonSet.js");n.d(t,"a",function(){return r.b});n("./packages/unity-web/src/components/Buttons/ButtonGroup.js")},"./packages/unity-web/src/components/Card/Card.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js"),p=n("./node_modules/docz/dist/index.m.js"),s=n("./packages/unity-web/src/components/Card/index.js"),i=n("./packages/unity-web/src/components/Card/Card.js"),c=n("./packages/unity-web/src/components/Typography/index.js"),d=n("./packages/unity-web/src/components/Buttons/index.js"),l=n("./packages/unity-web/src/components/Image/index.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=g(this,b(t).call(this,e))).layout=null,n}var n,a,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components,n=y(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"card"}},"Card"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Cards provide a content container that you can use to display grouped content."),r.a.createElement(o.MDXTag,{name:"pre",components:t},r.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Card, {\n    CardHeader,\n    CardFooter,\n    CardImage,\n    CardBody,\n    CardActions,\n} from '@clarityhub/unity-web/lib/components/Card';\n")),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"simple-card"}},"Simple Card"),r.a.createElement(o.MDXTag,{name:"p",components:t},"In all examples, the headings and text use the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Typography")," components."),r.a.createElement(p.e,{__position:0,__code:'<Card>\n  <CardBody>\n    <Typography type="text">Default</Typography>\n  </CardBody>\n</Card>\n<Card type="notification" style={{ marginTop: \'1rem\' }}>\n  <CardBody>\n    <Typography type="text" color="white">\n      Notification\n    </Typography>\n  </CardBody>\n</Card>',__scope:{props:this?this.props:n,Card:s.f,CardHeader:s.d,CardFooter:s.c,CardImage:s.e,CardBody:s.b,CardActions:s.a,CardPropTypes:i.a,Typography:c.a,Button:d.b,ButtonSet:d.a,Image:l.a}},r.a.createElement(s.f,null,r.a.createElement(s.b,null,r.a.createElement(c.a,{type:"text"},"Default"))),r.a.createElement(s.f,{type:"notification",style:{marginTop:"1rem"}},r.a.createElement(s.b,null,r.a.createElement(c.a,{type:"text",color:"white"},"Notification")))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"card-with-image"}},"Card with Image"),r.a.createElement(p.e,{__position:1,__code:'<Card style={{ width: \'16rem\' }}>\n  <CardImage src="https://placehold.it/300x150" />\n  <CardBody>\n    <Typography type="h3">Card title</Typography>\n    <Typography type="text">Meow Mix</Typography>\n  </CardBody>\n</Card>',__scope:{props:this?this.props:n,Card:s.f,CardHeader:s.d,CardFooter:s.c,CardImage:s.e,CardBody:s.b,CardActions:s.a,CardPropTypes:i.a,Typography:c.a,Button:d.b,ButtonSet:d.a,Image:l.a}},r.a.createElement(s.f,{style:{width:"16rem"}},r.a.createElement(s.e,{src:"https://placehold.it/300x150"}),r.a.createElement(s.b,null,r.a.createElement(c.a,{type:"h3"},"Card title"),r.a.createElement(c.a,{type:"text"},"Meow Mix")))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"card-with-actions"}},"Card with Actions"),r.a.createElement(p.e,{__position:2,__code:'<Card>\n  <CardBody>\n    <Typography type="h3">Card title</Typography>\n    <Typography type="h4">Card subtitle</Typography>\n    <Typography type="text">Meow Mix</Typography>\n    <CardActions>\n      <ButtonSet>\n        <Button>Cancel</Button>\n        <Button type="danger">Delete</Button>\n      </ButtonSet>\n    </CardActions>\n  </CardBody>\n</Card>',__scope:{props:this?this.props:n,Card:s.f,CardHeader:s.d,CardFooter:s.c,CardImage:s.e,CardBody:s.b,CardActions:s.a,CardPropTypes:i.a,Typography:c.a,Button:d.b,ButtonSet:d.a,Image:l.a}},r.a.createElement(s.f,null,r.a.createElement(s.b,null,r.a.createElement(c.a,{type:"h3"},"Card title"),r.a.createElement(c.a,{type:"h4"},"Card subtitle"),r.a.createElement(c.a,{type:"text"},"Meow Mix"),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(d.b,null,"Cancel"),r.a.createElement(d.b,{type:"danger"},"Delete")))))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"card-with-header-and-footer"}},"Card with Header and Footer"),r.a.createElement(p.e,{__position:3,__code:'<Card>\n  <CardHeader>Featured</CardHeader>\n  <CardBody>\n    <Typography type="h3">Card title</Typography>\n    <Typography type="h4">Card subtitle</Typography>\n    <Typography type="text">Meow Mix</Typography>\n    <CardActions>\n      <ButtonSet>\n        <Button>Cancel</Button>\n        <Button type="danger">Delete</Button>\n      </ButtonSet>\n    </CardActions>\n  </CardBody>\n  <CardFooter>2 days ago</CardFooter>\n</Card>',__scope:{props:this?this.props:n,Card:s.f,CardHeader:s.d,CardFooter:s.c,CardImage:s.e,CardBody:s.b,CardActions:s.a,CardPropTypes:i.a,Typography:c.a,Button:d.b,ButtonSet:d.a,Image:l.a}},r.a.createElement(s.f,null,r.a.createElement(s.d,null,"Featured"),r.a.createElement(s.b,null,r.a.createElement(c.a,{type:"h3"},"Card title"),r.a.createElement(c.a,{type:"h4"},"Card subtitle"),r.a.createElement(c.a,{type:"text"},"Meow Mix"),r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(d.b,null,"Cancel"),r.a.createElement(d.b,{type:"danger"},"Delete")))),r.a.createElement(s.c,null,"2 days ago"))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"example-cards"}},"Example Cards"),r.a.createElement(p.e,{__position:4,__code:'<Card center>\n  <CardBody>\n    <Typography type="h3">Welcome to Clarity Hub!</Typography>\n    <Typography type="text">\n      To get started, install the extension and use Intercom like you normally\n      would. We\u2019ll let you know when we have suggestions for you by providing\n      a prompt in the place you normally work.\n    </Typography>\n    <Image\n      center\n      withMargin\n      src="/public/get-started.png"\n      alt="Get started with Clarity Hub"\n      style={{ width: \'80%\' }}\n    />\n\n    <CardActions>\n      <Button type="primary">Install the Extension</Button>\n    </CardActions>\n  </CardBody>\n</Card>\n<Card center style={{ marginTop: \'1rem\' }}>\n  <CardBody>\n    <Typography type="h3">Get Started</Typography>\n    <Typography type="text">\n      Send email invites to the rest of your team to get them onboarded! We\u2019ll\n      send them instructions on how to get started using Clarity Hub.\n    </Typography>\n\n    <CardActions>\n      <Button type="primary">Invite Your Team</Button>\n    </CardActions>\n  </CardBody>\n</Card>',__scope:{props:this?this.props:n,Card:s.f,CardHeader:s.d,CardFooter:s.c,CardImage:s.e,CardBody:s.b,CardActions:s.a,CardPropTypes:i.a,Typography:c.a,Button:d.b,ButtonSet:d.a,Image:l.a}},r.a.createElement(s.f,{center:!0},r.a.createElement(s.b,null,r.a.createElement(c.a,{type:"h3"},"Welcome to Clarity Hub!"),r.a.createElement(c.a,{type:"text"},"To get started, install the extension and use Intercom like you normally would. We\u2019ll let you know when we have suggestions for you by providing a prompt in the place you normally work."),r.a.createElement(l.a,{center:!0,withMargin:!0,src:"/public/get-started.png",alt:"Get started with Clarity Hub",style:{width:"80%"}}),r.a.createElement(s.a,null,r.a.createElement(d.b,{type:"primary"},"Install the Extension")))),r.a.createElement(s.f,{center:!0,style:{marginTop:"1rem"}},r.a.createElement(s.b,null,r.a.createElement(c.a,{type:"h3"},"Get Started"),r.a.createElement(c.a,{type:"text"},"Send email invites to the rest of your team to get them onboarded! We\u2019ll send them instructions on how to get started using Clarity Hub."),r.a.createElement(s.a,null,r.a.createElement(d.b,{type:"primary"},"Invite Your Team"))))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(o.MDXTag,{name:"p",components:t},"The following prop types are available for the Card component."),r.a.createElement(p.f,{of:i.a}))}}])&&m(n.prototype,a),u&&m(n,u),t}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/Image/Image.js":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/react/index.js"),o=n.n(r);n("./node_modules/@emotion/core/dist/core.browser.esm.js");function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={name:"q5fqw0",styles:"padding:1rem;"},i={name:"1lab8ko",styles:"margin-left:auto;margin-right:auto;text-align:center;"},c=Object(a.default)("div",{target:"e1h9019k0"})("img{box-shadow:0 2px 4px 0 rgba(0,0,0,.1);max-width:100%;}",function(e){return e.withSpacing&&s}," ",function(e){return e.center&&i},""),d=function(e){var t=e.alt,n=e.withSpacing,a=e.center,r=e.wrapperProps,s=void 0===r?{}:r,i=p(e,["alt","withSpacing","center","wrapperProps"]);return o.a.createElement(c,Object.assign({},s,{withSpacing:n,center:a}),o.a.createElement("img",Object.assign({alt:t},i)))},l=function(){return o.a.createElement("div",null)};t.b=d,l.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"ImagePropTypes",props:{alt:{type:{name:"string"},required:!0,description:""},center:{type:{name:"bool"},required:!1,description:""},src:{type:{name:"string"},required:!0,description:""},withSpacing:{type:{name:"bool"},required:!1,description:""},wrapperProps:{type:{name:"object"},required:!1,description:""}}},d.__docgenInfo={description:"",methods:[],displayName:"Image",props:{wrapperProps:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./packages/unity-web/src/components/Image/index.js":function(e,t,n){"use strict";var a=n("./packages/unity-web/src/components/Image/Image.js");n.d(t,"a",function(){return a.b})}}]);
//# sourceMappingURL=packages-unity-web-src-components-card-card.e0ecbbab691f02bcbe70.js.map