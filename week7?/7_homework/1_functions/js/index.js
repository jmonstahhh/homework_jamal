$(function(){

    $('#callFunction').on('click', function(){

        //call a function
        sayHello("Jamal");

        //can you pass sayHello a name and have it output "Hello " + name?

        //can you create a function sayGoodbye()?
        sayGoodbye("Jamal");

        //can you create a function say() that takes TWO parameters: name and greeting
        // where you can pass a name and a greeting and it will say like "Hello Jonathan"
        say("Jamal", "Good afternoon");
    });

    //This is a function definition or declaration
    //It begins with the word "function"
    //This is a named function
    function sayHello(name)
    {
        if(name)
        {
            $('#output').append("Hello " + name + "\n");
        }
    }

    function sayGoodbye(name){
        $('#output').append("Goodbye " + name + "\n");
        console.log("Goodbye " + name);
    }

    function say(name, greeting){
        $('#output').append(greeting + " " + name + "\n");
        console.log(greeting + " " + name);
    }

    
});
