import React, { Component } from "react";
// import React from 'react'
import "../index.css";
import { Bar } from "react-chartjs-2";

class ResultsChart extends Component {
  
  //? DISPLAYS CHART
  data = {
    labels: Object.keys(this.props.countedResults),
    datasets: [
      {
        label: "Enneatype",
        data: this.props.countedResults,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.8)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  render() {
    return (
      <div>
        <hr></hr>
        <Bar data={this.data} />
        <hr></hr>
      </div>
    );
  }
}

export default ResultsChart;
