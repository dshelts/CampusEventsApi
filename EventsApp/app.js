var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var routes = require('./routes/');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(function(req,res,next){
//     req.db = db;
//     next();
// // });
// app.use('/', routes);
// app.use('/', events);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));

// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {

    // console.log(res);
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://dshelly:abc123@ds047930.mongolab.com:47930/messaround", function(err, db){
      if(err){
        return console.dir(err);
      }
      else {
        console.log("Connected.");
      }

      db.collection('CampusEvents', function(err, collection) {
        if(err){
          return console.dir(err);
        }

         // filter out blank queries from form
        var user_query = {};
        for(var key in req.query){
          if(req.query[key] != ""){
            user_query[key] = req.query[key];
          }
        }

        if('Date' in user_query){ user_query['Date'] = parseInt(user_query['Date']);};
        if('Month' in user_query){ user_query['Month'] = parseInt(user_query['Month']);};
        if('Year' in user_query){ user_query['Year'] = parseInt(user_query['Year']);};
        if('ID' in user_query){ user_query['ID'] = parseInt(user_query['ID']);};

        collection.find(user_query).toArray(function(err, docs) {
          if(err){
            return console.dir(err);
          }
          // console.log(docs);
          // console.log(req.query);
          // console.log(docs.length);
          // res.render('index', { title: 'test Campus Events', message: 'testing'});

          db.close();
       
          // options for querying search
          var dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
          var date = [];
          var months = [];
          for(i=1; i<13; i++){
            months.push(i);
          }
          for(i=1; i<32; i++){
            date.push(i);
          }
          // console.log(months);
          res.render('index', { title: 'Campus Events', message: 'testing', events: docs, createdMessage: ''});

        });
      });
    });
});


// accept POST request on the homepage
app.post('/', function (req, res) {
  var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://dshelly:abc123@ds047930.mongolab.com:47930/messaround", function(err, db){
      if(err){
        return console.dir(err);
      }
      else {
        console.log("Connected.");
      }

      db.collection('CampusEvents', function(err, collection) {
        if(err){
          return console.dir(err);
        }

        var newEvent = {'Title': "None",
                        'ID': -1,
                        'Location':  "None",
                        'DayOfTheWeek':  "None",
                        'Date':  0,
                        'Month':  0,
                        'Year':  0,
                        'Time':  '12:00 PM',
                        'HostedBy':  "None",
                        'Description': "None"};

        for(var key in newEvent) {
          if(key != 'Time') {
            newEvent[key] = req.body[key];
          }
          else {
            newEvent[key] = req.body['hour'] + ':' + req.body['minute'] + req.body['amORpm'];
          }
        }

        newEvent['ID'] = parseInt(newEvent['ID']);
        newEvent['Date'] = parseInt(newEvent['Date']);
        newEvent['Month'] = parseInt(newEvent['Month']);
        newEvent['Year'] = parseInt(newEvent['Year']);
        console.log(newEvent);
        collection.insert(newEvent, function(err, createdEvent) {
          if(err){
            return console.dir(err);
          }
          db.close();
        });
        // collection.insert(newEvent);
        // console.log(req.body);
        // res.json(newEvent);
        var newDoc = [];
        newDoc.push(newEvent);
        var creationstring = 'Event Number ' + newEvent["ID"] + ' successfully created...';

        res.render('index', { title: 'Campus Events', message: 'testing', events: newDoc, createdMessage: creationstring});
      });
    });
})

// accept PUT request at /user
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
})

// accept DELETE request at /user
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;