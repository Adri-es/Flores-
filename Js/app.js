let Titulo = document.title;

window.addEventListener('blur', () => {
    Titulo = document.title;
    document.title = "No te vayas, regresa :)";
})

window.addEventListener('focus', () => {
    document.title = Titulo;
})

