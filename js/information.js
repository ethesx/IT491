var ifChanged = false;

$(document).on('pagecreate', "#defInfo", function(){

    Utils.toggleInset("#defInfo");

    //For response json data
    var ad2 = response.DemographicInfo;

    $('#infoEdit').click(function(){
        Utils.toggleInset("#defInfo");
        if($("#fullname").hasClass("ui-disabled")){
            $("#fullname").removeClass('ui-disabled');
            $("#middlename").removeClass('ui-disabled');
            $("#lastname").removeClass('ui-disabled');
            $("#gender").removeClass('ui-disabled');
            $("#feet").removeClass('ui-disabled');
            $("#inch").removeClass('ui-disabled');
            $("#eyeColor").removeClass('ui-disabled');
            $("#race").removeClass('ui-disabled');
            $("#hairColor").removeClass('ui-disabled');
            $("#inter").removeClass('ui-disabled');
            $("#language").removeClass('ui-disabled');
        }
        else{
            ifChanged = true;
            $("#fullname").addClass('ui-disabled');
            ad2.FirstName = $('#fullname').val();

            $("#middlename").addClass('ui-disabled');
            ad2.MiddleName = $('#middlename').val();

            $("#lastname").addClass('ui-disabled');
            ad2.LastName = $('#lastname').val();

            $("#gender").addClass('ui-disabled');
            ad.Gender = $('#gender').val();

            $("#feet").addClass('ui-disabled');
            ad.HeightFt = $('#feet').val();

            $("#inch").addClass('ui-disabled');
            ad.HeightInches = $('#inch').val();

            $("#eyeColor").addClass('ui-disabled');
            ad.EyeColor = $('#eyeColor').val();

            $("#race").addClass('ui-disabled');
            ad.Ethnicity = $('#race').val();

            $("#hairColor").addClass('ui-disabled');
            ad.HairColor = $('#hairColor').val();

            $("#inter").addClass('ui-disabled');
            ad.InterpreterRequired = $('#inter').val();

            $("#language").addClass('ui-disabled');
            ad.SpokenLanguage = $('#language').val();
        }
    });

    //Data population --------------------------------------------------------------------------------------

    //TO get data from JSON
    var ad = data[dataIndexSelected].DemographicInfo;
    var id = data[dataIndexSelected];

    $('#fullname').val(ad.FirstName);
    $('#middlename').val(ad.MiddleName);
    $('#lastname').val(ad.LastName);

    if(ad.Gender == "F"){
        $("#gender option[value='female']").attr('selected', 'selected'); $('#gender').selectmenu('refresh');
    }
    else {
        $("#gender option[value='male']").attr('selected', 'selected'); $('#gender').selectmenu('refresh');
    }

    $('#feet').val(ad.HeightFt);
    $('#inch').val(ad.HeightInches);

    if(ad.EyeColor == "1") {
        $("#eyeColor option[value='1']").attr('selected', 'selected'); $('#eyeColor').selectmenu('refresh');
    }
    else if(ad.EyeColor == "2") {
        $("#eyeColor option[value='2']").attr('selected', 'selected'); $('#eyeColor').selectmenu('refresh');
    }
    else if(ad.EyeColor == "3") {
        $("#eyeColor option[value='3']").attr('selected', 'selected'); $('#eyeColor').selectmenu('refresh');
    }
    else if(ad.EyeColor == "4") {
        $("#eyeColor option[value='4']").attr('selected', 'selected'); $('#eyeColor').selectmenu('refresh');
    }
    else if(ad.EyeColor == "5") {
        $("#eyeColor option[value='5']").attr('selected', 'selected'); $('#eyeColor').selectmenu('refresh');
    }
    else {
        $("#eyeColor option[value='6']").attr('selected', 'selected'); $('#eyeColor').selectmenu('refresh');
    }

    if(ad.Ethnicity == "I") {
        $("#race option[value='I']").attr('selected', 'selected'); $('#race').selectmenu('refresh');
    }
    else if(ad.Ethnicity == "A") {
        $("#race option[value='A']").attr('selected', 'selected'); $('#race').selectmenu('refresh');
    }
    else if(ad.Ethnicity == "B") {
        $("#race option[value='B']").attr('selected', 'selected'); $('#race').selectmenu('refresh');
    }
    else if(ad.Ethnicity == "N") {
        $("#race option[value='N']").attr('selected', 'selected'); $('#race').selectmenu('refresh');
    }
    else if(ad.Ethnicity == "W") {
        $("#race option[value='W']").attr('selected', 'selected'); $('#race').selectmenu('refresh');
    }
    else {
        $("#race option[value='0']").attr('selected', 'selected'); $('#race').selectmenu('refresh');
    }


    if(ad.HairColor == "1") {
        $("#hairColor option[value='1']").attr('selected', 'selected'); $('#hairColor').selectmenu('refresh');
    }
    else if(ad.HairColor == "2") {
        $("#hairColor option[value='2']").attr('selected', 'selected'); $('#hairColor').selectmenu('refresh');
    }
    else if(ad.HairColor == "3") {
        $("#hairColor option[value='3']").attr('selected', 'selected'); $('#hairColor').selectmenu('refresh');
    }
    else if(ad.HairColor == "4") {
        $("#hairColor option[value='4']").attr('selected', 'selected'); $('#hairColor').selectmenu('refresh');
    }
    else if(ad.HairColor == "5") {
        $("#hairColor option[value='5']").attr('selected', 'selected'); $('#hairColor').selectmenu('refresh');
    }
    else {
        $("#hairColor option[value='0']").attr('selected', 'selected'); $('#hairColor').selectmenu('refresh');
    }

    if(ad.InterpreterRequired == "Y"){
        $("#inter option[value='Yes']").attr('selected', 'selected'); $('#inter').selectmenu('refresh');
    }
    else {
        $("#inter option[value='No']").attr('selected', 'selected'); $('#geninterder').selectmenu('refresh');
    }

    $('#ssn').val(ad.SSN);
    $('#language').val(ad.SpokenLanguage);
    $('#py').val(id.pyID);
});