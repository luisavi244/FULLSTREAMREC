window.sr = ScrollReveal();

sr.reveal(".header", {
    duration: 1000,
    origin: "top",
    distance: "100px",
    reset: true // Permite que la animación se reinicie al volver a entrar en el viewport
});

sr.reveal(".card", {
    duration: 1000,
    origin: "bottom",
    distance: "100px",
    reset: true // Permite que la animación se reinicie al volver a entrar en el viewport
});
