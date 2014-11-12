// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://dshelly:abc123@ds047930.mongolab.com:47930/ddelf", function(err, db) {
  if(err){
  	return console.dir(err);
  }
  else{
    console.dir("The ship has landed.");
  }

<<<<<<< HEAD
  var Events = ['Janice', 'Bill', 'Tommy', 'Michael', 'Dan', 'Rachelle', 'Shelly', 'Tom', 'Mark', 'Mike', 'Martin'];
  var lastNames = ['Sklensky', 'Bloch', 'Ratliff', 'Kahn', 'Herr', 'DeCoste', 'Leibowitz', 'Armstrong', 'LeBlanc', 'Gousie', 'Gagne'];
  var department = ['Mathematics', 'Computer Science'];
  var building = ['Old Science Center'];
  var floor = ['Ground Floor', 'First Floor'];
  var office = ['1315', '1141', '1314', '1300', '1349'];
  var ohDay = ['M', 'T', 'W', 'R', 'F'];
  var ohTime = ['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00'];

  var profs = [];
  for(var it = 0; it < 2500; it++){
  		var randomFirst = Math.floor((Math.random() * firstNames.length));
  		var randomLast = Math.floor((Math.random() * lastNames.length));
  		var randomdept = Math.floor((Math.random() * department.length));
  		var randomBuilding = 0; // Math.floor((Math.random() * building.length));
  		var randomFloor = Math.floor((Math.random() * floor.length));
  		var randomOffice = Math.floor((Math.random() * office.length));
  		var randomDay = Math.floor((Math.random() * ohDay.length));
  		var randomTime = Math.floor((Math.random() * ohTime.length));

  		tempDoc = {'First Name': firstNames[randomFirst],
  				   'Last Name':  lastNames[randomLast],
  				   'Department':  department[randomdept],
  				   'Building':  building[randomBuilding],
  				   'Floor':  floor[randomFloor],
  				   'Office':  office[randomOffice],
  				   'Office Hour Day':  ohDay[randomDay],
  				   'Office Hour Time':  ohTime[randomTime]};

  		profs.push(tempDoc);
=======
  var titles = ["Guest Speaker", "Leadership Talk", "Dinner with the President", "Rubix Cube Solving", "Pub Night", "Drawing Class"];
  var locations = ["Balfour-Hood", "The Sem", "CS Lab", "Whale Lab", "Montana", "Watson Fine Arts", "Meneely", "Chase Dining Hall", "Emerson Dining Hall", "Haas Athletic Center", "Pappas Fitness Center"];
  var years = [2011, 2012, 2013, 2014, 2015];
  var dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var hosts = ['CS Club', 'Math Club', 'Career Advising', 'SHAG', 'Bacchus', 'Math/CS Department', 'Fencing Club', 'Global Education', 'President Hanno'];
  var descriptions = ['Come to this event, it will be fun!', 'This event has snacks and tea!',];
  var am_or_pm = [' AM', ' PM'];
  var events = [];

  for(var it = 0; it < 10; it++){
  		var randomTitle = Math.floor((Math.random() * titles.length));
      var randomLocation = Math.floor((Math.random() * locations.length));

      var hour = Math.floor((Math.random() * 12) + 1);
      var minute = Math.floor((Math.random() * 59) + 1);
      if(minute<10) { minute = '0' + minute;}
      var randomTime = hour + ':' + minute + am_or_pm[Math.floor((Math.random() * 2))];
     
      var randomDayOfWeek = Math.floor((Math.random() * dayOfWeek.length));
      var randomYear = Math.floor((Math.random() * years.length));
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
>>>>>>> dd6acab0b2be9115f46debe01ebad0d3d804486f
  }

  var collection = db.collection('CampusEvents');

  if(collection.find(function(err, result) {}) !== null){

  	collection.remove(function(err, result) {});
  	console.dir('Clean Up, Clean Up, Everybody Everywhere...')
  }

  collection.insert(events, function(err, result) {});

  console.dir('Mission Complete.');

});

