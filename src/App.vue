<template>
  <div id="app">
    <transition name="scale-fade" mode="out-in">
      <router-view/>
    </transition>
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

.scale-fade-enter-active, .scale-fade-leave-active {
  transition: transform .5s ease-in-out, opacity .5s ease-in-out;
}
.scale-fade-enter, .scale-fade-leave-to {
  opacity: 0;
  transform: scale(.95);
}
</style>
