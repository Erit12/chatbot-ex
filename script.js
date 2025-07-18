const responses = {
  'hola': '¡Hola! ¿Cómo estás?',
  'adiós': '¡Adiós! Que tengas un buen día.',
  'cómo estás': 'Estoy bien, gracias por preguntar.',
  'qué puedes hacer': 'Puedo responder a tus preguntas básicas.'
};

function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim().toLowerCase();

  if (message === '') return;

  appendMessage(message, 'user');
  input.value = '';

  setTimeout(() => {
    const response = responses[message] || 'Lo siento, no entiendo esa pregunta.';
    appendMessage(response, 'bot');
  }, 500);
}

function appendMessage(text, sender) {
  const chatMessages = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  messageDiv.innerText = text;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
