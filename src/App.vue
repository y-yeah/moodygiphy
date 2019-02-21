<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Emotify</span>
        <span class="font-weight-light">Moody Giphy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Upload :photo="photo" :render="render" :emotion="emotion"/>
    </v-toolbar>
    <v-container>
      <div v-if="photo.length > 0" row wrap>
        <v-layout v-for="(photo, index) in photo" v-bind:key="photo.id" class="omikuji">
          <v-flex class="omikujiContainer" xs1>
            <div>おみくじ</div>
          </v-flex>
          <v-flex class="pictureContainer" xs4>
            <v-img :src="photo.photo"/>
          </v-flex>
          <v-flex class="emotionContainer" xs4>
            <div>{{photo.emotion}}</div>
            <Chart v-if="emotion.length > index" :emotion="emotion" :index="index" class="chart"/>
          </v-flex>
          <v-flex class="responseContainer" xs4>
            <div>{{photo.response}}</div>
          </v-flex>
          <v-flex class="giphyContainer" xs4>
            <v-img :src="photo.giphy"/>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import Upload from "./components/Upload";
import Chart from "./components/Chart";

export default {
  name: "App",
  components: {
    Upload,
    Chart
  },
  data: () => ({
    photo: [],
    emotion: [],
    render: []
  })
};
</script>

<style scoped>
.omikujiContainer {
  padding: 15px;
  border: solid 2px black;
  font-size: 40px;
  text-align: center;
  writing-mode: vertical-rl;
  text-orientation: upright;
}
.pictureContainer,
.emotionContainer,
.responseContainer,
.giphyContainer {
  border: solid 1px black;
  padding: 3%;
}
.responseContainer,
.emotionContainer {
  font-size: 20px;
}
.omikuji {
  margin-bottom: 10px;
  background-color: #dc143c;
  color: white;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
}
.chart {
  background-color: white
}
</style>