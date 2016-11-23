$(document).on('pagecreate', "#defList", function(){
    var output = "";
    var array = [];

    $.each(data, function (index, value) {
        var fullname = value.DemographicInfo.LastName.toLowerCase() + ", " + value.DemographicInfo.FirstName.toLowerCase();
        array.push( {ID:index, name:fullname} );
    });

    array.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });

    for(var i = 0; i < array.length; i++) {
        output += '<li><a href="#alerts" class="defendantName" id="' + array[i].ID + '">' + array[i].name + '</a></li>';
    }

    $('#myList').html(output).listview("refresh");

    $(document).on("click", "#myList li" ,function (event) {
        dataIndexSelected = $('a', this).attr('id');
    });
});
