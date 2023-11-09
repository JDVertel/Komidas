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
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

<body>
   
        <div class="sidebar" v-on:mouseover="openSidebar()" v-on:mouseout="closeSidebar()">
            <ul class="nav">
                <li>
                    <RouterLink to="/"> <i class="bi bi-whatsapp"></i><span class="text">Whatsapp</span></RouterLink> <br>
                </li>
                <li>
                    <RouterLink to="/about"><i class="bi bi-facebook"></i><span class="text">Facebook</span></RouterLink> <br>
                </li>
                <li>
                    <RouterLink to="/menu"> <i class="bi bi-instagram"></i><span class="text">Instagram</span></RouterLink>
                </li>
                <li>
                    <i class="bi bi-youtube"></i><span class="text">YouTube</span>
                </li>
                <li><i class="bi bi-amd"></i><span class="text">AMD</span></li>
            </ul>
        </div>

    <RouterView />

</body>
</div>
</template>

<style>

.cuerpo {

    background-color: red;
}

.menu {
    background-color: green;
}

html,
body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 30px;
    padding: 0;

    font-family: "Roboto", sans-serif;
}

body {
    display: flex;
}

.sidebar {
    width: 60px;
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
}

.sidebar.active {
    width: 200px;
}

/* Estilos para el navbar */

.navbar .toggle-btn {
    font-size: 24px;
    background-color: #33333300;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px;
}

.navbar-nav li a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #e67171;
}

/* Estilos para el sidebar */
.sidebar {
    width: 50px;
    background-color: #333;
    color: #fff;
    overflow: hidden;
    height: 100%;
    transition: width 0s;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
}

.sidebar.active {
    width: 200px;
}

/* Estilos para el contenido principal */

.sidebar.active .navbar {
    justify-content: flex-start;
}

.sidebar.active .navbar .text {
    display: inline;
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
    color: #555;
}
</style>
