var p1 = Math.random();
p1 = p1 * 6 + 1;
p1 = Math.floor(p1);

var p2 = Math.random();
p2 = p2 * 6 + 1;
p2 = Math.floor(p2);

if (p1>p2){
    document.querySelector("h1").textContent = "Player 1 Wins";
}else if (p1<p2){
    document.querySelector("h1").textContent = "Player 2 Wins";
}else {
    document.querySelector("h1").textContent = "Draw!";
}

var randomImaage = "./images/dice" +p1+ ".png";
var score1 = document.querySelectorAll("img") [0].setAttribute("src", randomImaage);

var randomImaage1 = "./images/dice" +p2+ ".png";
var score2 = document.querySelectorAll("img") [1].setAttribute("src", randomImaage1);