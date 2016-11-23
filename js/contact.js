$(document).on('pagecreate', "#defContactInfo", function() {

    var page = '#defContactInfo';
    Utils.toggleInset(page);
    $('#contactInfoEdit').click(function () {
        Utils.toggleInputText(page);
        Utils.toggleInset(page);
    });

    var elementArrayToSet = ['#primaryHome', '#supplementalContactPhone', '#primaryMobile', '#secondaryMobile', '#email', '#supplementalContactEmail'];
    var responseCd = response.ContactDetails;
    /*pass in element array to set event handler on,
     response object's object which properties for update are contained within,
     and the list of properties to update*/
    $(elementArrayToSet.join(", ")).change({obj : responseCd, propsArray : elementArrayToSet}, Utils.setResponseValue);

    //Data population --------------------------------------------------------------------------------------

    var cd = data[dataIndexSelected].ContactDetails;

    $('#primaryHome').val(cd.PrimaryHome);
    $('#supplementalContactPhone').val(cd.SupplementalContactPhone);
    $('#primaryMobile').val(cd.PrimaryMobile);
    $('#secondaryMobile').val(cd.SecondaryMobile);
    $('#email').val(cd.Email);
    $('#supplementalContactEmail').val(cd.SupplementalContactEmail);

});