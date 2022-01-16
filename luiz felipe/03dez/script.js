const nome = document.getElementById("nome").value;
const sobrenome =  document.getElementById("sobrenome").value;
const submit = document.getElementById("submit");
const resultado = document.getElementById("resultado");

submit.addEventListener('click', addNome);

function addNome(event, nome, sobrenome) {
    event.preventDefault();
    const nomeCompleto = nome.value + sobrenome.value;
    resultado.Value = nomeCompleto
    console.log ('Botão foi clicado')
}


