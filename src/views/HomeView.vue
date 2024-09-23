<template>
  <div style="background-color: #FFCB05;">
    <Navbar />
    <section class="border rounded rounded-5 border-2" style="background-color: #FFFFFF;">
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-md-6">
            <Poketeam :poketeam="poketeam" @remove="removePokemon" />
          </div>
          <div class="col-md-6">
            <Pokedex :pokedex="pokedex" @add="addPokemon" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getPokemons } from '../api/pokemonService';
import Poketeam from '../components/Poketeam.vue';
import Pokedex from '../components/Pokedex.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Poketeam,
    Pokedex,
    Navbar,
  },
  data() {
    return {
      poketeam: [],
      pokedex: getPokemons(),
    };
  },
  methods: {
    addPokemon(pokemon) {
      if (!this.poketeam.includes(pokemon) && this.poketeam.length < 6) {
        this.poketeam.push(pokemon);
      }
    },
    removePokemon(pokemon) {
      this.poketeam = this.poketeam.filter((p) => p.name !== pokemon.name);
    },
  },
};

</script>