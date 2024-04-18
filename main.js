// Selecionando elementos do DOM
const cookieImage = document.querySelector('#cookie-image'),
      initialScreen = document.querySelector('#initial-screen'),
      messageScreen = document.querySelector('#message-screen'),
      newCookieButton = document.querySelector('#new-cookie-button');

// Listas de palavras para construir as frases
const substantivos = ["front-end", "código", "interface", "experiência", "criatividade", "tecnologia", "desenvolvimento", "design", "usuário"];
const verbos = ["encontra", "constrói", "evolui", "impacta", "transforma", "cria", "melhora", "otimiza", "inspira"];
const adjetivos = ["incríveis", "emocionantes", "desafiadoras", "dinâmicas", "impactantes", "criativas", "úteis", "belas", "eficientes"];

// Função para gerar um número aleatório
const getRandomNumber = (max) => Math.floor(Math.random() * max);

// Função que gera uma frase aleatória
const getPhrase = () => {
  const sujeito = substantivos[getRandomNumber(substantivos.length)];
  const verbo = verbos[getRandomNumber(verbos.length)];
  const objeto = substantivos[getRandomNumber(substantivos.length)];
  const adjetivo = adjetivos[getRandomNumber(adjetivos.length)];
  return `O ${sujeito} ${verbo} ${adjetivo} ${objeto}.`;
};

// Função que abre o biscoito da sorte
const openCookie = () => {
  messageScreen.querySelector("p").innerText = getPhrase();
  initialScreen.classList.add('hide');
  messageScreen.classList.remove('hide');
};

// Função que fecha o biscoito da sorte
const closeCookie = () => {
  initialScreen.classList.remove('hide');
  messageScreen.classList.add('hide');
};

// Função que controla a abertura/fechamento do biscoito
const handleClickOrEnter = () => {
  if (initialScreen.classList.contains('hide')) {
    closeCookie();
  } else {
    openCookie();
  }
};

// Adicionando eventos de clique e tecla Enter
cookieImage.addEventListener('click', handleClickOrEnter);
newCookieButton.addEventListener('click', handleClickOrEnter);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleClickOrEnter();
});