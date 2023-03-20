# Deploy WordPress on CleverCloud, the immutable way

## What is this?

[Bedrock](https://roots.io/bedrock/) ([GitHub Project](https://github.com/roots/bedrock)) is a modern WordPress stack that allows to maintain your installation clean from any code change during runtime. [CleverCloud](https://www.clever-cloud.com/) is a rock solid IT automation platform.

Now you can take advantages of both to have your [WordPress](https://wordpress.org) installed on it. While you can follow basic steps to install BedRock yourself on CleverCloud, here is a nice shortcut that you can just fork and deploy.

## How it works?

Composer is a PHP dependency manager that allows you to manage your Wordpress install and plugins with improved dependency management and more reliable development than vanilla Wordpress. It's similar to putting Worpdress in its own subdirectory, but with easier configuration. Isolated web root enhances security by limiting access to non-web files, while vanilla WordPress structure the whole configuration on the same root.

### Bedrock's structure

```
site/
├── config/
│   ├── environments/
│   │   ├── development.php
│   │   ├── staging.php
│   │   └── production.php
│   └── application.php   # Primary wp-config.php
├── vendor/               # Composer dependencies
└── web/                  # Virtual host document root
    ├── app/              # WordPress content directory
    │   ├── mu-plugins/
    │   ├── plugins/
    │   ├── themes/
    │   └── uploads/
    └── wp/               # WordPress core
```

## Status

This repository has been tested and successfully deployed with Clever Cloud. We will keep adding features and updating the project to fit our customers' needs.

## Instructions

Let's build your modern Wordpress.

### Requirements

None. Except a CleverCloud account ;-)

### Initial deployment

It will assume your GitHub account is linked to your CleverCloud account. If not, you'll just have to do the same steps but cloning and pushing the project yourself to CleverCloud.

1. Fork this magnificent repository
2. Log in to your CleverCloud console
3. Create a new application, by selecting this project fork, and obviously as a *PHP* one
4. Add one *MySQL database* add-on
5. On next page, edit the environment variables in expert mode and paste one env salts generated [here](https://cdn.roots.io/salts.html). Don't forget to save the changes.
6. Add 4 more variables : `WP_ENV` with value `production` ; `WP_HOME` with value `https://your-domain.tld` ; `WP_SITEURL` with value `https://your-domain.tld/wp` ; `CC_PHP_VERSION` with value `8`.
7. While your app start, create a *Cellar S3 storage* add-on, and link it to your application
8. On the add-on configuration page, create one bucket
9. Go back in your application configuration and add the environment variable `CELLAR_ADDON_BUCKET` with the name of your bucket
10. Apply changes by restarting your application
11. Don't forget to set up your domain name as configured for `WP_HOME` (or one `*.cleverapps.io` for testing purpose)
12. You'll then have access to the installation page of WordPress
13. After installed, go to your plugins home page and active `S3 Uploads`

**Important note :** At this time, your WordPress installation is not capable of sending any emails. Follow  [CleverCloud's documentation](https://www.clever-cloud.com/doc/php/php-apps/#sending-emails) to configure your SMTP server, of activate and configure the `Mailgun` plugin installed by default.

### Installing themes and plugins

Your WordPress installation is now fully managed by *composer* and [WordPress Packagist](https://wpackagist.org). So to install themes or plugins, you'll have to add them to the `composer.json` file, and commit. The dependencies will be fetched by *composer* during CleverCloud rebuild of your project.

**Important note :** Pay attention to how you define your [dependencies with composer](https://getcomposer.org/doc/01-basic-usage.md#installing-dependencies), being strict, or having them automatically update if needed when it rebuilds. The stricter way would even be to locally `composer update` your project and commit your own `composer.lock` file.

### Keeping WP updated

As for themes and plugins, keeping WordPress updated must be done by the dependencies way. That means you'll have to change the WordPress version in your `composer.json` file and commit. Once restarted, if you are connected as administrator, a page will propose you to do the database update, if any.

### Differences with Bedrock

For those who want or need to go deeper regarding Bedrock, here are the small differences between this fork (based on version **1.12.8**) and a standard Bedrock install.

- You don't need any `.env` file for your environment variables, it can be useful if you want to run your WordPress locally
- `config/application.php` has been modified to directly use MySQL and Cellar environment variables shared by CleverCloud
- Plugin `humanmade/s3-uploads` added by default to use S3 storage for media files
- `web/app/mu-plugins/s3-uploads-filter.php` have been added to use a Cellar endpoint in place of an AWS one
- `.htaccess` have been included by default

Enjoy !
