import React, { Fragment } from 'react';


    

    const Questions = ({question, nextQuestions, id}) => {

        return ( 
            <div id={id}>
               <h2 >{question.text}</h2> 
               <button name="nextButton" value={question.value} onClick={e => nextQuestions(e)}>Next</button>
            </div>
        )
    }   

export default Questions;