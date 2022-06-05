---
id: extjs-dev-imapusersim
title: 📦 extjs-dev-imapusersim
slug: /api/packages/@conjoon/extjs-ctrl-simmanager
---

[Development Package](/docs/packages/overview.md#development-packages) providing fake endpoints for the development of [extjs-app-imapuser](./extjs-app-imapuser.md).

The package intercepts outgoing network requests to all urls matching a specific regular expression. Additionally, you can configure whether the package's intercepting should be enabled or disabled - this makes it easier to use this package in environments where you have to test for fully functional network behavior with real HTTP-requests and live- and mock-data should be used side-by-side.

## Use this package, if you...
- are developing with **conjoon** and want to use demo data with [extjs-app-imapuser](./extjs-app-imapuser.md)

## Installation

:::info
This package is automatically installed with **conjoon** when used in a `--save-dev` context.
:::

```bash
$ npm i --save-dev @conjoon/extjs-dev-imapusersim
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

Update the `app.json` of the application by specifying this package in the `uses`-property in
either the `development` and/or `production` section:


```json title=app.json
{
    "development": {
        "uses": [
            "extjs-dev-imapusersim",
            "extjs-app-imapuser",
            "extjs-app-webmail",
            "extjs-dev-webmailsim"
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

## Configuration

**extjs-dev-imapusersim** is a **coon.js** package and is tagged as such in the
`package.json`:

```json
{
  "coon-js": {
    "package": {
      "autoLoad": {
        "registerController": true
      },
      "config": "${package.resourcePath}/extjs-dev-imapusersim.conf.json"
    }
  }
}
```

By default, this package's configuration can be found in this package's `resources` folder in a file named `extjs-dev-imapusersim.conf.json`.

### What goes into an `extjs-dev-imapusersim` configuration?

:::tip conjoon.conf.json
The following can be applied directly to `conjoon.dev.conf.json`. Refer to the [configuration guide](/docs/configuration.md#package-configurations)!
:::

The configuration file for this package has an entry `auth` that holds the following keys: `url`, `enabled`, `delay`:

```json
{
    "auth": {
        "url": "https://ddev-ms-email.ddev.site/rest-imapuser/api/v.*?/auth(/.*)?",
        "enabled": true,
        "delay": 250
    }
}
```

#### `url` 
- Type: `String`

In order to properly intercept outgoing requests to the services as described in [rest-api-mail](/docs/rest-api/rest-api-email.md), the package needs to be configured with a regular expression for matching urls that should be intercepted. 
:::info
The package is pre-configured with these regular expressions. For example, HTTP-requests to the following URLs are intercepted by this package:
  - `https://dev-ms-email.ddev.site/rest-imapuser/api/v0/auth`
  - `https://dev-ms-email.ddev.site/rest-imapuser/api/v1/auth?dc=22424sff4`
:::

#### `enabled`
- Type: `Bool`

If this package is used with your development or production environment, intercepting urls can be enabled/disabled by changing the property `enabled` to either `true` or `false`

#### `delay` 
  - Type: `Integer`

The delay (in milliseconds) for responses to be returned, to mimic network latency.

## Changing Response Data
If an url was intercepted, static data is returned, complying with [REST API](/docs/rest-api/rest-api-email.md). Static data can be edited in the file `src/data/AuthenticationSim.js`, which is part of this package.
