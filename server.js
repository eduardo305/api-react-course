const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const appRouting = require('./routes/appRouting');
const userRouting = require('./routes/userRouting');
const authRouting = require('./routes/authRouting');
const config = require('./config/config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
console.log('*****************')
console.log(app.settings.env);
console.log('*****************')
console.log(config.mongo.uri[app.settings.env])
console.log('*****************')
if (mongoose.connection.readyState === 0) {
  mongoose.connect(config.mongo.uri[app.settings.env], config.mongo.options);
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/auth/', authRouting);
app.use('/api/v1/users/', userRouting);
app.use(appRouting);

app.listen(config.port, function() {
  console.log('Server started at port:' + config.port);
});

module.exports = app;