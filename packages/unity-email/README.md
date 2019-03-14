# @clarityhub/unity-email

> Email implementation of the Clarity Hub Unity Design System

## Usage

The `@clarityhub/unity-email` package is meant to be transpiled from ES6+ to ES5 and then used with node.

Installation:

```sh
npm i --save @clarityhub/unity-email
```

Using with ES6:

```js
import MJMLRenderer from '@clarityhub/unity-email/core/renderers/MJMLRenderer';
import EmailTemplate from '@clarityhub/unity-email/core/templates/EmailTemplate';

const renderer = new MJMLRenderer();

const { html, errors } = renderer.render(
    <EmailTemplate>
        {/* Components go here */}
    </EmailTemplate>
);
```
