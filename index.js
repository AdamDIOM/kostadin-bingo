//const { element } = require("prop-types");

async function newCard(){
    clearCookies();
    clearFill();
    var phrases = [];
    var text;
    /*fetch('phrases.txt')
    .then(response => response.text())
    .then(text => {
        console.log(text);
        textstr = text;
    } );*/
    const response = await fetch('phrases.txt')
    .then(response => response.text())
    text = response;
    console.log("test" + text);
    phrases = text.split(/\n/)
    /*for(phrase in phrases){
        console.log(phrase + ": " +phrases[phrase]);
    }*/

    var randomPhrases = [];
    for(i = 0; i < 9; i++){
        //console.log("length " + phrases.length);
        random = Math.floor(Math.random() * phrases.length);
        randomPhrases.push(phrases[random]);
        //console.log(phrases[random]);
        phrases.splice(random,1);
        //console.log(random);
        //console.log(i);
    }

    for(phrase in randomPhrases){
        console.log(randomPhrases[phrase]);
    }

    console.log(randomPhrases);

    fillCard(randomPhrases);
    
    //document.cookie = `7=potato`
    console.log(document.cookie);
    //console.log("new card requested");
};

function fillCard(randomPhrases){
    for(i = 0; i < 9; i++){
        cell = document.getElementById(i);
        cell.innerHTML = randomPhrases[i];
        document.cookie = `${i}=${randomPhrases[i]};`
    }
}

function clearCookies(){
    for(i = 0; i < 16; i++){
        document.cookie = `${i}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    }
    console.log(document.cookie);
    console.log("COOKIES CLEARED");
}

function checkCookies() {
    var text = "";
  
    if (navigator.cookieEnabled == true) {
      console.log("Cookies are enabled.");
      console.log(document.cookie);
      console.log("hi");
      cookieArray = document.cookie.split(';');

      if(cookieArray.length < 16) {
        newCard()
      }  
      

      if(cookieArray[0] == "0") {
        cookieArray.shift()
      } 

      randomPhrases = [];

      for(s in cookieArray){
        console.log(cookieArray[s]);
        console.log(cookieArray[s].split('=')[0]);
        console.log(cookieArray[s].split('=')[1]);
        for(i = 0; i < 16; i++){
            if(cookieArray[s].split('=')[0] == i){
                randomPhrases.push(cookieArray[s].split('=')[1])
            }
        }
        //randomPhrases[cookieArray[s].split('=')[0]] = cookieArray[s].split('=')[1];
      }
    console.log(randomPhrases);

      fillCard(randomPhrases)
      
    } else {
       console.log("Cookies are not enabled.");
       newCard();
    }
  }

function flipFill(id){
    console.log("click");
    theElement = document.getElementById(id);

    if(theElement.style.background == "pink"){
        theElement.style.background = "antiquewhite";
    }
    else{
        theElement.style.background = "pink";
    }


}

function clearFill(){
    for(i = 0; i < 9; i++){
        document.getElementById(i).style.background = "antiquewhite";
    }
}