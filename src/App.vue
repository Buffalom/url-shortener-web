<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

body, #app {
  padding: 0;
  margin: 0;

  font-family: 'Nunito', 'Trebuchet MS', 'Arial', sans-serif;
  font-size: 18px;
}
#app {
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
