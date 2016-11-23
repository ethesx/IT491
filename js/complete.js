/**
 * Created by Dominic on 11/22/2016.
 * This is my script that runs the POST upon the complete interview button is clicked (#proceed). I have to add the json
 * object that we will be returning.
 *
 * The second function handles the slider event for the question " Do you need to schedule an appointment for the
 * defendant?"  Currently, if slid in any direction it will call the function which will create a popup form for the
 * field officer to schedule the next appoointment. It should provide a date picker, time picker, and location of
 * interview. This will be saved to the object to be posted back to the database.
 */

$(function () {

    $('#proceed').click(function(){

        var response = "";

        $.ajax( {
            type:  "POST",
            url: "https://***REMOVED***/UpdateDefendantInfo/%7BD-1250%7D",
            data: response,
           // dataType = "json",
            success: function(data)
            {
                alert("Interview Submitted Successfully");
                console.log("Interview Submitted Successfully");
            },
            error: function(result)
            {
                alert("The Interview Did Not Submit");
                console.log("The Interview Did Not Submit");
            }
        }) ;

    });

    $( "#flip-1" ).on( 'slidestop', function( event ) {
        alert('Popup Calendar<br>with time and location parameters.<br>');
    });

});