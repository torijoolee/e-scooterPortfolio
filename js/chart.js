const myChart = new Chart(document.getElementById("myChart").getContext("2d"), {
  type: "pie",
  data: {
    labels: ["Working,biking", "Car", "Public transport", "ect"],

    datasets: [
      {
        label: "# of Votes",
        data: [46, 37, 10, 7],
        backgroundColor: ["#EFF07E", "#53BC8E", "#339798", "#204F6E"],
        borderColor: ["#EFF07E", "#53BC8E", "#339798", "#204F6E"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});
