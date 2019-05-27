<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body, #app {
  padding: 0;
  margin: 0;
}
#app {
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
