---
title: Introducing create-siesta
authors: [ThorstenSuckow]
tags: [update, installer, create-conjoon, npm, initializer]
---

## Easily create Siesta tests for your applications

[Siesta](https://www.bryntum.com/products/siesta/) is a JavaScript unit and UI testing tool which allows for running tests (for **Ext JS** (view-) components, amongst others) directly in the web browser (or  headless in case you want to use it with your ci tools).

It is **conjoon**'s favorite among the various testing tools out there (we're also working with [Jest 🃏](https://jestjs.io/) when there's no **Ext JS** involved) and without it, it's clear that End-to-End tests of some of the features and changes that have made it into **conjoon** would have slowed the project down due to their cyclic complexity - or even worse, make the software stuck in regression. 

[**extjs-app-webmail**](/docs/api/packages/@conjoon/extjs-app-webmail) alone sports more than 5000 unit and ui tests created with **Siesta** and they all make sure that the frontend behaves as intended and is free from unwelcomed side effects for any edge case that might occur (we know that's a [bold statement](https://dilbert.com/strip/2017-10-02?creator=Dilbert_Daily)).

To ease the process of setting up a functional **Siesta** environment, we're introducing the cli tool `create-siesta` which can be used with any JavaScript framework that requires a functional **Siesta** application running in a web browser, or at least a fully fledged infrastructure for running **Siesta** tests. However, by providing integrated build options for the **Ext JS SDK**, it is best suited for environments where the **Sencha** framework is already being used or will be used.

For using the tool, all that is required is a working [Node.js](https://node.js) installation on your machine. The scaffolding process can then be started by typing

```bash
npx create-siesta@latest
```

on the console. `create-siesta` will then guide you through the installation process and also consider the environment (aka _current working directory_) it was invoked in, by falling back to already existing **Ext JS** sources for example, or any other package requirements already available.

![](./img/create-siesta-cli.gif)


Once `create-siesta` is finished, a folder (defaulting to `tests`) will be available with your project that contains a scaffolded **Siesta** environment with templates for additional and future tests you and your team can implement. Tests can then be started with

```bash
npm run siesta:test
```

`create-siesta` builds upon an already available helper tool for creating tests with **Siesta**, namely [@coon-js/siesta-lib-helper](https://github.com/coon-js/siesta-lib-helper) which is already widely used throughout the **conjoon** project and the packages it depends on. This means that you will have an additional control at hand with the **Siesta** application that allows for switching between toolkit dependent tests and dynamically changing timeout values used with 

```javascript
t.waitForMs()
```

in tests.

| ![](./img/siesta-lib-helper-ctrl.png)                                                                                                                                                                                         |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _The additional control made available by siesta-lib-helper allows for switching between the modern `M` and classic `C` toolkit and provides a list of timeout values that can be globally used with t.waitForMs() in tests._ |

## Documentation
The documentation for `create-siesta` can be found [here](/docs/api/misc/@coon-js/create-siesta), the sources are available with the [coon.js](https://github.com/coon-js) organization at **GitHub**, which provides a collection of useful tools for rapid **Sencha Ext JS** application development, and spawned from the **conjoon** open source project. 
