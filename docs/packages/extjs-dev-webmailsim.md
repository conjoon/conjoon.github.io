---
id: extjs-dev-webmailsim
title: 📦 extjs-dev-webmailsim
slug: /api/packages/@conjoon/extjs-dev-webmailsim
---

[Development Package](/docs/packages/overview#development-packages) providing fake endpoints for the development of [extjs-app-webmail](./extjs-app-webmail).

The package intercepts outgoing network requests to all urls matching a specific regular expression. Additionally, you can configure whether the package's intercepting should be enabled or disabled - this makes it easier to use this package in environments where you have to test for fully functional network behavior with real HTTP-requests and live- and mock-data should be used side-by-side.

## Use this package, if you...
- are developing with **conjoon** and want to use demo data with [extjs-app-webmail](./extjs-app-webmail)

## Installation

:::info
This package is automatically installed with **conjoon** when used in a `--save-dev` context.
:::

```bash
$ npm i --save-dev @conjoon/extjs-dev-webmailsim
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

**extjs-dev-webmailsim** is a **coon.js** package and is tagged as such in the
`package.json`:

```json
{
  "coon-js": {
    "package": {
      "autoLoad":  {
        "registerController": true
      },
      "config" : "${package.resourcePath}/extjs-dev-webmailsim.conf.json"
    }
  }
}
```

By default, this package's configuration can be found in this package's `resources` folder
in a file named `extjs-dev-webmailsim.conf.json`.

### What goes into an `extjs-dev-webmailsim` configuration?

:::tip conjoon.conf.json
The following can be applied directly to `conjoon.dev.conf.json`. Refer to the [configuration guide](/docs/configuration#package-configurations)!
:::

The configuration file for this package has various entries representing entities endpoints for accessing them:
`mailAccount`, `mailFolder`, `messageItem` and `attachment`:

```json
{
  "attachment": {
    "url": "https://ddev-ms-email.ddev.site/rest-api-email/api/v.*?/MailAccounts/(.+)/MailFolders/(.+)/MessageItems/(.+)/Attachments(/.*)?",
    "enabled": true,
    "delay": 250
  },
  "messageItem": {
    "url": "https://ddev-ms-email.ddev.site/rest-api-email/api/v.*?/MailAccounts/(.+)/MailFolders/(.+)/MessageItems(/.*)?",
    "enabled": true,
    "delay": 250
  },
  "mailFolder": {
    "url": "https://ddev-ms-email.ddev.site/rest-api-email/api/v.*?/MailAccounts/(.+)/MailFolders(/.*)?",
    "enabled": true,
    "delay": 250
  },
  "mailAccount": {
    "url": "https://ddev-ms-email.ddev.site/rest-api-email/api/v.*?/MailAccounts(/d+)?",
    "enabled": true,
    "delay": 250
  }
}
```
Each entry in the configuration can be configured with

#### `url`
- Type: `String`

In order to properly intercept outgoing requests to the services as described in [rest-api-mail](/docs/rest-api/rest-api-email), the package needs to be configured with a regular expression for matching urls that should be intercepted for accessing the represented entity.
:::info
The package is pre-configured with these regular expressions. For example, HTTP-requests to the following URLs are intercepted by this package:
- `https://dev-ms-email.ddev.site/rest-api-email/api/v0/MailAccounts`
- `https://dev-ms-email.ddev.site/rest-api-email/api/v1/MailAccounts/dev/MailFolders/INBOX.Sent/MessageItems/123`
:::

#### `enabled`
- Type: `Bool`

If this package is used with your development or production environment, intercepting urls can be enabled/disabled by changing the property `enabled` to either `true` or `false`

#### `delay`
- Type: `Integer`

The delay (in milliseconds) for responses to be returned, to mimic network latency.

:::tip Order of matching URLs
URL-matching is considered in the order the urls are configured. Make sure more specific regular expressions are defined first, followed by more common ones.

For example, the url `https://dev-ms-email.ddev.site/rest-api-email/api/v1/MailAccounts/dev/MailFolders/INBOX.Sent/MessageItems/123`
would be intercepted by the regular expression defined with `mailFolder` (because it is defined _at first_), although it should be intercepted by `messageItem`:

```json
{
  "mailFolder": {
    "url": "https://ddev-ms-email.ddev.site/rest-api-email/api/v.*?/MailAccounts/(.+)/MailFolders(/.*)?",
    "enabled": true,
    "delay": 250
  },
  "messageItem": {
    "url": "https://ddev-ms-email.ddev.site/rest-api-email/api/v.*?/MailAccounts/(.+)/MailFolders/(.+)/MessageItems(/.*)?",
    "enabled": true,
    "delay": 250
  }
}  
```
:::

## Changing Response Data
If an url was intercepted, static data is returned, complying with [REST API](/docs/rest-api/rest-api-email). Static data can be edited in the files `src/data/table/MessageTable.js` (message envelopes and bodies) and `src/data/table/AttachmentTable.js` (attachments), which are both part of this package.
