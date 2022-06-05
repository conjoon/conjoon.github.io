---
id: app-internal-desktopquotes
title: 🐝 app-internal-desktopquotes
slug: /api/plugins/@conjoon/conjoon/app-internal-desktopquotes
---

:::caution Internal Plugin
This is an internal plugin defined by **conjoon**.
:::

[Component Plugin](/docs/plugins/overview.md#component-plugins) for greeting the user with a random quote that gets displayed in the main content area of **conjoon** upon startup.

## Use this plugin, if you...
- want to greet your users with a random quote when they start **conjoon**

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
            "cmp": "cn_navport-conctr",
            "pclass": "conjoon.plugin.WorkbenchQuotes",
            "event": "afterrender",
            "args": [
                {
                    "template": "./resources/templates/html/workbench_quotes.html.tpl",
                    "url": "./resources/json/workbench_quotes.list.json"
                }
            ]
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

#### `args`
 - Type: `Array`

An array of arguments passed to the constructor of the plugin. For this plugin, an object should be submitted to the constructor, containing the following fields:


##### `url`
- Type: `String`

The url to the json-file containing the quotes. Must be an array of objects containing arbitrary key/value-pairs

```json title=example.quote.json
[{
    author: "Aristotle",
    text: "Well begun is half done!"
}, {
    author: "House of Atreides",
    text: "Atreides! Atreides! Atreides!"
}]
```

Entries from the file will be randomly selected. An entry is passed as an object named `quote` to the [template](#template).

:::tip 
The url for the quote file can easily be changed, so why don't you maintain your own list of quotes - how about a Best/Worst-Of of your coworkers?
:::


##### `template`
 - Type: `String`

The url to the template-file that is used for rendering the quote. The template file must contain valid HTML.
:::note
 - E6 template syntax must be used for identifying template variables
 - The quote's details are submitted to the template in an object named `quote`
 
```HTML title=quote.html.tpl
<div>
    <span>
        ${quote.author ?? "unknown"} says ${quote.text}
    </span>
</div>
```
:::



