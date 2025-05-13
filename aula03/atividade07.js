// Descrição: Crie um programa que leia números inteiros da entrada até que o número digitado seja 0. Para cada número, o programa deve verificar se ele é positivo ou negativo. Ao final, o programa deve informar a quantidade de números positivos e a quantidade de números negativos digitados.

let numero;
let positivos = 0;
let negativos = 0;

do {
    numero = parseInt(prompt("Digite um número inteiro (0 para sair):"));
    
    if (numero > 0) {
        positivos++;
        console.log(numero, "Esse número é positivo");
    } else if (numero < 0) {
        negativos++;
        console.log(numero, "Esse número é negativo");
    }
} while (numero !== 0);

console.log("Quantidade de números positivos:", positivos);
console.log("Quantidade de números negativos:", negativos);


