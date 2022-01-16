//getElementById();

//seleciona pelo ID
const animaisSection = document.getElementById(`animais`);
const contatoSection = document.getElementById(`contato`);

//retorna null caso não exista
const naoExiste = document.getElementById(`teste`);

console.log(animaisSection);
console.log(contatoSection);
console.log(naoExiste);

const gridSection = document.getElementsByClassName(`grid-section`);
const contato2 = document.getElementsByClassName(`grid-section contato`);
const ul = document.getElementsByTagName(`ul`);

console.log(gridSection[0]);
console.log(contato2);
console.log(ul);

//selecionador querySelector() - Retorna o primeiro elemento que combina com o seu seletor CSS
const animais = document.querySelector(".animais");
const contato3 = document.querySelector("#contato");
const ultimoItem = document.querySelector(".animais-lista li.last-child"); //vai entrar na lista e pegar o ultimo elemento presente
const linkCSS = document.querySelector(`[href^="https://"]`);
const primeiroUL = document.querySelector(`ul`)

console.log(`=================================================`)

let element = document.querySelector(`h1`);
element.textContent = `Animals`

let title = document.querySelector(`h1`);
title.style.color = `#00000`;

let fundo = document.body;
fundo.style.backgroundColor = `white` 


let item1 = document.querySelector(`h1`);
let item2 = document.querySelector(`h2`);

item1.classList.add(`blue`)