const { createApp } = Vue

createApp({
  data() {
    return {

        emails: [],

    }
  },

  created() {

      for(let i = 0; i < 10; i ++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {

            console.log(res);

            this.emails.push(res.data.response);

        });

      }

  },

  methods: {

  },


}).mount('#app')