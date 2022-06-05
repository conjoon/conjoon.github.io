---
id: extjs-app-webmail
title: 📦 extjs-app-webmail
slug: /api/packages/@conjoon/extjs-app-webmail
---

[Application Package](/docs/packages/overview#application-packages) for providing the UI and client logic for a lightweight, feature-rich email client.

This package supports [rest-api-email](/docs/rest-api/rest-api-email) for IMAP/SMTP operations.

## Use this package, if you...
- want to manage multiple mail accounts in a single browser instance
- are using [lumen-app-email](docs/backends/lumen-app-email)

### Requirements
This package requires a service that complies with the REST API described in `rest-api-email` which can be found in the [REST API description](https://github.com/conjoon/rest-api-description) of the **conjoon**-project.
:::tip Works great with lumen-app-email!
This package was developed along with [lumen-app-email](/docs/backends/lumen-app-email) and is ready to be used with it.
:::

:::info Mocking required Services
When using this package without a running backend, you should use the [extjs-dev-webmailsim](extjs-dev-webmailsim)-package for providing fake endpoints.
:::


## Installation

:::info
This package is automatically installed with **conjoon**.
:::

```bash
$ npm i @conjoon/extjs-app-webmail
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

**extjs-app-webmail** is a **coon.js** package and is tagged as such in the `package.json`:

```json
{
  "coon-js": {
    "package": {
      "autoLoad":  {
        "registerController": true
      },
      "config" : "${package.resourcePath}/extjs-app-webmail.conf.json"
    }
  }
}
```

By default, this package's configuration can be found in this package's `resources` folder in a file named `extjs-app-webmail.conf.json`.

### What goes into an `extjs-app-webmail` configuration?

:::tip conjoon.conf.json
The following can be applied directly to `conjoon.conf.json`. Refer to the [configuration guide](/docs/configuration#package-configurations)!
:::

The configuration file for this package contains various key/value-pairs, configuring the behavior
and appearance of the email client:

```json
{
  "title": "Email",
  "plugins": {
    "components": [
      {
        "cmp": "cn_mail-mailmessagegrid",
        "fclass": "conjoon.cn_mail.view.mail.message.grid.feature.PreviewTextLazyLoad",
        "event": "cn_init"
      }
    ],
    "controller": [
      {
        "xclass": "conjoon.cn_mail.app.plugin.NewMessagesNotificationPlugin",
        "args": [
          {
            "interval": 240000
          }
        ]
      }
    ]
  },
  "resources": {
    "images": {
      "notifications": {
        "newEmail": "resources/images/notification/newmail.png"
      }
    },
    "sounds": {
      "notifications": {
        "newEmail": "resources/sounds/notification/newmail.wav"
      }
    },
    "templates": {
      "html": {
        "editor": "resources/templates/html/editor.html.tpl",
        "reader": "resources/templates/html/reader.html.tpl"
      }
    }
  },
  "service": {
    "rest-api-email": {
      "base": "https://ddev-ms-email.ddev.site/rest-api-email/api/v0/"
    }
  }
}
```

:::note 
The following uses dot-notation for the field-names!
:::

#### `title` 
 - Type: `String`

The title of the package. This is used for assembling navigation entries, or changing the `document.title` of the browser instance the application runs in. This package notifies interested observers with this title whenever view of the package gets activated and gains the focus.
 
#### `resources.images.notifications.newEmail` {#newEmail-image}
 - Type: `String`

An icon to show with the desktop notification when new email messages are coming in.
  
#### `resources.sounds.notifications.newEmail` {#newEmail-sound}
 - Type: `String` 

A notification sound to play when new email messages are coming in.

####  `templates.html.editor`
 - Type: `String`

An html-template to use with the message editor.
 
#### `templates.html.reader` 
 - Type: `String` 

An html-template to use with the message reader.

#### `service`
- Type: `Object`

Endpoint configuration for this package. Used to create required URLs for outgoing HTTP-requests. Provides the field `rest-api-email.base` that must contain the base URL where endpoints for email operations as described in [rest-api-mail](/docs/rest-api/rest-api-email) can be found.

#### `plugins` 
Section for specifying [component](/docs/plugins/overview#component-plugins) and [controller](/docs/plugins/overview#controller-plugins) plugins.

This package comes pre-configured with the following component plugins:

 - `conjoon.cn_mail.view.mail.message.grid.feature.PreviewTextLazyLoad`<br />A plugin for lazy loading email message preview texts in the grid, making sure that envelope information of available messages are loaded and rendered first. You can find more about it [here](/docs/plugins/mail-internal-previewtext).


This package comes pre-configured with the following controller plugins:

 -  `conjoon.cn_mail.app.plugin.NewMessagesNotificationPlugin`<br />A plugin for automatically querying mailboxes for new messages. Plays notification sounds when new messages have been received. If allowed by the user, desktop notifications are shown for new messages, too. The default interval for looking up new messages is set to 240000 ms. [Sounds](#newEmail-sound) and [images](#newEmail-image) can be configured to be used with this plugin. You can find more about it [here](/docs/plugins/mail-internal-newmessages).

