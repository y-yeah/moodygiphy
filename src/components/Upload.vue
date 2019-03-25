<template>
  <div id="upload">
    <input type="file" ref="input" @change="(e) => change(e)" class="input">
    <v-btn
      large
      flat
      @click="upload"
      style="color: #FFF; font-weight: bold; font-size: large; background-color: #b7282e"
    >Upload</v-btn>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "upload",
  props: ["photo", "render", "emotion", "luck"],
  methods: {
    change(e) {
      const reader = new FileReader();
      const photo = this.photo;
      let render = this.render;

      new Promise(resolve => {
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = e => {
          photo.push({ photo: e.target.result });
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
              this.luck.push(this.randomJudge());
              this.photo[photo.length - 1].emotion = this.getResponcePhrase(
                this.getEmotion(res.data)
              );
              photo[photo.length - 1].response =
                "No one can see your inner feelings.";
              return this.getEmotion(res.data);
            })
            .then(emotion => {
              if (emotion === "positive") {
                axios
                  .get("/api/slapbot/Slap", {
                    crossorigin: true,
                    headers: {
                      "Access-Control-Allow-Origin": "*"
                    }
                  })
                  .then(res => {
                    photo[photo.length - 1].response = res.data;
                    // render.push(photo.length);
                  })
                  .catch(err => {
                    console.error(err);
                  });
              } else if (emotion === "negative") {
                axios
                  .get("/api/slapbot", {
                    crossorigin: true,
                    headers: {
                      "Access-Control-Allow-Origin": "*"
                    }
                  })
                  .then(res => {
                    photo[photo.length - 1].response = res.data;
                    // render.push(photo.length);
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
      let emoPosSum = 0;
      let emoNegSum = 0;
      let emoNeutSum = 0;
      let emoState = "neutral";

      emoPosSum = emotion.happiness;
      emoNegSum =
        emotion.sadness +
        emotion.anger +
        emotion.contempt +
        emotion.disgust +
        emotion.fear;
      emoNeutSum = emotion.neutral;

      if (emoPosSum > emoNegSum && emoPosSum > emoNeutSum) {
        emoState = "positive";
      } else if (emoNegSum > emoPosSum && emoNegSum > emoNeutSum) {
        emoState = "negative";
      } else if (emoNeutSum > emoPosSum && emoNeutSum > emoNegSum) {
        emoState = "neutral";
      } else {
        emoState = "nonhuman";
      }
      return emoState;
    },
    getResponcePhrase(emoState) {
      let responsePhrase;
      switch (emoState) {
        case "positive":
          responsePhrase =
            "You're looking a little too happy there. Let me fix that!";
          this.getGiphy("sad");
          break;
        case "negative":
          this.getGiphy("funny cats");
          responsePhrase = "You look like you could use some cheering up.";
          break;
        case "neutral":
          responsePhrase = "Emotion neutralized.";
          this.getGiphy("neutral");
          break;
        case "nonhuman":
          this.getGiphy("robot");
          responsePhrase = "Are you sure you're human?";
          break;
      }
      return responsePhrase;
    },
    randomJudge: () => {
      const options = ["大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"];
      return options[Math.floor(Math.random() * 7)];
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
  margin-top: 60px;
}
.input {
  display: none;
}
</style>
