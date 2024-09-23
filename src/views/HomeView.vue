<script setup>
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faUser as fasUser } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

import Navbar from '@/components/Navbar.vue';
import SectionWhite from '@/components/SectionWhite.vue';

library.add(fasStar, fasUser, farStar)

</script>

<template>
  <div style="background-color: #FFCB05;">
    <Navbar />
    <SectionWhite />
  </div>
</template>
