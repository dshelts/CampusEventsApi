//fill Directory.
//author Drew
// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://dshelly:abc123@ds047930.mongolab.com:47930/messaround", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  else{//error
  	console.log(err);
  }

	var collection = db.collection('Events', function(err, collection){
    	collection.remove({},function(err, removed){
    		});//clearing out collection
		});

	//Variable
	var eventTitle = ['Dance', 'Talk', 'Movie', 'Show', 'Game'];
	var month = ['January', 'February', 'March'];
	var day = ['1','2', '3','4','5', '6','7','8','9'];
	var year = ['14', '15'];
	var location = ['here', 'there', 'elsewhere', 'TBD'];
	var description = ['no description', 'Come have Fun', 'Free food', 'Learn something'];
	var ranEvent, ranMonth, ranDay, ranYear, ranLocation, ranDesc;
	var eventArray= []
	for (i=0; i<2500; i++) {
		ranEvent = Math.floor((Math.random()* eventTitle.length));
		ranMonth = Math.floor((Math.random()* month.length));
		ranDay = Math.floor((Math.random()* day.length));
		ranYear = Math.floor((Math.random()* year.length));
		ranLocation = Math.floor((Math.random()* location.length));
		ranDesc = Math.floor((Math.random()* description.length));
	
		eventDoc = { 'Event': eventTitle[ranEvent],
					'month': month[ranMonth],
					'day': day[ranDay],
					'year': year[ranYear],
					'location':location[ranLocation],
					'description':description[ranDesc]
		};

		eventArray.push(eventDoc)
	};
	collection.insert(eventArray, {w:1}, function(err, result) {});
	console.log("finished insert")


});
