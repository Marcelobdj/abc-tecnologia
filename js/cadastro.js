'use strict'

// SELECIONANDO CAMPOS DO FORM
const formulario = document.querySelector('form');
const campoNome = document.querySelector('#nome');
const CampoData = document.querySelector('#data');
const CampoTelefone = document.querySelector('#telefone');
const CampoEmail = document.querySelector('#email');
const campoVaga = document.querySelector('#vaga');

// PROGRAMAÇÃO DE EVENTO DO FORM
formulario.addEventListener('submit', function(event){
    event.preventDefault();

    // MONTANDO UM OBJETO JS COM OS VALORES VINDOS DO FORM
    let dados = {
        nome: campoNome.value,
        data: CampoData.value,
        telefone: CampoTelefone.value,
        email: CampoEmail.value,

        /* A instrução abaixo permite
        pegar o título (textContent) apenas
        da vaga que foi selecionada (selectOptions[0])
        dentro da lista de vagas (campoVaga) */
        vaga: campoVaga.selectedOptions[0].textContent
    };

    // AJAX
    // ENDPOINT DE CANDIDATOS
    // 1) Acessar/conectar à API
    fetch('http://localhost:3000/candidatos', {

        // Definimos o método de transmissão dos dados
        method: 'POST',

        // Convertemos o objeto JS em objeto JSON
        body: JSON.stringify(dados),

        // Indicamos no cabeçalho da mensagem o formato de dados
        headers: {'Content-type': 'application/json'}
    })

    // 2) RESPOSTA DA API TRANSFORMADA EM JSON
    .then(resposta => resposta.json())

    // 3) EXIBINDO MENSAGEM FINAL DO PROCESSO
    .then( () => alert("Dados cadastrados com sucesso!") );
});

