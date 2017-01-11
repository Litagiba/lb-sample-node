var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About',
    content: 'This is all about me'
  })
})

router.get('/contact', function(req, res){
  res.render('contact',{
    title:'Contact Us',
    content: 'If you would like to contact us just have a browse'
  })
})

module.exports = router;
