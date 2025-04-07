import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let symbols = ["hearts","diamonds","spades","club"];
let cardNumber = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
let upSideSymbol = document.getElementById("upSideSymbol");
let number = document.getElementById("cardNumber");
let downSideSymbol = document.getElementById("downSideSymbol");

function pickCard(Array) {
    
 let randomCard= Math.floor(Math.random(Array.length));
 return randomCard;
}

function chooseColor() {
if( randomCardSymbol === "hearts" || randomCardSymbol === "diamonds"){
  upSideSymbol.style.color = "red";
  downSideSymbol.style.color = "red";
 } 
 if(randomCardSymbol === "spades" || randomCardSymbol === "club"){
  upSideSymbol.style.color = "black";
  downSideSymbol.style.color = "black";
}
}
function chooseSuit(){
  if (randomCardSymbol === "hearts") {  
  upSideSymbol.innerHTML = "♥"
  downSideSymbol.innerHTML = "♥"    
  }
  if (randomCardSymbol === "diamonds") {  
  upSideSymbol.innerHTML = "♦"    
  downSideSymbol.innerHTML = "♦"    
  }
  if (randomCardSymbol === "spades") {  
  upSideSymbol.innerHTML = "♠"    
  downSideSymbol.innerHTML = "♠"    
  }
  if (randomCardSymbol === "club") {  
  upSideSymbol.innerHTML = "♣"    
  downSideSymbol.innerHTML = "♣"    
  }

}

function cardGenerator(){
  let randomCardNumber = pickCard(cardNumber);
  let randomCardSymbol = pickCard(symbols);
  number.innerHTML = randomCardNumber;
  upSideSymbol.innerHTML= randomCardSymbol;
  downSideSymbol.innerHTML= randomCardSymbol;
  chooseSuit(randomCardSymbol);
  chooseColor(randomCardSymbol);
  document.getElementById("cardNumber").innerHTML = randomCardNumber;


}
window.onload = function() {
cardGenerator()
}
document.getElementById("cardGenerator").addEventListener("click", cardGenerator);