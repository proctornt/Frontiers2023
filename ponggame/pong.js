const gameboard = document.getElementById("gameboard");
const cpucheck = document.getElementById("cpucheck");
const ctx = gameboard.getContext("2d");

let boardWidth = 500;
let boardHeight = 500;
let paddleSpin = 7; // >= 0.0
let paddleForce = 1.2; // >= 1.0
let paddleWidth = 25;
let paddleLengthL = 100;
let paddleLengthR = 100;
let ballRadius = 12.5;



let ball;
let paddleL;
let paddleR;
let scoreL = 0;
let scoreR = 0;

function resetGame() {
    clearInterval(intervalID); // clear the clock
    gameboard.height = boardHeight;
    gameboard.width = boardWidth;
    scoreL = 0;
    scoreR = 0;
    updateScore();

    nextTick(); // start running the clock

    if (Math.random() * 100 >= 50 ) {
        boardWidth=1000;
        gameboard.width = boardWidth;

        resetBall();
        resetPaddles();
        draw()
    }else{
        boardWidth=500;
        gameboard.width = boardWidth;
        resetBall();
        resetPaddles();
        draw();


    }

    
}

function resetPaddles() {
    paddleL=new Paddle(0,boardHeight/2 - paddleLengthL/2,paddleLengthL,paddleWidth, "red");
    paddleR=new Paddle(boardWidth-paddleWidth, boardHeight/2 - paddleLengthR/2,paddleLengthR,paddleWidth, "blue");
    
}

function resetBall() {
    ball = new Ball(boardWidth/2, boardHeight/2, 1, -1, ballRadius, "green")
}

function clearBoard() {
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, boardWidth, boardHeight);
}

function draw() {
    clearBoard();
    
    ball.draw(ctx);
    paddleL.draw(ctx);
    paddleR.draw(ctx);
}

let intervalID;

function nextTick() {
    intervalID = setTimeout(
        () => {
            paddleL.move();
            if (cpucheck.checked) {
                paddleR.moveCPU(ball);
            } else {
                paddleR.move();
            }

            ball.bounceWall();
            if (ball.bouncePaddleL(paddleL)) score("right");
            if (ball.bouncePaddleR(paddleR)) score("left");
            
            ball.move();

            draw();
            nextTick();
        }, 10
    );
}

function score(player) {
    if (player == "left") scoreL++;
    if (player == "right") scoreR++;
    
    

        updateScore();

        resetBall();
        var audio = document.getElementById("dino");
        audio.play();
}

function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `${scoreL} : ${scoreR}`;
    if (scoreL - scoreR >= 5) {
        paddleLengthR = 150;
        resetPaddles();
    } else if (scoreR - scoreL >= 5){
        paddleLengthL = 150;
        resetPaddles();
    } else {
        paddleLengthL = 100;
        paddleLengthR = 100;
        resetPaddles();
    }
}