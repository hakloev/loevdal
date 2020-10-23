<template>
  <div class="hello">
    <h1><a href="/">{{ msg }}</a></h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  cursor: default; 
}

a:visited {
  color: black;
}
</style>
