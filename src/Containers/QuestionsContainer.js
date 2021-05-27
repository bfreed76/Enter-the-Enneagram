import React, { Component, useState, useEffect } from 'react';
import Questions from '../Components/Questions';
import Questions2 from '../Components/Questions2';

class QuestionsContainer extends Component {
    state = { 
        questions: [],
        startingIndex: 0,
        selectedQuestions: []
     }

     componentDidMount(){
         this.fetchQuestions()
     }

     fetchQuestions = () => {
        fetch("http://localhost:3001/questions")
        .then(res => res.json())
        .then(questionsArr => {
            this.setState({
                questions: questionsArr,
            })
        })
     }

    chooseTwoQuestions = () => {
        const twoQuestions = this.state.questions.slice(this.state.startingIndex, this.state.startingIndex + 2)
        (this.state.startingIndex >= 72) ? this.results() : twoQuestions
    }
    
    nextQuestions = (e) => {
        // console.log("handleNext Worked", e)
        // need to return the question's value to here, then set it into state and re-render
        this.setState(prevState => {
            return{
            startingIndex: prevState.startingIndex + 2,
            selectedQuestions: [...this.state.selectedQuestions, e.target.value]
            }
        })
        this.chooseTwoQuestions()
    }

    results = () => {
        console.log(this.state.selectedQuestions)
    }

    render() { 

        return ( 
            <div>
                <h1>Select one of the following:</h1>
                {this.chooseTwoQuestions().map(question => <Questions question={question} id={question.id} nextQuestions={this.nextQuestions} userSelectQuestions={this.userSelectQuestions} />)}
                <hr></hr>
            </div>
         );
    }
}
 
export default QuestionsContainer;