<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand ms-5" href="#">
                    <img src="../assets/img/pokemon-logo.png" alt="" width="200" height="70">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item rounded  ms-3" style="border: 2px solid #F04037; background-color: #F04037;">
                            <a class="nav-link active text-white fw-bold" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item rounded ms-3" style="border: 2px solid #F04037; background-color: #F04037;">
                            <a class="nav-link text-white" href="#">Entrenadores</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar pokémon" aria-label="Buscar pokémon">
                        <button class="rounded-circle border" style="background-color: #2A75BB; color: #FFFFFF; width: 4rem; height: 4rem;">
                            <font-awesome-icon icon="fa-solid fa-user"/>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

import { faUser as fasUser } from '@fortawesome/free-solid-svg-icons'

library.add(fasUser)

export default {
    name: 'Navbar',
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped></style>