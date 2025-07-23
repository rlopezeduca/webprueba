// Array con varios saludos
const greetings = [
  '¡Hola! ¿Qué tal?',
  '¡Bienvenido a bordo!',
  '¡Qué bueno tenerte por aquí!',
  '¡Un saludo desde el código!',
  '¡Gracias por visitarnos!',
  '¡Es un placer verte!',
  '¡Que tengas un día genial!',
  '¡Explora todo lo que quieras!',
  '¡La web te da la bienvenida!',
  '¡Hola mundo... y a ti también!'
];

// Añadimos un listener al botón para el evento 'click'
document.getElementById('change-message-btn').
addEventListener('click', () => {

  // Obtenemos un saludo aleatorio y actualizamos el mensaje de bienvenida
  const randomIndex = Math.floor(Math.random() * greetings.length);
  document.getElementById('welcome-message').textContent = greetings[randomIndex];
});
