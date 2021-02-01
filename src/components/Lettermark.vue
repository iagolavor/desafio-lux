<template>
    <v-row ml-1 class="lettermark">
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
    position: absolute;
    width: 473px;
    height: 76px;
    justify-content: space-between;
    left: 477px;
    top: 445px;
}
.github{
    font-family: Roboto;
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