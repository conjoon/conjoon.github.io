---
id: extjs-app-imapuser
title: 📦 extjs-app-imapuser
---
 
[Application Package](/docs/packages/overview#application-packages) for providing the UI and client logic for user authentication against a configurable endpoint. 

This package supports [rest-api-email](/docs/rest-api/rest-api-email) for authenticating
a user against an IMAP server, where the sign-in crendentials for an IMAP-account are the login-information
submitted via this package's login form.

## Use this package, if you... 
 - want to allow users to directly authenticate against an IMAP server
 - are an ISP and want to provide webmail services for your clients based on IMAP account information
 - are using [lumen-app-email](docs/backends/lumen-app-email)

### Requirements
This package requires a service that complies with the REST API described in `rest-api-email` which can be found in the [REST API description](https://github.com/conjoon/rest-api-description) of the **conjoon**-project.
:::tip Works great with lumen-app-email!
This package was developed along with [lumen-app-email](/docs/backends/lumen-app-email) and is ready to be used with it.
:::

:::info Mocking required Services
When using this package without a running backend, you should use the [extjs-dev-imapusersim](extjs-dev-imapusersim)-package for providing fake endpoints.
:::

## Installation

:::info
This package is automatically installed with **conjoon**. 
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

**extjs-app-imapuser** is a **coon.js** package and is tagged as such in its `package.json`:

```json title=package.json
{
    "coon-js": {
        "package": {
            "autoLoad": {
                "registerController":  true
            },
            "config": "${package.resourcePath}/extjs-app-imapuser.conf.json"
        }
    }
}
```

By default, this package's configuration can be found in this package's `resources` folder in a file named `extjs-app-imapuser.conf.json`.

### What goes into an `extjs-app-imapuser` configuration?

:::tip conjoon.conf.json
The following can be applied directly to `conjoon.conf.json`. Refer to the [configuration guide](/docs/configuration#package-configurations)!
:::

The package takes care of sending sign-in credentials of a user via HTTP to a backend implementing [rest-api-mail](/docs/rest-api/rest-api-email). Used with **conjoon**, it will also hook into the preLaunch-process and render views for providing form inputs for the user.

The configuration for this package provides two fields: `tile` and `service`:

```json 
{
  "title": "Login",
  "service": {
    "rest-imapuser" :  {
      "base" : "https://ddev-ms-email.ddev.site/rest-imapuser/api/v0/"
    }
  }
}
```

#### `title` 
 - Type: `String` 

The title of the package. This is used for assembling navigation entries, or changing the  `document.title` of the browser instance the application runs in. This package notifies interested observers with this title whenever view of the package gets activated and gains the focus.

#### `service` 
 - Type: `Object`

Endpoint configuration for this package. Used to create required URLs for outgoing HTTP-requests. 
Provides the field `rest-imapuser.base` that must contain the base URL where  endpoints for authentication as described in [rest-api-mail](/docs/rest-api/rest-api-email) can be found.