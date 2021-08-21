var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Selamat Pemain 1 Menang!"
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Imbang!";
}
else{
    document.querySelector("h1").innerHTML="Selamat Pemain 2 Menang!"
}