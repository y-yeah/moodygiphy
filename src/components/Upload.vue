<template>
  <div id="upload">
    <input type="file" ref="input" @change="(e) => change(e)" class="input">
    <v-btn flat @click="upload">Upload</v-btn>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "upload",
  props: ["photo"],
  methods: {
    change: function(e) {
      const reader = new FileReader();
      const photo = this.photo;
      new Promise(function(resolve) {
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = e => {
          photo.push(e.target.result);
          console.log(photo);
          resolve(photo);
        };
      }).then(function(photo) {
        console.log("PHOTO", photo);
        axios({
          method: "post",
          url: "/api/upload",
          crossorigin: true,
          headers: {
            "Access-Control-Allow-Origin": "*"
          },
          data: {
            photo: photo[photo.length - 1]
          }
        })
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.warn(err);
          });
      });
    },
    upload: function() {
      this.$refs.input.click();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.input {
  display: none;
}
</style>
