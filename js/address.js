$(document).bind('pagecreate', function(){
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

});