const dotenv = require('dotenv');
dotenv.config();
const  mongoose = require("mongoose");
mongoose.set('debug', true);
const url = 'mongodb://127.0.0.1:27017/football-app';
dbUrl = process.env.DB_URL


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.Promise = Promise;

module.exports.Team = require('./team')
module.exports.Player = require('./player')
