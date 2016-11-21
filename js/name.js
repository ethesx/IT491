$(document).on('pagecreate', "#defList", function(){
    var output;
    var array = [];
    $.each(data, function (index, value) {
        array.push(value.DemographicInfo.LastName + ", " + value.DemographicInfo.FirstName);
    });
    array.sort();

    for(var i = 0; i < array.length; i++) {
        output += '<li><a href="#">' + array[i] + '</a></li>';
    }
    $('#myList').html(output).listview("refresh");
});
