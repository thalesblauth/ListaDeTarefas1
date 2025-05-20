/*
Escreva um programa que recebe um número inteiro e verifica se 
ele é par ou ímpar utilizando uma estrutura de controle if.
*/

// Pré-requisitos
// Antes de prosseguir, garanta que você possui o Node.js instalado em sua máquina.
// Instale as Dependências do Projeto: Dentro da pasta tarefas-prati-codifica/, execute o comando abaixo. Ele lerá o arquivo package.json e instalará as bibliotecas necessárias (como prompt-sync) na subpasta node_modules/:
// npm install

const prompt = require('prompt-sync')();

const numeroTexto = prompt("Digite um número inteiro: ");
const numero = parseInt(numeroTexto);

if (isNaN(numero)) {
    console.log("Erro: O valor digitado não é um número inteiro válido.");
} else {
    const resto = numero % 2;
    
    if (resto === 0) {
        console.log(`O número ${numero} é PAR.`);
    } else {
        console.log(`O número ${numero} é ÍMPAR.`);
    }
}
