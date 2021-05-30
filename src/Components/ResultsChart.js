import React, { Component } from 'react'
// import React from 'react'
import '../index.css'
import { Bar } from "react-chartjs-2"

class ResultsChart extends Component {

    data = {
        labels: Object.keys(this.props.countedResults),
        datasets: [
          {
            label: "Your Enneatype.  Note: if you score similarly for different types, check out the full descriptions of each type by clicking the links below.",
            data: this.props.countedResults,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.8)",
            borderColor: "rgba(75,192,192,1)"
            
          },
        ]
      };

      options = {
        scales: {
            yAxes: [{
                ticks: {
                    fontSize: 40
                }
            }]
        }
    }

    render() {
        return (
            <div>
              <hr></hr>
                 <Bar data={this.data} options={this.options}/>
              <hr></hr>
            </div>
        )
    }
}


  export default ResultsChart
