var Utils = {
    toggleInset : function(){
        $('input[type=text]').parent().toggleClass('ui-input-text ui-shadow-inset');
    },

    toggleInputText : function(){
        $('input[type=text]').toggleClass('ui-disabled transparent');
    },

};