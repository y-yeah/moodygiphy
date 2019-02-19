<template>
  <div id="upload">
    <input type="file" ref="input" @change="(e) => change(e)" class="input">
    <v-btn flat @click="upload">Upload</v-btn>
  </div>
</template>

<script>
export default {
  name: "upload",
  props: ["photo"],
  methods: {
    change: function(e) {
      //   this.photo.push(e.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = e => {
        this.photo.push(e.target.result);
        console.log(this.photo);
      };
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
