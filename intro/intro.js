function clickButton(){

    console.log(`Hello World`)
   const mytext = document.getElementById("mytext")
   mytext.innerHTML = `it worked`
   mytext.className =`myclass`;

   const bgcolor =document.getElementById("bgcolor");
   
   const body = document.body;
   body.style.backgroundColor = bgcolor. value;
//    body.style.backgroundColor=`#ddddff`;
//    mytext.style.display=`none` 
   
// }

}


{/* <div id ="container">
  <div id ="animate">My animation will go here</div>
</div> */}