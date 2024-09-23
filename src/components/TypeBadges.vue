<template>
    <!-- <p>Tipo: </p> -->
    <span :class="badgeClass" class="badge p-2 text-white d-flex align-items-center ms-3">
        <img :src="iconSrc" alt="No hay tipo" class="me-2" width="20" height="20" />
        {{ type }}
    </span>
</template>

<script>
export default {
    props: {
        type: String
    },
    computed: {
        // Definimos las clases de estilo para cada tipo de Pokémon
        badgeClass() {
            switch (this.type) {
                case 'water':
                    return 'bg-primary'; // Azul para agua
                case 'fire':
                    return 'bg-danger';  // Rojo para fuego
                case 'grass':
                    return 'bg-success'; // Verde para planta
                case 'electric':
                    return 'bg-warning'; // Amarillo para eléctrico
                case 'psychic':
                    return 'bg-pink';    // Rosa para psíquico
                case 'ice':
                    return 'bg-info';    // Azul claro para hielo
                case 'dragon':
                    return 'bg-purple';  // Morado para dragón
                case 'fairy':
                    return 'bg-light';   // Color claro para hada
                default:
                    return 'bg-secondary'; // Gris por defecto
            }
        },
        // Definimos los íconos para cada tipo de Pokémon
        iconSrc() {
            switch (this.type) {
                case 'water':
                    return '../assets/img/tipos/water.png';
                case 'fire':
                    return '../assets/img/tipos/water.png';
                case 'grass':
                    return '../assets/img/tipos/water.png';
                case 'electric':
                    return '../assets/img/tipos/water.png';
                case 'psychic':
                    return '../assets/img/tipos/water.png';
                case 'ice':
                    return '../assets/img/tipos/water.png';
                case 'dragon':
                    return '../assets/img/tipos/water.png';
                case 'fairy':
                    return '../assets/img/tipos/water.png';
                default:
                    return '../assets/img/tipos/water.png';

            }
        }
    }
};
</script>

<style scoped>
.bg-pink {
    background-color: #f8b3d0;
}

.bg-purple {
    background-color: #6f42c1;
}
</style>