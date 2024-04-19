// Selecionando elementos do DOM
const cookieImage = document.querySelector('#cookie-image'),
      initialScreen = document.querySelector('#initial-screen'),
      messageScreen = document.querySelector('#message-screen'),
      newCookieButton = document.querySelector('#new-cookie-button');

// Função que faz uma requisição à API e retorna uma frase motivacional
const getMotivationalPhrase = async () => {
  const response = await fetch('https://type.fit/api/quotes'); // Endpoint da API de frases motivacionais
  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex].text; // Retorna apenas o texto da frase
};

// Função que abre o biscoito da sorte
const openCookie = async () => {
  const phrase = await getMotivationalPhrase(); // Obtém a frase da API
  messageScreen.querySelector("p").innerText = phrase;
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
