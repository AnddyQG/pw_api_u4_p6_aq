import axios from "axios";
//metodos de consumo api

const  obtenerPorCedula = async(cedula)=> {

   const data= await fetch('http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula${cedula}').then(r=>r.json());
console.log(data);
return data;     

}

const obtenerPorCedulaAxios=async(cedula)=>{
const data= await axios.get('http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula${cedula}').then(r=>r.data)
console.log(data);
return data;

}
const guardar= (estudianteBody)=>{
    axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`,estudianteBody).then(r=>r.data);
console.log(data)
return data;
}

const actualizar=(cedula,estudianteBody)=>{
    axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula${cedula}`,estudianteBody).then(r=>)
 console.log(data);
 return data;
}


const actualizarParcial=(cedula,estudianteBody)=>{
    axios.patch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula${cedula}`,estudianteBody).then(r=>)
 console.log(data);
 return data; 
}

const eliminar=async(cedula) =>{
   return await obtenerPorCedula(cedula);
}


//metodos de fachada
export const  obtenerPorCedulaFachada = async(cedula)=> {

return await obtenerPorCedulaAxios(cedula);
 
 }
 
 export const obtenerPorCedulaAxiosFachada=async(cedula)=>{

 return await obtenerPorCedulaAxios(cedula);
 
 }
 export const guardarFachada= async(estudianteBody)=>{
    
    return await guardar(estudianteBody);
 }
 
 export const actualizarFachada=async(cedula,estudianteBody)=>{

    return await actualizar (cedula,estudianteBody)
 }
 
 
 export const actualizarParcialFachada= async (cedula,estudianteBody)=>{
 
    return await actualizarParcial(cedula,estudianteBody);
 }
 
 export const eliminarFachada=async(cedula) =>{
    return await eliminar(cedula);
  
 }
 