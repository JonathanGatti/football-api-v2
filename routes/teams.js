const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Team.find()
  .then(teams => {
    res.send(teams)
  })
  .catch(e => {
    res.send(e)
  })
})

router.post('/', (req, res) => {
  db.Team.create(req.body)
  .then(newTeam => {
    res.json(newTeam)
  })
  .catch(e =>{
    res.send(e)
  })
})

router.get('/:teamId', (req, res) => {
  db.Team.findById(req.params.teamId)
  .then(team => {
    res.json(team)
  })
  .catch(e => {
    res.send(e)
  })
})

router.put('/:teamId', (req, res) => {
  db.Team.findByIdAndUpdate({_id: req.params.teamId}, req.body, {new: true})
  .then(team =>{
    res.json(team)
  })
  .catch(e => {
    res.send(e);
  });
})

router.delete('/:teamId', (req, res) => {
  db.Team.remove({_id: req.params.teamId})
  .then(() => {
    res.json({message: 'deleted'})
  })
  .catch(e => {
    res.send(e);
  }) 
})
module.exports = router;