<template>
  <div class="container">
    <p1/>
  </div>
</template>

<script>
import p1 from './pages/EstudianteActua.vue'
import p2 from './pages/EstudianteEliminar.vue'
import p3 from './pages/EstudianteGuardar.vue'

export default {
  name: 'App',
  components: {
    p1,
    p2,
    p3
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>