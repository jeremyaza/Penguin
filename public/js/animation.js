//penguin
const peguin = document.querySelector('.penguin');
const rightHand = document.querySelector('.right-hand');
const sparkle = document.querySelectorAll('.sparkle');
const cloud = document.querySelector('.cloud');
var count = 0;

//Click me
peguin.addEventListener('click',()=>{
    helloPenguin();
    
    //Restart the class
    if(count%2 == 0){
        rightHand.setAttribute("class","right-hand");
        
        cloud.setAttribute("class","cloud");

        for (var i=0; i < sparkle.length; i++) {
            sparkle[i].setAttribute("class","sparkle");
        }
    }
});

//Function hello penguin
function helloPenguin(){
    //Move right hand
    rightHand.setAttribute("class","hello");

    //Close your eyes
    for (var i=0; i < sparkle.length; i++) {
        sparkle[i].setAttribute("class","close-eyes");
    }

    //Message 
    cloud.setAttribute("class","click-me");

    //Count the clicks
    count += 1;
    console.log("Hello");    
}
