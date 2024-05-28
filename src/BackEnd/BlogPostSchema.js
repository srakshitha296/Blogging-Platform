const mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    postid: {
        type: Number,
        unique: true,
        default: 1,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    dateofcreation: {
        type: Date,
        default: Date.now,
    },
});

const BlogPostSchema = mongoose.model('blog_posts', newSchema);

module.exports = BlogPostSchema;