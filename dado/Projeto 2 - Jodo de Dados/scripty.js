// Função para jogar os dados
function jogarDados() {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  let imagens = document.querySelectorAll("img");
  imagens[0].setAttribute("src", "imagens/dado" + dado1 + ".png");
  imagens[1].setAttribute("src", "imagens/dado" + dado2 + ".png");

  let titulo = document.querySelector("h1");
  if (dado1 > dado2) {
    titulo.textContent = "🚩 O Jogador 1 Venceu!";
  } else if (dado2 > dado1) {
    titulo.textContent = "O Jogador 2 Venceu! 🚩";
  } else {
    titulo.textContent = "Empate!";
  }
}


let imagens = document.querySelectorAll("img");
imagens.forEach(function(img) {
  img.addEventListener("click", jogarDados);
});