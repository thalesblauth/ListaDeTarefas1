/*Crie um programa que classifica a idade de uma pessoa em categorias 
(criança, adolescente, adulto, idoso) com base no valor fornecido, 
utilizando uma estrutura de controle if-else.
*/

// Pré-requisitos
// Antes de prosseguir, garanta que você possui o Node.js instalado em sua máquina.
// Instale as Dependências do Projeto: Dentro da pasta tarefas-prati-codifica/, execute o comando abaixo. Ele lerá o arquivo package.json e instalará as bibliotecas necessárias (como prompt-sync) na subpasta node_modules/:
// npm install

const prompt = require('prompt-sync')();

const idadeTexto = prompt("Digite a idade da pessoa: ");
const idade = parseInt(idadeTexto);

if (isNaN(idade) || idade < 0) {
    console.log("Erro: Por favor, digite uma idade válida (número inteiro não negativo).");
} else {
    let categoria;
    
    if (idade <= 12) {
        categoria = "Criança";
    } else if (idade <= 17) {
        categoria = "Adolescente";
    } else if (idade <= 59) {
        categoria = "Adulto";
    } else {
        categoria = "Idoso";
    }

    console.log(`\nCom ${idade} anos, a pessoa é classificada como: ${categoria}.`);
}