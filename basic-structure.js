//console.log('O termo "mané" é comum no Rio de Janeiro')

//console.log(`Jaques Antunes`)

//console.log(1.5)
//console.log(typeof('1.5'))

//console.log(typeof('19'),1000,"Jaques")

// let name = 'Thales'
// var anotherName = 'Jaques'
// const CITY = 'Porto Alegre'

// let teste
// console.log(teste)

// let tituloDoInter = null
// console.log(tituloDoInter)

// let cursando = true
// console.log(cursando)
// console.log(typeof(cursando))

// let num1 = 6
// let num2 = 2

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 ** num2)
// console.log(num1 % num2)

// () > Maior Precdência
// ** > Em segundo
// * / % 
// + - 

// let num = "4"
// console.log(parseInt(num) + 10)

// let counter = 1
// counter = counter + 1
// counter++
// console.log(counter)
// counter = counter - 1
// counter--
// console.log(counter)

// counter = 2
// counter*= 5
// console.log(counter++)
// console.log(counter)

//INCREMENTAR DE 2 EM 2
// let counter = 1
// let step = 2
// counter += step
// counter += step
// counter += step
// counter += step
// counter += step
// counter += step

// console.log(counter)

// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 >= 5)
// console.log(10 <= 5)
// console.log(10 == 5)
// console.log(10 == 10)
// console.log(10 == '10')
// console.log(10 === '10')
// console.log(10 != '10')
// console.log(10 !== '10')

// console.log((10 < 5) && (10 > 2))
// console.log((10 < 5) || (10 > 2))
// console.log((10 < 5) || !(10 > 2))

// let usuario = "Jaques"
// let senha = "234"

// let autenticacao = usuario === "Jaques" && senha === "234"
// console.log(autenticacao)

// const nota = 70

// if(nota >= 90){
//     console.log('Aprovado com EXCELÊNCIA')
//  } else if (nota >= 70) {
//      console.log('Aprovado ')
//  } else {
//     console.log('REPROVADO')
//  }

// let idade = 19

// if((idade >= 18) && (idade <= 32)){
//     console.log('Apto a se inscrever!')
// } else {
//     console.log('Idade inapropirada para se inscrever!')
// }

// let resultado = (idade >= 18 && idade<= 32) ? console.log('Pode se inscrever') : console.log('Não pode se inscrever')

//Exercicio 1: Verifiquem se um numero é par ou impar

//let numParImpar = 17

// if(numParImpar % 2 == 0){
//     console.log('Número PAR')
// } else{
//     console.log('Número IMPAR')
// }

// numParImpar % 2 === 0 ? console.log('Par') : console.log('Impar')

//Exercicio 2: Encontre o maior de três números

// let num1 = 1050
// let num2 = 10
// let num3 = 1000

// if((num1 > num2) && (num1> num3) ){
//     console.log(num1 + ' ' + 'é o maior número')
// } 
// else if((num2 > num1) && (num2 > num3)){
//     console.log(num2 + ' ' + 'é o maior número')
// } 
// else if((num3 > num1) && (num3 > num2) ){
//     console.log(num3 + ' ' + 'é o maior número')
// }
// else{
//     console.log('Números iguais ou invalídos' )
// }

//Exercício 3: Calculadora simples com 4 operações fundamentais, usando entrada do usuario.

// const prompt = require('prompt-sync')()

// let valor1 = Number(prompt('Insira o primeiro valor: '))
// let valor2 = Number(prompt('Insira o segundo valor: '))
// let operacao = prompt('Informe a operação desejada (+, -, *, /): ')
// let resultado = 0

// if(operacao === '+' ){
//     resultado = valor1 + valor2
// } else if(operacao === '-'){
//     resultado = valor1 - valor2
// } else if(operacao === '*'){
//     resultado = valor1 * valor2
// } else if(operacao === '/'){
//     if(valor2 !== 0){
//     resultado = valor1 / valor2
// } else {
//     console.error('Erro: divisão por zero!')
//     resultado = undefined
// }
// } else{
//     console.log('Operação inválida"')
//     resultado = undefined
// }
// if(resultado !== undefined){
//     console.log('Resultado: ', resultado)
// }

// let opcao = 3

// switch(opcao) {
//     case 1:
//         console.log('Você selecionou a primeira opção!')
//         break;
//     case 2:
//         console.log('Você selecionou a segunda opção!')
//         break;
//     case 3:
//         console.log('Você selecionou a terceira opção!')
//          break;
//     default: 
//         console.log('Você não escolheu uma opção válida!')
//         break
// }

//Exercício 4: Calculadora simples com 4 operações fundamentais com entradas do usuario, usando SWITCH.

// const prompt = require('prompt-sync')()

// let valor1 = Number(prompt('Insira o primeiro valor: '))
// let valor2 = Number(prompt('Insira o segundo valor: '))
// let operacao = prompt('Selecione a operação desejada ( +, -, *, /): ')
// let resultado = 0

// switch(operacao){
//     case '+':
//          resultado = (valor1 + valor2)
//          console.log(resultado)
//          break;
//     case '-':
//         resultado = (valor1 - valor2)
//         console.log(resultado)
//         break;
//     case '*':
//         resultado = (valor1 * valor2)
//         console.log(resultado)
//         break
//     case '/':
//         if(valor2 !== 0){
//             resultado = (valor1 / valor2)
//         } else{
//             console.error('Erro: divisão por zero!')
//         } console.log(resultado)
//         break
//     default:
//         console.log('Operação inválida!')
// }

//Exercício 5: Calcular o MDC entre dois números 

// function calcularMDC(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// let numero1 = 8;
// let numero2 = 12;
// let resultado = calcularMDC(numero1, numero2);
// console.log(`MDC de ${numero1} e ${numero2}: resultado`);

/*
Escreva um programa que recebe um número inteiro e verifica se 
ele é par ou ímpar utilizando uma estrutura de controle if.
*/

