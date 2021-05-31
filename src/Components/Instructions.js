import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

class Instructions extends Component {

    render() {          //? INSTRUCTIONS WITH LINKS

        return ( 
            <div className="App">
                <h1>Instructions</h1>
                    <div className="textbox">
                        <p>You will be presented with 36 sets of two statements. Selected the statement that is <em>more</em> true of 
                            you <em>most</em> of the time. If you have difficulty deciding which better describes you, select which 
                            statement most accurately reflects your general behavior and attitude in the past.</p>
                            <ul className="list">Tips:
                                <li>Do not overthink the questions, go with your gut.</li>
                                <li>This indicator does not give an indication of how healthy or unhealthy
                                    someone is so answer honestly. You name and score will never be shared or 
                                    made public.</li>
                                <li>Keep in mind that your answers should be based on actual behavior and
                            reactions, not about occasional subjective, private feelings.</li>
                                <li>If you are unable to determine your personality type because you score similarly
                                    for two or more personality types, it may be helpful to discuss your results with
                                    a friend, partner or family member.
                                </li>
                            </ul> 
                            <br></br>
                            <br></br>
                            <button className="button">
                                <Link to='/questionscontainer' className="links">Quiz</Link> 
                                </button>
                           <hr></hr>
                        <p style={{fontSize: '80%'}}>Note: This 36-question indicator is an abbreviated version of the 144-question Riso-Hudson
                            Enneagram Type Indicator personality test. This full version of this test may give
                            you different results. For more information and to take the full test, visit <a href="https://tests.enneagraminstitute.com/" className="blackLink">the Enneagram Institute.</a>
                        </p>
                    </div>
            </div>  
        )
    }
}
 
export default Instructions;