var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio' });
});

/* GET about me page. */
router.get('/aboutMe', function(req, res) {
  res.render('aboutMe', { titleAbout: 'About Me' });
});

/* GET projects page. */
router.get('/projects', function(req, res) {
  res.render('projects', { titleProjects: 'My Projects' });
});

/* GET contact me page. */
router.get('/contact', function(req, res) {
  res.render('contact', { titleContact: 'Contact Me' });
});
module.exports = router;
