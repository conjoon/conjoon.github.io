---
id: configuration
title: Configuration
description: Configuring an installation of conjoon and its frontend packages
---

:::info
This guide focuses on the configuration of the web-client of **conjoon**. For more information on the configuration of one of the available backends, please refer to the [Backend Guide](/docs/backends/overview.md)
:::

**conjoon** is a set of packages that need to get activated with the main application in order to work. This guide shows how to use the central configuration file for the whole application, and how to adjust package-specific settings.

### Where can I find the configuration file?

The configuration file for **conjoon** is available at the following path in a build:
```
desktop/resources/coon-js/conjoon.conf.json
```

## What goes into a `conjoon.conf.json`?
An overview of a **conjoon** configuration can be categorized into:

 - [Application settings](#application-settings)
 - [Package configurations](#package-configurations)
 - [Services](#services)
 - [Plugins](#plugins)

For exact reference to each of the configurable fields, you may refer to the [conjoon.conf.json reference](conjoon.conf.json).

### Application settings  
Application settings allow for configuration of the [`title`](conjoon.conf.json#application-title), a [`title template`](conjoon.conf.json#application-titleTpl), an initial [`Announcement Bar`](conjoon.conf.json#application-announcement) configuration and an arbitrary set of additional configurations for your installation. 

### Package configurations
The [`packages`](conjoon.conf.json#packages)-section in the configuration file of **conjoon** allows for configuring package-specific behavior.
Although packages are self-contained and can be configured directly within their domain, it is good practice to
configure them in the configuration file of **conjoon**. It also allows you for adding `controller plugins`, altering the functionality of packages.

:::tip
During runtime, Application- and Package-specific configurations can be accessed with the `coon.core.ConfigManager`-API.
:::

### Services
The [`services`](conjoon.conf.json#services)-section allows for configuring services to be looked up for the ServiceLocator in **conjoon**, making it possible to share existing functionality among the unlinked packages used with **conjoon**.

:::info
If you are interested in how the ServiceLocator works with **conjoon**, you can follow [this guide](/docs/guides/servicelocator.md).
:::

### Plugins  
Plugins are divided into `application`- and `component`-plugins, and allow for altering the functionality of components and the application itself.

## Further information
:::info
If you are interested in the internals of the configuration system and how it is used with conjoon, you can refer to [this guide](/docs/guides/configurationdetails.md).
:::