$(document).on('pagecreate', "#defContactInfo", function() {

    var page = '#defContactInfo';
    Utils.toggleInset(page);
    $('#contactInfoEdit').click(function () {
        Utils.toggleInputText(page);
        Utils.toggleInset(page);
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