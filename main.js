// For help writing plugins, visit the documentation to get started:
//   https://support.insomnia.rest/article/26-plugins

const defaultTokenSuffix = '/oauth2/v2.0/token';

const storage = {
    tokens: {},
    getTokenStorage(environment) {
        return this.tokens[environment.getEnvironmentId()] || {
            access_token: ''
        };
    }
}

const tokenTag = {
    name: 'access_token',
    displayName: 'access_token',
    description: 'Use the last found OAuth2 token from this environment',
    args: [],
    async run(arg, regexp, property) {
        console.log('[oauth2-token-provider]', 'get access_token')
        return storage.getTokenStorage(arg.context).access_token
    }
}

const tokenHook = function (arg) {
    const requestURI = new URL(arg.request.getUrl())
    const environment = arg.request.getEnvironment()

    if (requestURI.href.endsWith(environment.oauth2_token_url_suffix || defaultTokenSuffix)) {

        const data = JSON.parse(arg.response.getBody().toString('utf-8'))

        if (typeof data.access_token !== 'undefined') {
            storage.getTokenStorage(environment).access_token = data.access_token
            console.log('[oauth2-token-provider]', 'saved access_token')
        } else {
            console.error('[oauth2-token-provider]', `missing access_token from ${requestURI}`)
        }
    }
};

module.exports = {
    responseHooks: [tokenHook],
    templateTags: [tokenTag],
}

console.log('[oauth2-token-provider]', 'plugin loaded')
