function actualizarFecha() {
    const fecha = new Date();
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' }; // Formato: día, mes y año
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones); // Idioma español
    
    const fechaElement = document.getElementById('fechaActual');
    
    let index = 0;
    
    // Función para simular el efecto de escritura
    function escribir() {
        if (index < fechaFormateada.length) {
            fechaElement.textContent += fechaFormateada.charAt(index);
            index++;
            setTimeout(escribir, 230); // Ajusta el tiempo para hacer más lento o rápido el efecto
        }
    }

    escribir(); // Inicia la animación de escritura
}

// Llama a la función al cargar la página
actualizarFecha();