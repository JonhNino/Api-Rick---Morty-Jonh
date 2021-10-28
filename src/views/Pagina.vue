<template>
  <div>
    <center>
      <img class="logo" src="@/assets/logo.png" alt="" />
      <h1 class="textr">Lista De Personajes De Rick & Morty</h1>
      <input type="text" v-model="search" placeholder="Search" />
    </center>

    <div class="content">
      <div
        class="content-characters"
        v-for="character in filterSearch"
        :key="character.id"
      >
        <!-- {{character}} Aca observo todo el contenido del array character  -->
        <!-- :sirve para que el atributo sea dinamico -->
        <b-button
          pill
          variant="danger"
          class="ButtonPersonajes"
          :to="`/personajes/${character.id}`"
          ><!-- :to="`/personajes/${character.id}`" Permite dirigirme a la ruta dinamica ,${character.id} significa qeu la ruta va ser dinamica dependiendo de ID seleccionado  -->
          <div class="character">
            <img :src="character.image" alt="" />

            <div class="info-character">
              <div class="namep1">
                <h2 class="namep">NAME :</h2>
                <h2>{{ character.name }}</h2>
              </div>
            </div>
          </div>
          <small class="text-danger"
            >Fecha de Creacion {{ character.created }}
          </small>
        </b-button>
        <center>
          <div>
            <!-- <b-button pill variant="success" class="button  is-small" @click="Vermas(char)">Ver mas</b-button> -->
          </div>
        </center>
      </div>
    </div>

    <!-- Nav para paginacion -->
    <center>
      <nav class="pagination" role="navegation" arial-label="pagination">
        <b-button
          pill
          variant="warning"
          class="pagination-prev text-white"
          v-on:click="changePage( page - 1)"
          >Anterior</b-button
        >

        <ul class="pagination-list">
          <li>
            <b-button
              variant="primary"
              href=""
              class="pagination-link "
              >{{ page }}</b-button
            >
          </li>
        </ul>

        <b-button
          pill
          variant="warning"
          class="pagination-next text-white"
          v-on:click="changePage( page + 1)"
        >
          Siguiente
        </b-button>
      </nav>
    </center>
    <hr />
  </div>
</template>
<script>
// @ is an alias to /src
//------IMportacion componetes--------------///
import axios from 'axios'
//------Fin Impotacion Componentes --------------///

//------Export Default JS--------------///
export default {
  name: 'app',
  components: {    //------Componetnes--------------/// aca van los componentes a usar en esta ruta     /// Llamo los componentes a utilizar en este caso no se llama a ningun componete
  },//------Fin Componetnes--------------///
  data(){//------Data--------------/// aca van las variables a usar en esta ruta
    return {            /// Variables que se retornan
      search: '',       /// variable para la almacenar la busqueda
      characters: [],   /// Variable para almacenar los datos de Api, en un formato tipo objeto
      page:1,
      pages: 1
    }//------Fin Data--------------///
  },
  mounted(){  /// Hook Ciclo de vida montar funciones
    this.getTodos();// llamado de la funcion
  },
  methods: {//------Metodos-------------/// aca van las Metodos a usar en esta ruta
    getTodos(){ /// Funcion para almacenar la cantidad de paginas en la varible page
      const params ={
        page: this.page //Se crea el parametro page para almacenar las pagina
      }
      axios /// Libreria que permite realizar sencillar operaciones como cliente HTTP
      .get('https://rickandmortyapi.com/api/character/', {params}) // Metodo que realizar una peticion, devuelve un parametro especificado
      .then(res => {//devuelve un promise en este caso el dato tipo oobejto de results y pages en la api
        this.characters = res.data.results // LA variable caracters almacena los datos de reuslt
        this.pages = res.data.info.pages /// La variable pages almacena los datos
      })
      .catch(e => {
        console.log(e)
      })
    },
    changePage(page){ /// Funcion para decirle a los botenes hasta # de la pagina de la Api puede llegar
      this.page = (page <= 0 || page >10 ) ? this.page : page
      this.getTodos();
    }
  },//------Fin Metodos-------------///
  computed: {//------Computed--------------///
    filterSearch(){
      return this.characters.filter((character,id) => {
        return character.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },//------Fin Computed--------------///
}
</script>

<style>
body {
  background: #081119;
  background-image: url("~@/assets/background.gif");
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
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 40px 40px;
  width: 90%;

  margin: 0 auto;
}

.ButtonPersonajes:hover {
  background: greenyellow;
}
.character {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-character {
  display: table-column;
  justify-content: center;
  margin: 0 auto;
}
img.logo {
  width: 70%;
}
img {
  height: 30%;
  width: 30%;
  border-radius: 1rem;
}
h1 {
  color: #00ff97;
}
.namep {
  color: black;
}
.namep1 {
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem;

  border-radius: 0.8rem;
  margin: 1rem;
  background: #00ff97;
}

h4 {
  margin: 1rem;
  color: #ffffff;
  background: #8b8b8b;
  border-radius: 0.4rem;
  font-weight: inherit;
  padding: 0.2rem;
  background: black;
}
input {
  text-align: center;
  background: #002128;
  outline: none;
  border: 0;
  width: 300px;
  margin: 1rem;
  padding: 1rem;
  color: white;
  font-weight: 700;
  border-radius: 1rem;
}
@media screen and (max-width: 918px) {
  .content {
    grid-template-columns: 1fr 1fr;
  }
  .character {
    display: flex;
    align-items: center;
  }
  h2 {
    font-size: 1rem;
  }
}
@media screen and (max-width: 540px) {
  .content {
    width: 90%;
    grid-template-columns: 1fr;
  }
  .character {
    display: flex;
    align-items: center;
  }
}
</style>
