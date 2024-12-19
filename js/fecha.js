
    // Función para obtener la fecha actual
    function actualizarFecha() {
        const fecha = new Date();
        const opciones = { year: 'numeric', month: 'long', day: 'numeric' }; // Formato: día, mes y año
        const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones); // Idioma español
        document.getElementById('fechaActual').textContent = fechaFormateada;
    }

    // Llama a la función al cargar la página
    actualizarFecha();