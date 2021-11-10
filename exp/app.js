var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./hcodeApp/routes/index');
var usersRouter = require('./hcodeApp/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
const express = require('express')
const app = express()

app.get('/',(req, res) => {
  res.send('Vai Flamengo!')
})

app.get('/admin',(req, res) => {
  res.send('Acessando Administração!')
})
