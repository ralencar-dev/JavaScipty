// //1 Descrição: Crie um programa que leia o ano de nascimento do usuário e o ano atual. Com base nesses dados, calcule a idade e exiba uma mensagem informando:

// // Quantos anos o usuário completa no ano atual
// // E se ele pode ou não tirar a habilitação, considerando que a idade mínima é 18 anos.

// let anoNascimento = Number(prompt("Digite o ano de nascimento: "))
// let anoAtual = Number(prompt("Digite o ano atual: "))
// let idade = anoAtual - anoNascimento
// console.log(`Você tem ${idade} anos.`)
// if (idade >= 18) {
//     console.log("Você pode tirar a habilitação.")
//     } else {
//         console.log("Você não pode tirar a habilitação.")
//         }
 
        
//         // 2 Descrição: Crie um programa que solicite ao usuário sua idade e, com base na idade fornecida, imprima uma mensagem indicando a faixa etária correspondente:

// // Idade maior ou igual a 65: Você é um idoso.
// // Idade maior ou igual a 18: Você é um adulto.
// // Idade maior ou igual a 13: Você é um adolescente.
// // Senão a saída deve ser: Você é uma criança.

// let idade = parseInt(prompt("Digite sua idade:"))
// if (idade >= 65) {
//     console.log("Você é um idoso.")
// }
// else if (idade >= 18) {
//     console.log("Você é um adulto.")
// }
// else if (idade >= 13) {
//     console.log("Você é um adolescente.")
// }
// else if (idade < 13) {
//     console.log("Você é uma criança.")
// }
// else{
//     console.log("Idade inválida")
// }

// // 3 Descrição: Crie um programa que solicite ao usuário o seu peso (em kg) e sua altura (em metros). Em seguida, o programa deve calcular o IMC do usuário utilizando a fórmula:

// // IMC = peso / (altura * altura)
// // Após o cálculo, exiba o valor do IMC e, de acordo com o valor obtido, informe a classificação do IMC:

// // Abaixo de 18.5: Abaixo do peso
// // Entre 18.5 e 24.9: Peso normal
// // Entre 25 e 29.9: Sobrepeso
// // Entre 30 e 34.9: Obesidade grau 1
// // Entre 35 e 39.9: Obesidade grau 2
// // Acima de 40: Obesidade grau 3

// let peso = parseFloat(prompt("Digite seu peso (em kg):"))
// let altura = parseFloat(prompt("Digite sua altura (em metros):"))
// let imc = peso / (altura * altura)
// let classificacao = ""

// if (imc < 18.5) {
//     classificacao = "Abaixo do peso"
// } else if (imc >= 18.5 && imc < 24.9) {
//     classificacao = "Peso normal"
// } else if (imc >= 25 && imc < 29.9) {
//     classificacao = "Sobrepeso"
// } else if (imc >= 30 && imc < 34.9) {
//     classificacao = "Obesidade grau 1"
// } else if (imc >= 35 && imc < 39.9) {
//     classificacao = "Obesidade grau 2"
// }
// else {
//     classificacao = "Obesidade grau 3"
// }

// alert(`Seu IMC é ${imc.toFixed(2)} e você está classificado como: ${classificacao}`)

// // 4 Descrição: Escreva um programa que simule uma calculadora simples. O programa deve ler dois números inteiros e o tipo de operação a ser realizada (soma, subtração, multiplicação ou divisão). A operação será escolhida pelo usuário, utilizando um número que representará cada operação:

// // 1 para soma
// // 2 para subtração
// // 3 para multiplicação
// // 4 para divisão
// // Use o comando switch para escolher a operação e, ao final, exiba o resultado da operação escolhida.

// let num1 = parseInt(prompt("Digite o primeiro número:"));
// let num2 = parseInt(prompt("Digite o segundo número:"));
// let operacao = parseInt(prompt("Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"));
// let resultado;

// if (isNaN(num1) || isNaN(num2) || isNaN(operacao)) {
//     console.log("Entrada inválida. Por favor, insira números válidos.");
// }

// switch (operacao) {
//     case 1:
//         resultado = num1 + num2;
//         console.log(`Resultado da soma: ${resultado}`);
//         break;
//     case 2:
//         resultado = num1 - num2;
//         console.log(`Resultado da subtração: ${resultado}`);
//         break;
//     case 3:
//         resultado = num1 * num2;
//         console.log(`Resultado da multiplicação: ${resultado}`);
//         break;
//     case 4:
//         if (num2 != 0) {
//             resultado = num1 / num2;
//             console.log(`Resultado da divisão: ${resultado}`);
//         }
//         else {
//             console.log("Erro: Divisão por zero");
//         }
//         break;
//     default:
//         console.log("Operação inválida. Por favor, escolha uma operação válida.");
// }

// // 5 Descrição: Crie um programa que leia dois números inteiros: um valor inicial e um valor final. O programa deve então imprimir todos os números do valor inicial até o valor final, inclusive.


// let valorInicial = parseInt(prompt("Digite o valor inicial:"));
// let valorFinal = parseInt(prompt("Digite o valor final:"));
// if (valorInicial > valorFinal) {
//     console.log("Erro: O valor inicial deve ser menor que o valor final.");
// }
// else {
//     console.log(`Números de ${valorInicial} até ${valorFinal}:`);
//     for (let i = valorInicial; i <= valorFinal; i++) {
//         console.log(i);
//     }
// }


// // 6 Descrição: Crie um programa que leia um número inteiro N e calcule a soma de todos os números pares de 1 até N. O programa deve utilizar um laço de repetição para percorrer os números de 1 até N, somando apenas os números pares.

// let n = parseInt(prompt("Digite um número inteiro N:"));
// let soma = 0;

// if (isNaN(n) || n <= 0) {
//     alert("O valor digitado não é um número inteiro positivo.");
//     } else {
//         for (let i = 1; i <= n; i++) {
//             if (i % 2 === 0) {
//                 soma += i;
//             }
//         }   
//         alert("A soma dos números pares de 1 até " + n + " é "+ soma);
//     }

//     // 7 Descrição: Crie um programa que leia números inteiros da entrada até que o número digitado seja 0. Para cada número, o programa deve verificar se ele é positivo ou negativo. Ao final, o programa deve informar a quantidade de números positivos e a quantidade de números negativos digitados.

// let numero;
// let positivos = 0;
// let negativos = 0;

// do {
//     numero = parseInt(prompt("Digite um número inteiro (0 para sair):"));
    
//     if (numero > 0) {
//         positivos++;
//         console.log(numero, "Esse número é positivo");
//     } else if (numero < 0) {
//         negativos++;
//         console.log(numero, "Esse número é negativo");
//     }
// } while (numero !== 0);

// console.log("Quantidade de números positivos:", positivos);
// console.log("Quantidade de números negativos:", negativos);


// // 8 Descrição: Crie um programa que solicite uma senha ao usuário e continue pedindo até que ele digite a senha correta. A senha correta deve estar definida no próprio programa. Ao acertar, exiba uma mensagem de acesso liberado. Use o laço do-while para garantir que o programa solicite a senha pelo menos uma vez.

// let senhaCorreta = "1234";
// let senhaDigitada;
// let tentativas = 0;

// do {
//     senhaDigitada = prompt("Digite a senha: ");
//     tentativas++;

//     if (senhaDigitada !== senhaCorreta) {
//         console.log("Senha incorreta. Tente novamente.");
//     }
// } while (senhaDigitada !== senhaCorreta);

// console.log("Acesso liberado!");
// console.log("Número de tentativas:", tentativas);

    

