<template>
    <div class="container">
        <formulario/>
        
        <div class="botones">


        </div>


    </div>

</template>

<script>
import formulario from '../components/Formulario.vue'

export default {

    components: {
        formulario

    }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
  border: 2px solid #eaeaea;
  border-radius: 10px;
  background-color: #f9f9f9;
}
.botones{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
}

button{
    padding: 10px;
    width: 100%;
    background-color: #f9f9f9;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    cursor: pointer;
}
</style>