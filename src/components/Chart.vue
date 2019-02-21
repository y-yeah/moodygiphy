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
                "rgb(135,0,70)",
                "rgb(155,0,60)",
                "rgb(175,0,50)",
                "rgb(195,0,40)",
                "rgb(215,0,30)",
                "rgb(235,0,20)",
                "rgb(255,0,10)",
              ],
              borderColor: [
                "rgb(135,0,70)",
                "rgb(155,0,60)",
                "rgb(175,0,50)",
                "rgb(195,0,40)",
                "rgb(215,0,30)",
                "rgb(235,0,20)",
                "rgb(255,0,10)",
              ],
              borderWidth: 3,
              data: [
                this.emotion[this.index].happiness,
                this.emotion[this.index].neutral,
                this.emotion[this.index].sadness,
                this.emotion[this.index].fear,
                this.emotion[this.index].anger,
                this.emotion[this.index].contempt,
                this.emotion[this.index].disgust,
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