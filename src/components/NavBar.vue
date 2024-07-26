<template>
   
 <div>
<router-link to="/"> Bienvenida </router-link>
<router-link to="/buscar/vacio"> Estudiante buscar </router-link>
<router-link to="/guardar"> Estudiante crear </router-link>
<router-link to="/eliminar"> Estudiante eliminar </router-link>

</div>
</template>
   
  <script>
export default{

}
  </script>
   
  <style scoped>
   
div{
    padding: 0px 70px;
}
div a{
    color: blueviolet;
    margin: 0px 10px;
    border: solid;
}

  </style>