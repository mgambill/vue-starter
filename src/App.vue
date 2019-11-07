<template lang="pug">
  component(:is="layoutTemplate")
    router-view
  
</template>
<script>
import BlankLayout from "./layouts/BlankLayout"
import MainLayout from "./layouts/MainLayout"
export default {
  name: "App",
  components: {
    BlankLayout,
    MainLayout
  },
  computed: {
    layoutTemplate() {
      const layout = this.$route.meta && this.$route.meta.layout
      return layout || "MainLayout"
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
