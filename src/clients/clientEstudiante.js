import axios from "axios";

//metodos de consumo de la API

//de forma tradicional
const obtenerPorCedula = async (cedula) => {
    const data = await fetch(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}`)
        .then((response) => response.data);
    console.log(data);
    return data;
}

//con axios
//data como atributo 
// el await esta de forma implicita
const obtenerPorCedulaAxios = async (cedula) => {
    const data = axios.get(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}`)
        .then((response) => response.data);
    console.log(data);
    return data;
}

const guardar = async (estudianteBody) => {

    const data =  axios.post(`http://localhost:8082/API/v1.0/Matricula/estudiantes`, estudianteBody)
        .then((response) => response.data);
    console.log(data);
    return data;
}

const actualizar = async (cedula, estudianteBody) => {

    const data = axios.put(`http://localhost:8082/API/v1.0/Matricula/estudiantes/cedula/${cedula}`, estudianteBody)
        .then((response) => response.data);
    console.log(data);
    return data;
}

const eliminar = async (cedula) => {

    const data = axios.delete(`http://localhost:8082/API/v1.0/Matricula/estudiantes/cedula/${cedula}`)
        .then((response) => response.data);
    console.log(data);
    return data;
}

const actualizarParcial = async (cedula, estudianteBody) => {

    const data = axios.patch(`http://localhost:8082/API/v1.0/Matricula/estudiantes/cedula/${cedula}`, estudianteBody)
        .then((response) => response.data);
    console.log(data);
    return data;
}



//metodos de fachada

export const obtenerPorCedulaFachada = async (cedula) => {
    return await obtenerPorCedulaAxios(cedula);
}

export const guardarFachada = async (estudianteBody) => {
    return await guardar(estudianteBody);
}

export const actualizarFachada = async (cedula, estudianteBody) => {
    return await actualizar(cedula, estudianteBody);
}

export const eliminarFachada = async (cedula) => {
    return await eliminar(cedula);
}

export const actualizarParcialFachada = async (cedula, estudianteBody) => {
    return await actualizarParcial(cedula, estudianteBody);
}