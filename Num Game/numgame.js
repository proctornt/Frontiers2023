const guess = document.getElementById("guess");
const report = document.getElementById("report");
const body = document.body;
let start = Date.now(); // remember start time

const MAXNUM = 100;
let secret;

function loadGame() {
    guess.max = MAXNUM;
    secret = Math.floor(Math.random() * (MAXNUM+1));
    // report.innerHTML = secret;
}

function makeGuess() {
    let myGuess =  guess.value;
    if (myGuess<secret){
        report.innerHTML +=`<br/>{${myGuess}] too small`
        // console.log(`myGuess=${myGuess}`);
        
        
    } else if (myGuess > secret){
        report.innerHTML +=`<br/>{${myGuess}] too large`
        
    }else {
        report.innerHTML +=`<br/>{${myGuess}] is correct!`
        // body.style.backgroundColor=`#ddddff`
       
        
        
    }
    
}