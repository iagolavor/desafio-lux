<template>
  <div class="home">
    <Lettermark/>
    <SearchBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/Searchbar.vue'
import Lettermark from '@/components/Lettermark.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    Lettermark
  }
}
</script>

<style scoped>

</style>
