<template>
    <div>
      <!-- Inicia card del pokémon -->
      <div class="card text-center" style="background-color: #2A75BB; cursor: pointer;" @click="fetchEvolutions">
        <h4 class="text-white mt-4">Id del pokémon: {{ pokemon.id }}</h4>
        <img :src="pokemon.sprites.front_default" class="card-img-top" alt="pokemon image">
        <div class="card-body d-flex flex-column justify-content-center align-content-center">
          <hr style="color: #5F97CC;">
          <p class="card-title text-white fw-bold" style="font-size: 1rem;">Nombre del pokémon:
            <span style="color: #FFCB05;">{{ pokemon.name }}</span>
          </p>
          <button class="btn mt-3" style="background-color: #FFCB05; color: #2A75BB;font-weight: bold;"
            @click.stop="action">{{ buttonText }}</button>
        </div>
      </div>
      <!-- Termina card del pokémon -->
  
      <!-- Modal -->
      <div class="modal fade" id="pokemonModal" tabindex="-1" aria-labelledby="pokemonModalLabel" aria-hidden="true"
        :class="{ show: showModal }" :style="{ display: showModal ? 'block' : 'none' }">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="pokemonModalLabel">{{ pokemon.name }}</h5>
              <button type="button" class="btn-close" style="background-color: #FFCB05; color: #F04037;"
                @click="toggleModal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img :src="pokemon.sprites.front_default" class="img-fluid" alt="pokemon image"
                style="width: 10rem; height: 10rem;">
              <h4>Habilidades:</h4>
              <ul>
                <li v-for="ability in pokemon.abilities" :key="ability.ability.name">{{ ability.ability.name }}</li>
              </ul>
              <h4>Evoluciones:</h4>
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item" :class="{ active: index === 0 }" v-for="(evolution, index) in evolutions"
                    :key="index">
                    <img :src="evolution.image" class="d-block w-100" alt="evolution image">
                    <br><br>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>{{ evolution.name }}</h5>
                      <p>HP: {{ evolution.hp }}</p>
                      <h6>Habilidades:</h6>
                      <p v-for="ability in pokemon.abilities" :key="ability.ability.name">{{ ability.ability.name }}</p>
                      <div class="card-text">
                        <div class="d-flex flex-wrap justify-content-center mt-2">
                          <strong class="text-white">Tipo: </strong>
                          <TypeBadges v-for="type in pokemon.types" :key="type.type.name" :type="type.type.name" />
                        </div>
                      </div>
                      <br>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import TypeBadges from '../components/TypeBadges.vue';

  export default {
    components: {
      TypeBadge,
    },
    props: {
      pokemon: Object,
      action: Function,
      buttonText: String
    },
    data() {
      return {
        showModal: false,
        evolutions: []
      };
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal;
      },
      async fetchEvolutions() {
        try {
          const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${this.pokemon.id}/`);
          const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
          const evolutionResponse = await axios.get(evolutionChainUrl);
          this.evolutions = await this.parseEvolutions(evolutionResponse.data.chain);
          this.toggleModal();
        } catch (error) {
          console.error('Error fetching evolutions:', error);
        }
      },
      async parseEvolutions(chain) {
        const evolutions = [];
        let current = chain;
  
        while (current) {
          const pokemonId = current.species.url.split('/').slice(-2, -1)[0];
          const pokemonData = await this.fetchPokemonData(pokemonId);
  
          evolutions.push({
            name: current.species.name,
            image: pokemonData.sprites.front_default,
            hp: pokemonData.stats.find(stat => stat.stat.name === 'hp').base_stat,
            abilities: pokemonData.abilities.map(ability => ability.ability.name)
          });
  
          current = current.evolves_to[0];
        }
  
        return evolutions;
      },
      async fetchPokemonData(pokemonId) {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
          return response.data;
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
          return null;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-content {
    background-color: #2A75BB;
    color: #FFCB05;
  }
  
  .carousel-caption {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
  }
  </style>
  