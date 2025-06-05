let numeroSecreto;
let tentativas;
let modoEscuro = false;

iniciarJogo();
carregarRanking();

function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  document.getElementById("tentativas").textContent = "Tentativas: 0";
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("nomeForm").style.display = "none";
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "⚠️ Digite um número válido entre 1 e 100.";
    message.style.color = "red";
    return;
  }

  tentativas++;
  document.getElementById("tentativas").textContent = `Tentativas: ${tentativas}`;

  if (guess === numeroSecreto) {
    message.textContent = `🎉 Parabéns! Você acertou o número em ${tentativas} tentativas!`;
    message.style.color = "green";

    document.getElementById("nomeForm").style.display = "block";
  } else if (guess < numeroSecreto) {
    message.textContent = `🔼 Tente um numero maior que ${guess}!` ;
    message.style.color = "blue";
  } else {
    message.textContent = `🔼 Tente um numero menor que ${guess}!`;
    message.style.color = "blue";
  }
}

function salvarRecorde() {
  const nome = document.getElementById("nomeJogador").value.trim();
  if (nome === "") {
    alert("Por favor, digite um nome.");
    return;
  }

  const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

  ranking.push({ nome: nome, tentativas: tentativas });

  // Ordena por tentativas crescentes
  ranking.sort((a, b) => a.tentativas - b.tentativas);

  // Mantém só os 5 melhores
  const top5 = ranking.slice(0, 5);

  localStorage.setItem("ranking", JSON.stringify(top5));

  document.getElementById("nomeForm").style.display = "none";
  carregarRanking();
}

function carregarRanking() {
  const ranking = JSON.parse(localStorage.getItem("ranking")) || [];
  const lista = document.getElementById("rankingList");
  lista.innerHTML = "";

  ranking.forEach((jogador, index) => {
    const li = document.createElement("li");
    li.textContent = `${jogador.nome} - ${jogador.tentativas} tentativa(s)`;
    lista.appendChild(li);
  });
}

function deletarRanking() {
  localStorage.removeItem("ranking");
  carregarRanking();
}

function restartGame() {
  iniciarJogo();
}

function alternarTema() {
  modoEscuro = !modoEscuro;
  document.body.classList.toggle("dark-mode", modoEscuro);
  const botao = document.querySelector(".tema-btn");
  botao.textContent = modoEscuro ? "☀️ Modo Claro" : "🌙 Modo Escuro";
}
