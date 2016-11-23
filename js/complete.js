/**
 * Created by Dominic on 11/22/2016.
 */

$(function () {

    $('').click(function(){

        var response = "";

        $.ajax( {
            type:  "POST",
            url: "https://***REMOVED***/UpdateDefendantInfo/%7BD-1250%7D",
            data: response,
            success: function(data)
            {
                alert("Interview Submitted Successfully");
            },
            error: function(result)
            {
                alert("Interview Submitted Successfully");
            }
        }) ;

    });
});