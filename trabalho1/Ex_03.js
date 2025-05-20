/*
Implemente um programa que recebe uma nota de 0 a 10 e classifica 
como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

// Pré-requisitos
// Antes de prosseguir, garanta que você possui o Node.js instalado em sua máquina.
// Instale as Dependências do Projeto: Dentro da pasta tarefas-prati-codifica/, execute o comando abaixo. Ele lerá o arquivo package.json e instalará as bibliotecas necessárias (como prompt-sync) na subpasta node_modules/:
// npm install

const prompt = require('prompt-sync')();

const notaTexto = prompt("Digite a nota (entre 0 e 10): ");
const nota = parseFloat(notaTexto);

if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Erro: Por favor, digite uma nota válida entre 0 e 10.");
} else {
    let situacao;

    if (nota >= 7.0) {
        situacao = "Aprovado";
    } else if (nota >= 4.0) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    console.log(`\nCom a nota ${nota.toFixed(1)}, a situação do aluno é: ${situacao}.`);
}
