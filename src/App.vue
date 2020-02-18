<template>
  <div id="app">
    <header>
      <router-link to="/">PageA</router-link>
      <router-link to="/page-b">PageB</router-link>
    </header>
    <router-view />
    <footer>
      Copyright &copy; 2020 Lai
    </footer>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  padding: 30px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  font-size: 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    line-height: 20px;
    font-size: 18px;
    padding: 0 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
footer {
  font-weight: bold;
  box-shadow: 0px -2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 30px;
  line-height: 20px;
  font-size: 12px;
}
</style>
