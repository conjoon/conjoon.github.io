---
id: conjoon.conf.json
---

# `conjoon.conf.json`

## Overview {#overview}

`conjoon.conf.json` contains configurations for a **conjoon** frontend installation and is placed at  `desktop/resources/coon-js/conjoon.conf.json`

:::info
Development specific configuration files should be named `conjoon.dev.conf.json` and are given precedence when
working with the development version of **conjoon**. In a development version of conjoon, they must be place at `resources/coon-js/conjoon.dev.conf.json`
:::

### Base configuration layout
:::note
A configuration file for **conjoon** **MUST** start with the field `conjoon`, its value being an object containing configuration specifics.
:::
```json
{
    "conjoon": {
        "services": {},
        "plugins": {
            "application": [],
            "components": []
        },
        "application": {},
        "packages": {}
    }
}


```


## Sections

### `application` {#application}

- Type: `Object`

Application specific configuration. Will be used for overall appearance of the frontend. Additional key/value-pairs can be added. They are available during runtime by using the `coon.core.ConfigManager`-API (e.g. `coon.core.ConfigManager.get("conjoon", keyName)`.

#### `title` {#application-title}

- Type: `String`

The title for your installation of **conjoon**. Used as the `title` for the browser instance and at various other places throughout the application. See also [`titleTpl`](#application-titleTpl).

```json title="conjoon.conf.json"
 {
    "application": {
        "title": "conjoon"
    }
}
```

#### `tagline` {#application-title}
- Type: `String`

The tagline for your installation of **conjoon**. Used at various places with the [`titleTpl`](#application-titleTpl).

```json title="conjoon.conf.json"
 {
    "application": {
        "tagline": "Webmail made easy"
    }
}
```

#### `titleTpl` {#application-titleTpl}
- Type: `String`

The template to use for rendering the `title` in the browser's tab/title bar. ES6 template string syntax can be used for replacing identifiers with their concrete values. No evaluating of JavaScript functionality possible.

```json title="conjoon.conf.json"
 {
    "application": {
        "titleTpl": "~~ ${title} ~~"
    }
}
```

#### `announcement` {#application-titleTpl}
- Type: `Object`

An object containing a `message`:`String` and a `type`:`info|alert|warning|success` to be used for rendering an initial `AnnouncementBar` with the start of **conjoon**

```json title="conjoon.conf.json"
 {
    "application": {
        "announcement": {
            "message": "Thank you for using conjoon :)",
            "type": "info"
        }
    }
}
```

### `packages` {#packages}
 - Type: `Object`

An object containing all the packages that should be used with **conjoon**. If no package configuration is available here, but the package gets loaded nonetheless, the configuration available with the package will be used. 

:::tip
For package specific configurations of packages available with the base installation of **conjoon**, please refer to the [Packages Guide](/docs/packages/overview.md).
:::

There are a two relevant fields that are used with each package configuration: `autoLoad` and `config`. Let's have a look at an example for the package named `package-calendar` that gets configured with `conjoon.conf.json`:

```json title="conjoon.conf.json"
 {
    "packages": {
        "package-calendar": {
            "disabled": false,
            "autoLoad": {
                "registerController": true
            },
            config: {
                "baseUrl": "https://ddev.ms.calendar/api/v1"
            }
        }
    }
}
```
#### `enabled`
- Type: `bool`

`enabled` allows for enabling/disabling a package. Packages are enabled by default. Use `"enabled":false` to 
disable a package. The particular package will then be ignored by **conjoon**. 

:::note
The semantic complement `disabled` can also be used instead of `enabled`.
:::


#### `autoLoad`
 - Type: `Object`|`bool`

`autoLoad` is responsible for telling **conjoon** whether the package should get intially loaded.
To prevent autoloading, simply set its value to `false`. The package must then be manually loaded later on, if required. 
```json title="conjoon.conf.json"
 {
    "packages": {
        "package-calendar": {
            "autoLoad": false
        }
    }
}
```
If the package should get initially loaded, its value can be set to `true`. However, if the package owns a `PackageController` that must be registered with the application to provide initial functionality, set `autoLoad` to an object which contains the field `registerController` and set this to `true`.
:::tip
Setting `registerController` to `false` provides an easy way to temporarily exclude functionality of an auto-loaded package that usually installs itself by using a `PackageController`.

```json title="conjoon.conf.json"
 {
    "packages": {
        "package-calendar": {
            "autoLoad": {
                "registerController": false
            }
        }
    }
}
```
:::

#### `config`
 - Type: `Object`

An object containing the configuration for this package. For available package configuration, you should refer to the package being used.
:::note
A `config` object is **NOT** merged with the package's initial configuration and overwrites it completely.
:::


### `services` {#services}

- Type: `Object`

An object mapping abstracts to concrete implementations that will be looked up by using the `ServiceLocator`.

The fqn of the abstract is used as the field-name for the object containing detailed information about the concrete to use, and how it should be instantiated. Two notable fields are used in the concrete's configuration: `xclass` and `args`:

```json title="conjoon.conf.json" 
{
    "services": {
        "coon.core.service.UserImageService": {
            "xclass": "coon.core.service.GravatarService",
            "args":   [{
                "parameters" :  {"d":  "blank"}
            }]
        }
    }
}
```

#### `xclass`
 - Type: `string`

The fqn of the concrete mapped to the abstract. Must be readily available (i.e. loaded) by the time the `ServiceLocator` resolves it.

#### `args`
 - Type: `array`

An array containing an arbitrary number of entries to be passed to the constructor of `xclass`.

:::note
`Services` resolved by the `ServiceLocator` are shared instances.
:::

### `ioc` {#ioc}

- Type: `Object`

An object providing information for the _Inversion of Control_-Container used in **conjoon**.

```json title="conjoon.conf.json" 
{
  "conjoon": {
    "ioc": {
      "bindings": {
        "conjoon.dev.cn_mailsim": {
          "conjoon.dev.cn_mailsim.data.SimletAdapter": "conjoon.cn_imapuser.dev.BasicAuthSimletAdapter"
        },
        "conjoon.cn_mail": {
          "coon.core.data.request.Configurator": "conjoon.cn_imapuser.data.request.Configurator"
        }
      }
    }
  }
}
```

#### `bindings`
- Type: `object`

Object that maps concrete implementations for (abstract) interfaces or classes. This configuration can also be utilized by packages that provide configuration information for the application instance they're used with. Bindings found in the application configuration are given precedence
and override equal package-specific bindings.

Bindings are generally introduced with their class name or the namespace for which the binding gets realized. This key then holds an object of the _TYPES_ that are replaced with the _CONCRETE_:

```json
{
    "ioc": {
        "bindings": {
            "CLASS_OR_NAMESPACE": {
                "TYPE": "CONCRETE"
            }
        }    
    }
}
```

The above configuration reads as follows:

```
    when CLASS_OR_NAMESPACE 
        needs TYPE
        give CONCRETE
```

The class with the particular name or owned by that namespace must be configured
with _meta-information_ so it is recognized as _injectable_.

:::note
See [this article](/docs/advanced/dependencyinjection) for examples and  information on Dependency Injection in **conjoon**.
:::

### `plugins` {#plugins}
 - Type: `Object`

An object specifying the fields `application` and/or `components`, providing information about the used `Application` and `ComponentPlugins` with an installation of **conjoon**. 

:::info Pre-installed Plugins
**conjoon** comes pre-installed with the following plugins 
- [app-internal-titlechange](/docs/plugins/app-internal-titlechange.md) 
- [app-internal-desktopquotes](/docs/plugins/app-internal-workbenchquotes.md)
- [theme-internal-modeswitch](/docs/plugins/theme-internal-modeswitch.md)
- [extjs-plug-themeutil](/docs/plugins/extjs-plug-themeutil.md)
:::

#### `application` {#plugins-application}
 - Type: `Array`

An array containing an arbitrary number of strings. An entry can be
 - a string containing the package name where the `ApplicationPlugin` can be found
 - the fqn of the `ApplicationPlugin`

```json title=conjoon.conf.json
{
"plugins": {
    "application": [
        "extjs-plug-themeutil",
        "conjoon.plugin.TitleChangePlugin"
    ]
}
```

The first entry is the name of a package. The package has the namespace `coon.plugin.themeutil`. **conjoon** will therefor resolve to the following fqn: `coon.plugin.themeutil.app.plugin.ApplicationPlugin`.

The second entry is already a fqn, so no resolving is necessary, the class name will be used as is.

#### `components` {#plugins-components}

 - Type: `Array`

An array of an arbitrary number of objects representing configuration for a `ComponentPlugin` for a target component.

```json title=conjoon.conf.json
{
    "plugins": {
        "components": [
            {
                "cmp": "cn_navport-tbar",
                "pclass": "conjoon.ModeSwitchPlugin",
                "event": "beforerender",                                                                         
                "args": [{"defaultMode": "dark"}]                                                    
            },
            {
                "cmp": "cn_mail-mailmessagegrid",
                "fclass": "conjoon.PreviewTextLazyLoad",
                "event": "cn_init"
            }
        ]
    }
}
```

An entry in the `components`-array itself has the following key/value-pairs (and can be placed in either the application configuration or a package configuration):

##### `cmp`
 - Type: `String`
A valid component query the application uses to look up the component for which this plugin should be registered

##### `event`
 - Type: `String`
The name of the event emitted by the target component that should be listened to for instantiating and registering the plugin 
:::info 
The event is used to notify the plugin that the target component is readily available for the plugin's purpose.
:::
 
##### `pclass`/`fclass`
 - Type: `String`
The fqn for the plugin to use. If you are using a plugin that extends `Ext.plugin.Abstract`, use `pclass`. If you are referencing a grid-feature (i.e. extending `Ext.grid.feature.Feature`), use `fclass`

##### `args`
 - Type: `Array`
An array of arguments that get passed to the constructor of the plugin



## Further Reading

:::info
An in-depth look at the internals of **conjoon*'s configuration system can be found [here](advanced/configurationdetails).
:::
