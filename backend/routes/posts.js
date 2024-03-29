const express = require('express')
const cors = require('cors')
const {
  getPosts,
  getPost,
  createPost,
  deletePost, 
  updatePost,
  updatePostLikes
} = require('../controllers/postController')

const router = express.Router()

router.use(cors())

// GET all posts
router.get('/', getPosts)

// GET a single post
router.get('/:id', getPost)

// POST a new post
router.post('/', createPost)

// DELETE a post
router.delete('/:id', deletePost)

router.put('/:id/like', updatePostLikes);
// UPDATE a post
router.patch('/:id', updatePost)

module.exports = router