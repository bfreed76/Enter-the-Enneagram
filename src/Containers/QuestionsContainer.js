import React, { Component } from 'react';

class TestContainer extends Component {
    state = { 
        questions: {
            set: 1,
            questions: [
                "I've been romantic and imaginative.", "I've been pragmatic and down to earth."
                ],
            set: 2,
            questions: [
                "I have tended to take on confrontations.", "I have tended to avoid confrontations."
                ],
            set: 3,
            questions: [
                "I have typically been diplomatic, charming, and ambitious.", "I have typically been direct, formal, and idealistic." 
                ]
        }
     }

    render() { 

        return ( 
            <div>
                <h1>???S Container</h1>
            </div>
         );
    }
}
 
export default TestContainer;