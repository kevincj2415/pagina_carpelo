// static/js/script.js
console.log("¡Hola desde JavaScript!");

// Aquí puedes añadir funcionalidad interactiva, por ejemplo, un mensaje de bienvenida.
document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
        welcomeMessage.textContent = "Bienvenido a nuestra tienda de café!";
    }
});