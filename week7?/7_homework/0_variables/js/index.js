$(function(){

    $('#showVariable').click(function(){
        var variable = $('#variable').val(); //will always be a "string"

        //can you convert it to an integer?
        parseInt(variable);

        //can you convert it to a float?
        parseFloat(parseInt(variable));
        //can you add 1 to it?
        parseFloat(parseInt(variable)) + 1;
        //can you add 10 to it?
        parseFloat(parseInt(variable)) + 1 + 10;
        //can you turn it into a string?
        String(parseFloat(parseInt(variable)) + 1 + 10);
        //can you add " is awesome" to the it?
        String(parseFloat(parseInt(variable)) + 1 + 10) + " is awesome";
        
        $('#output').text(variable);
    });

});
