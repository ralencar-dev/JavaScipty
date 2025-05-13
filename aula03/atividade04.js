// Descrição: Escreva um programa que simule uma calculadora simples. O programa deve ler dois números inteiros e o tipo de operação a ser realizada (soma, subtração, multiplicação ou divisão). A operação será escolhida pelo usuário, utilizando um número que representará cada operação:

// 1 para soma
// 2 para subtração
// 3 para multiplicação
// 4 para divisão
// Use o comando switch para escolher a operação e, ao final, exiba o resultado da operação escolhida.

let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let operacao = parseInt(prompt("Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"));
let resultado;

if (isNaN(num1) || isNaN(num2) || isNaN(operacao)) {
    console.log("Entrada inválida. Por favor, insira números válidos.");
}

// Crie um switch para escolher a operação
switch (operacao) {
    case 1:
        resultado = num1 + num2;
        console.log(`Resultado da soma: ${resultado}`);
        break;
    case 2:
        resultado = num1 - num2;
        console.log(`Resultado da subtração: ${resultado}`);
        break;
    case 3:
        resultado = num1 * num2;
        console.log(`Resultado da multiplicação: ${resultado}`);
        break;
    case 4:
        if (num2 != 0) {
            resultado = num1 / num2;
            console.log(`Resultado da divisão: ${resultado}`);
        }
        else {
            console.log("Erro: Divisão por zero");
        }
        break;
    default:
        console.log("Operação inválida. Por favor, escolha uma operação válida.");
}
