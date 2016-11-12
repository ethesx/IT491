$(document).bind('pagecreate', function() {
    $('#phoneHome1 #phoneHome2 #phoneMobile1 #phoneMobile2').parent().removeClass('ui-input-text ui-shadow-inset');

//TODO Refactor
    $('#phoneHome1Edit').click(function () {
        $('#phoneHome1')
            .removeClass('transparent')
            .prop('disabled', false)
            .parent()
            .addClass('ui-input-text ui-shadow-inset')
            .removeClass('ui-state-disabled');
    });

    $('#phoneHome2Edit').click(function () {
        $('#phoneHome2')
            .removeClass('transparent')
            .prop('disabled', false)
            .parent()
            .addClass('ui-input-text ui-shadow-inset')
            .removeClass('ui-state-disabled');
    });

    $('#phoneMobile1Edit').click(function () {
        $('#phoneMobile1')
            .removeClass('transparent')
            .prop('disabled', false)
            .parent()
            .addClass('ui-input-text ui-shadow-inset')
            .removeClass('ui-state-disabled');
    });

    $('#phoneMobile2Edit').click(function () {
        $('#phoneMobile2')
            .removeClass('transparent')
            .prop('disabled', false)
            .parent()
            .addClass('ui-input-text ui-shadow-inset')
            .removeClass('ui-state-disabled');
    });

    $('#email1Edit').click(function () {
        $('#email1')
            .removeClass('transparent')
            .prop('disabled', false)
            .parent()
            .addClass('ui-input-text ui-shadow-inset')
            .removeClass('ui-state-disabled');
    });

    $('#email2Edit').click(function () {
        $('#email2')
            .removeClass('transparent')
            .prop('disabled', false)
            .parent()
            .addClass('ui-input-text ui-shadow-inset')
            .removeClass('ui-state-disabled');
    });

    //Data population --------------------------------------------------------------------------------------

    var cd = data[dataIndexSelected].ContactDetails;

    $('#phoneHome1').val(cd.PrimaryHome);
    $('#phoneHome2').val(cd.SupplementalContactPhone);
    $('#phoneMobile1').val(cd.PrimaryMobile);
    $('#phoneMobile2').val(cd.SecondaryMobile);
    $('#email1').val(cd.Email);
    //TODO No secondary email available

});