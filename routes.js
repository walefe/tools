const routes = require('express').Router();


routes.get('/', (req, res) => {
    return res.send('hello node');
})

module.exports = routes;