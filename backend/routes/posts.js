const express = require('express')

const router = express.Router()

// GET all posts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all posts'})
  })
  
  // GET a single posts
  router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single post'})
  })
  
  // POST a new post
  router.post('/', (req, res) => {
    res.json({mssg: 'POST a new post'})
  })

  router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
  })
  
  module.exports = router