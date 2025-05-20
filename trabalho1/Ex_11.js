/*
Escreva um programa que solicita ao usuário 5 números 
e calcula a soma total utilizando um loop for.
*/

// Pré-requisitos
// Antes de prosseguir, garanta que você possui o Node.js instalado em sua máquina.
// Instale as Dependências do Projeto: Dentro da pasta tarefas-prati-codifica/, execute o comando abaixo. Ele lerá o arquivo package.json e instalará as bibliotecas necessárias (como prompt-sync) na subpasta node_modules/:
// npm install

const prompt = require('prompt-sync')();

let somaTotal = 0;

console.log("Por favor, digite 5 números.");

for (let i = 1; i <= 5; i++) {
    const numeroTexto = prompt(`Digite o ${i}º número: `);
    const numero = parseFloat(numeroTexto);

    if (isNaN(numero)) {
        console.log(`Entrada inválida para o ${i}º número. Este valor não será somado.`);
    } else {
        somaTotal += numero;
    }
}

console.log(`\nA soma total dos números válidos digitados é: ${somaTotal}`);