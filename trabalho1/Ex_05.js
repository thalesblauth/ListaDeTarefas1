/*
Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma 
pessoa e determina a categoria de peso (baixo peso, peso normal, 
sobrepeso, obesidade) utilizando if-else.
*/

// Pré-requisitos
// Antes de prosseguir, garanta que você possui o Node.js instalado em sua máquina.
// Instale as Dependências do Projeto: Dentro da pasta tarefas-prati-codifica/, execute o comando abaixo. Ele lerá o arquivo package.json e instalará as bibliotecas necessárias (como prompt-sync) na subpasta node_modules/:
// npm install

const prompt = require('prompt-sync')();

const pesoTexto = prompt("Digite seu peso em kg (ex: 75.5): ");
const peso = parseFloat(pesoTexto);

const alturaTexto = prompt("Digite sua altura em metros (ex: 1.80): ");
const altura = parseFloat(alturaTexto);

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Erro: Peso e altura devem ser números positivos válidos.");
} else {
    const imc = peso / (altura * altura);

    let categoria;

    if (imc < 18.5) {
        categoria = "Baixo peso";
    } else if (imc < 25) {
        categoria = "Peso normal";
    } else if (imc < 30) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    console.log(`\nSeu IMC calculado é: ${imc.toFixed(2)}`);
    console.log(`Sua classificação é: ${categoria}.`);
}