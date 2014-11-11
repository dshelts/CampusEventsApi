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

  var firstNames = ['Janice', 'Bill', 'Tommy', 'Michael', 'Dan', 'Rachelle', 'Shelly', 'Tom', 'Mark', 'Mike', 'Martin'];
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
  }

  var collection = db.collection('hw14');

  if(collection.find(function(err, result) {}) !== null){

  	collection.remove(function(err, result) {});
  	console.dir('Clean Up, Clean Up, Everybody Everywhere...')
  }

  collection.insert(profs, {w:1}, function(err, result) {});

  console.dir('Mission Complete.');

});

