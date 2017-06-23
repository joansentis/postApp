'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    content: {
        type: String
    },
    comments: {
        type: Array
    },
    idReferal: {
        type: String
    },
    publishedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);