---
slug: /api/misc/create-conjoon
---

# 📦 create-conjoon

A scaffolding utility to help you instantly set up a functional **conjon** app.

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

## Installation Settings
The following guides you through the options available during the installation. 

### Name
- _Type_: `String`
- _default_: `conjoon`

The `name` will be used as the site's path as well as the `name` field in the created app's `package.json` and the `title` field in the related configurations. 
The site path is computed relative to the current working directory.
:::note
Make sure to adjust the meta fields found in the `package.json` (repository, author and such) if you plan to fork **conjoon** and create your own project from it. 
:::

### Installation Type
 - _Type_: `selection`
 - _values_:
   - `quick`: Will install **conjoon** using its latest release and with demo data from the development release. The production build will be configured with fake endpoints, returning mock data in its responses. 
   - `custom`
     Will install **conjoon** and configure it based on the following settings:
### `Base url for auth`
 - _Type_: `String`
 - _default_: `https://ddev-ms-email.ddev.site/rest-imapuser/api/v0/`

Base url where authentication endpoints are found.

### `Base url for email`
- _Type_: `String`
- _default_: `https://ddev-ms-email.ddev.site/rest-api-email/api/v0/`

Base url where the [rest-api-email](/rest-api/rest-api-email)-endpoints can be found

### `Version`
- _Type_: `select/String`
- _default_: `<latest release>`

Provides a list of the last 5 releases, and a text input to manually enter the required version, if the user wants to install an older release of **conjoon**. Requested versions will be looked up in the NPM registry. A message will be shown if the release was not found in the registry 

:::tip
Use the **quick** installation to get the **conjoon** frontend running locally. You can always configure the application to a later point for connecting to existing [backends](/docs/backends/overview)
:::