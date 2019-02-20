<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Emotify</span>
        <span class="font-weight-light">Moody Giphy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Upload :photo="photo"/>
    </v-toolbar>
    <v-container>
      <v-container v-if="photo.length > 0">
        <v-container v-for="photo in photo" v-bind:key="photo" class="pictureContainer">
          <v-img :src="photo" class="picture"/>
          <div class="json">JSON result will be here</div>
          <div class="giphy">GIPHY will be here</div>
        </v-container>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import Upload from "./components/Upload";

export default {
  name: "App",
  components: {
    Upload
  },
  data: () => ({
    photo: []
  })
};
</script>

<style scoped>
.pictureContainer {
  clear: left;
}
.picture {
  float: left;
  width: 40%;
}
.json {
  float: left;
  border: solid 2px;
  width: 30%;
  height: 100%;
  padding: 80px;
}
.giphy {
  float: left;
  border: solid 2px;
  width: 30%;
  height: 100%;
  padding: 80px;
}
</style>