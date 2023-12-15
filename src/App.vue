<script>
import {
    RouterLink,
    RouterView
} from 'vue-router'
import "./assets/styles.css"
export default {
    methods: {
        toggleSidebar() {
            const sidebar = document.querySelector(".sidebar");
            sidebar.classList.toggle("active");
        },

        openSidebar() {
            const sidebar = document.querySelector(".sidebar");
            sidebar.classList.add("active");
        },
        closeSidebar() {
            const sidebar = document.querySelector(".sidebar");
            sidebar.classList.remove("active");
        }
    }
}
</script>

<template>
<div class="container">

    <header>
   
     
    </header>

    <body>
        <div class="sidebar" v-on:mouseover="openSidebar()" v-on:mouseout="closeSidebar()">
            <ul class="nav">
                <li>
                    <RouterLink to="/"><i class="bi bi-house"></i><span class="text">Home</span></RouterLink> <br>
                </li>

                <li>
                    <RouterLink to="/productos"> <i class="bi bi-backpack-fill"></i><span class="text">Productos</span></RouterLink>
                </li>
                <!--  -->
                <li>
                    <RouterLink to="/mesas"> <i class="bi bi-person-rolodex"></i><span class="text">Mesas</span></RouterLink>
                </li>
                <li>
                    <RouterLink to="/usuarios"> <i class="bi bi-people"></i><span class="text">Usuarios</span></RouterLink>
                </li>
                <li>
                    <RouterLink to="/ventasensitio"><i class="bi bi-bookmark-check-fill"></i><span class="text">Ventas en sitio</span></RouterLink>
                </li>
                <li>
                    <RouterLink to="/domicilios"> <i class="bi bi-truck"></i><span class="text">Domicilios</span></RouterLink>
                </li>
                <li>
                    <RouterLink to="/caja"> <i class="bi bi-cash-coin"></i><span class="text">Caja</span></RouterLink>
                </li>
                <li>
                    <RouterLink to="/contabilidad"> <i class="bi bi-calculator"></i><span class="text">Contabilidad</span></RouterLink>
                </li>
                <li>
                    <RouterLink to="/empresa"> <i class="bi bi-buildings"></i><span class="text">Empresa</span></RouterLink>
                </li>
                <!--  -->

                <li>
                    <RouterLink to="/about"><i class="bi bi-info-circle"></i><span class="text">Acerca de Nosotros</span></RouterLink> <br>
                </li>
            </ul>
        </div>
     
     
    </body>
    <div class="bodyapp">   <RouterView /></div>

</div>
</template>

<style>

</style>
