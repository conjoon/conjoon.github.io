---
id: theme-internal-modeswitch
title: 🐝 theme-internal-modeswitch
slug: /api/plugins/@conjoon/extjs-theme-material/theme-internal-modeswitch
---

:::caution Internal Plugin
This is an internal plugin defined by **[extjs-theme-material](/docs/themes/extjs-theme-material.md)**.
:::

[Component Plugin](/docs/plugins/overview.md#component-plugins) providing a button for switching between the **light**/**dark** mode of [extjs-theme-material](/docs/themes/extjs-theme-material.md). An additional button for toggling between the modes is rendered into the navigation bar of **conjoon**. 

## Use this plugin, if you...
- want to provide a control for the user for switching between the **light** and **dark** mode of [extjs-theme-material](/docs/themes/extjs-theme-material.md)

## Installation

:::info
This plugin is automatically installed with **conjoon** and _enabled_ by default.
:::


## Configuration

### Enabling / Disabling the plugin

The plugin can be enabled by adding an entry with the field `pclass` set to `conjoon.plugin.WorkbenchQuotes` in the [`plugins/components`](/docs/conjoon.conf.json.md#plugins-components)-section:

```json title=conjoon.conf.json
{
    "plugins": {
        "components": [{
            "cmp": "cn_navport-tbar",
            "pclass": "conjoon.theme.material.plugin.ModeSwitchPlugin",
            "event": "beforerender"
        }]
    }
}
```

To disable the plugin, remove its entry from this section.


### Accepted fields

This plugin's configuration is provided with the [conjoon.conf.json](/docs/conjoon.conf.json.md)-file.

<details>
<summary>Readonly fields - these fields should not be changed</summary>

#### `cmp`
- Type: `String`

The component query used to identify the target component for displaying a random quote

#### `pclass`
- Type: `String`

The fqn of the plugin (extending `Ext.plugin.Abstract`)

#### `event`
- Type: `String`

The event notifying observers that the target component is readily available for accepting HTML child nodes.

</details>




