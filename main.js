var gameModule = (function() {

var timeoutVar,
    counter = 0

function touchEvent(evt){
    var x = evt.clientX;
        y = evt.clientY;

        console.log("Clicked:"+ x +"," + y);
}

function start(){
    document.getElementById("main").addEventListener("click",touchEvent,false);
    startGame();
}


function startGame(){
var canvas = document.getElementById('game'),
    ctx = canvas.getContext("2d"),
    ballX = Math.floor(Math.random() * 300), //0..300
    ballY = Math.floor(Math.random() * 500),
    ballR = Math.floor(Math.random() * 100);
     
canvas.width = 480;
canvas.height = 320;

ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(ballX,ballY,ballR,0,Math.PI * 2,true);
ctx.fill();

if(counter >= 10){	

}else{
	timeoutVar = setTimeout(start,1000);
	counter = counter + 1;

	console.log("Counter:" + counter);
  }
}

return{
	start:start
 }
}) ();

gameModule.start();