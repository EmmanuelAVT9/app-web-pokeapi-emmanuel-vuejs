<template>
  <div>
    <div class="row rounded-bottom rounded-5 pt-2 ps-2" style="background-color:  #4A90E2; color:  #FFFFFF;">
      <p style="font-size: 2rem; font-weight: bold;">
        <font-awesome-icon icon="fa-solid fa-users" />
        My Poketeam
      </p>
    </div>
    <div class="row g-4 mt-2" style="background-color:  #F5F5F4;">
      <div class="col-md-4 mb-3" v-for="pokemon in poketeam" :key="pokemon.name">
        <PokemonCard :pokemon="pokemon" :action="() => removeFromTeam(pokemon)" buttonText="Eliminar" />
      </div>
    </div>
  </div>
</template>

<script>
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers as fasUsers } from '@fortawesome/free-solid-svg-icons'

import PokemonCard from './PokemonCard.vue';

library.add(fasUsers)

export default {
  components: {
    PokemonCard,
  },
  props: {
    poketeam: Array,
  },
  emits: ['remove'],
  methods: {
    removeFromTeam(pokemon) {
      this.$emit('remove', pokemon);
    },
  },
};
</script>