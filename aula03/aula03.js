// let numero = 0

// //1º solucao
// if (numero > 0) {
//     console.log("El número es positivo");
// }
// else if (numero === 0) {
//     console.log("El número es cero");
// }
// else {
//     console.log("El número es negativo");
// }

// //2º solucao
// if (numero === 0) {
//     console.log("O número é zero")
// }
// else{
//     if (numero > 0) {
//         console.log("O número é positivo")
//     }
//     else {
//         console.log("O número é negativo")
//     }
// }

// //3º solucao
// if(numero == 0) {
//     console.log("O número é zero")
//     return
// }

// if (numero > 0) {
//     console.log("O número é positivo")
// }

// else {
//     console.log("O número é negativo")
// }

// let nota = prompt("Digite a nota do aluno (0 a 10):")
// nota = parseFloat(nota)

// if (nota >= 7 && nota <= 10) {
//     console.log("Aprovado")
// }
// else if (nota >= 4 && nota < 7) {
//     console.log("Recuperação")
// }
// else if (nota < 4 && nota >= 0) {
//     console.log("Reprovado")
// }
// else {
//     console.log("Nota inválida")
// }


let nome = prompt("Digite seu nome:");
alert("Olá " + nome + ", sortearei um número entre 1 e 100. Tente adivinhar qual é o número!");

let numeroSorteado = Math.floor(Math.random() * 100) + 1;
let numeroUsuario = 0;
let tentativas = 0;
let acertou = false;

while (!acertou) {
    numeroUsuario = prompt("Digite um número entre 1 e 100:");
    numeroUsuario = parseInt(numeroUsuario);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        alert("Por favor, digite um número válido entre 1 e 100.");
        continue;
    }

    tentativas++;

    if (numeroUsuario === numeroSorteado) {
        alert("Parabéns, você acertou o número em " + tentativas + " tentativa(s)!");
        acertou = true;
    } else if (numeroUsuario < numeroSorteado) {
        alert("O número sorteado é maior que " + numeroUsuario + ".");
    } else {
        alert("O número sorteado é menor que " + numeroUsuario + ".");
    }
}




