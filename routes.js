const routes = require('express').Router();


routes.get('/', (req, res) => {
    return res.send('hello');
})

module.exports = routes;