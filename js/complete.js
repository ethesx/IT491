/**
 * Created by Dominic on 11/22/2016.
 * This is my script that runs the POST upon the complete interview button is clicked (#proceed). I have to add the json
 * object that we will be returning. I am using the jquery shorthand for the document ready.
 *
 * The second function handles the slider event for the question " Do you need to schedule an appointment for the
 * defendant?"  Currently, if slid in any direction it will call the function which will create a popup form for the
 * field officer to schedule the next appoointment. It should provide a date picker, time picker, and location of
 * interview. This will be saved to the object to be posted back to the database.
 *
 * Once the POST is working correctly, The confirmation page details will be displayed as a result/ PDF created.
 *
 * I am not totaly clear on displaying a calandar and time picker in mobile format. When I research, it seems to point
 * to plugins such as "DateBox".
 */

$(function () {

    /* This function is invoked when the complete interview button is clicked.
     * The is located on the summary page. Populate the variable with the page
      * response json and post it back to the backend server. */
    $('#proceed').click(function(){

        var response = "";

        $.ajax( {
            type:  "POST",
            url: "https://***REMOVED***/UpdateDefendantInfo/%7BD-1250%7D",
            data: response,
           // dataType = "json",
            success: function(data)
            {
                alert("The Interview Submitted Successfully");
                console.log("The Interview Submitted Successfully");
            },
            error: function(result)
            {
                alert("The Interview Did Not Submit");
                console.log("The Interview Did Not Submit");
            }
        }) ;

    });

    /* This function controls the slider. At the end of the slide movment this function is invoked and the value
    * is checked. If yes, the calendar div will display allowing the user to select the date, time, and location of
    * the next appointment. Once the date is chosen the schedule button is clicked, the dive will display the next
    * appointment date. If the slider is set back to no, the appointment cancels. */

    $( "#flip-1" ).on( 'slidestop', function( event ) {

        //$('#datepicker').datepicker();
        var input = $('#flip-1').val();
        console.log('Slider Input Detected: ' + input);
        if( input == "no")
        {
            $('#cal').hide();
            $('#info').hide();
        }
        else if( input == "yes")
        {
            $('#cal').show();
            $('#loc').show();
            $('#info').hide();
            console.log('Pop out div calendar input with time and location parameters to set next interview.');
        }
    });

    /*This button takes the chosen date, time, and location, and displays it in the div. This function should also
    populate the response json object with the new appointment/ interview details, to be posted back. */

    $('#schButton').click(function() {

        $('#cal').hide();
        $('#info').show();
        //$('#flip-1').slider('disable');
    });

});
