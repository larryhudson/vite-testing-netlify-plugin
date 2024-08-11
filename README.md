# netlify-plugin-redirect-with-auth Demo

This project demonstrates the usage of the `netlify-plugin-redirect-with-auth` plugin for Netlify.

## About the Plugin

The `netlify-plugin-redirect-with-auth` allows you to define redirects inside `netlify.toml` that use a secret 'Authorization' header set in an environment variable. This enables you to define redirects in code while keeping your secrets private.

For more information, visit [netlify-plugin-redirect-with-auth on npm](https://npmjs.com/package/netlify-plugin-redirect-with-auth).

You can also check out the [plugin GitHub repo](https://github.com/larryhudson/netlify-plugin-redirect-with-auth).

## How It Works

This demo includes a form that submits to `/submit`. The `netlify.toml` configuration includes a redirect from `/submit` to `https://larryhudson-simpleformdatahello.web.val.run`. That redirect includes an 'Authorization' header which includes a [Val.town API token](https://docs.val.town/api/authentication/).
