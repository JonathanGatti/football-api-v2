const  mongoose = require("mongoose");
mongoose.set('debug', true);
const url = 'mongodb://127.0.0.1:27017/football-app';

mongoose.connect(url,  {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.Promise = Promise;

module.exports.Team = require('./team')
