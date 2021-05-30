import React from 'react';
import '../index.css';

const Questions = ({question, nextQuestions, id}) => {

        return ( 
            <div id={id}>
               <h2 >{question.text}</h2> 
               <button name="nextButton" className="button" value={question.value} onClick={e => nextQuestions(e)}>Next</button>
               <hr className="hr"></hr>
            </div>
        )
}   

export default Questions;