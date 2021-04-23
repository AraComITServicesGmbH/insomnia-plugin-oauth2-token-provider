# insomnia-plugin-oauth2-token-provider

This plugin adds a responseHook that handles OAuth2 token responses and provides it for the use in other requests.

Use the following custom template tag: `access_token`

**Example:** 

![GitHub Logo](/images/example.png)

## Use different token url suffix

For customization of the token path - as not all OAuth2 systems use "/oauth2/v2.0/token" token url suffix - you have to set the following variable in your environment:

`"oauth2_token_url_suffix": "connect/token"`

## Credits

original by https://github.com/incureforce/insomnia-plugin-oauth2-token-handler and PR by https://github.com/owen-improbable