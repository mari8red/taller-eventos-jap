const div = document.getElementById('div1');

div.addEventListener('click', saludoDiv);

function saludoDiv(e) {
    if (e.target == this)
    return alert('¡Hola! Soy el div.');
};
    