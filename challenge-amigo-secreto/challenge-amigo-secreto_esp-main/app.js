// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);

function agregarAmigo() {
    let amigosUsuario = document.getElementById('amigo').value;

    if (amigosUsuario === '') {
        alert("Por favor, inserte un nombre.");
    } else {
        if (amigos.includes(amigosUsuario)) {
            alert("Ya ingreso el nombre de ese amigo")

        } else {
            amigos.push(amigosUsuario)
            limpiarCaja();
            actualizarAmigo();
        }
    }
}

function actualizarAmigo() {
    let listaAmigos = document.querySelector('#listaAmigos');
    limpiarLista();  
    for (let i = 0; i < amigos.length; i++) {
        let lista = document.createElement("li");
        lista.textContent = amigos[i];
        listaAmigos.appendChild(lista);
    }
}
function sortearAmigo() {
    if (amigos === '') {
        alert("Por favor, inserte un nombre.");
        agregarAmigo();
    } else {
        let ganador = amigos[numeroAmigo];
        asignarTextoElemento('#listaAmigos', '');
        asignarTextoElemento('#resultado', `El ganador es ${ganador}`);

    }
}


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function limpiarLista() {
    document.querySelector('#listaAmigos').innerHTML  = '';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}