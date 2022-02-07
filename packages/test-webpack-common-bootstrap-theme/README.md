# Testing `@ietf-tools/common-bootstrap-theme`

This package shows a reference consumer of `@ietf-tools/common-bootstrap-theme`, and it also serves as a testing harness of the published package.

## Introduction

This project uses Webpack with a default entry point of `src/index.js`.

Inside `src/index.js` there's an import of `./bootstrap.scss` which follows the install instructions from [`@ietf-tools/common-bootstrap-theme`](https://www.npmjs.com/package/@ietf-tools/common-bootstrap-theme).

## Scripts

- `yarn build` builds into `dist/main.css` which can be run to verify builds.
