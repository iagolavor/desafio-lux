<template>
    <div class="header">
        <div class="lettermark">
            <div class="github">
                Github
            </div>
            <div class="search">
                Search
            </div>
        </div>
        <Searchbar/>
    </div>
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
.header{
    width: 1384px;
    height: 50px;
}
.github{
    font-family: Roboto Mono;
    font-weight: 700;
    font: 42px;
}
.search{
    font-family: Rubik;
    font-weight: 300;
    font-style: italic;
    font-size: 42px;
}
</style>