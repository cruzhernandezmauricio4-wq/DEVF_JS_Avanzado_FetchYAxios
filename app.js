// Referencias a los elementos del DOM
const fetchBtn = document.getElementById('fetch-btn');
const axiosBtn = document.getElementById('axios-btn');
const dataContainer = document.getElementById('data-container');

// Función para renderizar personajes en el contenedor
function renderCharacters(characters) {
  // Limpiar contenido previo
  dataContainer.innerHTML = '';

  // Recorrer lista de personajes y crear elementos HTML
  characters.forEach(character => {
    const characterElement = document.createElement('div');
    characterElement.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.image}" alt="${character.name}">
    `;
    dataContainer.appendChild(characterElement);
  });
}

// ---------------------------
// Implementación con Fetch
// ---------------------------
fetchBtn.addEventListener('click', () => {
  // Realizar solicitud HTTP con fetch
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
      // Validar que la respuesta sea correcta
      if (!response.ok) {
        throw new Error('Error en la solicitud con Fetch');
      }
      return response.json();
    })
    .then(data => {
      // Usar la función de renderizado con los resultados
      renderCharacters(data.results);
    })
    .catch(error => {
      // Manejo de errores
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

// ---------------------------
// Implementación con Axios
// ---------------------------
axiosBtn.addEventListener('click', () => {
  // Realizar solicitud HTTP con axios
  axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      // Axios ya convierte la respuesta en JSON automáticamente
      const data = response.data;
      renderCharacters(data.results);
    })
    .catch(error => {
      // Manejo de errores
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});
