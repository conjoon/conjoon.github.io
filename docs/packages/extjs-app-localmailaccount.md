---
id: extjs-app-localmailaccount
title: 🔑 extjs-app-localmailaccount
slug: /api/packages/@conjoon/extjs-app-localmailaccount
---

[Application Package](/docs/packages/overview.md#application-packages) serving as Authentication Provider.
Provides the client logic for sending IMAP configurations with request payload for dynamically connecting to them.

## Use this package, if you...
- want to allow users to maintain and configure an arbitrary number of IMAP servers
- are using [lumen-app-email](/docs/backends/lumen-app-email.md) with the [`local-mail-account`](/docs/backends/lumen-app-email.md#configureapi) Authentication Provider.

### Requirements
:::tip Works great with lumen-app-email!
This package was developed along with [lumen-app-email](/docs/backends/lumen-app-email.md) and is ready to be used with it.
:::

:::info Mocking required Services
When using this package without a running backend, you should use the [extjs-dev-webmailsim](extjs-dev-webmailsim.md)-package 
for providing fake endpoints. The `ioc.bindings` used with this package should contain an entry similar to the following:

```json title=extjs-app-localmailaccount.conf.json
"ioc": {
    "bindings": {
        "conjoon.dev.cn_mailsim": {
          "conjoon.dev.cn_mailsim.data.SimletAdapter": "conjoon.localmailaccount.dev.BasicAuthSimletAdapter"
        }
    }
}
```

:::

## Installation

:::info
This package is automatically available with **conjoon**.
:::

```bash
$ npm i @conjoon/extjs-app-imapuser
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
            "extjs-dev-localmailaccount",
            "extjs-app-webmail",
            "extjs-dev-webmailsim"
        ]
    },
    "production": {
        "uses": [
            "extjs-dev-localmailaccount",
            "extjs-app-webmail"
        ]
    }
}
```


## Configuration

**extjs-app-localmailaccount** is a **coon.js** package and is tagged as such in its `package.json`:

```json title=package.json
{
    "coon-js": {
        "package": {
            "autoLoad": {
                "registerController":  true
            },
            "config": "${package.resourcePath}/extjs-app-localmailaccount.conf.json"
        }
    }
}
```

By default, this package's configuration can be found in this package's `resources` folder in a file named `extjs-app-localmailaccount.conf.json`.

### What goes into an `extjs-app-localmailaccount` configuration?

:::tip conjoon.conf.json
The following can be applied directly to `conjoon.conf.json`. Refer to the [configuration guide](/docs/configuration.md#package-configurations)!
:::

The package allows users to maintain an arbitrary number of IMAP accounts using [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
Connection information will be send along with the payload of the individual requests.

The configuration for this package provides various fields:

```json
{
  "title": "Local Email Accounts",
  "interceptUri": "\\/MailAccounts\\/?[^\\/]*$",
  "ioc": {
    "bindings": {
      "conjoon.dev.cn_mailsim": {
        "conjoon.dev.cn_mailsim.data.SimletAdapter": "conjoon.localmailaccount.dev.BasicAuthSimletAdapter"
      },
      "conjoon.cn_mail": {
        "coon.core.data.request.Configurator": {
          "xclass": "conjoon.localmailaccount.data.request.Configurator",
          "singleton": true
        }
      }
    }
  }
}
```

- `title` - The title of the package. This is used for assembling navigation entries, or changing the
  `document.title` of the browser instance the application runs in. This package notifies interested
  observers with this title whenever view of the package gets activated and gains the focus.

- `interceptUri` - The URI the package should intercept when reading/writing MailAccounts so commands are redirected to
  this package's LocalStorage-API

- `ioc` - Bindings for the Inversion of Control-Container used with **extjs-app-localmailaccount**. 