# IETF Common Bootstrap theme

A common [Bootstrap](https://getbootstrap.com/) theme for \*.ietf.org websites (fonts, colors, etc.), as well as a testing harness.

## Install

### NPM

```bash
npm i @ietf-tools/common-bootstrap-theme bootstrap@5.1
```

### Yarn

```bash
yarn add @ietf-tools/common-bootstrap-theme bootstrap@5.1
```

## How to use

In your Webpack (or equivalent) project's Sass file add these two lines of code:

```sass
@import "@ietf-tools/common-bootstrap-theme/scss/ietf-theme.scss";
@import "bootstrap/scss/bootstrap";
```

That's it.

Line 1 imports `@ietf-tools/common-bootstrap-theme` package's `scss/ietf-theme.scss` file which sets some global Sass variables and other CSS.

Line 2 imports Bootstrap from the which uses those global Sass variables.

Because both of these lines of code import Sass from NPM packages the Sass
must be processed with Webpack (or equivalent). See [Sass Loader: resolving `@import` rules](https://webpack.js.org/loaders/sass-loader/#resolving-import-at-rules).

## Requirements

- **Webpack:** (or equivalent) This theme requires a Webpack CSS Loader to resolve Sass from NPM packages in `node_modules`. It won't work with Sass command line tools.
- **Bootstrap 5.1.x:** The theme variables are compatible with Bootstrap 5.1.x. Usage with other versions of Bootstrap may not work.

## Bootstrap docs

- [Bootstrap 5.1: Introduction](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

## Contributing

See [`contributing.md`](./CONTRIBUTING.md).
