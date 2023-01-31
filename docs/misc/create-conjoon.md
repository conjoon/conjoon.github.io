---
slug: /api/misc/@conjoon/create-conjoon
---

# 📦 create-conjoon

A scaffolding utility to help you instantly set up a functional **conjoon** app.

## Usage {#usage}

```bash
npx create-conjoon@latest [name] [targetDir]
```
or
```bash
npm init @conjoon/conjoon@latest
```
and follow the instructions on screen.

Both the [`name`](#name) and the [`targetDir`](#targetDir) can be specified to trigger a [*quick install*](#install-type). If any of these arguments are missing, the installer will require confirmation for these settings from the user. 

:::caution
**create-conjoon** > V1.0 is only compatible with **conjoon** V1.0 and up. If you want to install a previous version of
**conjoon** with this tool, replace `latest` in `npx create-conjoon@latest [name] [targetDir]` with the desired **version
of create-conjoon**.
This command should be preferably used in an interactive shell so all features are available.
:::

## Requirements
[Node.js](https://nodejs.org) version **16.14** or above (check your installed version with `node-v`). Multiple Node versions can be managed with [nvm](https://github.com/nvm-sh/nvm).

## Installation Settings
The following guides you through the options available during the installation. 

### Name {#name}
- _Type_: `String`
- _default_: `conjoon`

The `name` will be used as the `name` field in the created app's `package.json` and the `title` field in the related configurations. 

The `name` will also be used as the default site's path, if [`targetDir`](#targetDir) was initially omitted. The site path is computed relative to the current working directory.

:::note
Make sure to adjust the meta fields found in the `package.json` (repository, author and such) if you plan to fork **conjoon** and create your own project from it. 
:::

### Target Directory {#targetDir}
- _Type_: `String`

The `targetDir` will be used as the target directory for this conjoon installation.
The directory must not yet exist, otherwise the installer will show an error and request a new target directory. If omitted, defaults to `./<name>`, but still requires confirmation of the user.


### Installation Type {#install-type}
 - _Type_: `selection`
 - _values_:
   - `quick`: Will install **conjoon** using its latest release and with demo data from the development release. The production build will be configured with fake endpoints, returning mock data in its responses. 
   - `custom`
     Will install **conjoon** and configure it based on the following settings:

### `Authentication Package`
- _Type_: `select` / `String`
- _default_: `extjs-app-imapuser`

The Authentication Package used with this installation. Read more about (authentication-) packages and their impact
on the behavior of **conjoon** [here](/docs/packages/overview.md).

### `Base url for auth`
 - _Type_: `String`
 - _default_: `https://ddev-ms-email.ddev.site/rest-imapuser/api/v0/`

Base url where authentication endpoints are found. Only available if the Authentication Package in the previous step
supports this.

### `Base url for email`
- _Type_: `String`
- _default_: `https://ddev-ms-email.ddev.site/rest-api-email/api/v0/`

Base url where the [rest-api-email](/docs/rest-api/rest-api-email.md)-endpoints can be found

### `Version`
- _Type_: `select`/`String`
- _default_: `<latest release>`

Provides a list of the last 5 releases, and a text input to manually enter the required version, if the user wants to install an older release of **conjoon**. Requested versions will be looked up in the NPM registry. A message will be shown if the release was not found in the registry 

:::tip
Use the **quick** installation to get the **conjoon** frontend running locally. You can always configure the application to a later point for connecting to existing [backends](/docs/backends/overview.md)
:::