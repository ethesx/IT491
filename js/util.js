var Utils = {

    toggleInset : function(selector){
        $(selector + ' input[type=text]').parent().toggleClass('ui-input-text ui-shadow-inset');
    },

    toggleInputText : function(selector){
        $(selector + ' input[type=text]').toggleClass('ui-disabled transparent');
    },

};