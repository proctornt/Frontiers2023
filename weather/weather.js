let nwsGetGrid = new NWSGetGrid();
let nwsGetForecast = new NWSGetForecast();
function button() {
    //alert("Getting the weather!");

    nwsGetGrid.request(getWeather);
}

function getWeather(){

    nwsGetForecast.gridId=nwsGetGrid.getGridId();
    nwsGetForecast.gridX=nwsGetGrid.getGridX();

    nwsGetForecast.gridY=nwsGetGrid.getGridY();
    nwsGetForecast.request(displayweather);

    

}

function displayweather(){
    const cond =  document.getElementById("condition");
    const img = document.getElementById("weatherimage")
    
    let str = nwsGetForecast.getCurrentCondition();
    cond.innerHTML = str
    str=str.split("then")[0].toLowerCase()
    if(str.includes("sunny")){
        img.src = "./snow.png";
    


    }else if(str.includes("cloudy")){
        img.src = "./rain.png";

    }else if(str.includes("snow")){
        img.src = "./rain.png";

    }else if(str.includes("snow")){
        img.src = "./rain.png";

    }




    let highLow= nwsGetForecast.getHighLow();

    cond.innerHTML+=`<br>${highLow.high}&deg;F / ${highLow.low}&deg;F `;
    if (highLow.high>80){

        cond.style.backgroundColor="red";
    }
    if (highLow.low<40){
        cond.style.backgroundColor="blue";

    }
    

     
   let percip = nwsGetForecast.getPrecipitation();
   cond.innerHTML += `<br>${percip.chance}% chance of rain`;
   if (percip.chance>20){
        cond.style.backgroundColor="grey";
   }
   
}
