$(function(){
    
    //Declare and assign global variables
    var total = 0;
    var apple = {name:"apple", price:4,};
    var orange = {name:"orange", price:2,};
    var banana = {name:"banana", price:1,};
    var grapes = {name:"grapes", price:100,};
    


    //Event Handler
    $("#register").on('submit', function(submitEvent){

        //Prevent the form from submitting
        submitEvent.preventDefault();

        //Declare and assign local variables
        var product = $("#entry").val();
        var nofruit = "We dont have that fruit"
        if (product == "apple"){
            itemCost = apple.price;
        }
        else if (product == "orange"){
            itemCost = orange.price;
        }
        else if (product == "grapes"){
            itemCost = grapes.price;
        }
        else if (product == "banana"){
            itemCost = banana.price;
        }
        else{ itemCost = 0; document.getElementById("demo").innerHTML = nofruit;}


        var formattedCost = "";
        var formattedTotal = "";

        //Assign new values
        itemCost = parseFloat(itemCost);
        formattedCost = currencyFormat(itemCost);
        total = total + itemCost;
        formattedTotal = currencyFormat(total);

        //Update the DOM
        $("#itemRow").append('<div class="col-xs-12">' + formattedCost + "</div>");
        $("#entry").val("");
        $("#total").html(formattedTotal);
    });


});




function currencyFormat(number){ 
    currency = "$" + number.toFixed(2);
    return currency;
}
