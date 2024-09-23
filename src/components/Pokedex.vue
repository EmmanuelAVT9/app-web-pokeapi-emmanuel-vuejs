<template>
    <div>
        <div class="container-fluid">
            <div class="row rounded-bottom rounded-5 pt-2 ps-2" style="background-color:  #4A90E2; color:  #FFFFFF;">
                <div class="col-6 col-md-6 col-sm-12">
                    <p style="font-size: 2rem; font-weight: bold;"><font-awesome-icon  icon="fa-solid fa-book-open" /> Pokedex</p>
                </div>
            </div>
            <div class="row g-4 mt-2" style="background-color:  #F5F5F4;">
                <div v-if="loading" class="col-12 text-center">
                    <p>Cargando Pokémones...</p>
                </div>
                <div v-if="error" class="col-12 text-center">
                    <p>Error al cargar los Pokémones: {{ error }}</p>
                </div>
                <div v-for="(pokemon, index) in pokedex" :key="pokemon.name" class="col-md-4 mb-4">
                    <PokemonCard :pokemon="pokemon" :action="() => addToTeam(pokemon)"
                        buttonText="Agregar a mi Poketeam" :evolutions="pokemonEvolutions" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getPokemons, getPokemonDetails } from '../api/pokemonService';
import PokemonCard from './PokemonCard.vue';

export default {
    components: {
        PokemonCard,
    },
    data() {
        return {
            pokedex: [],
            loading: false,
            error: null,
        };
    },
    async created() {
        this.loading = true;
        try {
            const pokemons = await getPokemons();
            const pokemonDetailsPromises = pokemons.map(pokemon => getPokemonDetails(pokemon.name));
            this.pokedex = await Promise.all(pokemonDetailsPromises);
        } catch (error) {
            this.error = error.message;
        } finally {
            this.loading = false;
        }
    },
    methods: {
        addToTeam(pokemon) {
            this.$emit('add', pokemon);
        },
    },
};
</script>

<style scoped></style>