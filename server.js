// require modules
const express = require('express');
const path = require('path');

const studentDb = require('./data/student-db');

// create the express app
const app = express();

// configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// mount middleware (app.use)

// mount routes
app.get('/', function(req, res) {
  res.redirect('/student');
});

// tell the app to listen on port 3000
app.listen(3000, function () {
  console.log('listening on port 3000');
});

app.get('/home', function(req, res) { 
  res.render('home');
});

app.get('/student', function(req, res) {
  res.render('student/index', {
    student: studentDb.getAll()
  });
});