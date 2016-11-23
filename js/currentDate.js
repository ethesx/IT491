/**
 * Created by Dominic on 11/20/2016.
 *
 * This script is simply to create and format the current date and time to be saved to the object for display and to be
 * posted back to the database. I need to find a way to implement a better function or utilize the $this variable. The
 * date and time are showing on the summary page, but not the confirmation page. They share the same id. This script
 * could also be combined with complete.js
 *
 *
 */


$(document).on('pagecreate', "#confirmation", function() {

    getDate();
});

$(document).on('pagecreate', "#summary", function() {

 getDate();

});

function getDate() {
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
};
