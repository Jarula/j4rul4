/* Slideout.js
---------------------------------------------------------------*/

// Instancio el slideout
var slideout = new Slideout({
    'panel': document.getElementById('main'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
});

// Evento toggle para abrir/cerrar el slideout
document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
    slideout.toggle();
});

// Escucho si se clickea algún link del slideout para cerrarlo luego de la acción
document.querySelector('.menu').addEventListener('click', function(event) {
    if (event.target.nodeName === 'A') {
        slideout.close();
    }
});