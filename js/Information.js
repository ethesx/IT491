$(document).on('pagecreate', "#defInfo", function(){

    $('#editFull').click(function() {
        if($("#fullname").hasClass("ui-disabled")){
            $("#fullname").removeClass('ui-disabled');
        }
        else{
            $("#fullname").addClass('ui-disabled');
        }
    });

    $('#editMiddle').click(function() {
        if($("#middlename").hasClass("ui-disabled")){
            $("#middlename").removeClass('ui-disabled');
        }
        else{
            $("#middlename").addClass('ui-disabled');
        }
    });

    $('#editLast').click(function() {
        if($("#lastname").hasClass("ui-disabled")){
            $("#lastname").removeClass('ui-disabled');
        }
        else{
            $("#lastname").addClass('ui-disabled');
        }
    });

    $('#editGender').click(function() {
        if($("#gender").hasClass("ui-disabled")){
            $("#gender").removeClass('ui-disabled');
        }
        else{
            $("#gender").addClass('ui-disabled');
        }
    });

    $('#editHeight').click(function() {
        if($("#feet").hasClass("ui-disabled")){
            $("#feet").removeClass('ui-disabled');
            $("#inch").removeClass('ui-disabled');
        }
        else{
            $("#feet").addClass('ui-disabled');
            $("#inch").addClass('ui-disabled');
        }
    });

    $('#editEye').click(function() {
        if($("#eyeColor").hasClass("ui-disabled")){
            $("#eyeColor").removeClass('ui-disabled');
        }
        else{
            $("#eyeColor").addClass('ui-disabled');
        }
    });

    $('#editRace').click(function() {
        if($("#race").hasClass("ui-disabled")){
            $("#race").removeClass('ui-disabled');
        }
        else{
            $("#race").addClass('ui-disabled');
        }
    });

    $('#editHair').click(function() {
        if($("#hairColor").hasClass("ui-disabled")){
            $("#hairColor").removeClass('ui-disabled');
        }
        else{
            $("#hairColor").addClass('ui-disabled');
        }
    });

    $('#editInter').click(function() {
        if($("#inter").hasClass("ui-disabled")){
            $("#inter").removeClass('ui-disabled');
        }
        else{
            $("#inter").addClass('ui-disabled');
        }
    });

    $('#editSSN').click(function() {
        if($("#ssn").hasClass("ui-disabled")){
            $("#ssn").removeClass('ui-disabled');
        }
        else{
            $("#ssn").addClass('ui-disabled');
        }
    });

    $('#editLanguage').click(function() {
        if($("#language").hasClass("ui-disabled")){
            $("#language").removeClass('ui-disabled');
        }
        else{
            $("#language").addClass('ui-disabled');
        }
    });

    $('#editPy').click(function() {
        if($("#py").hasClass("ui-disabled")){
            $("#py").removeClass('ui-disabled');
        }
        else{
            $("#py").addClass('ui-disabled');
        }
    });

    //Data population --------------------------------------------------------------------------------------

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