import {createRouter, createWebHashHistory} from 'vue-router'

import EstudianteMain from '../pages/EstudianteMain.vue'
import EstudianteEliminar from '../pages/EstudianteEliminar.vue'
import EstudianteGuardar from '../pages/EstudianteGuardar.vue'
import BienvenidaPage from '../pages/BienvenidaPage.vue'

// Declarar arreglo de objetos que representarán alas pfj
const routes = [
    {
        path: '/buscar',
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
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router