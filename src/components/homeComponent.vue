<template>
  <div>
    <b-container fluid style="margin-top: 2%">
      <b-row
        >
        <b-col v-for="inm in inmuebles" :key="inm.id">
          <div class="properties">
            <a
              href="#"
              class="img img-2 d-flex justify-content-center align-items-center"
              :style="{
                backgroundImage:
                  'url(http://127.0.0.1:8000/storage/' + inm.inmueble_imagenes[0].url +')',
              }"
            >
              <div
                class="icon d-flex justify-content-center align-items-center"
              >
                <span class="icon-search2"></span>
              </div>
            </a>
            <div class="text p-3">
              <span class="status rent">Venta</span>
              <div class="d-flex">
                <div class="one">
                  <h3><a href="#">{{ inm.titulo_inmueble}}</a></h3>
                  <p>casa</p>
                </div>
               
                  <span class="price"><strong>${{inm.precio_venta}}</strong> </span>
              
              </div>
              <p v-html="inm.descripcion">
                
              </p>
              <hr />
              <p class="bottom-area d-flex">
                <span><i class="flaticon-selection"></i> 250sqft</span>
                <span class="ml-auto"><i class="flaticon-bathtub"></i> 3</span>
                <span><i class="flaticon-bed"></i> 4</span>
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BContainer, BRow, BCol } from "bootstrap-vue";
export default {
  name: "homeComponent",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },

  components: {
    BContainer,
    BRow,
    BCol,
  },

  computed: {
    inmuebles() {
      return this.$store.state.home.inmuebles;
    },
  },

  created() {
    this.buscarInfo();
  },

  methods: {
    buscarInfo() {
    
      this.$store
        .dispatch("home/getInmuebles", this.$route.params.code)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
