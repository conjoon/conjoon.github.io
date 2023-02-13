---
slug: /api/misc/@coon-js/create-siesta
---

# 📦 create-siesta

A scaffolding utility to help you instantly set up a functional **[Siesta](https://bryntum.com)** testing environment.

## Usage {#usage}

```bash
npx create-siesta@latest [-f] 
```
or
```bash
npm init @coon-js/siesta@latest
```
and follow the instructions on screen.

:::caution
This command should be preferably used in an interactive shell so all features are available.
:::

The `-f`/`--force`-option is optional and can be used to force the installation of package dependencies, even if the tool would skip it otherwise.

This tool can be used with existing or new [Sencha Ext JS](https://sencha.com)-projects preferably maintained as NPM packages.

It will create an environment based on [Siesta lite](https://bryntum.com) with pre-configured files that can be used as test-file templates for an **Ext JS** application.

:::caution
Since tests written for **Ext JS** with **Siesta** depend on a functional **Ext JS** installation, this tool will also help with creating builds for the **modern**- and **classic**-toolkit of **Ext JS**. If you decide to install the **Ext JS** sources with this tool from the [**Sencha** NPM-registry](https://npm.sencha.com), please make sure you have a [**working login**](/docs/installation#accessing-senchas-npm-repository) for this private registry.
:::


## Requirements
[Node.js](https://nodejs.org) version **16.14** or above (check your installed version with `node-v`). Multiple Node versions can be managed with [nvm](https://github.com/nvm-sh/nvm).

## Installation Steps
The following guides you through the various steps available during the installation. 

### 1. Add default test-installation 
- _Type_: `bool`
- _default_: `false`


**create-siesta** starts with asking you if you want to create a default test-suite. This will add a few default
tests to your project and is **recommended if you have not created any tests on your own yet**. You will be able
to reuse the test-suite for your project.

If you are using **create-siesta** in a project where a test-folder and tests already exists, you most likely
read this documentation because you need to build an environment to run these tests. In this case, you can skip this step.

### 2. Target folder 
- _Type_: `String`
- _default_: `tests`

**This step is only available if you chose to build a default test-suite**.

This step queries the name of the folder where the **Siesta** tests should be made available.

**The folder must be a direct child of the current working directory.**

If the folder with the selected name already exists, `create-siesta` asks if it is allowed to override the contents. If the question is negated, this installation step will be repeated so a different folder name can be specified.


### 3. Building the Ext JS SDK
- _Type_: `bool`

If the current environment requires a build of **Ext JS**, `create-siesta` can be advised to take care of the build process for the **Sencha Ext JS** sources.

#### 3.1 Target folder for the Ext JS SDK {#extjs_target}
- _Type_: `String`
- _default_: `.extjs-build`

If this previous question is positively confirmed, `create-siesta` will prompt for the name of the folder where the build of **Ext JS** should be made available.

**The folder must be a direct child of the current working directory.**

If the folder with the selected name already exists, `create-siesta` asks if it is allowed to override the contents. If the question is negated, this installation step will be repeated so a different folder name can be specified.

:::info
If the **Ext JS SDK** is built with `create-siesta`, both the `.gitignore` and `.npmignore` found in the current working directory will be updated with the name of the folder selected in [step 2.1](#extjs_target). 
If any of these files do not exist, they will be created by `create-siesta`.
:::

### 4. Updating the package.json
- _Type_: `bool`

`create-siesta` provides two different ways of [installing package-dependencies](#dependencies): `--save-dev` or `--no-save` with `npm i`. 

If the environment should be updated with all the information collected and created by `create-siesta`, the `package.json` will be updated with the following information:

1. Installed packages and their versions, made available with `devDependencies`.
2. entry in `scripts` for starting the local webserver with the **Siesta** test application in a web browser: `npm run test:siesta`


:::info
If no `package.json` is available in the current working directory, `create-siesta` will create this file.
:::


### 5. Package Dependencies {#dependencies}
- _Type_: `list`
- _Options_: 
  - `local-web-server` 
  - `siesta-lite`
  - `@coon-js/siesta-lib-helper`
  - `@sencha/cmd` 
  - `@sencha/ext` 
  - `@sencha/ext-ux` 
  - `@sencha/ext-core`
  - `@sencha/ext-classic` 
  - `@sencha/ext-modern`
  - `@sencha/ext-classic-runtime` 
  - `@sencha/ext-modern-runtime`

`create-siesta` prompts for the packages that should be installed. If the tool was invoked with a project where packages from this list already exist, those packages will be initially **deselected**. Missing packages are initially **selected**.

:::caution
In order for **Siesta** to properly work, it is recommended to install all suggested packages from this list, i.e. all packages that are currently missing in the given environment.  
:::

:::info 
If all required packages are already installed in the current working directory's `node_modules`-folder, this step will not be available until `create-siesta` was invoked with the `-f`/`--force`-option.
:::

#### 5.1 Skip Package Version Selection
- _Type_: `bool`

`create-siesta` allows for selecting the required version for each of the packages selected in [step 4](#dependencies) with [step 4.2](#versions). With this option, `create-siesta` can automatically decide which version to install.

#### 5.2 Package Version Selection {#versions}
- _Type_: _list_
- _Options_: _various_

For each package selected with [step 4](#dependencies), `create-siesta` allows for selecting the version to install. A list of the latest versions will be presented, and an input field to manually specify the selected version. 

:::info
`create-siesta` will automatically select the recommended version for each package.
:::

## Finishing the installation
Once `create-siesta` finished the installation process, the script `npm run test:siesta` will be available for starting the **Siesta** web application in a web browser. If the user decided to not update the `package.json` with teh information collected by `create-siesta`, a local web browser can still be invoked without an npm script. The command will be presented on the screen and should default to `npx ws --port 8069 --static.index tests.redirect.html --open`.

## Toolkit options with the scaffolded tests
`create-siesta` utilizes [**@coon-js/siesta-lib-helper**](https://github.com/coon-js/siesta-lib-helper) which expands on the functionality of **Siesta** by providing controls for switching between the toolkits and a combobox with default timeout-values that can be used with the tests written by the user. The controls are available in the lower right corner of the web browser running the **Siesta** application.

## Configuring the test environment
A predefined directory structure for the test cases can be found in `<target_dir>/src` respective `<target_dir>/[classic/modern]`.

Tests and their corresponding files need to be made available with the file `<target_dir>/groups.config.js`.

### Loader paths and preloads
The file `<target_dir>/tests.config.js` provides configuration options for loader paths and additional files that should be made available for the tests.

```json
{
  "name": "[title]",
  "timeout": 750,
  "loaderPath": {
      "modern": {
      },
      "classic": {
      }
  },
  "preload": {
      "css": [],
      "js": []
  }
}
```

#### `name`
- _Type_: `String`
- _default_: `[title]`

The title of the **Siesta** application to display with the browser.

#### `timeout`
- _Type_: `integer`
- _default_: `750`

The default timeout value tests can use with `t.waitForMs`. The value can be queried with `t.parent.TIMEOUT` and can be changed dynamically with the control exposed by [**@coon-js/siesta-lib-helper**](https://github.com/coon-js/siesta-lib-helper) in the lower right corner of the web browser running the **Siesta** web application.

#### `loaderPath`
- _Type_: `Object`

`loaderPath` provides options for specifying additional namespaces and their corresponding source roots in the file system so the tests can resolve additional dependencies. See [the Sencha docs](https://docs.sencha.com/extjs/7.5.1/classic/Ext.Loader.html#method-setPath) for more information on the loader path.

:::info `loaderPath` example
```json
{
    "loaderPath": {
        "Ext.Package": "../node_modules/@coon-js/extjs-package-loader/packages/package-loader/src/Package.js",
        "Ext.package": "../node_modules/@coon-js/extjs-package-loader/packages/package-loader/src/package",

        "modern": {
            "coon.comp.form": "../modern/src/form"
        },

        "classic": {
            "coon.comp.form": "../classic/src/form",
        }
    }
}
```
:::

#### `preload`
- _Type_: `Object`

Provides options for preloading **css**- and **js**-files that need to be available with each test file being loaded.

:::info `preload` example
```json
{
    "preload": {
        "css": [
            "./classic/resources/test.css"
        ],
        "js": [
            "../node_modules/@l8js/l8/dist/l8.runtime.umd.js"
        ]
  }
}
```
:::