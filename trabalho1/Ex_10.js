/*
Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

// Pré-requisitos
// Antes de prosseguir, garanta que você possui o Node.js instalado em sua máquina.
// Instale as Dependências do Projeto: Dentro da pasta tarefas-prati-codifica/, execute o comando abaixo. Ele lerá o arquivo package.json e instalará as bibliotecas necessárias (como prompt-sync) na subpasta node_modules/:
// npm install

const prompt = require('prompt-sync')();

const numeroTexto = prompt("Digite um número inteiro: ");
const numero = parseInt(numeroTexto);

if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Entrada inválida. Por favor, digite um número inteiro.");
} else {
    console.log(`\nExibindo o número ${numero} dez vezes:`);

    for (let i = 0; i < 10; i++) {
        console.log(numero);
    }
}
