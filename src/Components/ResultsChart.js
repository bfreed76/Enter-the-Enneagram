import React, { Component } from 'react'
// import React from 'react'
import '../index.css'
import { Bar } from "react-chartjs-2"

class ResultsChart extends Component {

    data = {
        labels: Object.keys(this.props.countedResults),
        datasets: [
          {
            label: "EnneaType",
            data: this.props.countedResults,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.8)",
            borderColor: "rgba(75,192,192,1)"
          },
    
        ]
      };

    render() {
        return (
            <div classsName="chart">
                 <Bar data={this.data} />
            </div>
        )
    }
}


  export default ResultsChart
