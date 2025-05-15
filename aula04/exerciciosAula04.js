// 1 Descrição: Crie uma função chamada saudacao que receba um nome e imprima uma saudação personalizada. Caso nenhum nome seja fornecido, use "visitante".

// function saudacao(nome = "visitante") {
//     console.log("Olá, " + nome + "!");
// }
// saudacao("João");
// saudacao();

//  Descrição: Crie uma função chamada verificarIdade que receba dois parâmetros: nome (com valor padrão "visitante") e idade. A função não deve retornar nenhum valor, apenas exibir uma mensagem com alert informando:

// "Olá, [nome]! Você é menor de idade." se a idade for menor que 18.
// "Olá, [nome]! Você é maior de idade." se a idade for 18 ou mais.
// Antes de exibir a mensagem, verifique se a idade informada é válida: ela não pode ser negativa nem ultrapassar um valor máximo definido (por exemplo, 120). O programa deve começar perguntando ao usuário, por meio de confirm, se ele deseja verificar uma idade. Enquanto a resposta for positiva, utilize prompt para solicitar o nome e a idade da pessoa, e chame a função verificarIdade. O processo deve se repetir até que o usuário decida encerrar.

// function verificarIdade(nome = "visitante", idade) {
//     if (idade < 0 || idade > 120) {
//         alert("Idade inválida");
//     } else if (idade < 18) {
//         alert("Olá, " + nome + "! Você é menor de idade.");
//     } else {
//         alert("Olá, " + nome + "! Você é maior de idade.");
//     }
// }

// let continuar = confirm("Deseja verificar uma idade?");
// while (continuar) {
//     let nome = prompt("Informe seu nome:") || "visitante";
//     let idade = parseInt(prompt("Informe sua idade:"));

//     if (!isNaN(idade) && idade > 0 && idade <= 120) {
//         verificarIdade(nome, idade);
//     } else {
//         alert("Por favor, insira uma idade válida.");
//     }

//     continuar = confirm("Deseja verificar outra idade?");
// }

//  2 Descrição: Descrição: Crie um programa que solicite ao usuário dois números e um operador matemático (+, -, *, /, %), e passe esses valores para uma função chamada calcular, responsável por executar a operação correspondente e retornar o resultado. Caso algum parâmetro não seja informado, utilize valores padrão. O programa deve verificar se é possível realizar as operações de divisão e módulo, garantindo que o segundo número não seja zero. Após exibir o resultado, pergunte ao usuário se deseja fazer outro cálculo (sim ou não). Se a resposta for sim, repita o processo; caso contrário, finalize o programa com uma mensagem de encerramento. Certifique-se de validar as entradas e tratar erros para garantir o bom funcionamento do programa. no prompt.

function calcular(num1 = 0, num2 = 1, operador = "+") {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Erro: Divisão por zero não é permitida.";
            }
        case "%":
            if (num2 !== 0) {   
                return num1 % num2;
            } else {
                return "Erro: Módulo por zero não é permitido.";
            }
        default:
            return "Operador inválido.";
    }
}
let continuarCalculo = true;
while (continuarCalculo) {
    let num1 = parseFloat(prompt("Informe o primeiro número:"));    
    let num2 = parseFloat(prompt("Informe o segundo número:"));
    let operador = prompt("Informe o operador (+, -, *, /, %):"); 
    let resultado = calcular(num1, num2, operador);
    if (resultado === "Erro: Divisão por zero não é permitida." || resultado === "Erro: Módulo por zero não é permitido.") {
        alert(resultado);
    } else {
        alert("O resultado da operação " + num1 + " " + operador + " " + num2 + " é: " + resultado);
    }
    continuarCalculo = confirm("Deseja fazer outro cálculo?");
}

// 3 Descrição: Você está desenvolvendo uma funcionalidade para exibir uma saudação diferente dependendo da hora do dia. Crie uma função anônima atribuída à variável mensagemDeBoasVindas que receba o nome de uma pessoa e a hora atual (de 0 a 23).

// A função deve retornar:

// "Bom dia, [nome]!" se a hora estiver entre 6 e 11.
// "Boa tarde, [nome]!" se a hora estiver entre 12 e 17.
// "Boa noite, [nome]!" se a hora estiver entre 18 e 23.
// "Olá, [nome]!" nos demais casos.

// const mensagemDeBoasVindas = function(nome, hora) {
//     if (hora >= 6 && hora <= 11) {
//         return "Bom dia, " + nome + "!";
//     } else if (hora >= 12 && hora <= 17) {
//         return "Boa tarde, " + nome + "!";
//     } else if (hora >= 18 && hora <= 23) {
//         return "Boa noite, " + nome + "!";
//     } else {
//         return "Olá, " + nome + "!";
//     }
// } 
// console.log(mensagemDeBoasVindas("Maria", 10)); 
// console.log(mensagemDeBoasVindas("João", 15)); 
// console.log(mensagemDeBoasVindas("Ana", 20)); 

// 4 Descrição: Você está ajudando a montar um sistema de compras online. Crie uma arrow function chamada calcularDesconto que receba dois parâmetros: preco e porcentagemDesconto, e retorne o valor com desconto aplicado. Depois, calcule o preço final de um produto que custa R$ 200 com 10% de desconto.

// const calcularDesconto = (preco, porcentagemDesconto) => {
//     return preco - (preco * (porcentagemDesconto / 100));
// }
// console.log(calcularDesconto(200, 10));

// 5 Descrição: Você está criando uma função que vai exibir mensagens personalizadas para dois usuários. Crie uma função chamada exibirMensagem que receba dois nomes (ex: nome1 e nome2) e uma função de callback. O callback deve ser aplicado individualmente a cada nome e as mensagens devem ser exibidas com console.log. Em seguida, utilize exibirMensagem com um callback que retorne "Olá, [nome]! Que bom ver você aqui!".

// const exibirMensagem = (nome1, nome2, callback) => {
//     console.log(callback(nome1));
//     console.log(callback(nome2));
// }
// exibirMensagem("Maria", "João", (nome) => {
//     return "Olá, " + nome + "! Que bom ver você aqui!";
// });




 

