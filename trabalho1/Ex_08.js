/*
Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores 
iguais) e escreve-los em ordem crescente.
*/

// Pré-requisitos
// Antes de prosseguir, garanta que você possui o Node.js instalado em sua máquina.
// Instale as Dependências do Projeto: Dentro da pasta tarefas-prati-codifica/, execute o comando abaixo. Ele lerá o arquivo package.json e instalará as bibliotecas necessárias (como prompt-sync) na subpasta node_modules/:
// npm install

const prompt = require('prompt-sync')();

const valor1Texto = prompt("Digite o primeiro valor: ");
const valor1 = parseFloat(valor1Texto);

const valor2Texto = prompt("Digite o segundo valor: ");
const valor2 = parseFloat(valor2Texto);

if (isNaN(valor1) || isNaN(valor2)) {
    console.log("Erro: Ambos os valores devem ser números válidos.");
} else if (valor1 === valor2) {
    console.log("Erro: Os valores devem ser diferentes, conforme o enunciado.");
} else {
    console.log("\nValores em ordem crescente:");

    if (valor1 < valor2) {
        console.log(valor1);
        console.log(valor2);
    } else {
        console.log(valor2);
        console.log(valor1);
    }
}