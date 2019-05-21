const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts 
router.get('/', async (req, res) => {

    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {

        res.json({ message: err });
    }
})


// Submit a post 
router.post('/', async (req, res) => {

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    const savedPost = await post.save()
    try {

        res.json(savedPost);

    } catch (err) {

        res.json({ message: err });
    }
})

// Delete a post by Id
router.delete('/:postId', async (req, res) => {

    try {
        const removedPost = await Post.findByIdAndDelete({_id: req.params.postId}); 
        res.json(removedPost);
    } catch (err) {

        res.json({ message: err });
    }
})

// Update a post by Id
router.patch('/:postId', async (req, res) => {

    try {
        const updatePost = await Post.updateOne({_id: req.params.postId}, {$set: {
            title: req.body.title 
        }}); 
        res.json(updatePost);
    } catch (err) {

        res.json({ message: err });
    }
})

module.exports = router; 