const express = require('express');
const app = express();
const teamsRoutes = require('./routes/teams');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/teams', teamsRoutes);

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})



app.listen(3000 || process.env.PORT,  ()=>{
  console.log("server listenig on 3000")
});
  