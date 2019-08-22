var createError = require('http-errors');
var cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogpost = require('./routes/blogpost');
var testAPIRouter = require('./routes/testAPI');

//const MongoClient = require('mongodb').MongoClient;
const password = "Matt0614%2E";
const uri = `mongodb+srv://matthewfbullock:${password}@blog-wrn0l.mongodb.net/test?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true
// });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log("Connected...");
//   // perform actions on the collection object
//   client.close();
// });

const mongoose = require('mongoose');
mongoose.connect(uri, {
  useNewUrlParser: true
});

var fishSchema = new mongoose.Schema({
  name: String
});

const Fish = mongoose.model('Fish', fishSchema);

function n() {
  let i = 0;
  while (true) {
    const fish = new Fish({
      name: `Dingus ${i++}`
    });
    fish.save().then(() => console.log("saved fish", fish));
  }
}

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blogpost', blogpost);

app.use("/testApi", testAPIRouter);
app.get("/n", n);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;