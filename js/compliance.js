$(document).on('pagecreate', "#compliance", function(){

    var controlGroupContainer = "#complianceDiv";
    var cases = data[dataIndexSelected].Case;
    var counter = 0;

    /*TODO SERVICE DATA ISSUE - initial data indicates both condition.IsCompliant && condition.IsNonCompliant are false
    We must know which one holds the correct value to read and initially set the conditions
    */
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
                .append("<label for='complianceItem" + counter + "'>"+ value.Condition + "</label><input type='checkbox' id='complianceItem" + counter + "' />");
        });
        group.enhanceWithin().controlgroup("refresh");
    });

    //Attach change event handler to each monitoring item checkbox - updates response object's respective Case[?].MonitoringCondition[?] properties
    $(controlGroupContainer + " input[type=checkbox]").change(function(event){
        var parentSelector = controlGroupContainer + " .ui-controlgroup";
        var caseIndex = $(parentSelector).index($(this).closest(parentSelector));
        var conIndex = $("#" + $(this).closest(parentSelector).attr("id") + " input[type=checkbox]").index(this);
        var condition = cases[caseIndex].MonitoringCondition[conIndex];

        console.debug("Case index : " + caseIndex);
        console.debug("Condition index : " + conIndex);
        console.debug("IsCompliant BEFORE : " + condition.IsCompliant);
        console.debug("IsNonCompliant BEFORE : " + condition.IsNonCompliant);

        condition.IsCompliant = !$(event.target).prop("checked");
        condition.IsNonCompliant = $(event.target).prop("checked");

        console.debug("IsCompliant AFTER : " + condition.IsCompliant);
        console.debug("IsNonCompliant AFTER : " + condition.IsNonCompliant);
    });
});
