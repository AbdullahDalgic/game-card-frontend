var data = {
  libweb: {
    labels: ["HTML & Javascript", "Ruby", "iOS", "Jenkins", "CSS"],

    datasets: [
      {
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        data: [55, 50, 40, 50, 60],
      },
    ],
  },
};

var options = {
  percentageInnerCutout: 70,
};

$.each(data, function (key, data) {
  var canvas = document.querySelector("#" + key);
  var ctx = canvas.getContext("2d");
  var chart = new Chart(ctx);
  chart.Radar(data, options);
});
