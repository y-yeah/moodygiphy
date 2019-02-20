<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Emotify</span>
        <span class="font-weight-light">Moody Giphy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Upload :photo="photo" :render="render"/>
    </v-toolbar>
    <v-container>
      <div v-if="photo.length > 0" row wrap>
        <v-layout v-for="photo in photo" v-bind:key="photo.id">
          <v-flex class="pictureContainer" xs4>
            <v-img :src="photo.photo"/>
          </v-flex>
          <v-flex class="emotionContainer" xs4>
            <div>{{photo.emotion}}</div>
          </v-flex>
          <v-flex class="giphyContainer" xs4>
            <div>{{photo.giphy}}</div>
          </v-flex>
        </v-layout>
      </div>
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
    photo: [],
    render: []
  })
};
</script>

<style scoped>
.emotionContainer,
.giphyContainer {
  border: solid 2px;
  padding: 3%;
}
</style>