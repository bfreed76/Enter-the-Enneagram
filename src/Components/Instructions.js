import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

class Instructions extends Component {

    render() { 

        return ( 
            <div className="App">
                <h1>Instructions</h1>
                    <div className="textbox">
                        <p>You will be presented with 36 sets of two statements. Click the statement that is more true of 
                            you most of the time. If you have difficulty deciding which is more true most of the
                            time, select which statement most accurately reflects your general behavior and 
                            attitude in the past.</p>
                            <ul className="list">Tips:
                                <li>Do not overthink the questions, go with your gut.</li>
                                <li>This indicator does not give an indication of how healthy or unhealthy
                                    someone is so answer honestly. You name and score will never be shared or 
                                    made public.</li>
                                <li>Keep in mind that your answers should be based on your actual behavior and
                            reactions, not about occasional, subjective, private feelings.</li>
                                <li>If you are unable to determine your personality type because you score similarly
                                    for two or more personality types, it may be helpful to discuss your results with
                                    a friend, partner or family member.
                                </li>
                            </ul>
                        <p>To begin, enter your name or an alias and select the start button.</p>    

                            <button className="button">
                                <Link to='/QuestionsContainer'>Begin</Link>
                                </button>
                           
                        <p style={{fontSize: '80%'}}>Note: This 36-question indicator is an abbreviated version of the 144-question Riso-Hudson
                            Enneagram Type Indicator personality inventory. This full version of this test may give
                            you different results. For more information and to take the full test, visit XXXXXX.
                        </p>
                    </div>
            </div>  
        )
    }
}
 
export default Instructions;