<template>
  <div class="page">
    <div class="title">
      <p>PageB</p>
      <div class="router">
        <router-link to="/page-b/first">First</router-link>
        <router-link to="/page-b/second">Second</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100vh - 160px);
  display: flex;
  align-items: center;
  .title {
    width: 20%;
    height: 100%;
    background-color: #cf4346;
    padding: 10px;
    p {
      font-size: 50px;
      color: #510a0a;
    }
  }
  .router {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    a {
      font-weight: bold;
      color: #fff;
      line-height: 20px;
      font-size: 20px;
      padding: 10px;
      // &.router-link-exact-active {
      //   color: #42b983;
      // }
    }
  }
}
</style>
