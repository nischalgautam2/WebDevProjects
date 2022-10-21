

var lovePercentage = Math.floor(Math.random()*100)+1;
var heading = document.getElementById("heading");
var button = document.getElementById("check-button");
var inputs = document.querySelectorAll('input');

button.addEventListener('click',function(){
    var firstName = inputs[0].value.toUpperCase();
    var secondName = inputs[1].value.toUpperCase();
    if(!(firstName=='' || secondName=='')){
        while(lovePercentage < 80){
            lovePercentage = Math.floor(Math.random()*100)+1;
        }
        var messege = secondName + " and " + firstName + " are "+ lovePercentage +"% compatible";
        heading.innerHTML=messege;
        lovePercentage = Math.floor(Math.random()*100)+1;

    }
    else{
        heading.innerHTML= "Enter your name first";
    }
})