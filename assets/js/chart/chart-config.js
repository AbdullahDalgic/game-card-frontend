// Change default options for ALL charts
Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
  opacity: 1,
  color: "white",
  borderColor: "#fff",
  borderWidth: 0,
  borderRadius: 100,
  font: {
    weight: "bold",
    size: 0,
    lineHeight: 1 /* align v center */,
  },
  padding: {
    top: 5,
  },
  /* hover styling */
  backgroundColor: function (context) {
    return context.hovered ? context.dataset.borderColor : "white";
  },
  color: function (context) {
    return context.hovered ? "white" : context.dataset.borderColor;
  },
  listeners: {
    enter: function (context) {
      context.hovered = true;
      return true;
    },
    leave: function (context) {
      context.hovered = false;
      return true;
    },
  },
});

Chart.scaleService.updateScaleDefaults("radar", {
  ticks: {
    min: 0,
  },
});

var options = {
  responsive: false,
  tooltips: {},
  title: {
    display: false,
    position: `bottom`,
  },
  plugins: {
    datalabels: {
      formatter: function (value, context) {
        return context.chart.data.labels[context.value];
      },
    },
  },
  scale: {
    gridLines: {
      color: "rgb(255, 255, 255, 1)",
      lineWidth: 4,
    },
    angleLines: {
      display: false,
    },
    pointLabels: {
      fontSize: 10,
      fontColor: "#fff",
      fontStyle: "bold",
      callback: function (value, index, values) {
        return value;
      },
    },
    ticks: {
      suggestedMin: 0,
      suggestedMax: 100,
      stepSize: 25 /* 25 - 50 - 75 - 100 */,
      maxTicksLimit: 1 /* Or use maximum number of ticks and gridlines to show */,
      display: false, // remove label text only,
    },
  },
  legend: {
    display: false,
    shadowColor: "#fff",
    shadowBlur: 10,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    labels: {
      padding: 10,
      fontSize: 14,
      lineHeight: 30,
    },
  },
  startAngle: 30,
};

const ShadowRadarElement = Chart.elements.Line.extend({
  draw() {
    const { ctx } = this._chart;
    const originalStroke = ctx.stroke;
    ctx.stroke = function () {
      ctx.save();
      ctx.shadowColor = "#fff";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      originalStroke.apply(this, arguments);
      ctx.restore();
    };
    Chart.elements.Line.prototype.draw.apply(this, arguments);
    ctx.stroke = originalStroke;
  },
});

//  Chart.defaults.radar = Chart.defaults.radar;
Chart.controllers.radar = Chart.controllers.radar.extend({
  datasetElementType: ShadowRadarElement,
});

var chart = document.getElementById("chart");
var dataValues = JSON.parse(chart.getAttribute("data-values"));
var dataNames = JSON.parse(chart.getAttribute("data-names"));
var data = {
  labels: dataNames,
  datasets: [
    {
      radius: 6,
      pointRadius: 1,
      label: "",
      backgroundColor: "rgba(255,255,255,1)",
      borderColor: "rgba(255,255,255,1)",
      data: dataValues,
    },
  ],
};

var myChart = new Chart(chart, {
  type: "radar",
  data: data,
  options: options,
});
