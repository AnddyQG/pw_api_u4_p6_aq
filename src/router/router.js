import {createRouter, createWebHashHistory} from 'vue-router'

import EstudianteMain from '../pages/EstudianteMain.vue'
import EstudianteEliminar from '../pages/EstudianteEliminar.vue'
import EstudianteGuardar from '../pages/EstudianteGuardar.vue'
import BienvenidaPage from '../pages/BienvenidaPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import BloqueadoPage  from '@/pages/BloqueadoPage.vue'
// Declarar arreglo de objetos que representarán alas pfj
const routes = [
  
    {
        path: '/buscar/:id',
        component: EstudianteMain
    },

    {
        path: '/eliminar',
        component: EstudianteEliminar
    }, 

    {
        path: '/guardar',
        component: EstudianteGuardar
    }, 

    {
        path: '/',
        component: BienvenidaPage
    },
    {
        path:'/:pathMatch(.*)*',
        component: NotFoundPage
    },
    {
        path: '/bloqueado',
        name: 'block',
        component: BloqueadoPage
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


//programar guardianes

router.beforeEach((to,from,next)=>{
    console.log('Guardianes')
    console.log(to)
    console.log(from)
    console.log(next)

    let usuario='anddy'
    let resultados= false
    const random = Math.random()*100
    console.log('Numero = ' + random)
 
    if(random>50) {
        console.log('Usuario autenticado')
        next()
    }else{
        console.log('Redireccionando al login')
        next('block')
    }

})

export default router