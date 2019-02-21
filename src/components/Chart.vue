<script>
import { Radar } from "vue-chartjs";
export default {
  extends: Radar,
  props: ["emotion", "index"],
  mounted() {
    this.renderRaderChart();
  },
  methods: {
    renderRaderChart: function() {
      console.log("index", this.index);
      console.log("emotion", this.emotion);
      this.renderChart(
        {
          labels: [
            "anger",
            "contempt",
            "disgust",
            "fear",
            "happiness",
            "neutral",
            "sadness",
            "surprise"
          ],
          datasets: [
            {
              label: "Your Emotion",
              backgroundColor: "rgba(0, 216, 255, .3)",
              borderColor: "rgba(0, 216, 255, .8)",
              borderWidth: 1,
              pointBackgroundColor: "#fff",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [
                this.emotion[this.index].anger,
                this.emotion[this.index].contempt,
                this.emotion[this.index].disgust,
                this.emotion[this.index].fear,
                this.emotion[this.index].happiness,
                this.emotion[this.index].neutral,
                this.emotion[this.index].sadness,
                this.emotion[this.index].surprise
              ]
            }
          ]
        },
        { responsive: true, maintainAspectRatio: false }
      );
    }
  }
};
</script>