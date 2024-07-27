<template>
   
 <div>
<router-link to="/"> Bienvenida </router-link>
<router-link to="/buscar/vacio"> Estudiante buscar </router-link>
<router-link :to="{path: '/guardar', query: {cedula: '12313134'}}"> Estudiante crear </router-link>
<router-link to="/eliminar"> Estudiante eliminar </router-link>

</div>
</template>
   
  <script>
export default{

}
  </script>
   //con quey aparece la cedula
   //con params no aparece nada
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