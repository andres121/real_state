<template>
  <div>
    <b-container fluid style="margin-top: 2%; border-radius: 2%">
      <b-carousel
      :interval="2000"
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
      >
        <b-carousel-slide
          v-for="inm in inmuebles[0].inmueble_imagenes"
          style="max-height: 500px"
          :key="inm.id"
        
          :img-src="url + inm.url"
        ></b-carousel-slide>
      </b-carousel>
    </b-container>
    <b-container
      fluid
      style="margin-top: 2%; border-radius: 2%; max-width: 80%"
    >
      <b-row>
        <b-col v-for="inm in inmuebles" :key="inm.id">
          <div class="properties">
            <a
              href="#"
              class="img img-2 d-flex justify-content-center align-items-center"
              :style="{
                backgroundImage:
                  'url(' + url + inm.inmueble_imagenes[0].url + ')',
              }"
            >
              <div
                class="icon d-flex justify-content-center align-items-center"
              >
                <span class="icon-search2"></span>
              </div>
            </a>
            <div class="text p-3">
              <span class="status rent"></span>
              <div class="d-flex">
                <div class="one">
                  <h3>
                    <a href="#">{{ inm.titulo_inmueble }}</a>
                  </h3>
                  <p>casa</p>
                </div>

                <span class="price"
                  ><strong>${{ inm.precio_venta }}</strong>
                </span>
              </div>
              <span style="white-space: pre-wrap">
                <p v-html="inm.descripcion"></p>
              </span>
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
import {
  BContainer,
  BRow,
  BCol,
  BCarousel,
  BCarouselSlide,
} from "bootstrap-vue";
import { URL_LOCAL } from "../config.js";

export default {
  name: "homeComponent",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      url: URL_LOCAL + "storage/",
    };
  },

  components: {
    BContainer,
    BRow,
    BCol,

    BCarousel,
    BCarouselSlide,
  },

  computed: {
    inmuebles() {
      return this.$store.state.home.inmuebles;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
