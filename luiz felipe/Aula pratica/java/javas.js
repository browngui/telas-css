/*Para coverter entradas de texto em Valores númericos, utilizamos
o comando:
*ParseInt > COnversão para numeros inteiros
ParseFLoat > Conversão para numeros com casas decimais
*/
let Salario = parseFloat(prompt('Informe o seu salario:'));
let bonus   = parseFloat(prompt('Informe o seu bonus:'));

let SalarioFinal = Salario + bonus

alert(SalarioFinal);
