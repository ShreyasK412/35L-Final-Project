const express = require('express')
const Post = require('../models/postModel')
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
  router.post('/', async (req, res) => {
    const {title, content} = req.body
    
    try {
      const post = await Post.create({title,content})
      res.status(200).json(post)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  })

  router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a post'})
  })
  
  module.exports = router