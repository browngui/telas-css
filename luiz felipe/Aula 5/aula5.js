let nota1 = 5;
let nota2 = 8;
let nota3 = 4;
let media = (nota1 + nota2 + nota3) / 3

if(media < 5) {
    console.log('o aluno foi reprovado');
} else if(media > 7) {
    console.log('o aluno foi aprovado')
} else {
    console.log('O aluno esta em recuperação')
}


/* 
operadores logicos: 
E -> AND -> &&
OU -> OR -> ||
*/ 

let N1 = 7;
let N2 = 2;
let N3 = 10;
let mid = (N1 + N2 + N3) / 3

if(media < 5) {
    console.log('o aluno foi reprovado');
} else if((mid >= 5) && (mid <= 7)) {
    console.log('o aluno esta em recuperação') 
} else {
    console.log('O aluno esta aprovado')
}
/*  teclado de atalho: depois de selecionar uma letra, palavra ou numero
a ação CTRL + D seleciona todos as variaveis. Basta clicar mais de uma 
vez para selecionar 
Uma forma de criar comentario rápido é usar CTRL + ;
*/

let m = 4

if((m > 5) && (m <7) || (m == 2)) {
    console.log('sentença verdadeira');
}

// Exercicio 2

let saldo = 1000;
let saque = 500;

if(saldo >= saque) {
    console.log('Valor sacado com sucesso');
} else {
    console.log('Valor insuficiente');
}