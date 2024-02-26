let nomeUsuario;

function dispararBoasVindas() {
    nomeUsuario = document.getElementById("nome");
    alert('Seja bem vindo(a) ' + nomeUsuario.innerText + "!");
}

function alterarNome() {
    nomeUsuario = document.getElementById("nome");
    const novoNome = prompt('Digite um Nome:');
    const nomeValidacao = parseInt(novoNome);
    
    if (!isNaN(nomeValidacao)){
        alterarNome();
    }else {
        nomeUsuario.innerText = novoNome;
    }
}

function alterarDescricao() {
    const desc = document.getElementById('descricao');
    const novaDesc = prompt('Digite uma Descrição:')

    desc.innerText = novaDesc;
}