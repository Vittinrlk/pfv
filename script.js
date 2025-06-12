// Animação de corações subindo
function criarCoração() {
  const container = document.querySelector('.hearts-container');
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
  container.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 8000);
}
setInterval(criarCoração, 500);


function mostrarCarta() {
  const carta = document.getElementById('animacao-carta');
  carta.classList.add('abrindo');

  setTimeout(() => {
    carta.style.display = 'none';
    
    const conteudo = document.getElementById('conteudo-carta');
    conteudo.style.display = 'block';
    
    // Pequeno delay pra deixar a animação mais suave
    setTimeout(() => {
      conteudo.classList.add('entrar');
    }, 100);
    
    conteudo.scrollIntoView({ behavior: 'smooth' });
  }, 800);
}

document.getElementById('nao-me-ama').addEventListener('click', function() {
  const mensagem = document.getElementById('mensagem');
  mensagem.style.display = 'block';
  mensagem.innerText = 'Tá doida? Não me ama mais? 😱💔😂';
});

let nivel = 0; // Variável global pra controlar o progresso
let interval = null; // Guarda o intervalo ativo

document.getElementById('me-ama').addEventListener('click', function() {
  const progressContainer = document.getElementById('progress-container');
  progressContainer.style.display = 'block';

  // Se já tiver um intervalo rodando, limpa ele pra não acumular
  if (interval) {
    clearInterval(interval);
  }

  // Não deixa passar de 100%
  if (nivel >= 100) {
    return; // Se já chegou no topo, não faz mais nada
  }

  let target = nivel + 10;
  if (target > 100) target = 100;

  const nivelAmor = document.getElementById('nivel-amor');
  const progress = document.getElementById('progress');

  interval = setInterval(() => {
    if (nivel < target) {
      nivel += 1; // Sobe de 1 em 1 para ficar suave
      nivelAmor.innerText = nivel + '%';
      progress.style.width = nivel + '%';
    } else {
      clearInterval(interval);
      interval = null;

      if (nivel === 100) {
        mostrarFogos();
        this.disabled = true;
      }
    }
  }, 30); // Velocidade da animação (30ms por passo)
});














