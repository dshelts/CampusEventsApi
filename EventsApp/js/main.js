$(document).ready(function() {
    // displayAll();
    // alert('here');
});

// function displayAll() {
//     // Empty content string
//     var entry = '';

// 	$.ajax({
// 		url: "http://localhost:3000/search",
// 		type: 'GET',
// 		data: {},
// 		dataType: 'json',
// 		success: handleData,
// 		error: function(){
// 			alert('Error in GET Request');
// 		}
// 	});
// };

// function handleData(data){
// 	var eventsList = [];
// 	var tempDoc = {};
// 	// $.each(data, function(){
//  //  		tempDoc = this;
//  //        // alert(tempDoc["ID"]);
// 	// 	eventsList.push(tempDoc);
// 	// 	// eventsList.push(this);	
//  //    });
//     // alert(eventsList.length);
//     // res.locals.events = JSON.stringify(data);
//     alert(JSON.stringify(data));
    
//     res.render('index', {events: data});

//     // Inject the whole entry string into our existing HTML table
//     // $('.eventsList').html(entry);
// };



// alert(this["ID"]);
		// entry += '<tr>';
  //       entry += '<td><a href="#" rel="' + this["Title"] + '" title="Show Details">' + this["Title"] + '</a></td>';
  //       entry += '<td>' + this["Date"] + '</td>';
  //       entry += '<td><a href="#" rel="' + this["ID"] + '">delete</a></td>';
  //       entry += '</tr>';