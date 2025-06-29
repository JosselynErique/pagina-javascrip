const galeria = document.getElementById("galeria");  // <-- define la galería
const inputURL = document.getElementById("imagenURL");
const btnAgregar = document.getElementById("agregarImagen");
const btnEliminar = document.getElementById("eliminarImagen");

const imagenesPorDefecto = [
  "assets-img/imagen-1.jpg",
  "assets-img/imagen-2.jpg",
  "assets-img/imagen-3.jpg",
  "assets-img/imagen-4.jpg",
  "assets-img/imagen-5.jpg",
  "assets-img/imagen-6.jpg",
];

function agregarImagen(url) {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen de la galería";
  img.style.cursor = "pointer";
  img.classList.add("nueva");

  // Evento para seleccionar imagen
  img.addEventListener("click", () => {
    const imgs = galeria.querySelectorAll("img");
    imgs.forEach(i => i.classList.remove("seleccionada"));
    img.classList.add("seleccionada");
  });

  galeria.appendChild(img);

  img.addEventListener("animationend", () => {
    img.classList.remove("nueva");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  // Cargar imágenes por defecto
  imagenesPorDefecto.forEach(url => agregarImagen(url));
});

// Agregar imagen desde input
btnAgregar.addEventListener("click", () => {
  const url = inputURL.value.trim();
  if (url) {
    agregarImagen(url);
    inputURL.value = "";
  } else {
    alert("Por favor, ingresa una ruta válida.");
  }
});

// Eliminar imagen seleccionada
btnEliminar.addEventListener("click", () => {
  const seleccionada = galeria.querySelector("img.seleccionada");
  if (seleccionada) {
    galeria.removeChild(seleccionada);
  } else {
    alert("Selecciona una imagen para eliminar.");
  }
});
