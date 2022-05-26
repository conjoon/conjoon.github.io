# Documentation

**extjs-app-imapuser** is a **coon.js** package and is tagged as such in the
`package.json`:

```json
{
    "coon-js": {
        "package": {
            "autoLoad": {
                "registerController":  true
            },
            "config": "${package.resourcePath}/extjs-app-imapuser.conf.json"
        }
    }
}
```

By default, this package's configuration can be found in this package's `resources` folder
in a file named `extjs-app-imapuser.conf.json`.

### Required Services
This package requires a service that complies with the REST API described in `rest-api-email` which can be found
in the [REST API description](https://github.com/conjoon/rest-api-description) of the **conjoon**-project.

#### Mocking required Services
When using this package without a backend implementation, your app can use the 
[extjs-dev-imapusersim](https://github.com/conjoon/extjs-dev-imapusersim) package  of 
the [conjoon](https://github.com/conjoon) project.

## What goes into a `extjs-app-imapuser` configuration?

The package takes care of sending sign-in credentials of a user via HTTP to a backend 
implementing [rest-api-email](https://github.com/conjoon/rest-api-description). Used in a 
**coon.js**-application, it will also hook into the preLaunch-process and render views for providing
form inputs for the user.
The configuration file for this package has two main entries: `tile` and `service`:

```json
{
  "title": "Login",
  "service": {
    "rest-imapuser" :  {
      "base" : "https://ddev-ms-email.ddev.site/rest-imapuser/api/v0/"
    }
  }
}
```

- `title` - The title of the package. This is used for assembling navigation entries, or changing the
`document.title` of the browser instance the application runs in. This package notifies interested 
observers with this title whenever view of the package gets activated and gains the focus.
- `service` - Endpoint configuration for this package. Used to create required URLs for outgoing 
HTTP-requests. Holds the key `rest-imapuser.base` that must hold the base URL where the endpoints for authentication
as described in [rest-api-mail](https://github.com/conjoon/rest-api-description) can be found.