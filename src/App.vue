<template>
  <v-app
    style="
    background: #3A1C71;
    background: linear-gradient(to top, #b7282e, #1f3134, #1f3134);
  "
  >
    <v-toolbar
      app
      style="
      background-color: #1f3134;
      color: #fff;
      height: 70px;
    "
    >
      <v-toolbar-title class="headline text-uppercase">
        <img src="../img/omikuji_header.png" height="50px">
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container>
      <div>
        <h2 class="introTitle">INTRO</h2>
        <p class="intro">
          <strong>Omykuji&copy;</strong> judges user’s emotional state from a picture, stabilizing their mood by providing text and gifs.
          <br>Please upload a picture of you with your face.
        </p>
        <Upload :photo="photo" :render="render" :emotion="emotion" :luck="luck"/>
      </div>
      <div v-if="photo.length > 0" row wrap>
        <v-layout
          v-for="(photo, index) in photo"
          v-bind:key="photo.id"
          class="omikuji"
          align-center
        >
          <v-flex class="omikujiContainer" xs1>
            <div class="title">{{luck[index]}}</div>
          </v-flex>
          <v-flex class="pictureContainer" xs10>
            <v-img :src="photo.photo"/>
          </v-flex>
          <v-flex class="emotionContainer" xs7>
            <div>{{photo.emotion}}</div>
            <Chart
              v-if="emotion.length > index"
              :emotion="emotion"
              :index="index"
              class="chart"
              style="width: 200px; height: 200px; margin-left:auto; margin-right: auto;"
            />
            <!-- </div> -->
          </v-flex>
          <v-flex class="responseContainer" xs8>
            <div>{{photo.response}}</div>
          </v-flex>
          <v-flex class="giphyContainer" xs8>
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
    luck: [],
    render: []
  })
};
</script>

<style scoped>
.headline {
  padding-top: 20px;
  /* padding-bottom: 20px; */
}
.omikujiContainer {
  padding-left: 60px;
  padding-right: 20px;
  font-size: 40px;
  writing-mode: vertical-rl;
  text-orientation: upright;
}
.pictureContainer,
.emotionContainer,
.responseContainer,
.giphyContainer {
  margin: 10px;
  font-family: "Goudy Old Style", Garamond, "Big Caslon", "Times New Roman",
    serif;
}
.emotionContainer {
  border-left: dashed 1px black;
  border-right: dashed 1px black;
  padding-right: 13px;
}
.responseContainer,
.emotionContainer {
  font-size: 20px;
  text-align: left;
  padding-left: 10px;
}
.omikuji {
  margin-bottom: 10px;
  background-image: url("../img/paper3.png");
  background-repeat: repeat;
  color: white;
  font-family: "YuMincho", "Palatino Linotype", "Book Antiqua", Palatino, serif;
  padding: 10px;
  border: solid 5px black;
}
.introTitle,
.intro {
  color: white;
}
.intro {
  font-size: 20px;
  text-align: left;
}
.title {
  font-family: "YuMincho" !important;
  font-weight: bold;
  font-size: 50px !important;
}
</style>