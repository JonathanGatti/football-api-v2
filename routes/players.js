const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Player.find()
  .then(players => {
    res.send(players)
  })
  .catch(e => {
    res.send(e)
  })
})

router.post('/', (req, res) => {
  db.Player.create(req.body)
  .then(newPlayer => {
    res.json(newPlayer)
  })
  .catch(e =>{
    res.send(e)
  })
})

router.get('/:playerId', (req, res) => {
  db.Player.findById(req.params.teamId)
  .then(player => {
    res.json(player)
  })
  .catch(e => {
    res.send(e)
  })
})

router.put('/:playerId', (req, res) => {
  db.Player.findByIdAndUpdate({_id: req.params.teamId}, req.body, {new: true})
  .then(player =>{
    res.json(player)
  })
  .catch(e => {
    res.send(e);
  });
})

router.delete('/:playerId', (req, res) => {
  db.Player.remove({_id: req.params.playerId})
  .then(() => {
    res.json({message: 'deleted'})
  })
  .catch(e => {
    res.send(e);
  }) 
})
module.exports = router;