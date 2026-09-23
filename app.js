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
  