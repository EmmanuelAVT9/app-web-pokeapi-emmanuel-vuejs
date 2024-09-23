<template>
    <div class="border rounded rounded-5 border-2" style="background-color: #FFFFFF;">
        <div class="container rounded-5 mt-5 border">
            <div class="row">
                <div class="col-xl-6 col-12 col-md-12 col-sm-12">
                    <Poketeam />
                </div>
                <div class="col-xl-6 col-12 col-md-12 col-sm-12">
                    <Pokedex />
                </div>
            </div>
        </div>
        <br><br>
    </div>
</template>

<script>
import Pokedex from '../components/Pokedex.vue';
import Poketeam from '../components/Poketeam.vue';


export default {
    components: {
        Pokedex,
        Poketeam,
    },
    setup() {

        return {}
    }
}
</script>

<style lang="scss" scoped></style>