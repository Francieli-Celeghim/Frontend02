let inTitulo = document.querySelector('#titulo');
let inDescricao = document.querySelector('#descricao');
let inUrlImagem = document.querySelector('#urldaimagem');

let recebetitulo = document.querySelector('#recebetitulo');
let recebedescricao = document.querySelector('#recebedescricao');
let recebeimagem = document.querySelector('#recebeimagem');

inTitulo.addEventListener('keyup', processaDados);
inDescricao.addEventListener('keyup', processaDados);
inUrlImagem.addEventListener('blur', processaDados);

function processaDados (event) {
    console.log(recebetitulo);
    console.log(inTitulo.value);

    recebetitulo.innerHTML = inTitulo.value;
    recebedescricao.innerHTML = inDescricao.value;
    recebeimagem.setAttribute('src', inUrlImagem.value);
    
    
}
