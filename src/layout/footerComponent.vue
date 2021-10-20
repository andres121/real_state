<template>
  <footer class="ftco-footer ftco-bg-dark ftco-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">Have a Questions?</h2>
            <div class="block-23 mb-3">
              <ul>
                <li>
                  <span class="icon icon-map-marker"></span
                  ><span class="text"
                    >203 Fake St. Mountain View, San Francisco, California,
                    USA</span
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="icon icon-phone"></span
                    ><span class="text">{{ userdata.celular_movil }}</span></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="icon icon-envelope"></span
                    ><span class="text"> {{ userdata.email }}</span></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy; All rights reserved | This template is made with
            <i class="icon-heart color-danger" aria-hidden="true"></i> by
            <a href="https://colorlib.com" target="_blank">Colorlib</a>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    userdata() {
      return this.$store.state.home.userdata;
    },
  },
};
</script>

<style>
</style>