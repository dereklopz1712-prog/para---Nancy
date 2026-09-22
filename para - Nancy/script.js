onload = () =>{
    document.body.classList.remove("container");
};

const musica = document.getElementById("musica");

document.addEventListener("click", function () {
    musica.play();

    document.getElementById("mensajeInicio").style.display = "none";
}, { once: true });
