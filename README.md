# netlify-plugin-redirect-with-auth Demo

This project demonstrates the usage of the `netlify-plugin-redirect-with-auth` plugin for Netlify.

## About the Plugin

The `netlify-plugin-redirect-with-auth` allows you to define redirects inside `netlify.toml` that use a secret 'Authorization' header set in an environment variable. This enables you to define redirects in code while keeping your secrets private.

For more information, visit [netlify-plugin-redirect-with-auth on npm](https://npmjs.com/package/netlify-plugin-redirect-with-auth).

## Related Repositories

- [Plugin GitHub repo](https://github.com/larryhudson/netlify-plugin-redirect-with-auth)
- [This demo site repo](https://github.com/larryhudson/vite-testing-netlify-plugin)

## How It Works

This demo includes a form that submits to `/submit`. The `netlify.toml` configuration includes a redirect from `/submit` to `https://larryhudson-simpleformdatahello.web.val.run`. That redirect includes an 'Authorization' header which includes a [Val.town API token](https://docs.val.town/api/authentication/).

## Usage

1. Clone this repository
2. Install dependencies
3. Set up your Netlify site and configure the necessary environment variables
4. Deploy to Netlify

The demo page will allow you to submit a form, which will trigger the redirect with authentication.

## Response

After submitting the form, you'll see the response from the redirected endpoint displayed on the page.
