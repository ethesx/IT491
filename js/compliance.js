var controlGroupName = "#complianceItems";
var cases = data[dataIndexSelected].Case;
var group = $( controlGroupName );

$(document).bind('pagecreate', "#compliance", function(e, data){
    var conditions;
    var counter = 0;
    $.each(cases,function(index, value){


        $.each(cases[index].MonitoringCondition,function(index, value) {
            counter++;
               var widgetType = $( "[name='radio-widget']:checked" ).attr( "id" ),
                group,
                $el,
                action = function() {
                    var action = $( "[name='radio-action']:checked" ).attr( "id" );
                    if ( $( $el[1] ).is( "select" ) && action === "hide" ) {
                        $el = $($el[1]).parents(".ui-select");
                    }
                    $el[ action ]();
                    group.controlgroup( "refresh" );
                };
            $el = $( "<label for='widget" + counter + "'>"+ value.Condition + "</label><input type='checkbox' id='widget" + counter + "'></input>" );
            $( $el[ 1 ] ).bind( "change", action );
            $( controlGroupName ).controlgroup( "container" )[ "append" ]($el);
            $( $el[ 1 ] ).checkboxradio();
        });

    });
    group.controlgroup("refresh");

    //TODO how is the compliance item to be posted back as selected - by name, index, etc?
});