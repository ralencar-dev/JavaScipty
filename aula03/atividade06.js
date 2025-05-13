// Descrição: Crie um programa que leia um número inteiro N e calcule a soma de todos os números pares de 1 até N. O programa deve utilizar um laço de repetição para percorrer os números de 1 até N, somando apenas os números pares.

let n = parseInt(prompt("Digite um número inteiro N:"));
let soma = 0;

if (isNaN(n) || n <= 0) {
    alert("O valor digitado não é um número inteiro positivo.");
    } else {
        for (let i = 1; i <= n; i++) {
            if (i % 2 === 0) {
                soma += i;
            }
        }   
        alert("A soma dos números pares de 1 até " + n + " é "+ soma);
    }
    