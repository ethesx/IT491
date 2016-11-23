var Utils = {

    toggleInset : function(selector){
        $(selector + ' input[type=text]').parent().toggleClass('ui-input-text ui-shadow-inset');
    },

    toggleInputText : function(selector){
        $(selector + ' input[type=text]').toggleClass('ui-disabled transparent');
    },

    /*Sets the response object's values

     Consumes two child objects, one to set the base object which the children properties can be found, and the list of
     properties to update
     @param {object} event.data.obj - Response object's parent object which properties for update are contained
     @param {array} event.data.propsArray - The child properties within object to update
    */
    setResponseValue : function (event){

        var target = event.target;
        var obj = event.data.obj;
        var props = event.data.propsArray;

        for (i in props){
            var itemName = props[i].substr(1, props[i].length);
            var output = "obj." + itemName.charAt(0).toUpperCase() + itemName.slice(1) + "= target.value";
            if(itemName === target.id){
                eval(output);
                break;
            }
        }
    }
};