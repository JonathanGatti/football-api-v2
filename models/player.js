const mongoose = require('mongoose');

playerSchema = new mongoose.Schema({
  age: {type: Number},
  birth_country: {type: String},
  birth_date: {type: String},
  birth_place: {type: String},
  firstname: {type: String},
  height: {type: String},
  lastname: {type: String},
  nationality: {type: String},
  number: {type: Number || null},
  player_id: {type: Number},
  player_name: {type: String},
  position: {type: String},
  weight: {type: String},
})

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;