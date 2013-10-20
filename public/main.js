/*jslint browser: true, couch: true, closure: true */

var gameModule = (function () {

    "use strict";

    var counter = 0,
        ballX,
        ballY,
        ballR,
        scores,
        colors = ['#ff0000','#0000ff','yellow'],
        length = colors.lenght;

function gameOver() {
    console.log("Final: " + scores);
}

function startGame(){
    var canvas = document.getElementById('game'),
        ctx = canvas.getContext("2d");

    ballX = Math.floor(Math.random() * 300); //0..300
    ballY = Math.floor(Math.random() * 500);
    ballR = Math.floor(Math.random() * 100);
     
    canvas.width = 640;
    canvas.height = 480;

    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(ballX,ballY,ballR,0,Math.PI * 2,true);
    ctx.fill();

    if (counter >= 10) {    
        gameOver();
    }else{
       setTimeout(startGame, 2000);
       counter = counter + 1;
   }
}

function touchEvent(evt) {
    var x = evt.clientX,
        y = evt.clientY;
        tmp = (ballX - x) * (ballX - x) + (ballY - y) * (ballY - y);

    console.log("Clicked: " + x + " , " + y);

        if (tmp < ballR * ballR) {
            scores = scores + (100 - ballR);
            console.log("Hit ! Your scores: " + scores);
  }
}

function start() {
    scores = 0;

    document.getElementById("main").addEventListener("click",touchEvent,false);
    startGame();
}

return{
	start:start
 };

}(document));

gameModule.start();