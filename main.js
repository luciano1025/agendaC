"use strict"

function validarNome(input){
        var simbolos = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/i;// Expressão regular para aceitar apenas letras

        if (!simbolos.test(input.value)) {
                alert("Por favor insira apenas letras no campo Nome");
                input.value = "";
                return;
        }

        
        if (/\d/.test(input.value)) 
        input.value = input.value.replace(/\d/g, '');

}


function removeCaracteresNaoAlfabeticos(str){
        var index = str.search(/[A-Za-zÀ-ÖØ-öø-ÿ\s]*(?=[^A-Za-zÀ-ÖØ-öø-ÿ\s]*$)/);
        return index >= 0 ? str.substring(0, index + 1) :"";
} //Função referente ao campo nome input//

function adicionarNaTabela() {

        var nomes=document.getElementById("nome");
        var celular=document.getElementById("numero");

        var nome=nomes.value.trim();
        var numero=celular.value.trim();

        



if (nome !=="" && numero !=="") {

        adicionarLinha(nome, numero);

//limpa os campos do formulário depois que a função adiciona na tabela//
        nomes.value='';
        celular.value='';
}

else { 
        alert("Por favor, preencha os campos que você deixou vazio por ser preguiçoso!");
} //F



}

function adicionarLinha(nome, numero) {


        const tabelaContato=document.getElementById("tabelas");
        const tbody=tabelaContato.getElementsByTagName("tbody")[0];

        var linha = tbody.insertRow();
        var cell1 = linha.insertCell(0);
        var cell2 = linha.insertCell(1);
        var cellBotao = linha.insertCell(2);


        cell1.textContent = nome;
        cell2.textContent = numero;

        linha.classList.add("sublinhada");



if (nome.trim() !=="" && numero.trim() !=="") {
        var botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.type = "button";
        botaoExcluir.onclick = function() {
                excluirLinha(this);
        }; //Adiciona o botão Excluir apenas se o formulário não estiver em branco//
        

        cellBotao.appendChild(botaoExcluir);
        };

}


function excluirLinha(botao) {
        var linha = botao.parentNode.parentNode;
        linha.parentNode.removeChild(linha);

};

