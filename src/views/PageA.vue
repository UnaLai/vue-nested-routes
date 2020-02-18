<template>
  <div class="page">
    <div class="title">I am PageA</div>
    <!-- <button @click="redirect">ddd</button> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    redirect() {
      //name
      this.$router.push({ name: "First" });
      //path
      this.$router.push({ path: "page-b/first" });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  height: calc(100vh - 160px);
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    width: 50%;
    height: 200px;
    background-color: #193660;
    font-size: 50px;
    line-height: 200px;
    color: #fff;
  }
}
</style>
