'use strict';

var mongoose = require('mongoose'),
    Post = mongoose.model('Post');

exports.getAllPosts = function (req, res) {
    Post.find({}, function (err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
};

exports.createPost = function (req, res) {
    var new_post = new Post(req.body);
    new_post.save(function (err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
};

exports.updatePost = function (req, res) {
    Post.findOneAndUpdate(req.params.postIdReferal, req.body, { new: true }, function (err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
};

exports.deletePost = function (req, res) {
    Post.remove({
        idReferal: req.params.postIdReferal
    }, function (err, post) {
        if (err)
            res.send(err);
        res.json({ message: 'Post successfully deleted' });
    });
};

