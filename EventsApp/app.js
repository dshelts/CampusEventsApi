var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/homepage', routes);

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

        if('Date' in req.query){ req.query['Date'] = parseInt(req.query['Date']);};
        if('Month' in req.query){ req.query['Month'] = parseInt(req.query['Month']);};
        if('Year' in req.query){ req.query['Year'] = parseInt(req.query['Year']);};
        if('ID' in req.query){ req.query['ID'] = parseInt(req.query['ID']);};

        collection.find(req.query).toArray(function(err, docs) {
          if(err){
            return console.dir(err);
          }
          // console.log(docs);
          console.log(req.query);
          // console.log(docs.length);
          res.json(docs);
          db.close();
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
                        'Day of the Week':  "None",
                        'Date':  0,
                        'Month':  0,
                        'Year':  0,
                        'Time':  '12:00',
                        'Hosted By':  "None",
                        'Desription': "None"};

        for(var key in req.query) {
          if(key != 'ID') {
            newEvent[key] = req.query[key];
          }
        }

        parseInt(newEvent['Date']);
        parseInt(newEvent['Month']);
        parseInt(newEvent['Year']);

        collection.insert(newEvent, function(err, createdEvent) {
          if(err){
            return console.dir(err);
          }
          res.json(createdEvent);
          db.close();
        });
        // collection.insert(newEvent);
        // res.json(newEvent);
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