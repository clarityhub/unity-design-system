# Unity Design System

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) ![Node.js CI](https://github.com/clarityhub/unity-design-system/workflows/Node.js%20CI/badge.svg)

| Package | Version |
|---|---|
| @clarityhub/unity-core | [![npm version](https://badge.fury.io/js/%40clarityhub%2Funity-core.svg)](https://badge.fury.io/js/%40clarityhub%2Funity-core) |
| @clarityhub/unity-email | [![npm version](https://badge.fury.io/js/%40clarityhub%2Funity-email.svg)](https://badge.fury.io/js/%40clarityhub%2Funity-email) |
| @clarityhub/unity-forms | [![npm version](https://badge.fury.io/js/%40clarityhub%2Funity-forms.svg)](https://badge.fury.io/js/%40clarityhub%2Funity-forms) |
| @clarityhub/unity-marketing | [![npm version](https://badge.fury.io/js/%40clarityhub%2Funity-marketing.svg)](https://badge.fury.io/js/%40clarityhub%2Funity-marketing) |
| @clarityhub/unity-web | [![npm version](https://badge.fury.io/js/%40clarityhub%2Funity-web.svg)](https://badge.fury.io/js/%40clarityhub%2Funity-web) |

## Getting Started

See [our documentation](https://unity.clarityhub.io) on how to use the Unity Design System.

## Development

1. Install npm: `npm i`
2. Install lerna
3. Run `npm run bootstrap`
4. Build packages - `npm run build`

You can now develop on each package. Run `npm run docz:dev` to generate the Design System docs.

If you need to run snapshots to update them or generate new ones, you can run the following command:

```sh
npm run test:watch -- --scope=@clarityhub/unity-web
```

### Running unity-email

The unity-email package has a special build that you can run to generate example HTML files:

1. `npm run build`
2. `npm run emails:watch`
3. `npm run emails:run`
4. Open the `/lib` folder
5. You can open any generated .html file to preview what emails will look like

### Publishing

Run `npm run release` to lint, run tests, and publish the packages (if you have permission).

### Deploying

Run `npm run deploy` to build the Docz site and deploy to gh-pages (if you have permission).
