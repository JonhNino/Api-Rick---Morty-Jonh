<template>
  <div class="home">
    <center>
      <img class="logo" src="@/assets/logo.png" alt="" />
    </center>

    <b-row class=" mt-5 ">
      <b-col cols="12" md="15">
        <center>
          <b-card
            title=" Serie Rick & Morty "
            img-src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="  bg-danger mb-2"
          >
            <h1 class="text-white">Sinopsis:</h1>
            <p>
              Rick es un brillante científico un tanto borracho que secuestra a
              su irritable nieto adolescente Morty para vivir aventuras en otros
              mundos y en dimensiones alternativas.
            </p>
            <p class="text-warning">Protagonistas:</p>
            <p>Justin Roiland,Chris Parnell,Spencer Grammer</p>
            <p class="text-warning">Creado por:</p>
            <p>Dan Harmon,Justin Roiland</p>
            <p class="text-primary">¿Quieres saber mas de esta historia?</p>
          </b-card>
        </center>
      </b-col>
    </b-row>
    <hr />
    <div class="mt-5">
      <b-row>
        <b-col cols="12" md="6" lg="6">
          <p class="text-white">
            Oprime en el boton y adivina que mas pasa en esta Historia. Podras
            Averiguar que sucede en la serie de forma Gratuita y desde la
            comodidad de tu casa
          </p>
          <center>
            <b-button
              pill
              variant="warning"
              href="https://danimados.com/?s=rick+and+morty"
              >¡Click Here!</b-button
            >
          </center>
        </b-col>
        <b-col cols="12" md="6" lg="6">
          <p class="text-white">
            Tambien puedes ver la serie desde Netflix un servicio de streaming
            por suscripción que les permite a sus miembros ver series y
            películas sin publicidades en un dispositivo con conexión a
            internet. da click en el boton
          </p>
          <center>
            <b-button
              pill
              variant="danger"
              href="https://www.netflix.com/co/title/80014749"
              >Netflix
            </b-button>
          </center>
        </b-col>
      </b-row>
      <hr />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style>
body {
  background: #081119;
  background: url("~@/assets/space.gif");
}
</style>
