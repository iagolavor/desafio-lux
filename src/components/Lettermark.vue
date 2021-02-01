<template>
    <v-row class="lettermark">
        <div class="github">
            Github
        </div>
        <div class="search">
            Search
        </div>
    </v-row>
</template>

<script>
export default {
    name: 'Lettermark',
    data: () => ({

    })
}
</script>

<style scoped>
.lettermark{
    width: 473px;
    height: 76px;
    justify-content: space-around;
}
.lettermark.row{
    margin: 0 auto;
}

.github{
    font-family: Roboto Mono;
    font-size: 64px;
    font-weight:700 
}
.search{
    font-family: Rubik;
    font-weight: 300;
    font-style: italic;
    font-size: 64px;
}
</style>