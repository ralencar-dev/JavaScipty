// Descrição: Crie um programa que solicite uma senha ao usuário e continue pedindo até que ele digite a senha correta. A senha correta deve estar definida no próprio programa. Ao acertar, exiba uma mensagem de acesso liberado. Use o laço do-while para garantir que o programa solicite a senha pelo menos uma vez.

let senhaCorreta = "1234";
let senhaDigitada;
let tentativas = 0;

do {
    senhaDigitada = prompt("Digite a senha: ");
    tentativas++;

    if (senhaDigitada !== senhaCorreta) {
        console.log("Senha incorreta. Tente novamente.");
    }
} while (senhaDigitada !== senhaCorreta);

console.log("Acesso liberado!");
console.log("Número de tentativas:", tentativas);
