/*
Escreva um programa que gera e imprime os primeiros 
10 números da sequência de Fibonacci utilizando um loop for.
*/

// Pré-requisitos
// Antes de prosseguir, garanta que você possui o Node.js instalado em sua máquina.
// Instale as Dependências do Projeto: Dentro da pasta tarefas-prati-codifica/, execute o comando abaixo. Ele lerá o arquivo package.json e instalará as bibliotecas necessárias (como prompt-sync) na subpasta node_modules/:
// npm install

const n = 10;

let termoAnterior = 0;
let termoAtual = 1;

console.log("Sequência de Fibonacci:");

if (n <= 0) {
    console.log("Número de termos deve ser positivo.");
} else if (n === 1) {
    console.log(termoAnterior);
} else {
    console.log(termoAnterior);
    console.log(termoAtual);

    for (let i = 3; i <= n; i++) {
        let proximoTermo = termoAnterior + termoAtual;
        console.log(proximoTermo);

        termoAnterior = termoAtual;
        termoAtual = proximoTermo;
    }
}