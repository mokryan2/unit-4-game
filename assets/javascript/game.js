$(document).ready(function() {

    var randomNum = Math.floor(Math.random() * 101) + 19;
    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;
    var counter = 0;
    var wins = 0;
    var losses = 0;

    function newRandom(){
        randomNum = Math.floor(Math.random() * 101) + 19;
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
        counter = 0;
        $("#totalScore").text("Current Score: 0");
        $("#targetNum").text("Target Number: " + randomNum);
        
    }

    $("#targetNum").text("Target Number: " + randomNum);

    $("#crystal1").on("click", function(){
        counter += crystal1;
        $("#totalScore").text("Current Score: " + counter);
        if (counter === randomNum){
            wins++;
            $("#wins").text("Wins: " + wins);
            newRandom();
        }
        else if(counter > randomNum){
            losses++;
            $("#losses").text("Losses: "+ losses)
            newRandom();
        }
    });

    $("#crystal2").on("click", function(){
        counter += crystal2;
        $("#totalScore").text("Current Score: " + counter);
        if (counter === randomNum){
            wins++;
            $("#wins").text("Wins: " + wins);
            newRandom();
        }
        else if(counter > randomNum){
            losses++;
            $("#losses").text("Losses: "+ losses)
            newRandom();
        }
    });

    $("#crystal3").on("click", function(){
        counter += crystal3;
        $("#totalScore").text("Current Score: " + counter);
        if (counter === randomNum){
            wins++;
            $("#wins").text("Wins: " + wins);
            newRandom();
        }
        else if(counter > randomNum){
            losses++;
            $("#losses").text("Losses: "+ losses)
            newRandom();
        }
    });

    $("#crystal4").on("click", function(){
        counter += crystal4;
        $("#totalScore").text("Current Score: " + counter);
        if (counter === randomNum){
            wins++;
            $("#wins").text("Wins: " + wins);
            newRandom();
        }
        else if(counter > randomNum){
            losses++;
            $("#losses").text("Losses: "+ losses)
            newRandom();
        }
    });


});
 

// Need to establish/display random number goal of 19-120 ()
// Need to attach random numbers to each crytal of 1-12()
    // refer to crystal.js in class-examples for simpler notation
// Clicking on the crystal adds the values up to random number goal()
// If goal is reached, win goes up by one; if goal is surpassed, lose goes up by one and game resets()
// Win/lose/score parameters displayed/updated on screen()