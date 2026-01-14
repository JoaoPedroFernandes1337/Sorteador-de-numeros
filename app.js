function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
    resultado.innerHTML = `<label class="texto__paragrafo">Erro! O campo "Do número" deve ser inferior ao campo "Até o número". </label>`;
    return;
  }
    
    let sorteados = [];
    let numero;

    for (let i = 0; quantidade > i; i++){
        if (quantidade > ((ate - de) + 1)){
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = `<label class="texto__paragrafo">Erro! Quantidade requerida de números sorteados é maior que as possibilidades possiveis! </label>`;
        }else {
            numero = obterNumeroAleatorio(de, ate);
            while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
            }
            sorteados.push(numero);
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
            alterarStatusBotao();
        }
    }
}
function obterNumeroAleatorio(min, max){
        return Math.floor(Math.random() * (max - min +1)) +min;
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
     
function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}