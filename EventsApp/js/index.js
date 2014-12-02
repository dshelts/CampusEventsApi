$(document).ready(function() {
    console.log( "Let's Go!" );
    displayAll();
});

function displayAll() {
    // Empty content string
    var entry = '';

    // jQuery AJAX call for JSON
    $.getJSON( 'http://immense-thicket-1665.herokuapp.com', function( data ) {

        // For each item in our JSON, add a table row and cells to the entry string
        $.each(data, function(){
            entry += '<tr>';
            entry += '<td><a href="#" rel="' + this.Title + '" title="Show Details">' + this.Title + '</a></td>';
            entry += '<td>' + this.Date + '</td>';
            entry += '<td><a href="#" rel="' + this._id + '">delete</a></td>';
            entry += '</tr>';
        });

        // Inject the whole entry string into our existing HTML table
        $('#eventsList table tbody').html(entry);
    });
};