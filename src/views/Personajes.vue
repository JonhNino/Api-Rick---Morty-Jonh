<template>
  <div>
    <center>
      <img class="logo" src="@/assets/logo.png" alt="" />

      <div class="containertitulo">
        <h1 >Lista De Personajes De Rick & Morty</h1>
      </div>
      <Personajes1a1 />

      <b-row class="mt-5 ">
        <b-col cols="12" md="15">
          <center>
            <b-card
              title="Personajes Serie Rick & Morty"
              tag="article"
              style="max-width: 20rem;"
              class="target bg-primary mb-2"
            >
              <img :src="character.image" alt="" />
              <h2 class="namep">NAME :</h2>
              <p>{{ character.name }}</p>
              <h2 class="namep">Estado :</h2>
              <p>{{ character.status }}</p>
              <h2 class="namep">Especie :</h2>
              <p>{{ character.species }}</p>
              <h2 class="namep">Tipo :</h2>
              <p>{{ character.type }}</p>
              <h2 class="namep">Genero :</h2>
              <p>{{ character.gender}}</p>
            </b-card>
          </center>
        </b-col>
      </b-row>
      <hr />

      <b-button class="back" pill @click="back">Atras</b-button>|
      <b-button class="devolver" pill variant="success" to="/pagina">Devolver a lista</b-button>
      <b-button class="next" pill @click="next">Siguiente</b-button>
    </center>
    <hr />
  </div>
</template>

<script>
// @ is an alias to /src
//------IMportacion componetes--------------///
import Personajes1a1 from '@/components/Personajes1a1.vue'
import axios from 'axios'
import router from '@/router'
//------Fin Impotacion Componentes --------------///

//------Export Default JS--------------///
export default {
  name: 'app',
  components: {//------Componetnes--------------/// aca van los componentes a usar en esta ruta
    Personajes1a1
  },//------Fin Componetnes--------------///
  data(){//------Data--------------/// aca van las variables a usar en esta ruta
    return {
      character: []
    }
  },//------Fin Data--------------///
  methods: {    //------Metodos-------------/// aca van las Metodos a usar en esta ruta
    async getInfo() { /// MEtodo para consumir la api de rick an morty
      console.log("dsfd");
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${this.$route.params.id}`,

      );
      this.character = await response.data /// alamcenar
      console.log(response);
    },
    async next(){

      if (this.$route.params.id < 30 )
      {
        router.push(`/personajes/${ parseInt(this.$route.params.id)+1}`) ///parse int sirve para convertir string a entero
      const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${this.$route.params.id}`,

      );
      this.character = await response.data /// alamcenar
      }
    },
    async back(){
      if (this.$route.params.id > 1 )
      {
        router.push(`/personajes/${ parseInt(this.$route.params.id)-1}`) ///parse int sirve para convertir string a entero
      const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${this.$route.params.id}`,

      );
      this.character = await response.data /// alamcenar
      }
    }
  },//------Fin Metodos-------------///
  created(){  //------Created--------------///  Ciclo de vida espera a que cargeu toda la logica y luego va al template
    this.getInfo(); // no es recomendable usar funcion de flecha por que no tiene acceso al this.
  },//------Fin Created--------------///

}
</script>

<style>
body {
  background: #081119;
  background: url("~@/assets/Morty.gif");
}
h2 {
  color: black;
}
p {
  color: rgb(56, 240, 65);
}
.textocard {
  color: red;
}
.back {
  background: black;
}
.back:hover {
  background: red;
}
.devolver:hover {
  background: red;
}
.next {
  background: black;
}
.next:hover {
  background: red;
}
.content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 30px 30px;
  width: 90%;
  margin: 0 auto;
}
img {
  height: 50%;
  width: 50%;
  border-radius: 1rem;
}
.target:hover {
  background: blueviolet;
}

.containertitulo {
  width: 80%;
  background: black;
}
.containertitulo:hover {
  background: blueviolet;
}
.button:hover {
  background: black;
}
.pagination {
  margin-left: 40%;
}
.pagination-prev:hover {
  background: black;
}
.pagination-next:hover {
  background: black;
}

img {
  height: 100%;
  width: 100%;
  border-radius: 1rem;
}
</style>
