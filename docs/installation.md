---
id: installation
title: Installation
description: Installing builds and building from scratch
---
# Installation

**conjoon**`s infrastructure consists of [**NPM**](https://www.npmjs.com/org/conjoon)- and [**composer**](https://packagist.org/packages/conjoon/)-packages. We also provide [**Docker/DDEV**](https://github.com/conjoon/ddev-ms-email) images for pre-build [backends](backend).

:::info
This guide focuses on the installation of the web-client. For more information on the installation of one of the available backends, please refer to the [Backend Guide](./backends)
:::

:::tip
Use the [**Quick Start**](introduction.md#quick-start) to get a build running in no time! ⏱
:::


## Requirements
[Node.js](https://nodejs.org) version 16 or above (check your installed version with `node-v`). Multiple Node versions
can be managed with [nvm](https://github.com/nvm-sh/nvm).

## Using an official Build
Each release of **conjoon** comes with an official build. Releases are available at the [GitHub project page](https://github.com/conjoon/conjoon/releases/). Builds are packed as zip-files and prefixed with `conjoon.build`, following the release-tag, e.g.
`conjoon.build.1.2.3.zip`.

Download a release build and unzip the file (WinZip or 7-Zip on Microsoft Windows, `unzip conjoon.build.xxx.zip -d target-folder` on Unix).
Simply place the extracted contents in a directory that is publicly accessible on your webserver, and you're done.

Example: Your page can be accessed given the url `https://mydomain.com`. The `document root` is set to  `/var/www/html/mydomain`.
**conjoon** should be available at the address `https://mydomain.com/conjoon`:

```bash
md /var/www/html/mydomain/conjoon
unzip conjoon.build.xxx.zip -d /var/www/html/mydomain/conjoon
```


## Installing & building from scratch 

If you wish to create a build of **conjoon** on your own, you can clone the [repository](https://github.com/conjoon/conjoon) and
run the build process on your own.

```bash
cd ~
git clone https://github.com/conjoon/conjoon
cd conjoon
```

Your home directory now contains the folder `conjoon` with the repository contents. 

:::tip
We strive to keep the `main` branch stable. If you're looking for the most recent sources, you should use our `dev`-branch.
:::

### Requirements
Now that you have a local copy of the repository, you need to install the (development-)dependencies. **conjoon**
uses the [Sencha Ext JS SDK](https://sencha.com) and requires [Sencha Ext JS](https://sencha.com) version 7.4 or above.

#### Accessing Sencha's NPM Repository 

The Sencha NPM-repository is private and requires a registered user for downloading the Ext JS SDK. A registered user is either the owner of a commercial license of the SDK, or a user registered for a 30-days trial version of the framework (more info [here](https://www.sencha.com/products/extjs/evaluate/)). To actually resolve the dependencies for **conjoon** when calling `npm ci`, you need to provide your Sencha NPM credentials during the process. 

Once you have your authentication credentials confirmed by Sencha, return to the cli and type

```bash
$ npm login --registry=https://npm.sencha.com/ --scope=@sencha
```

This will start the authentication process for the private NPM repository. 

:::info
Your email-address is your username when logging in, but you have to replace the `@` with two dots `..`.
Example: `myname@domain.tld` becomes `myname..domain.tld`.
:::

Once signed in, an access token will be placed in your `npmrc` file for future authentication against Sencha's NPM repository.
You have now registered https://npm.sencha.com for packages with the scope `@sencha` and can continue with installing the dependencies for **conjoon**. 

:::tip
For more information on how to access the Sencha NPM Repository, refer to [Sencha's official guide](https://docs.sencha.com/extjs/7.4.0/guides/using_systems/using_npm/npm_repo_access.html).
:::

### Installing the Dependencies

Following the above steps, return to the cloned respository in your home directory and start the install process:

```bash
$ cd ~/conjoon
$ npm ci --save-dev  
```

### Running the tests
**conjoon**`s frontend is tested with [**Siesta**](http://bryntum.com/products/siesta). The test browser can be fired up with
```bash
$ npm run test
```

## Available Build Scripts
Once all dependencies were installed with the help of **NPM**, you can run various scripts that help you with the
development of conjoon.

##### Development Build w/ integrated webserver and mocked backend
```bash
$ npm start
```

##### Production Build
A deployable build will be made available in `build/production/conjoon`
```bash
$ npm run build
```

##### Production Build with webserver for preview
```bash
$ npm run build:preview
```


:::tip
When you're done with installation, you can configure the client and its available packages.
Please refer to the chapter ["Configuration"](./configuration) for more information.
:::
