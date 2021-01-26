# Webpack 5 Issue Repro

This next.js app will re-render much slower with webpack@5 (~6 seconds vs ~1 second).

To properly test I advise to always run the following:

```sh
$ rm -Rf modules; mkdir modules; node ./tools/writeModuleTree.js
$ rm -Rf .next;
$ yarn; yarn next
```

By default this repo will run with webpack@4, if you want to run this with webpack@5, change the resolutions webpack version to: `5.17.0` and run `yarn` again. Check `yarn why webpack` and make sure that it is the correct version and then run `yarn next` after clearing everything like advised in the previous step.
