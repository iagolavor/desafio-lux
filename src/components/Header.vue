<template>
    <v-row justify="space-between" style="max-width:1440px; margin:0 auto;">
        <div style="width:311px; display:flex; justify-content:space-around;">
            <div class="github">
                Github
            </div>
            <div class="search">
                Search
            </div>
        </div>
        <v-spacer/>
        <div style="width:700px;">
            <Searchbar/>
        </div>
    </v-row>
</template>

<script>
import Searchbar from '@/components/Searchbar.vue'

export default {
    name: 'Header',
    data: () => ({
    }),
    components:{
        Searchbar
    }
}
</script>

<style scoped>
.lettermark{
    width: 311px;
    align-items: center;
}
.github{
    font-family: Roboto Mono;
    font-weight: 700;
    font-size: 42px;
}
.search{
    font-family: Rubik;
    font-weight: 300;
    font-style: italic;
    font-size: 42px;
}
</style>