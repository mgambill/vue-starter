<template lang="pug">
#app  
  AppHeader
  slot

    //- portal-target(name="modal")

</template>

<script>
import AppHeader from "../components/AppHeader"
export default {
  name: "MainLayout",
  components: { AppHeader }
}
</script>
