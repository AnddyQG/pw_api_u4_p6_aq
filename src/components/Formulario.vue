<template>
    <div class="container">
      <p class="form-title">Formulario Estudiante</p>
  
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input v-model="nombre" type="text" class="form-control" id="nombre" />
      </div>
  
      <div class="form-group">
        <label for="apellido">Apellido</label>
        <input
          v-model="apellido"
          type="text"
          class="form-control"
          id="apellido"
        />
      </div>
  
      <div class="form-group">
        <label for="fecha">Fecha nacimiento</label>
        <input v-model="fecha" type="date" class="form-control" id="fecha" />
      </div>
  
      <div class="form-group">
        <label for="genero">Genero</label>
        <input v-model="genero" type="text" class="form-control" id="genero" />
      </div>
  
      <div class="form-group">
        <label for="cedula">Cedula</label>
        <input v-model="cedula" type="text" class="form-control" id="cedula" />
      </div>
  
      <button v-on:click="consultar">Consultar</button>
      <button v-on:click="actualizar">Actualizar</button>
      <button v-on:click="guardar">Guardar</button>
      <button v-on:click="eliminar">Eliminar</button>
    </div>
  </template>
  
  <script>
  import {
    obtenerPorCedulaFachada,
    actualizarFachada,
    guardarFachada,
    eliminarFachada,
  } from "../clients/clientEstudiante.js";
  
  export default {
    methods: {
     async guardar(){
        const bodyEstudiante = {
          nombre: this.nombre,
          apellido: this.apellido,
          fecha: this.fecha,
          genero: this.genero,
          cedula: this.cedula,
        };
        const data = await guardarFachada(bodyEstudiante);
        console.log(data);
      },
      async consultar() {
        console.log(this.cedula);
  
        const data = await obtenerPorCedulaFachada(this.cedula);
        console.log(data);
        console.log(data.nombre);
        console.log(data.apellido);
        this.genero = data.genero;
        this.fecha = data.fecha;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
      },

      async eliminar(){
        const data = await eliminarFachada(this.cedula);
        this.cedula = data.cedula;
      },
  
      async actualizar() {
        console.log("Actualizar");
  
        console.log(this.fecha);
        //'2023-05-11T18:00:00'
        let fechafinal = this.fecha + "T09:10:00";
  
        const bodyEstudiante = {
          nombre: this.nombre,
          apellido: this.apellido,
          fecha: this.fecha,
          genero: this.genero,
          cedula: this.cedula,
        };
  
        const data = await actualizarFachada(this.cedula, bodyEstudiante);
        console.log(data);
      },
    },
  
    data() {
      return {
        nombre: null,
        apellido: null,
        fecha: null,
        genero: null,
        cedula: null,
      };
    },
  };
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
    border: 2px solid #000000;
    border-radius: 10px;
    background-color: #000000;
  }
  
  .form-title {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
  }
  
  .form-control {
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid #ddd;
    background-color: #fff;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
  }
  button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff; /* Color de fondo azul */
  color: white; /* Texto en color blanco */
  cursor: pointer; /* Cambia el cursor a una mano al pasar sobre el botón */
  margin-right: 10px; /* Espacio a la derecha del botón */
}

button:hover {
  background-color: #0056b3; /* Color de fondo más oscuro al pasar el mouse */
}
  </style>