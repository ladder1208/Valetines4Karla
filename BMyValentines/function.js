// Lista de rutas a tus imágenes
var imagenes = [
    "imgs/foto1.jpeg",
    "imgs/foto2.jpeg",
    "imgs/foto3.jpeg",
    "imgs/foto4.jpeg",
    "imgs/foto5.jpeg",
    "imgs/foto6.jpeg",
    "imgs/foto7.jpeg"
];


var tamanosSi = ["100px", "125px", "150px", "175px", "200px", "225px", "250px"];
var tamanosNo = ["50px", "45px", "40px", "35px", "30px", "25px", "20px"];


var indiceImagen = 0;


var botonSi = document.querySelector(".sibot");
var botonNo = document.querySelector(".nobot");
var imagen = document.querySelector(".foto");


botonNo.addEventListener("click", function() {
    if (indiceImagen < imagenes.length) {
        
        imagen.src = imagenes[indiceImagen];

        botonSi.style.width = tamanosSi[indiceImagen];
        botonSi.style.height = tamanosSi[indiceImagen];
        botonNo.style.width = tamanosNo[indiceImagen];
        botonNo.style.height = tamanosNo[indiceImagen];

        alert("Eso no funciona, intenta de nuevo.");
        indiceImagen++;
    }
});

// Referencia al botón Si
var botonSi = document.querySelector(".sibot");

// Manejador del evento de clic en el botón Si
botonSi.addEventListener("click", function() {
    // Redirigir a otra página
    window.location.href = "acepto.html";
});