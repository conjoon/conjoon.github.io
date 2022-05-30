---
id: app-internal-titlechange
title: 🐝 app-internal-titlechange
---

:::caution Internal Plugin
This is an internal plugin defined by **conjoon**. 
:::

[Application Plugin](/docs/plugins/overview#application-plugins) for changing the title of the browser window based on the information provided with the global `conjoon.pplication.TitleAvailable`-event and the [`titleTpl`](/docs/conjoon.conf.json.md#application-titleTpl)-configuration.


## Use this plugin, if you...
- want to provide contextual information based on the navigation of the user with the browser's title

## Installation

:::info
This plugin is automatically installed with **conjoon** and _enabled_ by default.
:::


## Configuration

### Enabling / Disabling the plugin

The plugin can be enabled by specifying its fqn in the [`plugins/application`](/docs/conjoon.conf.json.md#plugins-application)-section:

```json title=conjoon.conf.json
{
    "plugins": {
        "application": [
            "extjs-plug-themeutil",
            "conjoon.plugin.TitleChangePlugin"
        ]
    }
}
```

To disable the plugin, remove its entry from this section.


```json title=conjoon.conf.json
{
    "plugins": {
        "application": [
            "extjs-plug-themeutil"
        ]
    }
}
```

### Accepted fields

This plugin's configuration is provided with the [conjoon.conf.json](/docs/conjoon.conf.json.md)-file.

#### `titleTpl`
- Type: `String`

Please refer to [this entry](/docs/conjoon.conf.json.md#application-titleTpl) for more information on the `titleTpl`
