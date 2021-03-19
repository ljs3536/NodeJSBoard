// models/Post.js

var moongoose = require('mongoose');

//schema
var postSchema = mongoose.Schema({ // Post의 schema는 title, body, createdAt, updatedAt으로 구성된다.
  title:{type:String, required:true},
  body:{type:String, required:true},
  createdAt:{type:Date, default:Date.now}, // default항목으로 기본 값을 지정할 수 있다. 함수명을 넣으면 해당 함수의 return이 기본값이 된다.
  updatedAt:{type:Date},
});

// model & exports
var Post = mongoose.model('post', postSchema);
module.exports = Post;
