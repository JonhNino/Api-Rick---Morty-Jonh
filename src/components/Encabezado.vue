<template>
    <div id="app">
        <b-navbar toggleable="md" type="dark" variant="info">
      <b-container>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand class="text-dark">Rick & Morty</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/Personajes">Personajes</b-nav-item>
          </b-navbar-nav>
          
        </b-collapse>
    
      </b-container>
    </b-navbar>

    </div>
</template>
