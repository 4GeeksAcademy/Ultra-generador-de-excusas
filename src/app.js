import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    let quien = ['Mi uña', 'Mi perro', 'Mi abuela', 'El vecino', 'Mi hermano', 'El clima'];
    let queHizo = ['se lastimo', 'se enfermó', 'se tropezo', 'llamó urgentemente', 'necesitó ayuda'];
    let cuando = ['en la mañana', 'hace un momento', 'justo ahora', 'antes de salir', 'mientras almorzaba'];
    let evitar = 'y no puedo lavar los platos';

    function obtenerElementoAleatorio(array) {
        let indiceAleatorio = Math.floor(Math.random() * array.length);
        return array[indiceAleatorio];
    } 

    function generarExcusa() {
        let excusa = obtenerElementoAleatorio(quien) + " " +
                     obtenerElementoAleatorio(queHizo) + " " +
                     obtenerElementoAleatorio(cuando) + " " +
                     evitar;
        
        return excusa;
    }

    function iniciarGenerador() {
        let elementoExcusa = document.getElementById('excusa');
        let excusaGenerada = generarExcusa();
        elementoExcusa.textContent = excusaGenerada;
    }

    iniciarGenerador();
};