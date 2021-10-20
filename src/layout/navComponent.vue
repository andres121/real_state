<template>
  <div>
    <div class="top">
      <div class="container">
        <div class="row d-flex ">
          <div class="col">
            <p class="social d-flex">
              <a href="#"><span class="icon-facebook"></span></a>
              <a href="#"><span class="icon-twitter"></span></a>
              <a href="#"><span class="icon-google"></span></a>
              <a href="#"><span class="icon-pinterest"></span></a>
            </p>
          </div>
          <div class="col d-flex justify-content-end">
            <p class="num">
              <span class="icon-phone"> {{ userdata.celular_movil }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <nav
      class="
        navbar navbar-expand-lg navbar-dark
        ftco_navbar
        bg-dark
        ftco-navbar-light
      "
      id="ftco-navbar"
    >
      <div class="container">
        <router-link class="navbar-brand" :to="{ neme: 'home', params: { code: userdata.referral_code } }"
          ><b-img
            :src="url + configuracion.logo"
            fluid
            alt="Responsive image"
            style="max-width: 9%"
          ></b-img>
          {{ configuracion.nombre }}</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="nav-link"
                >Inicio</router-link
              >
            </li>
            <!-- <li class="nav-item">
              <a href="property.html" class="nav-link">Property</a>
            </li>
            <li class="nav-item">
              <a href="agents.html" class="nav-link">Agents</a>
            </li> -->
            <!-- <li class="nav-item active">
              <router-link :to="{ name: 'about' }" class="nav-link"
                >Acerca</router-link
              >
            </li> -->
            <!-- <li class="nav-item">
              <a href="blog.html" class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
              <a href="contact.html" class="nav-link">Contact</a>
            </li>
            <li class="nav-item cta">
              <a href="contact.html" class="nav-link ml-lg-2"
                ><span class="icon-user"></span> Sign-In</a
              >
            </li>
            <li class="nav-item cta cta-colored">
              <a href="contact.html" class="nav-link"
                ><span class="icon-pencil"></span> Sign-Up</a
              >
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { BImg } from "bootstrap-vue";
import { URL_LOCAL } from "../config.js";
export default {
  components: {
    BImg,
  },

  data() {
    return {
      url: URL_LOCAL + "storage/",
    };
  },

  computed: {
    configuracion() {
      return this.$store.state.home.configuracion;
    },

    userdata() {
      return this.$store.state.home.userdata;
    },
  },
};
</script>

<style>
</style>