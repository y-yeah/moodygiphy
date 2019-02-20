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
  props: ["photo", "render"],
  methods: {
    change: function(e) {
      const reader = new FileReader();
      const photo = this.photo;
      let render = this.render;
      new Promise(function(resolve) {
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = e => {
          photo.push({ photo: e.target.result });
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
            photo: photo[photo.length - 1].photo
          }
        })
          .then(res => {
            console.log("WHAT IS IN THERE?", photo);
            photo[photo.length - 1].emotion = res.data;
            photo[photo.length - 1].giphy = "GIPHY";
            render.push(photo.length);
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
