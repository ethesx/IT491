var controlGroupName = "#complianceItems";
var cases = data[dataIndexSelected].Case;

$(document).on('pagecreate', "#compliance", function(e, data){
    var group = $( controlGroupName );
    var counter = 0;

    $.each(cases,function(index, value){

        console.log(cases[index].CaseNumber);
        $.each(cases[index].MonitoringCondition,function(index, value) {
            counter++;
            group.controlgroup("container")
                .append("<label for='widget" + counter + "'>"+ value.Condition + "</label><input type='checkbox' id='widget" + counter + "' />");
        });
    });
    group.enhanceWithin().controlgroup("refresh");

    //TODO how is the compliance item to be posted back as selected - by name, index, etc?
});
