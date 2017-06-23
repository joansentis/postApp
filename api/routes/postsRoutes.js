'use strict';
module.exports = function (app) {
    var postsList = require('../controllers/postsControllers');

    app.route('/api/posts')
        .get(postsList.getAllPosts)
        .post(postsList.createPost);

    app.route('/api/posts/:postIdReferal')
        .put(postsList.updatePost)
        .delete(postsList.deletePost);
};