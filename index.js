const express = require('express');
const app = express();
var cors = require('cors')
const teamsRoutes = require('./routes/teams');
const playersRoutes = require('./routes/players');
const bodyParser = require('body-parser');
// const {MongoStore } = require('connect-mongo');

// const MongoDBStore = require('connect-mongo')(express);

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/teams', teamsRoutes);
app.use('/api/players', playersRoutes);

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})


const port = process.env.PORT || 8080
app.listen(port,  ()=>{
  console.log("server listenig on " + port)
});
  