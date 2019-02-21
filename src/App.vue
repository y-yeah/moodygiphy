<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Omykuji</span>
        <span class="font-weight-light">Mood stabilizer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Upload :photo="photo" :render="render" :emotion="emotion"/>
    </v-toolbar>
    <v-container>
      <div v-if="photo.length > 0" row wrap>
        <v-layout
          v-for="(photo, index) in photo"
          v-bind:key="photo.id"
          class="omikuji"
          align-center
        >
          <!-- <div class="wrapper"> -->
          <v-flex class="omikujiContainer" xs1>
            <div class="inside">おみくじ</div>
          </v-flex>
          <!-- </div> -->
          <!-- <div class="wrapper"> -->
          <v-flex class="pictureContainer" xs4>
            <v-img :src="photo.photo" id="insidePic"/>
          </v-flex>
          <!-- </div> -->
          <!-- <div class="wrapper"> -->
          <v-flex class="emotionContainer" xs4>
            <!-- <div class="inside"> -->
            <div>{{photo.emotion}}</div>
            <Chart
              v-if="emotion.length > index"
              :emotion="emotion"
              :index="index"
              class="chart"
              style="width: 200px; margin-left:auto; margin-right: auto;"
            />
            <!-- </div> -->
          </v-flex>
          <!-- </div> -->
          <!-- <div class="wrapper"> -->
          <v-flex class="responseContainer" xs4>
            <div class="inside">{{photo.response}}</div>
          </v-flex>
          <!-- </div> -->
          <!-- <div class="wrapper"> -->
          <v-flex class="giphyContainer" xs4>
            <v-img :src="photo.giphy" class="inside"/>
          </v-flex>
          <!-- </div> -->
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
  /* border: solid 2px black; */
  font-size: 40px;
  text-align: center;
  writing-mode: vertical-rl;
  text-orientation: upright;
}
.pictureContainer,
.emotionContainer,
.responseContainer,
.giphyContainer {
  /* height: 100%; */
  margin: 10px;
}
.emotionContainer {
  border-left: dashed 1px black;
  border-right: dashed 1px black;
  padding: 10px;
}
.responseContainer,
.emotionContainer {
  font-size: 20px;
}
.omikuji {
  margin-bottom: 10px;
  background-image: url("../img/paper.png");
  background-repeat: repeat;
  /* background-color: #dc143c; */
  color: white;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  padding: 10px;
}
.chart {
  /* background-color: #dc143c; */
}
/* .wrapper {
  border-right: dashed 1px black;
} */
</style>