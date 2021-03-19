// routes/posts.js

var express = require('express');
var router = express.Router();
var Post = require('../models/Post');

// Index
router.get('/', function(req, res){
  Post.find({})
  .sort('-createAt')        //나중에 생성된 데이터가 위로 올라 갈 수 있도록 정렬
  .exec(function(err, posts){
    if(err) return res.json(err);
    res.render('posts/index', {posts:posts});
  });
});

// New
router.get('/new', function(req, res){
  res.render('posts/new');
});

// create
router.post('/', function(req, res){
  Post.create(req.body, function(err, post){
    if(err) return res.json(err);
    res.redirect('/posts');
  });
});

// show
router.get('/:id', function(req, res){
  Post.findOne({_id:req.params.id}, function(err, post){
    if(err) return res.json(err);
    res.render('posts/show', {posts:posts});
  });
});

// edit
router.get('/:id/edit', function(req, res){
  Post.findOne({_id:req.params.id}, function(err, post){
    if(err) return res.json(err);
    res.render('posts/edit', {posts:posts});
  });
});

// update
router.put('/:id', function(req, res){
  req.body.updatedAt = Date.now();    //post를 수정하는 경우 수정된 날짜를 updateAt에 기록한다.
  Post.findOneAndUpdate({_id:req.params.id}, req.body, function(err, post){
    if(err) return res.json(err);
    res.redirect('/posts/'+req.params.id);
  });
});

// destroy
router.delete('/:id', function(req, res){
  Post.deleteOne({_id:req.params.id}, function(err){
    if(err) return res.json(err);
    res.redirect('/posts');
  });
});

module.exports = router;
