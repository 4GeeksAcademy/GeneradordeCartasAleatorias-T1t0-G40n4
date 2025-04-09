import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let symbols = ["hearts","diamonds","spades","club"];
let cardNumber = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
let upSideSymbol = document.getElementById("upSideSymbol");
let number = document.getElementById("cardNumber");
let downSideSymbol = document.getElementById("downSideSymbol");

function pickCard(Array1, Array2) {
  
  let card = [];
 card.push(Array1[Math.floor(Math.random()* Array1.length)]);
 card.push(Array2[Math.floor(Math.random()* Array2.length)]);
 return card;
}

function chooseColor(Array) {
if( Array [0] === "hearts" || Array[0] === "diamonds"){
  upSideSymbol.style.color = "red";
  downSideSymbol.style.color = "red";
  number.style.color = "red";
 } 
 if( Array[0] === "spades" || Array[0] === "club"){
  upSideSymbol.style.color = "black";
  downSideSymbol.style.color = "black";
  number.style.color = "black";
}
}
function chooseSuit(Array){
  if (Array[0] === "hearts") {  
  upSideSymbol.innerHTML = "♥"
  downSideSymbol.innerHTML = "♥"    
  }
  else if (Array[0] === "diamonds") {  
  upSideSymbol.innerHTML = "♦"    
  downSideSymbol.innerHTML = "♦"    
  }
  else if (Array[0] === "spades") {  
  upSideSymbol.innerHTML = "♠"    
  downSideSymbol.innerHTML = "♠"    
  }
  else{  
  upSideSymbol.innerHTML = "♣"    
  downSideSymbol.innerHTML = "♣"    
  }

}
function value(Array){
  number.innerHTML = Array[1];
}
function cardGenerator(){
  let card = pickCard(symbols, cardNumber);
  console.log(card);
  chooseColor(card);
  chooseSuit(card);
  value(card);
  console.log(card);
}
window.onload = function() {
cardGenerator()
}
document.getElementById("cardGenerator").addEventListener("click", cardGenerator);
