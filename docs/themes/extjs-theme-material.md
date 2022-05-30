---
id: extjs-theme-material
title: 🎨 extjs-theme-material
---

[Theme](/docs/themes/overview) containing the material theme for **conjoon**.

## Use this theme, if you...
- are looking for a modern material theme with exposed css variables and light- / dark-mode options. 

## Installation

:::info
This theme is automatically installed with **conjoon**.
:::

```bash
$ npm i @conjoon/extjs-theme-material
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

Configure `app.json` to make sure the theme is used:

```json title= app.json
{
    "builds": {
        "desktop": {
            "toolkit": "classic",
            "theme": "extjs-theme-material",
            "sass": ...
        }
    }
}
```

:::info Auto-registering as a Theme
This theme automatically registers itself by setting the following global properties:
```javascript
Ext.theme.is["coon-js-theme"] = true;
Ext.theme.name = "extjs-theme-material";
```
This is to identify itself later on for proper inclusion in the used environment.

There is a override in the `init.js`-file defined that makes sure that the class is made available to applications.
:::


## Configuration

**extjs-theme-material** is a **coon.js** package and is tagged as such in the `package.json`:

```json
{
  "coon-js": {
    "package": {
      "config" : "${package.resourcePath}/extjs-theme-material.conf.json"
    }
  }
}
```

By default, this package's configuration can be found in this package's `resources` folder in a file named `extjs-theme-material.conf.json`.

### What goes into an `extjs-theme-material` configuration?

:::tip conjoon.conf.json
The following can be applied directly to `conjoon.conf.json`. Refer to the [configuration guide](/docs/configuration#package-configurations)!
:::

The following options can be configured to change the appearance of **conjoon**:

```json
{
    "modes": {
        "dark": {
            "name": "Dark Mode",
            "default": true,
            "config": {
                "dark-mode": "true",
                "accent-color": "#35baf6",
                "disabled-color": "rgba(105, 105, 105, 0.38)",
                "accent-foreground-color": "#6b6b6b",
                "base-color": "#35baf6",
                "overlay-color": "rgba(0, 0 , 0, .6)",
                "color": "#d6d6d6",
                "selected-background-color": "#3e4953",
                "base-dark-color": "#3e4953"
            }
        },
        "light": {
            "name": "Light Mode",
            "default": false,
            "config": {
                "dark-mode": "false",
                "accent-color": "#35baf6",
                "accent-foreground-color": "#333333",
                "base-color": "#35baf6",
                "overlay-color": "rgba(0, 0 , 0, .5)",
                "color": "#484848"
            }
        }
    }
}
```
:::note
The following uses dot-notation for the field-names!
:::

#### `modes.dark.name`
 - Type: `String` 

The display name of the `dark` theme mode.

#### `modes.dark.default` 
 - Type: `Bool`

If the dark mode should be used as default.

#### `modes.dark.config`
 - Type: `Object` 
CSS Variables configuration.

:::caution
Variables edited here need to be existing in the theme's SASS-files.
:::

#### `modes.light.name`
- Type: `String`

The display name of the `light` theme mode.

#### `modes.light.default`
- Type: `Bool`

If the light mode should be used as default.

#### `modes.light.config`
- Type: `Object`
  
CSS Variables configuration.

:::caution
Variables edited here need to be existing in the theme's SASS-files.
:::

## Plugins
**extjs-theme-material** installs [theme-internal-modeswitch](/docs/plugins/theme-internal-modeswitch).