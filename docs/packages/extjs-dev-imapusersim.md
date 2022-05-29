---
id: extjs-dev-imapusersim
---

:::info
conjoon comes preconfigured with this package!
:::

This Sencha Ext JS NPM package contains mock data for development of [conjoon/extjs-app-imapuser](https://github.com/conjoon/extjs-app-imapuser).
When using this package, configured urls will be intercepted and static user-auth data is returned in
the response.

## Installation
```bash
$ npm i --save-dev @conjoon/extjs-dev-imapusersim
```

If you want to develop with this package, run the `build:dev`-script:
```bash
$ npm run build:dev
```
Testing environment will be available via

```bash
$ npm test
```

For using the package as an external dependency in an Ext JS application:
<br />
In your `app.json`, add this package as a requirement, and make sure your Ext JS `workspace.json`
is properly configured to look up local repositories in the `node_modules`-directory.

Example (`workspace.json`) :
```json 
{
  "packages": {
    "dir": "${workspace.dir}/node_modules/@l8js,${workspace.dir}/node_modules/@conjoon,${workspace.dir}/node_modules/@coon-js,${workspace.dir}/packages/local,${workspace.dir}/packages,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name},${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-treegrid,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-base,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-ios,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-material,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-aria,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-neutral,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-classic,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-gray,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-crisp,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-crisp-touch,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-neptune,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-neptune-touch,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-triton,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-graphite,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-material,${workspace.dir}/node_modules/@sencha/ext-calendar,${workspace.dir}/node_modules/@sencha/ext-charts,${workspace.dir}/node_modules/@sencha/ext-d3,${workspace.dir}/node_modules/@sencha/ext-exporter,${workspace.dir}/node_modules/@sencha/ext-pivot,${workspace.dir}/node_modules/@sencha/ext-pivot-d3,${workspace.dir}/node_modules/@sencha/ext-ux,${workspace.dir}/node_modules/@sencha/ext-font-ios",
    "extract": "${workspace.dir}/packages/remote"
  }
}
```

## Configuration and Usage
For more information on how to configure and use the package, refer to the [documentation](./docs/README.md).


## Usage
Update the `app.json` of the application by specifying this package in the `uses`-property in
either the `development` and/or `prodution` section:

*Example:*
```json
{
    "development": {
        "uses": [
            "extjs-dev-imapusersim",
            "extjs-app-imapuser",
            "extjs-app-webmail",
            "extjs-dev-webmailsim"
        ]
    },
    "production": {
        "uses": [
            "extjs-app-imapuser",
            "extjs-app-webmail"
        ]
    }
}
```

## Configuration

**extjs-dev-imapusersim** is a **coon.js** package and is tagged as such in the
`package.json`:

```json
{
  "coon-js": {
    "package": {
      "autoLoad": {
        "registerController": true
      },
      "config": "${package.resourcePath}/extjs-dev-imapusersim.conf.json"
    }
  }
}
```

By default, this package's configuration can be found in this package's `resources` folder
in a file named `extjs-dev-imapusersim.conf.json`.

### What goes into a `extjs-dev-imapusersim` configuration?

The package intercepts outgoing network requests to all urls matching a specific
url-pattern. Additionally, you can configure whether the package's url intercepting should
be enabled or disabled - this makes it easier to use this package in environments where
you have to test for fully functional network behavior with real HTTP-requests and live- and mock-data should be used side-by-side.

The configuration file for this package has an entry `auth` that holds the following keys: `url`, `enabled`, `delay`:

```json
{
    "auth": {
        "url": "https://ddev-ms-email.ddev.site/rest-imapuser/api/v.*?/auth(/.*)?",
        "enabled": true,
        "delay": 250
    }
}
```


- `url` - In order to properly intercept outgoing requests to the services as described in
  [rest-api-mail](https://github.com/conjoon/rest-api-description),
  the package needs to be configured with a regular expression representing the url to catch.
  The package is pre-configured. For example, HTTP-requests to the following URLs are intercepted by this package:
  - `https://dev-ms-email.ddev.site/rest-imapuser/api/v0/auth`
  - `https://dev-ms-email.ddev.site/rest-imapuser/api/v1/auth?dc=22424sff4`

- `enabled` - If this package is used with your development or production environment, intercepting urls can be enabled/disabled by changing the property `enabled`
  to either `true` or `false`.
- `delay` - the delay in milliseconds to mimic network latency

## Response Data
If an url was intercpted, static data is returned to mimic responses of backends
fully implementing the [REST API](https://github.com/conjoon/rest-api-description). The data returned
can be edited in this package's `src/data/AuthenticationSim.js`.
