<template>
  <div class="p-4">
    <h1 class="text-center font-bold text-2xl">{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
