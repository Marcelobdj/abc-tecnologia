'use strict'

// USANDO JQUERY PARA ACESSAR O DOM
// const titulo = $('h1');
// titulo.css('color', 'darkblue');
// titulo.text('Relação de Candidatos');

const botao = $('#carregar');
const lista = $('#lista')

botao.on('click', function(){
    // TECNICA AJAX PARA ACESSO DE API
    $.ajax({
        url: 'http://localhost:3000/candidatos',
        dataType: 'json',
        success: function(resposta){
            // iniciando a lista sempre vazia
            lista.html('')
            // LOOP
            /* Para cada (each) resposta obtida da API,
            extraia (através de uma função) o índice
            e o conteúdo. */
            $.each(resposta, function(indice, conteudo){
                lista.append(
                    `<li class='list-group-item'>
                    ${conteudo.nome} - ${conteudo.vaga} - ${conteudo.email}
                    </li>`
                ).hide().slideDown();
            });
        }
    });
});
