# Contributing

Developers upgrading this package for newer versions of Bootstrap should:

1. Read the official Bootstrap upgrading documentation to see if there are any breaking changes (if upgrading several versions read all the intermediary documentation too).
2. Choose a new package version number. It's recommended that the version number you choose has the same MAJOR and MINOR version numbers as Bootstrap version.
   2.1. Set the version in `@ietf-tools/common-bootstrap-theme` in `package.json`'s `version` field.
   2.2. Ensure the exact same version number is used in the companion package `test-webpack-common-bootstrap-theme` `package.json` dependency for `@ietf-tools/common-bootstrap-theme` package so that the test package can import the correct version of `@ietf-tools/common-bootstrap-theme`.
3. Set the version of Bootstrap as a `peerDependency`. If, for example, Bootstrap is stable during versions `5.1.x` series then set a peer dependency of `~5.1.0`.
4. Update Bootstrap variables (etc) in `scss/ietf-theme.scss`;
5. In `/packages/test-webpack-common-bootstrap-theme` run `yarn build` and test the resulting CSS on a site. The details of this testing are out of scope for this documentation.
6. Update documentation to refer to the newer version of Bootstrap. For example, the "Install" section of `README.md` might need updating.
7. In `/packages/common-bootstrap-theme` publish your new package by running `yarn publish`. This will require authentication.

Note that pages on [NPMJS.com](https://www.npmjs.com/) can be cached for up to an hour so the new version might not be immediately visible.

You may also wish to additionally test the actual published package. In a project that uses it try installing that specific version ie `npm i @ietf-tools/common-bootstrap-theme@YOUR_NEW_VERSION`.

## Troubleshooting

### Error during publishing 'Couldn't publish package: "https://registry.yarnpkg.com/@ietf-tools%2fcommon-bootstrap-theme: You must sign up for private packages"'

For historical reasons package names with organisation namespaces such as `@ietf-tools` are private by default, and so must be declared public with a command line flag `--access public` ([see this comment on `@org` packages](https://github.com/lerna/lerna/issues/1821#issuecomment-448473941)).

So the full publish command would be `yarn publish --access public`.

This should only be necessary the first time the package was published, however it is included here on the off chance that this error occurs again.
