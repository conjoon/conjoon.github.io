---
id: installation
title: Installation
---
#Installation

:::note 
This guide focuses on the installation of the web-client. For more information on the installation of one of the available backends, please refer to the [Backend Installation Guide](./backends)
:::

:::tip
Once you're done with installation, you can configure the client and its available packages to your needs.
Please refer to [configuration documentation](./configuration) once your installation is up and running.
:::

## Using an official build

## Installing & building via NPM 
### Using the distribut

### Building the client from Scratch
### Accessing Sencha's NPM Repository
You need access to the [NPM registry of Sencha](https://npm.sencha.com/) in order to properly install all of conjoon's dependencies.

```shell
$ npm login --registry=https://npm.sencha.com/ --scope=@sencha
```
**Note:**
Your email-address is your username when logging in, but you have to replace the `@` with two dots `..`.
Example: `myname@domain.tld` becomes `myname..domain.tld`.

For more information on how to access the Sencha NPM Repository, refer to [the official guide](https://docs.sencha.com/extjs/7.4.0/guides/using_systems/using_npm/npm_repo_access.html).

### Dev Build

```shell
$ git clone https://github.com/conjoon/conjoon
$ cd conjoon
$ npm i 
```

## Usage

Development Build w/ integrated webserver and mocked backend:
```shell
$ npm start
```

Production Build:
```shell
$ npm run build
```

Production Build w/ integrated webserver for preview:
```shell
$ npm run build:preview
```


## Available backends for Production

### php-ms-imapuser
* [php-ms-imapuser](https://github.com/conjoon/php-ms-imapuser) <br />
  php-ms-imapuser is a microservice that provides a [Lumen/ddev](https://lumen.laravel.com)-container with access
  to the [rest-imap/rest-imapuser](https://github.com/conjoon/rest-api-description) API for IMAP servers. It can
  be used as a standalone server.
