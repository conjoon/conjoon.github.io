---
id: extjs-plug-themeutil
title: 🐝 extjs-plug-themeutil
---
 
[Application Plugin](/docs/plugins/overview#application-plugins) for registering a `coon.core.Theme` (e.g. [extjs-theme-material](/docs/themes/extjs-theme-material)) with the theme manager used by **conjoon**.

* Reads out configuration from the {coon.core.ConfigManager} for the theme's package and
* applies its "modes"-value (if config available) to the theme.

## Use this plugin, if you... 
 - have a theme that provides various modes 
 - have additional configuration for a theme

## Installation

:::info
This plugin is automatically installed with **conjoon** and _enabled_ by default. 
:::

```bash
$ npm i @coon-js/extjs-plug-themeutil
```

If you want to develop with this plugin, run the `build:dev`-script:
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

Update the `app.json` of the application by specifying this plugin in the `uses`-property in
either the `development` and/or `production` section:


```json title=app.json
{
    "development": {
        "uses": [
            "extjs-dev-imapusersim",
            "extjs-app-imapuser",
            "extjs-app-webmail",
            "extjs-dev-webmailsim",
            "extjs-plug-themeutil"
        ]
    },
    "production": {
        "uses": [
            "extjs-app-imapuser",
            "extjs-app-webmail",
            "extjs-plug-themeutil"
        ]
    }
}
```

## Configuration

### Enabling / Disabling the plugin

The plugin can be enabled by specifying its package name in the [`plugins/application`](/docs/conjoon.conf.json.md#plugins-application)-section:

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
            "conjoon.plugin.TitleChangePlugin"
        ]
    }
}
```

## Theme Naming Conventions
Any theme inheriting from `coon.core.Theme` can be used with this plugin. Make sure, that

* ... the theme is registered, so that querying the environment via
    * `coon.core.Environment.get("coon-js-theme")` equals `true`
    * `coon.core.Environment.get("theme.name")` equals to `name_of_the_theme_package`, e.g. if the       package's name is `theme-acme`, this setting must equal to `theme-acme`

:::tip 
Configure these settings in a file called `init.js`, and place it in the `overrides`-folder of the theme-package.
:::

* ... the theme's class-name matches the following pattern: `package_namespace.Theme`, e.g. if the package's namespace is `acme.theme.colorTheme`, the fqn of the theme-class extending `coon.core.Theme` must be `acme.theme.colorTheme.Theme`
