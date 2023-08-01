class Paddle {
    constructor(x, y, l, w, c) {
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.l = l;
        this.w = w;
        this.c = c;
    }

    draw(ctx) {
        ctx.fillStyle = this.c;
        ctx.strokeStyle = "black";

        ctx.fillRect(this.x, this.y, this.w, this.l);
        ctx.strokeRect(this.x, this.y, this.w, this.l);


    }


    move() {
        let newY = this.y + this.vy

        if(newY<0) return;
        if(newY+this.l > boardHeight) return;


        
        this.y=newY;
    }

    moveCPU(ball) {
        // let heightdif = ball.y - (paddleR.y + paddleLength/2);
        
        // if (heightdif > 5) {
        //     paddleR.vy = paddleVelocity;
        // } else if (heightdif < 5) {
        //     paddleR.vy = -paddleVelocity;
        // } else {
        //     paddleR.vy = 0;
        // }
        // Use the properties of the ball to set a new velocity
        // Helpful pieces:
        //   Math.min() and Math.max() to limit the velocity
        //   ball.y to see where the ball is
        //   ball.vy to see where the ball is going

        let cpuVY= paddleForce
        if(paddleR.y<ball.y){

            paddleR.vy=cpuVY;
        }else if (paddleR.y>ball.y){

            paddleR.vy=-cpuVY
        }
        
        

        // Finally, call move to move the paddle normally
        this.move();
    }
}