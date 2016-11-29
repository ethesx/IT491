$(document).on('pagecreate', "#summary", function(){
    var app = data[dataIndexSelected].Interview[0];
    $('#int-type').append(app.AppointmentType);

    if(ifChanged == true)
        $('#int-change').append("YES");
    else
        $('#int-change').append("NO");

    if(globalBoolean == true)
        $('#int-compliant').append("YES");
    else
        $('#int-compliant').append("NO");
});