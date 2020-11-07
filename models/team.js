const mongoose = require('mongoose');

teamSchema = new mongoose.Schema({
    teamName: {
      type : String,
    },
    teamPlayers: {
      type: Array
    },
    teamModule: {
      type: Array
    }
})

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;