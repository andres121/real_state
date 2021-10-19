import axios from "../../libs/axios";

export default {
  namespaced: true,
  state: {
    inmuebles: [],
  },

  getters: {},

  mutations: {
    GET_INMUEBLES(state, val) {
      state.inmuebles = val;
    },
  },

  actions: {
    getInmuebles(ctx, referer) {
      return new Promise((resolve, reject) => {
        axios
          .get("api/inmueble/" + referer)
          .then((response) => {
        
            ctx.commit("GET_INMUEBLES", response.data.data.inmuebles);
            resolve(response.data.data.inmuebles);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },


  },
};
