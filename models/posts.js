var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeblog');

var db = mongoose.connection;

// post schema

var PostSchema = mongoose.Schema({
    title: {
        type: String,
        index: true
    },
    category: {
        type: String
    },
    body: {
        type: String
    },
    mainimage: {
        type: String
    },
    author: {
        type: String
    }
});

var Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.createPost = function(newPost, callback){
   newPost.save(callback); 
}
