import React, { Component } from 'react'
import ResultsChart from './ResultsChart'
import ResultsTable from './ResultsTable'
import '../index.css';


class Results extends Component {
    
    state = {
        countedResults: {},
        finishedCounting: false
    }

    resultsCount = () => {      //? Sums frequency of each results, turns array into obj
        const {initialResults} = this.props
        const resultsObj = {}
        // console.log('RESULTS', this.props)
        if(!!initialResults) {
            initialResults.map(result => {
                !Object.keys(resultsObj).includes(result) ? resultsObj[result] = 1 : resultsObj[result] += 1
        })
        console.log("results 1", resultsObj)
        this.setState({
            countedResults: resultsObj,
            finishedCounting: true
        })
        console.log("results 2", resultsObj)
    }
    // this.postResults(this.state.countedResults)
}

render() { 
        return ( 
            <div>
                <h2>Your Results</h2>
                {/* <button onClick={() => this.resultsCount()}>CLICK HERE</button> */}
                {(this.state.finishedCounting === false) ? this.resultsCount() : <ResultsChart countedResults={this.state.countedResults} />}
                <ResultsTable />
            </div>
         );
        }
    }
    
    // handleClick = () => {
    //     console.log('results 1', this.state.countedResults)
    //     this.resultsCount()
    // }
    
    // postResults = (results) => {
    //     request = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ title: 'React POST Request Example' })
    //     };
    //     fetch('http://localhost:3001/', request)
    //         .then(response => response.json())
    //         .then(data => this.setState({ postId: data.id }));
    //     }

    Results.defaultProps = {}
    
    export default Results;