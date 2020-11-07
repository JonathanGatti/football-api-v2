const express = require('express');
const app = express();
var cors = require('cors')
const teamsRoutes = require('./routes/teams');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/teams', teamsRoutes);

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})



app.listen(3002 || process.env.PORT,  ()=>{
  console.log("server listenig on 3002")
});
  