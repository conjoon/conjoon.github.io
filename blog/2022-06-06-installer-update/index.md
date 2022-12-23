---
title: conjoon installer updates
authors: [ThorstenSuckow]
tags: [update, installer, create-conjoon, npm, initializer]
---

![](./img/create-conjoon.0.22.gif)

Creating a custom labeled version of **conjoon** has never been easier. 

The installer (i.e. [initializer](https://docs.npmjs.com/cli/v8/commands/npm-init)) for **conjoon** received an update to make setting up a local installation of the frontend more convenient and more intuitive.

The installer requires [Node.js](https://nodejs.org) **16.14** or above and is started by typing 
```bash
npx create-conjoon@latest 
```

on the command line. Additionally, you have the option to initiate the [quick install](@site/docs/misc/create-conjoon.md#install-type) right away by providing the `name` and the `target directory` for the installation:

```bash
npx create-conjoon@latest "my webmail" ~/webmail
```

The _quick install_ will continue the installation process by picking the **latest release** from the package registry (**including pre-releases**) and configure the installation with fake endpoints returning demo data. You can still connect to production systems later on by using appropriate settings.

If you prefer a guided installation for configuring endpoints for existing [backends](@site/docs/backends/overview.md) right away, you can omit any of the arguments. The installer will then present various options to make sure your requirements are met!

In both cases, `target directory` will contain the files required for developing **conjoon** and a production build available in the `build` folder, which is served by typing `npm run stage` in the `target directory.`


**Have a great day!** ☀️  
