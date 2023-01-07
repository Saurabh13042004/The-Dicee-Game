var randomnNumber1=Math.floor(Math.random()*6)+1;
var randomnNumber2=Math.floor(Math.random()*6)+1;
var randomnDiceImage1 = "dice"+randomnNumber1+".png";
var randomnDiceImage2 = "dice"+randomnNumber2+".png";
var randomnImageSource1 = "images/"+randomnDiceImage1;
var randomnImageSource2 = "images/"+randomnDiceImage2;
document.querySelectorAll("img")[0].setAttribute("src",randomnImageSource1);
document.querySelectorAll("img")[1].setAttribute("src",randomnImageSource2);
if(randomnNumber1>randomnNumber2){
    document.querySelector("h1").innerText="Player 1 Wins";
}
else if(randomnNumber1<randomnNumber2){
    document.querySelector("h1").innerText="Player 2 Wins";
}
else if(randomnNumber1===randomnNumber2){
    document.querySelector("h1").innerText = "Its a Draw";
}
