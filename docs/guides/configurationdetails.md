---
id: configurationdetails
title: Configuration Details
description: Configuration Details and defining Plugins
---

:::tip
With **conjoon**, you are able to configure application behavior with the help of
its [configuration file](/docs/conjoon.conf.json). This guide sheds some light on how to configure controller-,
application- and component-plugins.

**conjoon** is essentially a **[coon.js](https://github.com/coon-js)**-application. Whenever we speak of "a **coon.js**
-application" in this guide, we also mean **conjoon**.
:::

:::info
This guide originates from the blog
article [Creating Ext JS applications with coon.js — Part 3: Configuration Details and defining Plugins](https://medium.com/@thorstensuckow/creating-ext-js-applications-with-coon-js-part-3-configuration-details-and-defining-plugins-a9e8e99b280a)
.
:::

---

## Environment-specific configuration files

Application and Package configuration files will be looked up in the `resources`-path, containing the folder that was
configured with the `coon-js`-section of the application's `app.json`:

```javascript title="app.json"
{
    "production": {
        "coon-js" : {
            "resourcePath": "files",
            "env": "prod"
        }
    },
    "development": {
        "coon-js" : {
            "resourcePath": "files",
            "env": "dev"
        }
    }    
}
```

Depending on the build you are using (in this case either the production- or the development-build), configuration-files
will be looked up in `resources/files` (note that the resources-folder is the folder-name/path returned by a call
to `Ext.getResourcePath()`).

A coon.js-Application (i.e. **conjoon**) will first query configuration files for the build that is being used (by using
the pattern `[application_name].[coon-js.env].conf.json`), and if that file could not be loaded and results in a HTTP
error-code, loading will fall back to `[application_name].conf.json`. In short, environment-specific configuration files
will always be given precedence over the default-configuration files.

For using specific package configuration files, see the section
about [Dynamic Package Loading](#dynamic-package-loading).

### Layout of an application-configuration file

An application's configuration file **MUST** contain valid JSON. The configuration needs to be an object keyed
under `[application_name].config`. For an application with the name `conjoon`, the structure needs to be initially laid
out as follows:

```json
{
  "conjoon": {
  }
}
```

Note how the configuration has to be introduced with the name of the application the configuration is used in, in this
case `conjoon`
.

### Sections considered within an application configuration file

The following sections are considered when reading out a coon.js-application configuration file:

- `application`: runtime related configuration for the application. Will be available
  via `coon.core.ConfigManager.get([application_name]`)
- `plugins`: Controller-/Component-Plugins that need to be registered for various controllers and/or components
- `packages`: Configuration for packages used by the application. Can also be used to disable/enable packages in a given
  build

## Dynamic Package  Loading {#dynamic-package-loading}

For dynamic package loading, **conjoon** queries `Ext.manifest` for packages which are part of the used-configuration in
an application's `app.json`. Those packages need to have a `coon-js` section configured with a package-entry:

```json
{
  "coon-js": {
    "package": {
      "autoLoad": true
    }
  }
}
```

If `autoLoad` is set to `true`, these packages will be loaded by this application implementation dynamically upon
startup.

If configured with the `registerController`-options set to true, this package's `PackageController` - if any - will be
registered with the application, and during startup, it's `preLaunchHook`-method is called when the application is ready
to settle into its `launch()`-method. If any of the registered `PackageControllers` `preLaunchHook()`-methods
return `false`, the application's `launch()` will not be called.

```json
{
  "coon-js": {
    "package": {
      "autoLoad": {
        "registerController": true
      }
    }
  }
}
```

## Package Configurations

You can add individual configuration files for your packages - those files must follow the naming
scheme `[package_name].conf.json`, and it's generally a good idea to save them in the `resources`-folder as described in
the previous section about the `coon.js`-environment variable, since this folder can serve as the root for all
configuration files for your application.

Package configuration files will be considered if a package has the following section set in its `package.json`, or
globally in the application configuration file:

```json
{
  "coon-js": {
    "package": {
      "config": {}
    }
  }
}
```

or

```json
{
  "coon-js": {
    "package": {
      "config": true
    }
  }
}
```

or

```json
{
  "coon-js": {
    "package": {
      "config": "filename"
    }
  }
}
```

While the first two entries will fall back to file names given the pattern `[package_name].conf.json`, the last example
will define the file name explicitly.

Using specific configuration files for packages instead of placing the configuration itself in their `package.json` can
be beneficial when applying larger configurations to packages.

By default, package configuration files will be looked up in the package's `resources`-folder. If an additional path is
specified, this path is interpreted and resolved:

```json title="Resolving to the resource-path of the owning package:"

{
    "autoLoad": {
        "registerController": true
    },
    
    "config": "extjs-app-webmail.conf.json"
}
```

or

```json
{
  "autoLoad": {
    "registerController": true
  },
  "config": "${package.resourcePath}/extjs-app-webmail.conf.json"
}
```

### Resolving to the application's resource-path

The following resolves
to [`resources/[coon-js.resourcePath]/extjs-app-webmail.conf.json`](/docs/packages/extjs-app-webmail#what-goes-into-an-extjs-app-webmail-configuration)
. In this case, configuration will be read out from the resources-folder of the application, not the package itself.
This spares developers the tedious task of looking up individual files throughout packages in the file system; it makes
it possible to have all configuration centralized at one place, maintaining this one file with .gitignore, if necessary.

```json 
{
    "autoLoad": {
        "registerController": true
    },
    "config": "${coon-js.resourcePath}/extjs-app-webmail.conf.json"
}
```

Package configuration files will completely overwrite configuration defined in the package.json-files of the owning
package.

### Accessing Package Configuration during  runtime

The configuration's data is registered with the `coon.core.ConfigManager` and can be queried by using calls
to `coon.core.ConfigManager.get([package_name])`.

## Configuring Plugins for PackageControllers

`coon.core.app.PackageControllers` are application controllers that wire additional functionality into the `coon.js`
-application their used with, such as automizing routing or providing navigation options to their package's views.

They can have an arbitrary number of plugins of the type `coon.core.app.plugin.ControllerPlugin` which are called by the
application during its preLaunchHook-process - which gets called prior to the application's launch-method.

Regardless of the state of the return-value of a PackageController's `preLaunchHook()`, all registered plugins will be
executed during the `preLaunchHookProcess`, making sure one can add additional setup instructions prior to calling a
package controller's `preLaunchHook`.

:::info
![](https://cdn-images-1.medium.com/max/400/1*T4vK3Qp2NYviCue9K9HcZw.png)

The `preLaunchHookProcess()` of `coon.core.app.Application` will visit every configured controller plugin first, but
only calls each controller's `preLaunchHook()` until the first `false` is detected as a return value
:::

For registering PluginControllers, either create them and add them to the PackageController manually by
using `coon.core.app.PackageController#addPlugin()`, or use the package's configuration.

### Using the package's name to automatically set up the plugin

You can use the package-name to specify a single `ControllerPlugin` out of this individual package. The plugin will then
be looked up in the specified package's app-folder given the naming
pattern `[package-namespace].app.plugin.ControllerPlugin`), or by specifying the fully qualified namespace (_fqn_) of
the `ControllerPlugins to load.

**Example:**

`plug-cn_themeutil` has the namespace `coon.plugin.themeutil`; **conjoon** tries to
create `coon.plugin.themeutil.app.plugin.ControllerPlugin` during application startup; the class must therefore be
defined and registered so the dependency can be properly resolved by **[Sencha Ext JS](https://sencha.com)**  - this
simply means that you need to make sure that the defining package of the plugin is defined as a dependency for the
application itself, in either the `app.json`'s requires or uses-property.

```json
{
  "coon-js": {
    "package": {
      "config": {
        "plugins": {
          "controller": [
            "plug-cn_themeutil"
          ]
        }
      }
    }
  }
}
```

The following is the same as above, but this time we specify the _fqn_ of the
plugin (`coon.plugin.themeutil.app.plugin.ControllerPlugin`)

```json
{
  "coon-js": {
    "package": {
      "config": {
        "plugins": {
          "controller": [
            "coon.plugin.themeutil.app.plugin.ControllerPlugin"
          ]
        }
      }
    }
  }
}
```

### Passing arguments to a controller plugin's constructor

A controller plugin can also be configured with arguments that get applied to the constructor of the ControllerPlugin.
For specifying constructor arguments, the configuration for the controller plugin has to be an object with the
keys `xclass` holding the _fqn_ of the controller plugin, and `args`, which is an array of arguments that get passed to
the plugin's constructor.

In the following example, `{property: "value"}` is passed as the first argument to the plugin's constructor:

```json
{
  "coon-js": {
    "plugins": {
      "controller": [
        {
          "xclass": "conjoon.plugin.ControllerPlugin",
          "args": [
            {
              "property": "value"
            }
          ]
        }
      ]
    }
  }
}
```

**Note:** Plugins for PackageControllers will only be registered if the `PackageController` itself is configured as such
in the owning package's configuration (i.e. `coon-js.package.controller`).
You can add as many plugins as you'd like in the configuration, and mix and match package names with fqns of the
ControllerPlugins.

## Configuring Plugins for the Application

A `coon.js`-application can also be configured with plugins (read: application plugins). These plugins are loaded
globally into the application, and do not depend on PackageControllers per se.

The configuration of application plugins follows the same principles as configuring controller plugins when it comes to
resolving dependencies, given either the package name the application plugin can be found in, or the fqn of the
application plugin.

There are two (obvious) differences:

- When not using the fqn, application plugins will be looked up given the
  pattern `[package_namespace].app.plugin.ApplicationPlugin`
- application plugins must be configured in the [application configuration](/docs/conjoon.conf.json#application), namely
  in the `[application_name].plugins.application` section

**Example:**

The following registers `coon.plugin.themeutil.app.plugin.ApplicationPlugin` as an application plugin for the owning
application:

```json
{
  "conjoon": {
    "plugins": {
      "application": [
        "extjs-plug-themeutil"
      ]
    }
  }
}
```

## Configuring Component Plugins

`coon.js` provides funtionality to specify component-plugins using both the application configuration or package
configurations.

To properly resolve component plugins as dependencies, they need to be loaded by defining them as classes owned by
packages (e.g. by specifying those packages in the `requires`- or `uses`-section in the `app.json`)  - or in any other
way so the [Ext JS' `loader`](https://docs.sencha.com/extjs/7.5.1/classic/Ext.Loader.html) is aware of them.

A component plugin configuration has the following key/value-pairs (and can be placed in either the application
configuration or a package configuration):

- `cmp`: A valid component query the application uses to look up the component for which this plugin should be
  registered
- `event`: The name of the event that should be listened to for instantiating and registering the plugin
- `pclass`/`fclass`: The fqn for the plugin to use. If you are using a plugin that extends `Ext.plugin.Abstract`,
  use `pclass`. If you are referencing a grid-feature (i.e. extending `Ext.grid.feature.Feature`), use `fclass`
- `args`: An array of arguments that get passed to the constructor of the plugin

Internally, the mixin `coon.core.app.plugin.ComponentPluginMixin` is used by the `coon.core.app.Application`
and `coon.core.app.PackageController` to manage component plugins.

```json title="Example for specifying component plugins using the application configuration:"
{
  "conjoon": {
    "plugins": {
      "components": [
        {
          "cmp": "cn_navport-tbar",
          "pclass": "conjoon.ModeSwitchPlugin",
          "event": "beforerender",
          "args": [
            {
              "defaultMode": "dark"
            }
          ]
        },
        {
          "cmp": "cn_mail-mailmessagegrid",
          "fclass": "conjoon.PreviewTextLazyLoad",
          "event": "cn_init"
        }
      ]
    }
  }
}
```



```json title="Example for specifying component plugins using a package configuration:"
{
  "coon-js": {
    "package": {
      "config": {
        "plugins": {
          "controller": [
            "plug-cn_themeutil"
          ],
          "components": [
            {
              "cmp": "cn_navport-tbar",
              "pclass": "conjoon.ModeSwitchPlugin",
              "event": "beforerender",
              "args": [
                {
                  "defaultMode": "dark"
                }
              ]
            },
            {
              "cmp": "cn_mail-mailmessagegrid",
              "fclass": "conjoon.PreviewTextLazyLoad",
              "event": "cn_init"
            }
          ]
        }
      }
    }
  }
}
```

## Advise on using plugins
Use Application Plugins when you want to
 - add optional functionality to an application

Use Controller Plugins when you want to
 - add optional functionality to a package

Use Component Plugins when you want to
 - add optional functionality to a specific component

## Best practices
It is recommended to use the `packages`-section of the application configuration to make sure configuration can be edited at a central place.

Specifying the packages-section in the application configuration file will make sure that packages configurations defined here **completely overwrite** the settings found in their original `package.json`.

Configuration of packages in the application configuration is the same as configuring packages in their associated `package.json`, except for section keys used.

```json title="Example for package configuration in the application configuration file:"
{
    "conjoon": {
        "packages" : {
            "extjs-app-webmail" : {
                "autoLoad": {
                    "registerController": true
                },
                "config": "${coon-js.resourcePath}/mail.conf.json"
            },
            "extjs-app-imapuser": {
                "autoLoad": {
                    "registerController": true
                },
                "config": {
                    "service": {
                        "rest-imapuser": {
                            "base": "https://rest-imapuser/api/v0"
                        }
                    }
                }
            }
        }
    }
}
```