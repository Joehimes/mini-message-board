const messages = [
  {
    text: 'Hi there!',
    user: 'Joe',
    added: new Date()
  },
  {
    text: "What up?",
    user: 'Bob',
    added: new Date()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

/* GET new message page */
router.get('/new', function(req, res, next) {
  res.render('form');
});

/* POST new message */
router.post('/new', function(req, res, next) {
  messages.push({text: req.body.text, user: req.body.name, added: new Date()});
  res.redirect('/');
})

module.exports = router;
