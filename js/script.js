const { createApp } = Vue

createApp({
  data() {
    return {

        email: null,

    }
  },

  created() {

      // facciamo partire una richiesta API - name,int,email,phone
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {

        console.log(res);

        this.email = res.data.response;

      });

  },

  methods: {

  },


}).mount('#app')