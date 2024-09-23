<template>
    <div class="border rounded rounded-5 border-2" style="background-color: #FFFFFF;">
        <div class="container rounded-5 mt-4">
            <div class="row">
                <div class="col-xl-6 col-12 col-md-12 col-sm-12">
                    <div class="container-fluid">
                        <div class="row rounded-bottom rounded-5 pt-2 ps-2"
                            style="background-color:  #4A90E2; color:  #FFFFFF;">
                            <p style="font-size: 2rem; font-weight: bold;">
                                <font-awesome-icon icon="fa-solid fa-users" />
                                    Mi Poketeam
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-12 col-md-12 col-sm-12">
                    <div class="container-fluid">
                        <div class="row rounded-bottom rounded-5 pt-2 ps-2"
                            style="background-color:  #4A90E2; color:  #FFFFFF;">
                            <div class="col-6 col-md-6 col-sm-12">
                                <p style="font-size: 2rem; font-weight: bold;">
                                    <font-awesome-icon icon="fa-solid fa-book-open" />
                                    Pokedex
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
    </div>
</template>

<script>
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBookOpen as fasBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faUsers as fasUsers } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

library.add(fasBookOpen, fasUsers)

export default {

    setup() {

        return {}
    }
}
</script>

<style lang="scss" scoped></style>