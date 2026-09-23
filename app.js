// URL base de la API de Rick & Morty
const API_URL = "https://rickandmortyapi.com/api/character";

// Referencias a los elementos del DOM
const fetchBtn = document.getElementById("fetch-btn");
const axiosBtn = document.getElementById("axios-btn");
const dataContainer = document.getElementById("data-container");

// Función para mostrar personajes en el contenedor
function mostrarPersonajes(personajes) {
  // Limpiar contenido previo
  dataContainer.innerHTML = "";
    // Recorrer lista de personajes y crear elementos HTML
  personajes.forEach(personaje => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.margin = "10px";
    card.style.padding = "10px";
    card.style.display = "inline-block";

    const nombre = document.createElement("h3");
    nombre.textContent = personaje.name;

    const imagen = document.createElement("img");
    imagen.src = personaje.image;
    imagen.alt = personaje.name;
    imagen.style.width = "150px";

    card.appendChild(nombre);
    card.appendChild(imagen);
    dataContainer.appendChild(card);
  });
}

// Función para obtener datos con Fetch
function obtenerConFetch() {
  // Realizar solicitud HTTP con fetch
  fetch(API_URL)
    .then(response => {
      // Validar que la respuesta sea correcta
      if (!response.ok) {
        throw new Error("Error en la solicitud con Fetch");
      }
      return response.json();
    })
    .then(data => {
      // Mostrar personajes en la interfaz
      mostrarPersonajes(data.results);
    })
    .catch(error => {
      // Manejo de errores
      dataContainer.innerHTML = `<p>${error.message}</p>`;
    });
}
