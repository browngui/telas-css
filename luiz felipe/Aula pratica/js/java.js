/*Parsefloat 
*/
let salario = parseFloat(prompt("informe seu salario"));
let desconto = parseFloat(prompt("Informe seu"));

let salariofinal = salario + bonus

alert("salario final");

//Estruturas de decisõa com Switch/case
//Vale mais a pena usar o IF Else quando se tem poucas
//expressões de verificação
//Quando se tem mais verificações para se fazer
//o Switch/Case é mais recomendado
//entre os dois o Else é mais utilizado
//porem o programador é quem escolhe.
//se colocar default ou case false, ambos funcionam


//Para converter entradas de texto em valores numericos utilizamos os seguintes comandos:
/**
 * parseInt -> Conversão para numeros inteiros
 * parseFloat -> Conversão para numeros com casas decimais
 * 
 */
// let salario = parseFloat(prompt('Por favor, informe o seu salario:'))
// let bonus = parseFloat(prompt('Por favor, informe o seu bonus:'))
// let salarioFinal = salario + bonus
// alert(salarioFinal)
//Estruturas de decisão com IF/ELSE
// let nota1 = 5;
// let nota2 = 8;
// let nota3 = 10;
// let media = (nota1 + nota2 + nota3) / 3
// if(media < 5) {
//   console.log('O aluno foi reprovado');
// } else if(media > 7) {
//   console.log('O aluno foi aprovado')
// } else {
//   console.log('O aluno esta em recuperação')
// }
//Estruturas de decisão com SWITCH/CASE
let n1 = parseInt(prompt('Informe o primeiro valor'))
// let n2 = parseInt(prompt('Informe o segundo valor'))
// switch (n1 > n2) {
//   case true:
//     alert('primeiro numero é maior')
//     break;
//   default:
//     alert('Segundo numero é maior')
//     break;
// }
// switch (true) {
//   case n1 > n2:
//     alert('O primeiro numero é maior');
//     break;
//   case n2 > n1:
//     alert('O segundo numero é maior');
//     break;
//   default:
//     alert('Os numeros sao iguais');
//     break;
// }
switch (true) {
  case n1 >= 0 && n1 <= 10:
    alert('O numero escolhido esta entre 0 e 10');
    break;
  case n1 >= 11 && n1 <= 20:
    alert('O numero escolhido esta entre 11 e 20');
    break;
  case n1 >= 21 && n1 <= 30:
      alert('O numero escolhido esta entre 21 e 30');
      break;
  case n1 >= 31 && n1 <= 40:
    alert('O numero escolhido esta entre 31 e 40');
    break;
  default:
    alert('Numero fora dos intervalos esperados');
    break;
}