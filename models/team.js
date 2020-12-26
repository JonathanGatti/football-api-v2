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
    },
    userId: {
      type: String
    },
    logo: {
      type: String
    },
    rating: {
      type: Number
    }
})

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;