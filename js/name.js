$(document).on('pagecreate', "#defList", function(){
    var output = "";
    var array = [];
    $.each(data, function (index, value) {
        array.push(value.DemographicInfo.LastName.toLowerCase() + ", " + value.DemographicInfo.FirstName.toLowerCase());
    });
    array.sort();

    for(var i = 0; i < array.length; i++) {
        output += '<li><a href="#" class="defendantName">' + array[i] + '</a></li>';
    }
    $('#myList').html(output).listview("refresh");
});
