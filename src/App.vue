<template>
  <div id="app">
    <v-container fill-height>
      <v-row class="helper">
        <router-view/>
      </v-row>
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

.helper{
  align-items: center;
  justify-content: center;
  min-height: 1024px;
}
</style>
