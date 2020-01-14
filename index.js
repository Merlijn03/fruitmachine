// Algemeen
var fruit = ["&#127822;","&#127824;","&#127821;","&#127827;","&#127815;","&#127826;"];
var button = document.getElementById("button");
var gedraaid1 = document.getElementById("gedraaid1");
var gedraaid2 = document.getElementById("gedraaid2");
var gedraaid_num = 0;
var gewonnen = document.getElementById("gewonnen");
var gewonnen_num = 0;

// fruitemojis
var fruit1 = document.getElementById("fruit1");
var fruit2 = document.getElementById("fruit2");
var fruit3 = document.getElementById("fruit3");

button.addEventListener('click', ()=>{
  fruit1.innerHTML = fruit[Math.floor(Math.random() * 5)];
  fruit2.innerHTML = fruit[Math.floor(Math.random() * 5)];
  fruit3.innerHTML = fruit[Math.floor(Math.random() * 5)];
  gedraaid2.innerHTML = ++gedraaid_num;
  if (gedraaid_num==10) {
    gedraaid1.innerHTML = "Maximum aantal keer gespeeld, ";
    gedraaid2.innerHTML = "game over!";
    gedraaid_num = 0;
    gewonnen_num = 0;
    gewonnen.innerHTML = 0;
  } else if (gedraaid_num < 10) {
    gedraaid1.innerHTML = "Aantal keer gedraaid: ";
  }
  if (fruit1.innerHTML == fruit2.innerHTML && fruit1.innerHTML == fruit3.innerHTML && fruit2.innerHTML == fruit3.innerHTML) {
    gewonnen.innerHTML = ++gewonnen_num;
  }
})
