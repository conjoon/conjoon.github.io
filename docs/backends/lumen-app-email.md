---
id: lumen-app-email
title: 🚪 lumen-app-email
slug: /api/backends/@conjoon/lumen-app-email
---
Backend service for IMAP/SMTP email messaging.

## What is lumen-app-email?
**conjoon/lumen-app-email** is a standalone **PHP🐘** application built with [Lumen](https://lumen.laravel.com).
It provides a backend for Email messaging according to [https://github.com/conjoon/rest-api-description](https://github.com/conjoon/rest-api-description)
and serves endpoints for reading, writing and sending email messages with **IMAP**/**SMTP**.

**lumen-app-email** has minimal footprint and is easy to install.

## Installation

```shell
$ composer create-project conjoon/lumen-app-email htdocs "1.*" 
```

:::caution
The install tool of **lumen-app-email** requires [**Composer**](https://getcomposer.org/) >= V2.0.
:::

:::tip
If you're looking for a pre-configured environment for running an instance of **lumen-app-email**, [**we might have just the
right thing for you 👉**](./ddev-ms-email.md).
:::

## Features

**lumen-app-email** follows a service oriented approach.
Services are easily replacable with the help of upfront DI configurations and related bindings.

**Use lumen-app-email, if you...**
- need a fully functional middleware for communicating with IMAP / SMTP servers
- want to provide webmail solutions with various authentication methods, such as
    - domain-specific sign-in to IMAP accounts, orchestrated by the server
    - connecting to IMAP accounts solely configured by the users
- are looking for an email messaging solution with minimal footprint that's easy to distribute
- require a headless, service oriented standalone application in your infrastructure that can also be run frontend agnostic

## API Examples

````http request
# Return a list of available MailAccounts for the requesting client
GET /MailAccounts HTTP/1.1
Content-Type: application/json
Authorization: Basic Y29uam9vbjpIZWxsb1dvcmxk
Host: hostname

# Return the envelope data of the first 50 MessageItems w/o previewText of the INBOX mailbox
# for the MailAccount identified by "gmail"
GET /MailAccounts/gmail/MailFolders/INBOX/MessageItems?start=0&limit=50&attributes=*,previewText HTTP/1.1
Content-Type: application/json
Authorization: Basic Y29uam9vbjpIZWxsb1dvcmxk
Host: hostname

# Return the email identified with the uid 4356 of the INBOX mailbox for the MailAccount identified by "gmail"
GET /MailAccounts/gmail/MailFolders/INBOX/MessageItems/4356 HTTP/1.1
Content-Type: application/json
Authorization: Basic Y29uam9vbjpIZWxsb1dvcmxk
Host: hostname
````

## Installation
The recommended way to install **lumen-app-email** is by using `composer create-project`:

`composer create-project {packageName} {targetDirectory} {version}`

The following command will install an instance of **lumen-app-email** along with its dependencies into the directory
`htdocs` relative to the current working directory:

```shell
$ composer create-project conjoon/lumen-app-email htdocs "1.*" 
```

## nginx configuration
The default distribution of **lumen-app-emails** contains an `.htaccess`-file containing rewrite rules for properly
routing API paths when using an **Apache HTTP Server**.
If you want to use **nginx**, you can apply the following configuration to make sure requests are properly routed.

Assuming **lumen-app-email** is installed in `./htdocs` - relative to the (virtual) server's `root`-dir:

```apacheconf
location /htdocs {
    try_files $uri $uri/ /htdocs/app/public/index.php?$query_string;
}
```

Once `composer` has finished downloading and installing the project, the `post-create-project-cmd` will automatically invoke
`php artisan install`, the installation script for **lumen-app-email**. Please refer to the subsequent documentation for
further details about the configuration options available:

### Available CLI commands

One **lumen-app-email** was installed with `composer`, you can use [Artisan](https://laravel.com/docs/artisan) to interact with this
instance using the CLI.

Change the directory to your installation of **lumen-app-email** and type

```bash 
$ php artisan list
```

to get a list of all commands available with this installation.

#### Commands
The following CLI commands are available for an instance of **lumen-app-email**:

| Command                        | Description                                                    | 
|--------------------------------|----------------------------------------------------------------|
| [install](#install)            | Starts the installation process                                |
| [configure:url](#configureurl) | Configure URL where this instance is available                 |
| [configure:api](#configureapi) | Configure API paths and Auth Providers                         | 
| [configure:env](#configureenv)        | Specify the environment this instance runs in                  | 
| [configure:debug](#configuredebug)    | Enable or disable debug mode                                   | 
| [copyconfig](#copyconfig)      | Activate pre-defined configuration templates for this instance | 

:::note
Configuration settings collected by the various scripts can be found in the dotenv-file `.env` in the root-directory of the installation.
The file can also be edited manually with the key/value pairs described in this document.
:::


#### `install`

Starts the installation process and queues through the [commands](#commands) to collect all necessary information for configuring
this instance. The command can also be invoked with already installed instances of **lumen-app-email**.

```bash
$ php artisan install
```


#### `configure:url`

Specify the URL of the server where this instance is located, along with the path to the installation directory of **lumen-app-email**.

```bash
$ php artisan configure:url
```

##### dotenv key
`APP_URL`
- Type: `String`
- Default: `https://ddev-ms-email.ddev.site`

#### Example
The machine's URL serving this instance is
```
https://localhost:8080
``` 

The URI of **lumen-app-email** on this machine is

```
/lumen-app-email/htdocs
```

the value of this setting must therefore be

```
https://localhost:8080/lumen-app-email/htdocs
```

### `configure:api`

Specify Authentication Providers and paths to the various APIs exposed by this instance.


```bash
$ php artisan configure:api
```

##### dotenv key
`APP_EMAIL_PATH`
- Type: `String`
- Default: `rest-api-email`

The path to the _email_-Service.

`AUTH_PROVIDER` <a name="auth_provider"></a>
- Type: `List`
- Values: `local-mail-account`, `single-imap-user`
- Default: `local-mail-account`

The Auth Provider used with this instance. `local-mail-account` is the provider used when the client
sends connection information in the payload of requests.
`single-imap-user` authenticates a single user against a single IMAP-server. Selecting
`single-imap-user` will require the configuration of the `APP_AUTH_PATH`.


`APP_AUTH_PATH`
- Type: `String`
- Default: `rest-imapuser`

The path to the _auth_-Service. Depending on the selected `AUTH_PROVIDER`, this setting might not be available.

#### Example
**lumen-app-email** is available at
```
https://localhost:8080/lumen-app-email/htdocs
``` 

`APP_EMAIL_PATH` is configured with

```
api/rest-api-email
```

Endpoints for this service can then be found at

```
https://localhost:8080/lumen-app-email/htdocs/api/rest-api-email
```

Additionally, clients can require different versions for this API by appending a version tag to this
URL as a path segment:

```
https://localhost:8080/lumen-app-email/htdocs/api/rest-api-email/v2
```

Omitting a version in the URL will default to the latest version of this API available.

The same applies to the `APP_AUTH_PATH` setting, if configured.

Refer to the [Backend API documentation](https://www.conjoon.org/docs/api/rest-api) for all available API endpoints.


### `configure:env`
Specify the environment this instance is used in.

```bash
$ php artisan configure:env
```

##### dotenv key
`APP_ENV`
- Type: `String`
- Default: `production`

When using **lumen-app-email** other than on a local machine, set this to `production`. For development
or staging, this value can be set to an arbitrary value for branching into different functionality
for these environments, if required.

Note:
This is a setting introduced by **Laravel**. Refer to its [documentation](https://laravel.com/docs/configuration#determining-the-current-environment) for further information.


### `configure:debug`
Enable/disable debug mode for this instance.

```bash
$ php artisan configure:debug
```

##### dotenv key
`APP_DEBUG`
- Type: `Boolean`
- Default: `false`

For local development, set this to `true`. In `production`, this should be set to `false`, otherwise your risking to expose
sensitive information to clients.

Note:
This is a setting introduced by **Laravel**. Refer to its [documentation](https://laravel.com/docs/configuration#debug-mode) for further information.


### `copyconfig`
Copies default configuration and saves them under a name this instance requires.

This command processes configuration files located in `app/config`.

`copyconfig` will probe existing configuration files and require user interaction before it accidentally
overwrites them.

```bash
$ php artisan copyconfig
```

The following configuration files are affected by this command:

| Template                               | Target          | Description                                                      | 
|----------------------------------------|-----------------|------------------------------------------------------------------|
| `cors.example.php`            | `cors.php`        | Cross-Origin Resource Sharing configuration                      |
| `imapserver.example.php` | `imapserver.php`  | Configuration for Email servers this instance may connect to     |

Once the files where copied, you should adjust the settings found therein to your needs.


### Configuring CORS
**lumen-app-email** uses [fruitcake/laravel-cors](https://github.com/fruitcake/laravel-cors) for enabling
[Cross-Origin Resource Sharing](http://enable-cors.org/).
<br />
A configuration template can be found in `app/config/cors.php.example`.
<br />
Copy this file to `app/config/cors.php`, and adjust the settings to your needs. The example configuration works well with development environments, but you might want to add more strict options for production, auch as the settings for `allowed_origins` and `paths`.

:::info
[`php artisan copyconfig`](#copyconfig) can be used for automatically copying the configuration template
`cors.example.php` to its target destination. If you choose to manually work with the template, copy and rename it
to `cors.php`, then adjust its entries.
:::

#### Options
The options available for the cors configuration are as follows:

| Option                   | Description                                                              | Default value |
|--------------------------|--------------------------------------------------------------------------|---------------|
| paths                    | You can enable CORS for 1 or multiple paths, eg. `['api/*'] `            | `[]`          |
| allowed_origins          | Matches the request origin. Wildcards can be used, eg. `*.mydomain.com` or `mydomain.com:*`  | `['*']`       |
| allowed_origins_patterns | Matches the request origin with `preg_match`.                            | `[]`          |
| allowed_methods          | Matches the request method.                                              | `['*']`       |
| allowed_headers          | Sets the Access-Control-Allow-Headers response header.                   | `['*']`       |
| exposed_headers          | Sets the Access-Control-Expose-Headers response header.                  | `false`       |
| max_age                  | Sets the Access-Control-Max-Age response header.                         | `0`           |
| supports_credentials     | Sets the Access-Control-Allow-Credentials header.                        | `false`       |


### IMAP server configurations
When the instance of **lumen-app-email** was configured with the `single-imap-user` Authentication Provider, you
will have to maintain a list of IMAP server users may sign in to. 

:::info
Use [`php artisan configure:api`](#configureapi) for configuring the [Authentication Provider](#auth_provider).
:::

In order for users to authenticate against IMAP servers, `lumen-app-email` provides a template-configuration file in `app/config/imapserver.php.example`.
In this file, you can specify an array of mail server configurations. Each entry represents a mail server to which connection may be established, for both sending and receiving messages.

Note:
[`php artisan copyconfig`](#copyconfig) can be used for automatically copying the configuration template
`imapserver.example.php` to its target destination. If you choose to manually work with the template, copy and rename it
to `imapserver.php`, then adjust its entries.

#### Entry Details

```php
    [
        "id"              => "Google_Mail",
        "inbox_type"      => "IMAP",
        "inbox_address"   => 'imap.gmail.com',
        "inbox_port"      => 993,
        "inbox_ssl"       => true,
        "outbox_address"  => "smtp.gmail.com",
        "outbox_port"     => 465,
        "outbox_secure"   => "ssl",
        "root"            => ["INBOX"],
        "match"           => ["/\@(googlemail.)(com)$/mi"]
    ]
```

| Option                           | Description                           |
|----------------------------------|----------------------------------------|
  `id`:_string_    |   required for identifying the mail account. **MUST** be unique in the configuration file. Will be refered to as `mailAccountId` throughout [rest-api-email](https://conjoon.stoplight.io/docs/rest-api-description).|
|| **IMAP Settings** |
`inbox_type`:_string_ | the protocol used with the server for receiving messages. Right now, only **IMAP** is supported. |
`inbox_address`:_string_ | (ip-)address of the server |
`inbox_port`:_integer_ | port that should be used with `inbox_address` for server communication |
`inbox_ssl`:_boolean_ | use encrypted communication with the server. `true`: use **SSL** for encryption, `false`: use no encryption |
|| **SMTP Settings** |
`outbox_address`:_string_ | (ip-)address of the server |
`outbox_port`:_integer_ | port that should be used with `outbox_address` for server communication |
`outbox_secure`:_string_ | the encryption protocol to use with SMTP. Can be any of `ssl`, `tls` or `starttls` |
|| **Account Settings** |
`match`:_array_ | a regular expression that matches an email-address to **THIS** server configuration. |
`root`:_array_ | an array of mailbox names that serve as root folders to display for this account. Leave the array empty if all mailboxes should be read out and send to the client.|



##### Example for `match`
**Prerequisite:** 
`match` is set to `["/\@(googlemail.)(com)$/mi"]`
A client authenticates with the username "name@**googlemail.com**". `lumen-app-email` will query through the configurations of `imapserver.php` and test **this** username against regular expression defined in `match`. In this example, the above regular expression matches the username (i.e. email address). The configuration where the regular expression is specified will be used for subsequent operations requested by the client.

##### Example for `root`
A common mailbox layout of IMAP servers looks like this:
```
INBOX
INBOX.Drafts
INBOX.Sent
INBOX.Junk
INBOX.Trash
```

If the `root`-configuration is set to `["INBOX"]`, the following mailboxes will be returned to the client:

```
INBOX
Drafts
Sent
Junk
Trash
```

Multiple root entries will be considered. This is useful with Google Mail, where root mailboxes (in gmail terms: "labels") can either be `[Google Mail]` or `[Gmail]`. `root` should be set to `["[Google Mail]", "[Gmail]"]` in this case.


## Additional Resources
The documentation of [rest-api-email](https://conjoon.stoplight.io/docs/rest-api-description) provides information about querying available mailboxes for an authenticated client.
