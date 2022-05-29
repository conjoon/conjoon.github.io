---
id: extjs-theme-material
---

:::info
conjoon comes preconfigured with this Theme!
:::

This Sencha ExtJS NPM package contains the material theme for development of [conjoon](https://github.com/conjoon) along
with its application packages.
<br />
This theme serves as a base for pluggable packages, such as [conjoon/extjs-app-webmail](https://github.com/conjoon/extjs-app-webmail).
Styling information for external packages must be self-contained and managed by the packages.
<br />
This theme extends the Material-Theme of Ext JS. Ext JS > 7.0 is required for this package. 

## Installation
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

For using the package as a theme:
<br />
In your `app.json`, add this package as a requirement, and make sure your Ext JS `workspace.json`
is properly configured to look up local repositories in the `node_modules`-directory.

Example (`workspace.json`) :
```json 
{
  "packages": {
    "dir": "${workspace.dir}/node_modules/@l8js,${workspace.dir}/node_modules/@conjoon,${workspace.dir}/node_modules/@coon-js,${workspace.dir}/packages/local,${workspace.dir}/packages,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name},${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-treegrid,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-base,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-ios,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-material,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-aria,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-neutral,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-classic,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-gray,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-crisp,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-crisp-touch,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-neptune,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-neptune-touch,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-triton,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-graphite,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-material,${workspace.dir}/node_modules/@sencha/ext-calendar,${workspace.dir}/node_modules/@sencha/ext-charts,${workspace.dir}/node_modules/@sencha/ext-d3,${workspace.dir}/node_modules/@sencha/ext-exporter,${workspace.dir}/node_modules/@sencha/ext-pivot,${workspace.dir}/node_modules/@sencha/ext-pivot-d3,${workspace.dir}/node_modules/@sencha/ext-ux,${workspace.dir}/node_modules/@sencha/ext-font-ios",
    "extract": "${workspace.dir}/packages/remote"
  }
}
```

## Configuration and Usage
For more information on how to configure and use the package, refer to the [documentation](./docs/README.md).


## Tests
Tests are written with [Siesta](https://bryntum.com/siesta). Documentation can be found [here](./tests/README.md).


## Configuration options

The following options can be configured to change colors of the application the theme is used in:

- `modes.dark.name` - The display name of the `dark` theme mode.
- `modes.dark.default` - If the theme mode should be used as default.
- `modes.dark.config` - CSS Variables configuration. The variables have to be already existing in the theme itself.
  <br /><br />
- `modes.light.name` - The display name of the `light` theme mode.
- `modes.light.default` - If the theme mode should be used as default.
- `modes.light.config` - CSS Variables configuration. The variables have to be already existing in the theme itself.

_Example:_
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

## Usage
Specified as `theme` property in conjoon's `app.json`.
Additionally, packages providing styling information might refer to this theme
to access various variable definitions.

## Note
### Registering as a coon.js-Theme
This theme automatically registers itself by setting the following global properties:
```javascript
Ext.theme.is["coon-js-theme"] = true;
Ext.theme.name = "extjs-theme-material";
```
This is to identify itself later on for proper inclusion in the coon.js-environment.

### Loading Source Files
Although the package is registered as a static-theme package, sources such as the `conjoon.theme.material.Theme`
cannot be required in a production build if not specified explicitly. There is a dummy-override in the `init.js`-file
defined that makes sure that the class is made available to applications.