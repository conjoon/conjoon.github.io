---
id: extjs-ctrl-simmanager
title: 📦 extjs-ctrl-simmanager
slug: /api/packages/@coon-js/extjs-ctrl-simmanager
---

[Development Package](/docs/packages/overview.md#development-packages) providing a `null` default simlet when using fake endpoints with **conjoon**. This makes sure that requests can bypass the simlet factories and are treated natively.

## Use this package, if you...
- are developing with **conjoon** and want to make sure that HTTP requests not handled by simlets still work

## Installation

:::info
This package is automatically installed with **conjoon** when used in a `--save-dev` context.
:::

```bash
$ npm i --save-dev @coon-js/extjs-ctrl-simmanager
```

If you want to develop with this package, run the `build:dev`-script:
```bash
$ npm run build:dev
```
Testing environment will then be available via

```bash
$ npm test
```

### Configuring Sencha Ext JS
Make sure your ExtJS `workspace.json` is properly configured to look up local repositories in the `node_modules`-directory.

```json title=workspace.json
{
  "packages": {
    "dir": "${workspace.dir}/node_modules/@l8js,${workspace.dir}/node_modules/@conjoon,...",
    "extract": "${workspace.dir}/packages/remote"
  }
}
```

Update the `app.json` of the application by specifying this package in the `uses`-property in either the `development` and/or `production` section:


```json title=app.json
{
    "development": {
        "uses": [
            "extjs-dev-imapusersim",
            "extjs-app-imapuser",
            "extjs-app-webmail",
            "extjs-dev-webmailsim",
            "extjs-ctrl-simmanager"
        ]
    },
    "production": {
        "uses": [
            "extjs-app-imapuser",
            "extjs-app-webmail"
        ]
    }
}
```
