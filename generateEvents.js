// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://dshelly:abc123@ds047930.mongolab.com:47930/messaround", function(err, db) {
  if(err){
  	return console.dir(err);
  }
  else{
    console.dir("The ship has landed.");
  }

  var titles = ["Guest Speaker", "Leadership Talk", "Dinner with the President", "Rubix Cube Solving", "Pub Night", "Drawing Class"];
  var locations = ["Balfour-Hood", "The Sem", "CS Lab", "Whale Lab", "Montana", "Watson Fine Arts", "Meneely", "Chase Dining Hall", "Emerson Dining Hall", "Haas Athletic Center", "Pappas Fitness Center"];
  var years = [2011, 2012, 2013, 2014, 2015];
  var minutes = ["00", "15", "30", "45"];
  var dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var hosts = ['CS Club', 'Math Club', 'Career Advising', 'SHAG', 'Bacchus', 'Math/CS Department', 'Fencing Club', 'Global Education', 'President Hanno'];
  var descriptions = ['Come to this event, it will be fun!', 'This event has snacks and tea!',];
  var am_or_pm = [' AM', ' PM'];
  var events = [];

  for(var it = 0; it < 100; it++){
  	  var randomTitle = Math.floor((Math.random() * titles.length));
      var randomLocation = Math.floor((Math.random() * locations.length));

      var hour = Math.floor((Math.random() * 12) + 1);
      var randomMinute = Math.floor((Math.random() * minutes.length));
      var randomTime = hour + ':' + minutes[randomMinute] + am_or_pm[Math.floor((Math.random() * 2))];
     
      var randomDayOfWeek = Math.floor((Math.random() * dayOfWeek.length));
      var randomYear = Math.floor((Math.random() * years.length));
      var randomDate = Math.floor((Math.random() * 32) + 1);
      var randomMonth = Math.floor((Math.random() * 13) + 1);
      var randomHost = Math.floor((Math.random() * hosts.length));
      var randomDesc = Math.floor((Math.random() * descriptions.length));

  		tempDoc = {'Title': titles[randomTitle],
  				   'ID': it,
  				   'Location':  locations[randomLocation],
             'DayOfTheWeek':  dayOfWeek[randomDayOfWeek],
  				   'Date':  randomDate,
  				   'Month':  randomMonth,
  				   'Year':  years[randomYear],
             'Time':  randomTime,
  				   'HostedBy':  hosts[randomHost],
             'Desription': descriptions[randomDesc]};


  		events.push(tempDoc);
  }

  var collection = db.collection('CampusEvents');

  if(collection.find(function(err, result) {}) !== null){

  	collection.remove(function(err, result) {});
  	console.dir('Clean Up, Clean Up, Everybody Everywhere...')
  }

  collection.insert(events, {w:1}, function(err, result) {});

  console.dir('Mission Complete.');
  db.close();//closing database
});

