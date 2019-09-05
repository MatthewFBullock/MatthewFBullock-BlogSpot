var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
var blogSchema = new mongoose.Schema({
    blogHeaderText: String,
    blogText: String
});
var BlogPost = mongoose.model('blogpost', blogSchema);

/// GET blogpost listing
router.get('/', (req, res, next) => {
    BlogPost.find().exec((err, posts) => {
        res.send(posts);
    });
});

/// POST blogpost listing
router.post('/', (req, res, next) => {
    console.log(req.body);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        // we're connected!
    });
    var blogpost = new BlogPost({ blogHeaderText: req.body.blogHeaderText, blogText: req.body.blogText });
    blogpost.save((err, post) => {
        if (err) return res.send(err);
        return res.send(post);
    });
});

module.exports = router;
