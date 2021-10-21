<template>
  <div id="app" style="background-color: #fff;">
    
    <nav-component></nav-component>

    <router-view />
    <footer-component />
  </div>
</template>

<script>
import navComponent from "./layout/navComponent.vue";
import footerComponent from "./layout/footerComponent.vue";

export default {
  name: "App",

  components: {
    "nav-component": navComponent,
    footerComponent,
  },

  created() {
    this.buscarInfo();
  },

  methods: {
    buscarInfo() {
      this.$store
        .dispatch("home/getInmuebles", this.$route.params.code)
        .then(() => {})
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
@import "./assets/css/style.css";

@import "./assets/css/open-iconic-bootstrap.min.css";
@import "./assets/css/animate.css";

/* @import "./assets/css/owl.carousel.min.css";
@import "./assets/css/owl.theme.default.min.css";  */
@import "./assets/css/magnific-popup.css";

@import "./assets/css/aos.css";

@import "./assets/css/ionicons.min.css";

@import "./assets/css/bootstrap-datepicker.css";
@import "./assets/css/jquery.timepicker.css";

@import "./assets/css/flaticon.css";
@import "./assets/css/icomoon.css";
@import "./assets/css/style.css";
</style>
