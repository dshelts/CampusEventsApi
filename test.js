// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://giovanni:mozzarella@ds047930.mongolab.com:47930/ddelf", function(err, db) {
  if(err){
  	return console.dir(err);
  }
  else{
    console.dir("The ship has landed.");
  }

  var titles = [];
  var locations = ["Balfour-Hood", "The Sem", "CS Lab", "Whale Lab", "Montana", "Watson Fine Arts", "Meneely", "Chase Dining Hall", "Emerson Dining Hall", "Haas Athletic Center", "Pappas Fitness Center"];
  var years = [2011, 2012, 2013, 2014, 2015];
  var dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var hosts = ['CS Club', 'Math Club', 'Career Advising', 'SHAG', 'Bacchus', 'Math/CS Department', 'Fencing Club', 'Global Education'];
  var descriptions = ['Come to this event, it will be fun!', 'This event has snacks and tea!',];

  var events = [];
  for(var it = 0; it < 10; it++){
  		var randomTitle = Math.floor((Math.random() * titles.length));
      var randomLocation = Math.floor((Math.random() * locations.length));
      var randomTime = Math.floor((Math.random() * 25) + 1) + ':' + Math.floor((Math.random() * 60) + 1);
      var randomDayOfWeek = Math.floor((Math.random() * dayOfWeek.length));
      var randomYear = Math.floor((Math.random() * 2016) + 2011);
      var randomDate = Math.floor((Math.random() * 32) + 1);
      var randomMonth = Math.floor((Math.random() * 13) + 1);
      var randomHost = Math.floor((Math.random() * hosts.length));
      var randomDesc = Math.floor((Math.random() * descriptions.length));

  		tempDoc = {'Title': titles[randomTitle],
  				   'Location':  locations[randomLocation],
             'Day of the Week':  dayOfWeek[randomDayOfWeek],
  				   'Date':  randomDate,
  				   'Month':  randomMonth,
  				   'Year':  randomYear,
             'Time':  randomTime,
  				   'Hosted By':  hosts[randomHost],
             'Desription': descriptions[randomDesc]};

  		events.push(tempDoc);
  }

  var collection = db.collection('Campus Events');

  if(collection.find(function(err, result) {}) !== null){

  	collection.remove(function(err, result) {});
  	console.dir('Clean Up, Clean Up, Everybody Everywhere...')
  }

  collection.insert(events, {w:1}, function(err, result) {});

  console.dir('Mission Complete.');

});

