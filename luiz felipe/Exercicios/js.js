/* 1 -
Receber um valor com o seu nome e apresentar a seguinte mensagem na tela: “Bem vindo ao sistema, Fulano.”
*/
// const nome = prompt('Informe o seu nome:');
// alert(`Bem vindo ao sistema, ${nome}!`);
/* 2 -
Declarar uma variável com o seu nome e a sua idade e apresentar na tela a frase: “Fulano você tem x anos”.
*/
// const nome = prompt('Informe o seu nome:');
// const idade = prompt('Informe a sua idade:');
// alert(`${nome} você tem ${idade} anos.`);
/* 3 - 
Crie duas variáveis que armazenem a população total do Brasil e da China, compare ambas e informe quem tem maior população.
*/
// const brasil = parseInt(prompt('Informe a população do Brasil:'));
// const china = parseInt(prompt('Informe a população da China:'));
// if(china > brasil) {
//   alert('A população da China é maior.');
// } else if(china < brasil) {
//   alert('A população do Brasil é maior.');
// } else {
//   alert('Os países possuem a mesma população');
// }
/* 4 - 
Utilizando if/else, crie uma variável para receber um valor e definir se ela é par ou impar.
*/
// const numero = parseInt(prompt('Informe um valor numerico:'));
// if(numero % 2 == 0) {
//   alert('O número informado é PAR');
// } else {
//   alert('O número informado é IMPAR');
// }
/* 5 - 
Crie um algoritmo que calcule o valor de desconto(%) do salario de uma pessoa e exiba qual será o seu salario apos o desconto.
*/
// const salario = prompt('Informe o seu salario:');
// const desconto = prompt('Infoeme o valor de desconto(%):');
// const salarioFinal = salario - (desconto / 100) * salario;
// alert(`Seu salario pós desconto foi de ${salarioFinal}`);
/* 6 - 
Crie um algoritmo para receber uma temperatura em Celsius e converte-la para Fahrenheit. 
A formula de conversão é: (C * 9/5) + 32.
*/
// const celsius = prompt('Informe a temperatura em Celsius:');
// const fahrenheit = (celsius * 9/5) + 32;
// alert(`${celsius}°c equivalem a ${fahrenheit}°f`);
/* 7 -
Crie um algoritmo que receba 3 valor, verifique e informe qual o maior valor.
*/
// const v1 = prompt('Informe o primeiro valor: ');
// const v2 = prompt('Informe o segundo valor: ');
// const v3 = prompt('Informe o terceiro valor: ');
// if(v1 > v2 && v1 > v3) {
//   alert('O primeiro número informado foi o maior');
// } else if(v2 > v1 && v2 > v3) {
//   alert('O segundo número informado foi o maior');
// } else if(v3 > v1 && v3 > v2) {
//   alert('O terceiro numero foi o maior');
// } else {
//   alert('Existe mais de um numero maior');
// }
// switch (true) {
//   case (v1 > v2 && v1 > v3):
//     alert('O primeiro número informado foi o maior');
//     break;
//   case (v2 > v1 && v2 > v3):
//     alert('O segundo número informado foi o maior');
//     break;
//   case (v3 > v1 && v3 > v2):
//     alert('O terceiro numero foi o maior');
//     break
//   default:
//     alert('Existe mais de um numero maior');
//     break;
// }
/* 8 -
  Com base na idade e no ano atual, informe qual é o valor do ano de nascimento de uma pessoa.
*/
// const idade = prompt('Informe a sua idade:');
// const anoAtual = prompt('Informe o ano atual:');
// const anoNascimento = anoAtual - idade;
// alert(`Você nasceu no ano de ${anoNascimento}`);
/* 9 -
Crie um algoritmo para receber as informações de peso e altura de uma pessoa, calcular o IMC e informar qual a situação dela.  Formula: Peso ÷ (altura x altura)
< ~ 16,9 -> Muito abaixo do peso
17 ~ 18,9 -> Abaixo do peso
19 ~ 26,9 -> Normal
27 ~ 31,9 -> Acima do peso
32 ~    >   -> Obesidade
*/
const altura = prompt('Informe a sua altura:');
const peso = prompt('Informe o seu peso:');
const imc = peso / (altura * altura);