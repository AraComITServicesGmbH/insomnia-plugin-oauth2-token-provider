# insomnia-plugin-oauth2-token-provider

This plugin adds a responseHook that handles OAuth2 token responses and provides it for the use in other requests.

Use the following custom template tag: `access_token`

## Usage

Prepare a login request with OAuth2:

![login-request](/images/login-request.png)

To request a new `access_token` click "Fetch Tokens" which opens your login page. 

**This has to be done whenever your token is getting invalid.**

After the login the fields "refresh token" and "access token" should be filled and the **"access token" then is available as "Generator Tag" named `access_token`** in your insomnia collection.

In all your requests **where authorization is required** you need to select the generator tag `access_token`.
(Open the dropdown with all available environment variables and generator tag with `ctrl + space`)

![access_token example](/images/access_token-example.png)

## Use different token url suffix

For customization of the token path - as not all OAuth2 systems use `/oauth2/v2.0/token` token url suffix - you have to set the following variable in your environment:

`"oauth2_token_url_suffix": "connect/token"`

## Credits

original by https://github.com/incureforce/insomnia-plugin-oauth2-token-handler and PR by [owen-improbable](https://github.com/owen-improbable)

thanks also to [glconti](https://github.com/glconti) and [flmbray](https://github.com/flmbray) for their input.