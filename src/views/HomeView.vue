<script setup>
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faUser as fasUser } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons'

library.add(fasStar,fasUser,farStar)
</script>

<template>
  <main>
    <h1>Aqui estara la vista Home</h1>
    Home View <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon icon="fa-regular fa-star" />
    <font-awesome-icon icon="fa-solid fa-user" />
  </main>
</template>
