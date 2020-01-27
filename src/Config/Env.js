export const Env = {
    debug: NODE_ENV.production ? false : true,
    ambience: NODE_ENV.production ? 'prod' : 'dev',
    api_url: 'https://swapi.co/api',
}