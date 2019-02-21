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
  props: ["photo", "render", "emotion"],
  methods: {
    change(e) {
      const reader = new FileReader();
      const photo = this.photo;
      let render = this.render;

      new Promise(resolve => {
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = e => {
          photo.push({ photo: e.target.result });
          console.log(photo);
          resolve(photo);
        };
      })
        .then(photo => {
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
              this.emotion.push(res.data);
              this.getEmotion(res.data);
              this.photo[photo.length - 1].emotion = this.getEmotion(res.data);
              photo[photo.length - 1].response = "Response goes here";
              return photo[photo.length - 1].emotion;
            })
            .then(emotion => {
              if (
                emotion ===
                "You're looking a little too happy there. Let me fix that!"
              ) {
                axios
                  .get("/api/insult", {
                    crossorigin: true,
                    headers: {
                      "Access-Control-Allow-Origin": "*"
                    }
                  })
                  .then(res => {
                    console.log(res);
                    photo[photo.length - 1].response = res.data;
                    render.push(photo.length);
                  })
                  .catch(err => {
                    console.error(err);
                  });
              }
            });
        })
        .catch(err => {
          console.error(err);
        });
    },
    upload() {
      this.$refs.input.click();
    },
    getGiphy(keyword) {
      axios({
        method: "get",
        url: "/api/giphy",
        crossorigin: true,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        params: {
          tag: keyword
        }
      }).then(res => {
        this.photo[this.photo.length - 1].giphy = res.data;
        this.render.push(this.photo.length);
      });
    },
    getEmotion(emotion) {
      let responsePhrase = "";
      let array = [];

      if (typeof emotion === "string") {
        console.log("edge case");
      }

      array.push(emotion.happiness);
      array.push(
        emotion.sadness +
          emotion.anger +
          emotion.contempt +
          emotion.disgust +
          emotion.fear
      );
      array.push(emotion.neutral);

      if (array[0] > array[1] && array[0] > array[2]) {
        responsePhrase =
          "You're looking a little too happy there. Let me fix that!";
        //  call insult API
        this.getGiphy("sad");
      } else if (array[1] > array[0] && array[1] > array[2]) {
        //  call compliment API;
        this.getGiphy("funny cats");
        responsePhrase = "You look like you could use some cheering up.";
      } else {
        responsePhrase = "Emotion neutralized.";
        this.getGiphy("neutral");
        // manipulate response container
      }
      return responsePhrase;
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
