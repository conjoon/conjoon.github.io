---
id: ddev-ms-email
title: 🚪 ddev-ms-email
slug: /api/backends/@conjoon/ddev-ms-email
---

.ddev/Docker configuration providing standalone server for [conjoon/lumen-app-email](https://www.conjoon.org/docs/api/backends/@conjoon/lumen-app-email).

Provides additional scripts for adding a running [conjoon](https://www.conjoon.org) JavaScript Email frontend installation to this container.


## Installation

#### Prerequisites
Please make sure you have [Docker](https://docs.docker.com/get-docker/) and [DDEV](https://ddev.readthedocs.io/en/stable/)
installed and running.

### Starting DDEV

Clone the `ddev-ms-email` repository:
```shell
$ git clone https://github.com/conjoon/ddev-ms-email
$ cd ./ddev-ms-email
$ ddev start
```

### lumen-app-email
Once the server was started, a hook script will advise `composer` take care of obtaining the latest version of the [conjoon/lumen-app-email](https://packagist.org/packages/conjoon/lumen-app-email)
package.

Note: This will only happen automatically if the server does not find an existing installation of **lumen-app-email**.

Once the package and all of its dependencies where loaded, the installation process of **lumen-app-email** starts. Please refer
to the [documentation](https://www.conjoon.org/docs/api/backends/@conjoon/lumen-app-email) for a detailed description of each installation step.

The services can then be accessed at the URL the container uses, defaulting to

```
https://ddev-ms-email.ddev.site/rest-imapuser
```

for authentication and

```
https://ddev-ms-email.ddev.site/rest-api-email
```

for the email messaging API.


### conjoon
[**conjoon**](https://www.conjoon.org) is a JavaScript Email frontend and can be used with the API of **lumen-app-email**.

If you wish to install **conjoon** with this container, run

```
ddev create-conjoon
```

This will start [**create-conjoon**](https://www.conjoon.org/docs/api/misc/@conjoon/create-conjoon) and guide you through
the steps necessary for setting up the frontend.

You can then access the frontend at the URL

```
https://conjoon.ddev.site
```

Please make sure to read the [documentation](https://www.conjoon.org/docs/conjoon.conf.json) regarding the various configuration options availlable.


## Miscellaneous

### Re-installing **lumen-app-email**
Connect to the server:
```shell
$ ddev ssh
```

Manually invoke the installation of **lumen-app-email**. For creating a **lumen-app-email** instance with
the latest stable version from the `v1.*`-branch, type

```shell
$ composer create-project conjoon/lumen-app-email lumen-app-email "1.*" 
```

### Re-installing **conjoon**
Run
```shell
$ ddev create-conjoon
```

and follow the instructions on screen.


### DDEV Configuration
DDEV-configuration can be found in `./ddev/config.yaml`.
Adjust to your needs.


## Additional resources
Please refer to the documentation of [conjoon/lumen-app-email](./lumen-app-email)
for additional information on how to configure your instance of **lumen-app-email**.
