const guess = document.getElementById("guess")
const report= document.getElementById("report")

const MAXNUM = 100;
let secret; 

function loadGame(){

    guess.max = MAXNUM;
    secret=math.floor(math.random()*MAXNUM);
    report.innerHTML = secret;
}

function makeGuess(){


}