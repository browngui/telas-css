let i = 1;
for(; i <= 4; i++){ //
    console.log(`testando-`)
} /* Se criar uma variavel dentro da nomenclatura "for"
não é possivel de se usar a variavel "i" fora do "FOR"
em outra area do código*/

/* A ESTRUTURA DO COMANDO WHILE PERMITE COLOCAR O CONTADOR, OU INCREMENTADOR
FORA DOS PARENTESES E ELA É OBRIGATORIA A FAZER ESSA ESTRUTURA FORA.
DA PARA FAZER O MESMO NO "FOR" DE MANEIRA OPCIONAL, COM 
UMA RESSALVA PARA QUE DENTRO DO PARENTESES DEVE SE POR UM PONTO E VIRGULA DEPOIS 
DO VALOR PARA NÃO DAR ERRO.
*/ 



//COMANDO WHILE
let l = 1
while(l <= 5){
    console.log(`======== PRIMEIRO LOOP ===========`);

for(let y = 1; y <= 10; y++){
    console.log(`======== SEGUNDO LOOP ============`);
}
l++;
}



// DO-WHILE
let resposta =  2
do{
    let resposta = prompt ("Deseja continuar 1 = SIM  | 2 = NÃO");
} while (resposta == 1);

//REVER AULA E PROCURAR VÍDEO AULA EXPLICATIVA PARA APRENDER MAIS


//PESQUISA SOBRE ARREI E FUNÇÕES