<template>
  <div id="app">
    <transition name="scale-fade" mode="out-in" appear>
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

  & > div {
    max-width: 95%;
    width: 500px;
  }

  .layout {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  a {
    position: relative;
    color: inherit;
    text-decoration: none;

    &::before, &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;

      height: 2px;
      width: 100%;

      background-color: #eee;
    }

    &::before {
      width: 0;
      left: 50%;
      transition: width .1s ease-in-out, left .1s ease-in-out;

      z-index: 1;
      margin: 0 auto;

      background-color: #ccc;
    }

    &:hover::before, &:focus::before {
      width: 100%;
      left: 0;
    }

    &:active, &:focus {
      outline: none;
    }
  }
}

.scale-fade-enter-active, .scale-fade-leave-active {
  transition: transform .3s ease-in-out, opacity .3s ease-in-out;
}
.scale-fade-enter, .scale-fade-leave-to {
  opacity: 0;
  transform: scale(.95);
}
</style>
