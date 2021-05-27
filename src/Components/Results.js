import React, { Component } from 'react';
import '../index.css';


class Results extends Component {


    render() { 

        return ( 

            <div>
                <p>Results</p>
                {console.log("Results", this.props)}
            </div>
         );
    }
}

export default Results;