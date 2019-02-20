const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const FACE_KEY = process.env.FACE_KEY;
const RAKUTEN_KEY = process.env.RAKUTEN_KEY;
const axios = require("axios");

const app = express();
app.use(morgan("combined"));

app.use(express.static("dist"));

app.use(
  express.json({
    limit: "100mb"
  })
);
app.use(
  express.urlencoded({
    limit: "100mb"
  })
);

app.get("/", async (req, res) => {
  res.send("hello world");
});

app.post("/upload", express.json(), async (req, res) => {
  const { photo } = req.body;
  const binaryImage = Buffer.from(photo.split(",")[1], "base64");

  axios({
    method: "post",
    url: "https://japaneast.api.cognitive.microsoft.com/face/v1.0/detect",
    crossorigin: true,
    params: {
      returnFaceId: true,
      returnFaceLandmarks: false,
      returnFaceAttributes:
        "age,gender,headPose,smile,facialHair,glasses,emotion," +
        "hair,makeup,occlusion,accessories,blur,exposure,noise"
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/octet-stream",
      "Ocp-Apim-Subscription-Key": FACE_KEY
    },
    // data: binaryImage
    data: {
      url: ""
    }
  })
    .then(response => {
      response.data.length !== 0
        ? res.json(response.data[0].faceAttributes.emotion)
        : res.sendStatus(500);
    })
    .catch(err => {
      return res.status(500).send(err);
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
