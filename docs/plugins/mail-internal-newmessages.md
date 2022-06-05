---
id: mail-internal-newmessages
title: 🐝 mail-internal-newmessages
slug: /api/plugins/@conjoon/extjs-app-webmail/mail-internal-newmessages
---

:::caution Internal Plugin
This is an internal plugin defined by **[extjs-app-webmail](/docs/packages/extjs-app-webmail.md)**.
:::

[Controller Plugin](/docs/plugins/overview.md#controller-plugins) for showing desktop notifications for new email messages. Mailboxes will be polled for new messages in a specific [interval](#interval).

## Use this plugin, if you...
- want to poll mailboxes of mail accounts for new email messages
- want to provide visual and audible notifications for new email messages

# Requirements
This package uses the [Notification API](https://developer.mozilla.org/en-US/docs/Web/API/notification). Desktop Notifications will only be displayed if the user has granted permission to the API to do so. Permissions will be requested during the start of **conjoon** by showing an `Announcement`.

## Installation

:::info
This plugin is automatically installed with **[extjs-app-webmail](/docs/packages/extjs-app-webmail.md)** and _enabled_ by default.
:::


## Configuration

### Enabling / Disabling the plugin

The plugin can be enabled by adding an entry with the field `xclass` set to `conjoon.cn_mail.app.plugin.NewMessagesNotificationPlugin` in the [`plugins/controller`](/docs/packages/extjs-app-webmail.md#plugins)-section:

```json title=conjoon.conf.json
{
    "packages": {
        "extjs-app-webmail": {
            "plugins": {
                "controller": [{
                    "xclass": "conjoon.cn_mail.app.plugin.NewMessagesNotificationPlugin",
                    "args": [{
                        "interval": 240000
                    }]
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

#### `xclass`
- Type: `String`

The fqn of the plugin (extending `coon.core.app.plugin.ControllerPlugin`)
</details>

#### `args`
- Type: `Array`

An array of arguments passed to the constructor of the plugin. For this plugin, an object should be submitted to the constructor, containing the following fields:

##### `interval`
- Type: `Integer`

The interval (in milliseconds) in which mailboxes should be polled for new messages. Defaults to 240000 ms (4 minutes).

:::info Additional Configuration
Additional settings for this plugin can be configured with the [extjs-app-webmail](/docs/packages/extjs-app-webmail.md) configuration.

##### `resources.images.notifications.newEmail`
- Type: `String`
 
Please refer to [this entry](/docs/packages/extjs-app-webmail.md#newEmail-image) for more information on this field

###### `resources.sounds.notifications.newEmail`
- Type: `String`

Please refer to [this entry](/docs/packages/extjs-app-webmail.md#newEmail-sound) for more information on this field
:::