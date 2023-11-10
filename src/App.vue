<script>
import {
    RouterLink,
    RouterView
} from 'vue-router'

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
.bodyapp {
    display: flex;
    margin-left: 1em;
}



span.text {
    text-decoration-line: none;
}

.cuerpo {

    background-color: red;
}

.menu {
    background-color: green;
}

body {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
    font-family: "Roboto", sans-serif;
}
.bodyapp{
    position:absolute;
    margin-left: 35px;
}
.sidebar {
    width: 80px;
    background-color: #333;
    color: #fff;
    overflow: hidden;
    height: 100%;
    transition: width 0.1s;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}

.sidebar.active {
    width: 200px;
    overflow: hidden;
}

.toggle-btn {
    font-size: 24px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
}

.nav {
    list-style: none;
    padding: 0;
    margin-top: 60px;
    /* Asegura que el contenido no esté detrás del navbar */
}

.nav li {
    display: flex;
    align-items: center;
    padding: 10px;
}

.nav li i {
    font-size: 20px;
    margin-right: 15px;
}

.text {
    display: none;
}

.sidebar.active .text {
    display: inline;
    text-decoration: none;
}

/* Estilos para el sidebar */
.sidebar {
    width: 40px;
    background-color: #333;
    overflow: hidden;
    height: 100%;
    transition: width 0.1s;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
}

/* Estilos para el contenido principal */

.sidebar.active .navbar {
    justify-content: flex-start;
}

.sidebar.active .navbar .text {
    display: inline;
    text-decoration: none;
}

/* Estilos navbar */

/* Ajustar el contenido principal para evitar que quede detrás del navbar */
.content {
    margin-top: 60px;
}

/* Estilos para cards */
.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit,
            minmax(150px, 1fr));
    /* Se ajusta automáticamente al ancho de la pantalla */
    grid-gap: 20px;
    margin-top: 5px;
}

.card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
}

.card img {
    max-width: 100%;
    height: auto;
}

.card h3 {
    margin-top: 10px;
}

.card p {
    color: #45f322;
}

span.text,
i,
a {
    color: #fbff00;
    text-decoration: none !important;
}

@media (max-width: 767px) {
    .sidebar {
     
        float: right;
      }

 
  }
</style>
