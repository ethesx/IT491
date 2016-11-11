$(document).bind('pagecreate', function(){



    $('#complianceItems').delegate('input', 'click', function() {
        $(this).toggleClass("nonCompliant");
        $(this).attr("data-theme","c").button('refresh');

    });
});