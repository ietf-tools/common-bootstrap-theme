<div align="center">
    
<img src="https://raw.githubusercontent.com/ietf-tools/common/main/assets/logos/common-bootstrap-theme.svg" alt="IETF Bootstrap 5 Theme" height="125" />
    
[![Release](https://img.shields.io/github/release/ietf-tools/common-bootstrap-theme.svg?style=flat&maxAge=600)](https://github.com/ietf-tools/common-bootstrap-theme/releases)
[![License](https://img.shields.io/github/license/ietf-tools/common-bootstrap-theme)](https://github.com/ietf-tools/common-bootstrap-theme/blob/main/LICENSE)

##### IETF Common Bootstrap Theme
    
</div>

---

A common [Bootstrap](https://getbootstrap.com/) theme for \*.ietf.org websites (fonts, colors, etc.), as well as a testing harness.

## Project structure

This is a mono-repo using [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) with two packages:

1. `packages/common-bootstrap-theme`: the published NPM package with the common theme;
2. `packages/test-webpack-common-bootstrap-theme`: a reference implementation and testing harness using the common theme.

The reason for a mono-repo is to allow local development to mimic NPM package imports, allowing for easier testing.

## Contributing

See [`contributing.md`](./CONTRIBUTING.md).
