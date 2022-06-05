---
id: mail-internal-previewtext
title: 🐝 mail-internal-previewtext
slug: /api/plugins/@conjoon/extjs-app-webmail/mail-internal-previewtext
---

:::caution Internal Plugin
This is an internal plugin defined by **[extjs-app-webmail](/docs/packages/extjs-app-webmail)**.
:::

[Component Plugin](/docs/plugins/overview#component-plugins) for lazy loading preview texts of email messages into the message grid, making sure envelope informations are loaded and rendered first.

## Use this plugin, if you...
- want to speed up the initial loading of the contents of the message grid

## Installation

:::info
This plugin is automatically installed with **[extjs-app-webmail](/docs/packages/extjs-app-webmail)** and _enabled_ by default.
:::


## Configuration

### Enabling / Disabling the plugin

The plugin can be enabled by adding an entry with the field `fclass` set to `conjoon.cn_mail.view.mail.message.grid.feature.PreviewTextLazyLoad` in the [`plugins/components`](/docs/packages/extjs-app-webmail.md#plugins)-section:

```json title=conjoon.conf.json
{
    "packages": {
        "extjs-app-webmail": {
   
            "plugins": {
                "components": [{
                    "cmp": "cn_mail-mailmessagegrid",
                    "fclass": "conjoon.cn_mail.view.mail.message.grid.feature.PreviewTextLazyLoad",
                    "event": "cn_init"
                }]
            }    
        }
    }
    
}
```

To disable the plugin, remove its entry from this section.


### Accepted fields

This plugin's configuration is provided with the section `packages.extjs-app-webmail` of the [conjoon.conf.json](/docs/conjoon.conf.json.md)-file.

<details>
<summary>Readonly fields - these fields should not be changed</summary>

#### `cmp`
- Type: `String`

The component query used to identify the target component for displaying a random quote

#### `fclass`
- Type: `String`

The fqn of the plugin (extending `Ext.grid.feature.Feature`)

#### `event`
- Type: `String`

The event notifying observers that the target component is readily available for accepting HTML child nodes.

</details>

:::tip
The plugin does not support external configuration yet.

The [options](https://conjoon.stoplight.io/docs/rest-api-description/3eea63cb2e7ec-get-a-collection-of-envelope-information-of-messages#options)-parameters sent to the [REST API](/docs/rest-api/rest-api-email) endpoint `/MailAccounts/{mailAccountId}/MailFolders/{mailFolderId}/MessageItems` for retrieving the `previewText` are as follows:

```json
{
    "options": {
        "previewText": {
            "plain": {
                "precedence": true,
                "length": 200
            },
            "html": {
                "length": 200
            }
        }
    }
}
```

You can find these settings in the file `src/data/mail/message/proxy/MessageEntityProxy.js` of the [extjs-app-webmail](/docs/packages/extjs-app-webmail)-package.
:::



