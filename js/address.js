$(document).on('pagecreate', "#defAddr", function(){
    $('#address1 #address2 #city #zip').parent().removeClass('ui-input-text ui-shadow-inset');

    //TODO Refactor
    $('#address1Edit').click(function(){
        $('#address1')
            .removeClass('transparent')
            .prop('disabled', false)
            .parent()
            .addClass('ui-input-text ui-shadow-inset')
            .removeClass('ui-state-disabled');
    });

    $('#address2Edit').click(function(){
        $('#address2')
            .removeClass('transparent')
            .prop('disabled', false)
            .parent()
            .addClass('ui-input-text ui-shadow-inset')
            .removeClass('ui-state-disabled');
    });

    $('#cityEdit').click(function(){
        $('#city')
            .removeClass('transparent')
            .prop('disabled', false)
            .parent()
            .addClass('ui-input-text ui-shadow-inset')
            .removeClass('ui-state-disabled');
    });

    $('#zipEdit').click(function(){
        $('#zip')
            .removeClass('transparent')
            .prop('disabled', false)
            .parent()
            .addClass('ui-input-text ui-shadow-inset')
            .removeClass('ui-state-disabled');
    });

    $('#stateEdit').click(function(){
        $('#state')
            .prop('disabled', false)
            .parent()
            .removeClass('ui-state-disabled');
    });

    $('#countyEdit').click(function(){
        $('#county')
            .prop('disabled', false)
            .parent()
            .removeClass('ui-state-disabled');
    });


    //Data population --------------------------------------------------------------------------------------

    var ad = data[dataIndexSelected].CurrentAddress;

    $('#address1').val(ad.Address1);
    $('#address2').val(ad.Address2);
    $('#city').val(ad.City);
    $('#zip').val(ad.Zip);
    //TODO State and county are not listed in data - setting static values for now
    $('#state').val("nj");
    $('#county').val("021");
});