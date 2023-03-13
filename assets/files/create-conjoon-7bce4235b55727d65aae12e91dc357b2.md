---
slug: /api/misc/@conjoon/create-conjoon
---

# 📦 create-conjoon

A scaffolding utility to help you instantly set up a functional **conjoon** app.

## Usage {#usage}

```bash
npx create-conjoon@latest 
```
or
```bash
npm init @conjoon/conjoon@latest
```
and follow the instructions on screen.


:::caution
This command should be preferably used in an interactive shell so all features are available.
:::

## Requirements
[Node.js](https://nodejs.org) version **16.14** or above (check your installed version with `node-v`). Multiple Node 
versions can be managed with [nvm](https://github.com/nvm-sh/nvm).

## Installation Settings
The following guides you through the options available during the installation. 

### `Installation Type` {#installType}
- _Type_: `select`
- _values_: `npm`, `release`
- _default_: `release`

The step allows you to choose whether you want to install up a pre-built instance (`release`, i.e. an official build) or the
development build (`npm`) of **conjoon**. While the official build is ready to be used as a frontend in production, the 
latter will create the development environment with the necessary sources.

:::tip
Use the **npm** installation type if you want to develop with **conjoon**.

Use the **release** installation type if you want to install a production-ready instance of **conjoon**.
:::

### `Target Folder` {#targetDir}
- _Type_: `String`
- _default_: `./conjoon`

The `target folder` will be used as the parent directory for *this* instance of **conjoon**.

:::warning installation type `release`
The installer allows to use an _existing_ directory for a [`release`](#installType). <br />
**create-conjoon** will query the user's permission to overwrite the contents of an existing directory. <br />
**Back up any important data of this directory when opting for overwriting it.**<br />
**create-conjoon** itself will merge any existing configuration of a previous **conjoon** installation
found in this directory into the configuration of the new installation before overwriting it.
:::

For [`npm`](#installType)-installations, this directory must not exist yet. Otherwise, the user is prompted to 
provide another target directory.


### `Version`
- _Type_: `select`/`String`
- _default_: `<latest release>`

Provides a list of the last 5 releases, and a text input to manually enter the required version. 
Versions displayed are queried from **conjoon**'s npm registry and are the latest stable versions (i.e. `npm view @conjoon/conjoon@* version`).

If you want to install a pre-release, use `<enter manually>` for specifying the pre-release version. (pre-)releases
can be found at the official [**conjoon**-repository](https://github.com/conjoon/conjoon/releases).

## Additional notes

**create-conjoon** > V1.0 is only compatible with **conjoon** V1.0 and up. If you want to install a previous version of
**conjoon** with this tool, replace `latest` in `npx create-conjoon@latest` with the desired **version
of create-conjoon**.

### On merging configurations

**create-conjoon** will try to merge configurations when the installation type is set to `release` and the target
folder already contains an instance of **conjoon**. The configuration keys from the previous instance will only
end up in the new instance if those keys are recognized by the version to be installed.

Thus, if you have **added additional configuration** options, you need to add them **manually** to the new instance.

A backup folder containing previous configuration files will be created during the merge process, so you can easily check
which keys were not recognized by the installed instance.