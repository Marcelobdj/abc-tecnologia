'use strict'

const selectVagas = document.querySelector('#vaga');

/* 
AJAX
TÉCNICA DE COMUNICAÇÃO E TRANSMISSÃO DE DADOS
*/

// etapa 1: acessando a URL da API que queremos consultar
fetch("http://localhost:3000/vagas")

// etapa 2: ... e então (then) capture a resposta da API no formato json
.then(resposta => resposta.json())

// etapa 3: ... e entãoi capture os DADOS da resposta e faça o que quiser com eles
.then(dados => {

    // definindo option vazio
    selectVagas.innerHTML = '<option></option>'

    for(let vaga of dados){
        let opcao = document.createElement('option');
        opcao.value = vaga.id;
        opcao.textContent = vaga.titulo;
        selectVagas.appendChild(opcao);
    }
});