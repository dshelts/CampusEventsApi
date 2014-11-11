//populate.js
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

	var collection = db.collection('hw14', function(err, collection){
    	collection.remove({},function(err, removed){
    		});//clearing out collection
		});




});