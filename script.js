// Gerar corações caindo
function criarCoracao() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 5) + "s"; // 5 a 8 segundos
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    document.querySelector(".hearts").appendChild(heart);

    // Remove após cair
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Cria corações a cada 300-800ms
setInterval(criarCoracao, Math.random() * 500 + 300);

// Função de abrir a carta
function abrirCarta() {
    document.getElementById("container").classList.add("aberta");
    
    // Para de criar novos corações depois de abrir (opcional, mas deixa mais limpo)
    // clearInterval(intervaloCoracoes); // se quiser parar, descomente e declare o setInterval como var
}