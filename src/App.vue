<template>
  <div id="app">
    <div class="Containerh1 text-left  text-black " id="encabezado">
      <h1 class="TituloEnca ">
        Nos encontramos a tu servicio 24/7. Contactanos al Telefono 068-0000000
        300-0000-000. Buscanos tambien en faceboook, Instagram y Twitter
      </h1>
    </div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Rick & Morty</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/pagina">Pagina</b-nav-item>
            <b-nav-item to="/personajes/1">Personajes</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container>
      <router-view />
    </b-container>
    <footer>
      <div class="Containerpie text-center text-white " id="PiedePag">
        <h1 class="CopyPiedePag">Copyright © 2021 Jonh Niño</h1>
      </div>
    </footer>
  </div>
</template>

<style>
/* Tdos los bodys */

/* Encabezado Rojo */
#encabezado {
  background: black;
  width: 100%;
  height: 20px;
}
.TituloEnca {
  font-family: Tahoma, sans-serif;
  font-size: 15px;
  margin-left: 80px;
}
/* Pie De Pagina */
#PiedePag {
  background: red;
  width: 100%;
  height: 20px;
}
.CopyPiedePag {
  font-family: Tahoma, sans-serif;
  font-size: 15px;
}
</style>
