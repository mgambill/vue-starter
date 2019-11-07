<template lang="pug">
  #nav
    template(v-for="(r, $index) in $options.routes")
      router-link(:to="{ name: r.name }") {{ r.label }}
      span(v-if="$index < $options.routes.length - 1")   |  
</template>

<script>
import { routes } from "../router"
export default {
  name: "AppHeader",
  components: {},
  routes,
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
