const playerInput = document.querySelector('#player-input');
const teamNameInput = document.querySelector('#name-input');
const submit = document.querySelector('#submit');
const list = document.querySelector('#list');

const config = {
  api_key: '89f56fc814mshaffde0d4f2ea23cp144e32jsnf8dcdcfa56ff'
}

const team = {
  teamName: {
    name: ''
  },
  teamPlayers: [],
}

const url = 'https://api-football-v1.p.rapidapi.com/v2/players/search/';

async function fetchData(name){
  try {
    let res = await axios.get(`${url}${name}`, {
      "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": config.api_key,
        "useQueryString": true
      }
  })
    return res.data.api.players 
    }
  catch(e){
    console.log(e);
  }
}

async function getData() {
    const res = await axios.get('/api/teams')
    console.log(res)
}

playerInput.addEventListener('keypress', async (e)=>{
  if(e.which === 13){
    const players = await fetchData(e.target.value)
    for(let player of players){
      const listItem = document.createElement('li');
      listItem.innerHTML = player.player_name;
      listItem.classList.add('player')
      list.appendChild(listItem);
      listItem.addEventListener('click', () =>{
        team.teamPlayers.push(player)
      })
    }
  }
})

teamNameInput.addEventListener('keypress', (e) => {
  if(e.which === 13){
    team.teamName.name = e.target.value;
  }
})

submit.addEventListener('click', ()=>{
  axios.post('/api/teams', {
    teamName : team.teamName.name,
    teamPlayers: team.teamPlayers
  })
  .then(res => {
    console.log(res)
  })
})


