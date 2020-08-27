require('dotenv').config();
module.exports = {
    contentstack: {
        api_key: process.env.CS_API_KEY,
        delivery_token: process.env.CS_TOKEN,
        environment: process.env.CS_ENV
    }
}
