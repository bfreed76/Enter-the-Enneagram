import React, { Component } from "react";
import ResultsChart from "./ResultsChart";
import ResultsTable from "./ResultsTable";
import Footer from "./Footer";
import "../index.css";

class Results extends Component {
  state = {
    countedResults: {},
    finishedCounting: false,
  };

  //? COUNTS NUMBER OF RESULTS AND CREATES OBJECT
  resultsCount = () => {
    let initialResults = Array.from(this.props.initialResults);
    const resultsObj = {};
    if (!!initialResults) {
      initialResults.map((result) => {
        Object.keys(resultsObj).includes(result)
          ? (resultsObj[result] += 1)
          : (resultsObj[result] = 1);
      });
      this.setState({
        countedResults: resultsObj,
        finishedCounting: true,
      });
    }
  };

  // //? (FOR FUTURE DEVELOPMENT!) POSTS NAME AND SCORE TO JSON SERVER
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   let name = e.target.firstChild.value;
  //   let request = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       id: "",
  //       name: name,
  //       results: this.state.countedResults,
  //     }),
  //   };
  //   fetch("http://localhost:3001/results", request)
  //     .then((response) => response.json())
  //     .then((data) => console.log("POST", data));
  // };

  //? DISPLAYS RESULTS AND HOLDS POST FORM
  render() {
    return (
      <div id='results'>
        <div className='row'>
          <div className='column'>
            <h1>Your Results</h1>
          </div>
          <div className='column'>
            {/* <form className='form' onSubmit={this.handleSubmit}>
              <input type='text' placeholder='Your Name' style={{ fontSize: 20 }}></input>
              <button className='button' style={{ fontSize: 18 }}>
                Save Your Score
              </button>
            </form> */}
          </div>
        </div>
        <div style={{ backgroundColor: "white" }}>
          {this.state.finishedCounting === false ? (
            this.resultsCount()
          ) : (
            <ResultsChart className='chart' countedResults={this.state.countedResults} />
          )}
        </div>
        <ResultsTable />
        <p>
          For more information on the Enneagram, your Enneatype, or to take the full 144-question
          Riso-Hudson Enneagram Type Indicator, click{" "}
          <a className='blackLink' href='https://www.enneagraminstitute.com/'>
            here.
          </a>
        </p>
        <hr></hr>
        <Footer />
      </div>
    );
  }
}

export default Results;
