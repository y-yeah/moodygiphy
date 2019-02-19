<template>
  <div id="upload">
    <input type="file">
    <button @click="upload">Upload</button>
  </div>
</template>

<script>
export default {
  name: "upload"
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
</style>
