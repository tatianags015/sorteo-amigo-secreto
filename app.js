// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los amigos
let amigos = [];

// 1. Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById('amigoInput');
    const nombre = input.value.trim();
    
    // Validar que no esté vacío
    if (!nombre) {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Validar que no sea duplicado
    if (amigos.includes(nombre)) {
        alert('¡Este amigo ya está en la lista!');
        input.value = '';
        return;
    }
    
    // Agregar al array y limpiar campo
    amigos.push(nombre);
    input.value = '';
    
    // Actualizar lista visual
    actualizarListaAmigos();
    console.log('Amigos actualizados:', amigos);
}

// 2. Función para actualizar la lista visual
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// 3. Función para sortear amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Agrega algunos primero.');
        return;
    }
    
    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar resultado
    const resultadoElement = document.getElementById('resultadoSorteo');
    resultadoElement.innerHTML = `🎉 ¡El amigo sorteado es: <strong>${amigoSorteado}</strong>! 🎉`;
    resultadoElement.style.color = '#2ecc71';
    resultadoElement.style.fontSize = '1.2em';
}

// 4. Función para limpiar toda la lista
function limpiarLista() {
    if (amigos.length === 0) {
        alert('La lista ya está vacía.');
        return;
    }
    
    if (confirm('¿Estás seguro de que quieres borrar toda la lista?')) {
        amigos = [];
        actualizarListaAmigos();
        document.getElementById('resultadoSorteo').innerHTML = '';
        alert('Lista borrada correctamente.');
    }
}
