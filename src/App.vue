<template>
  <Menu/>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style lang="scss">
  body{
    margin: 0 !important;
    padding: 0 !important;
  }
  .clr-green{
        background-color: #00A878;
  }
  .clr-blue{
      background-color: #2E3FDB;
  }
  .clr-purple{
      background-color: #581FD1;
  }
  .clr-yellow{
      background-color: #D9B433;
  }
  .clr-orange{
      background-color: #E98121;
  }
  .clr-red{
      background-color: #D22B2B;
  }
</style>
