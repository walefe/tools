const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect();

app.listen(process.env.PORT || 3000);

