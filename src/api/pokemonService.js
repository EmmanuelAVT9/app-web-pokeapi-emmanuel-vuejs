import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

/**
 * Función para obtener una lista de Pokémon.
 * @param {Number} limit - El número de Pokémon a obtener.
 * @param {Number} offset - El desplazamiento para la paginación.
 * @returns {Promise} - Promesa que resuelve con la lista de Pokémon.
 */
export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon`, {
      params: {
        limit,
        offset
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    throw error;
  }
};

/**
 * Función para obtener los detalles de un Pokémon por su nombre o ID.
 * @param {String|Number} id - El nombre o ID del Pokémon.
 * @returns {Promise} - Promesa que resuelve con los detalles del Pokémon.
 */
export const getPokemonDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for Pokémon ${id}:`, error);
    throw error;
  }
};
