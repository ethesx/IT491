$(document).on('pagecreate', "#defAddr", function(){

    var page = '#defAddr';
    Utils.toggleInset(page);
    $('#addrEdit').click(function(){
        Utils.toggleInputText(page);
        Utils.toggleInset(page);

    });

    /*$('#stateEdit').click(function(){
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
    });*/

    var elementArrayToSet = ['#address1', '#address2', '#city', '#zip'];
    var responseAd = response.CurrentAddress;
    /*pass in element array to set event handler on,
     response object's object which properties for update are contained within,
     and the list of properties to update*/
    $(elementArrayToSet.join(", ")).change({obj : responseAd, propsArray : elementArrayToSet}, Utils.setResponseValue);

    //Data population --------------------------------------------------------------------------------------

    var ad = data[dataIndexSelected].CurrentAddress;

    $('#address1').val(ad.Address1);
    $('#address2').val(ad.Address2);
    $('#city').val(ad.City);
    $('#zip').val(ad.Zip);
    //TODO State and county are not listed in data - setting static values for now
    /*$('#state').val("nj");
    $('#county').val("021");*/
});