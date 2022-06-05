---
id: lumen-app-email
title: 🚪 lumen-app-email
slug: /api/backends/@conjoon/lumen-app-email
---

**lumen-app-email** is a PHP application built with [Lumen](https://lumen.laravel.com) requiring minimal setup. It provides the REST API implementation according to [rest-api-email](/docs/rest-api/rest-api-email) and serves as a lightweight backend providing functionality for reading, writing and sending email messages.


## Use Case

**lumen-app-email** follows a service oriented approach. Implementations are easily replaceable with the help of upfront DI configurations and related bindings.

**Use lumen-app-email, if you...**
- need a fully functional middleware for communicating with IMAP / SMTP server
- want to provide webmail solutions with domain-specific sign-in to IMAP accounts
- are looking for a distribution with minimal footprint and easy setup
- require a headless, microservice oriented architecture with your infrastructure

**do not use lumen-app-email, if you...**
- are looking for a stateful, session based webmail backend
- need baked-in caching

## Supported REST API
* **rest-api-email**
  For the list of endpoints this microservice provides, please refer to the openAPI documentation of [rest-api-email](/docs/rest-api/rest-api-email).

### REST Examples
````http request
# Return a list of available MailAccounts for the requesting client
GET /rest-api-email/api/v0/MailAccounts HTTP/1.1
Content-Type: application/json
Authorization: Basic Y29uam9vbjpIZWxsb1dvcmxk
Host: hostname

# Return the envelope data of the first 50 MessageItems w/o previewText of the INBOX mailbox
# for the MailAccount identified by "gmail"
GET /rest-api-email/api/v0/MailAccounts/gmail/MailFolders/INBOX/MessageItems?start=0&limit=50&attributes=*,previewText HTTP/1.1
Content-Type: application/json
Authorization: Basic Y29uam9vbjpIZWxsb1dvcmxk
Host: hostname

# Return the email identified with the uid 4356 of the INBOX mailbox for the MailAccount identified by "gmail"
GET /rest-api-email/api/v0/MailAccounts/gmail/MailFolders/INBOX/MessageItems/4356 HTTP/1.1
Content-Type: application/json
Authorization: Basic Y29uam9vbjpIZWxsb1dvcmxk
Host: hostname
````

## Installation

### Using GIT & composer
```shell
$ git clone https://github.com/conjoon/lumen-app-email
$ cd ./lumen-app-email
$ composer i
```

### Using Docker (DDEV)
For a quick start, we suggest to use a pre-configured container for running the backend: [conjoon\/ddev-ms-email](https://github.com/conjoon/ddev-ms-email) provides a `.**Docker (DDEV)** configuration for a container running **lumen-app-email** out-of-the-box and is easy to install.

### From Scratch
Since **lumen-app-webmail** is a Lumen/Laravel application, detailed information on how to set up a webserver for it can be found in the official [Lumen\-documentation](https://lumen.laravel.com/docs/).

## Configuration

### .env - Environment Variables
The root directory of the project contains a [dotenv-configuration](https://github.com/vlucas/phpdotenv) file (`.env.example`).
Settings may be adjusted on your own to match your desired configuration for the environment the microservice runs in. Copy and rename this file to `.env` and configure away!

### Configuring CORS
**lumen-app-email** uses [fruitcake/laravel-cors](https://github.com/fruitcake/laravel-cors) for enabling
[Cross-Origin Resource Sharing](http://enable-cors.org/).

A configuration template can be found in `app/config/cors.php.example`.

Copy this file to `app/config/cors.php`, and adjust the settings to your needs. The example configuration works well with development environments, but you might want to add more strict options for production, auch as the settings for `allowed_origins` and `paths`.


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
In order for users to authenticate against IMAP servers, `lumen-app-email` provides a template-configuration file in `app/config/imapserver.php.example`.
Copy this file to `imapserver.php` and specify an array of mail server configurations. Each entry represents a mail server to which a connection may be established, for both sending and receiving messages.

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

| Option                           | Description                                                                                                                                                                                                         |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
`id`:_string_    | required for identifying the mail account. **MUST** be unique in the configuration file. Will be refered to as `mailAccountId` throughout [rest-api-email](https://conjoon.stoplight.io/docs/rest-api-description). |
|| **IMAP Settings** |
`inbox_type`:_string_ | the protocol used with the server for receiving messages. Right now, only **IMAP** is supported.                                                                                                                    |
`inbox_address`:_string_ | (ip-)address of the server                                                                                                                                                                                          |
`inbox_port`:_integer_ | port that should be used with `inbox_address` for server communication                                                                                                                                              |
`inbox_ssl`:_boolean_ | use encrypted communication with the server. `true`: use **SSL** for encryption, `false`: use no encryption                                                                                                         |
|| **SMTP Settings** |
`outbox_address`:_string_ | (ip-)address of the server                                                                                                                                                                                          |
`outbox_port`:_integer_ | port that should be used with `outbox_address` for server communication                                                                                                                                             |
`outbox_secure`:_string_ | the encryption protocol to use with SMTP. Use `ssl` or `tls` here.                                                                                                                                                  |
|| **Account Settings** |
`match`:_array_ | a regular expression that matches an email-address to **THIS** server configuration.                                                                                                                                |
`root`:_array_ | an array of mailbox names that serve as root folders to display for this account. Leave the array empty if all mailboxes should be read out and send to the client.                                                 |



#### Example for `match`
**Prerequisite:** `match` is set to `["/\@(googlemail.)(com)$/mi"]`

A client authenticates with the username "name@**googlemail.com**". `lumen-app-email` will query through the configurations of `imapserver.php` and test **this** username against regular expression defined in `match`. In this example, the above regular expression matches the username (i.e. email address). The configuration where the regular expression is specified will be used for subsequent operations requested by the client.

#### Example for `root`
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


### Additional Resources
The documentation of [rest-api-email](/docs/rest-api/rest-api-email) provides information about querying available mailboxes for an authenticated client.
