/**
 * Created by pradip on 7/5/17.
 * Updated by Rohit Mishra on 28/1/18
 */
const express = require('express')
const next = require('next')
const Contentstack = require('contentstack')
var env_config = process.env.NODE_ENV || 'development';
const config = require('./config/'+env_config);
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()
        global['Stack'] = Contentstack.Stack({
            api_key: config.contentstack.api_key,
            delivery_token: config.contentstack.delivery_token,
            environment: config.contentstack.environment
        });
        server.get('*', (req, res) => {
            return handle(req, res)
        })
        var port_number = server.listen(process.env.PORT || 4000);
        server.listen(port_number, (err) => {
            if (err) throw err
            console.log('> Ready on environment '+env_config+' http://localhost:4000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })