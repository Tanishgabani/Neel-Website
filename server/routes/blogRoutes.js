const express = require('express');
const router = express.Router();
const {
  getBlogs,
  getBlogBySlug,
  getFeaturedBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  seedBlogs,
} = require('../controllers/blogController');

router.get('/', getBlogs);
router.get('/featured', getFeaturedBlogs);
router.get('/seed', seedBlogs); // remove in production
router.get('/:slug', getBlogBySlug);
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
