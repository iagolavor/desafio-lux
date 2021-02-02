<template>
  <div id="app">
    <v-container fill-height class="container">
      <router-view/>
    </v-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  min-height: 1024px;
}
</style>
