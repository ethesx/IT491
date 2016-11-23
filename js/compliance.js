$(document).on('pagecreate', "#compliance", function(){

    var controlGroupContainer = "#complianceDiv";
    var cases = data[dataIndexSelected].Case;
    var counter = 0;

    $.each(cases,function(index, value){
        var gn = "complianceItems" + index;
        $("<div/>", {
        "data-role": "controlgroup",
        id: gn
        }).controlgroup().appendTo(controlGroupContainer);

        var group = $("#" + gn);

        group.controlgroup("container").append("<li class='ui-li ui-li-divider ui-bar ui-bar-b ' data-role='list-divider'>Case : " +  cases[index].CaseNumber + "</li>");
        $.each(cases[index].MonitoringCondition,function(index, value) {
            counter++;
            group.controlgroup("container")
                .append("<label for='widget" + counter + "'>"+ value.Condition + "</label><input type='checkbox' id='widget" + counter + "' />");
        });
        group.enhanceWithin().controlgroup("refresh");
    });


    //TODO how is the compliance item to be posted back as selected - by name, index, etc?
});
