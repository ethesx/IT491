/**
 * Created by Dominic on 11/22/2016.
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
});