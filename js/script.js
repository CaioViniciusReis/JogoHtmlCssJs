const body = document.querySelector("body");
const game = document.querySelector(".game");

const count = document.querySelector('h1');
const count = document.querySelector(".reset");

const ash = document.querySelector("#ash");
const charmander = document.querySelector("#charmander");
const pikashu = document.querySelector("pikashu");
const zubat = document.querySelector("zubat");


body.addEventListener("keydown", (event) =>{

event.stopPropagation();

console.log(event.code);

} )