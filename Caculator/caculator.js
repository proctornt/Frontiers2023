const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result= document.getElementById("result");
const piImage = document.getElementById("pi");
piImage.style.visibility = "hidden";

function addition(){

result.innerHTML=parseFloat(num1.value)+parseFloat(num2.value);
console.log(result);
console.log(parseFloat(num1.value)+parseFloat(num2.value));
}

function substraction(){

    result.innerHTML=parseFloat(num1.value)-parseFloat(num2.value);
    console.log(result);
    console.log(parseFloat(num1.value)-parseFloat(num2.value));
    }
function multiplication(){

        result.innerHTML=parseFloat(num1.value)*parseFloat(num2.value);
        console.log(result);
        console.log(parseFloat(num1.value)*parseFloat(num2.value));
        }
function Division(){
    if (num1.value === "22" && num2.value === "7") {
        piImage.style.visibility = "visible";
        setTimeout(hide, 5000);
        
    }
    result.innerHTML=parseFloat(num1.value)/parseFloat(num2.value);
            console.log(result);
            console.log(parseFloat(num1.value)/parseFloat(num2.value));
            }
    
