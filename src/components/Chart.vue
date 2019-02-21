<script>
import { Pie } from "vue-chartjs";
export default {
  extends: Pie,
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
          type: "Pie",
          datasets: [
            {
              backgroundColor: [
                "white",
                "black",
                "black",
                "black",
                "black",
                "black",
                "grey"
              ],
              borderColor: [
                "white",
                "black",
                "black",
                "black",
                "black",
                "black",
                "grey"
              ],
              borderWidth: 3,
              data: [
                this.emotion[this.index].happiness,
                this.emotion[this.index].sadness,
                this.emotion[this.index].anger,
                this.emotion[this.index].contempt,
                this.emotion[this.index].disgust,
                this.emotion[this.index].fear,
                this.emotion[this.index].neutral
              ]
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          "animation.animateScale": true,
          tooltips: false
        }
      );
    }
  }
};
</script>