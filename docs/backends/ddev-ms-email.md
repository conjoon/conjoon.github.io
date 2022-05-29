---
id: ddev-ms-email
title: ddev-ms-email
---

.ddev/Docker configuration providing standalone server for [conjoon\/lumen-app-email](conjoon/lumen-app-email).


## Installation

#### Prerequisites
Please make sure you have (Docker)[https://docs.docker.com/get-docker/] and (DDEV)[https://ddev.readthedocs.io/en/stable/]
installed and running.

### Starting DDEV

```shell
$ git clone https://github.com/conjoon/ddev-ms-email
$ cd ./ddev-ms-email
$ ddev start
```

DDEV will start composer for installing and setting up **lumen-app-email**.
If - for some reason - composer fails to start, connect to the server
by typing 

```shell
$ ddev ssh
```

You can then manually invoke the install process of composer:

```shell
$ ddev ssh
```

## Configuration
DDEV-configuration can be found in [./ddev/config.yaml](./ddev/config.yaml). 
Adjust to your needs.


## Additional resources 
Please refer to the documentation of [conjoon\/lumen-app-email](conjoon/lumen-app-email)
for additional information on how to configure your instance of **lumen-app-email**.