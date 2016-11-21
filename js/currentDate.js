/**
 * Created by Dominic on 11/20/2016.
 */


$(document).on('pagecreate', "#confirmation", function() {

    var date = new Date();

    var month = date.getMonth()+1;
    var day = date.getDate();
    var hours = date.getHours();
    var mins = date.getMinutes()

    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    mins = mins < 10 ? '0'+ mins : mins;

    var result = (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day + '/' + date.getFullYear() + " at " + hours + ":" + mins + ampm;

    document.getElementById("date").innerHTML = result;

});