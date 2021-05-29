import React, { Component } from 'react';
import Questions from '../Components/Questions';
import Results from '../Components/Results'

class QuestionsContainer extends Component {
    state = { 
        questions: [],
        startingIndex: 0,
        initialResults: [],
        finished: false //!
     }

     componentDidMount(){
         this.fetchQuestions()
     }

     fetchQuestions = () => {   //?GETs all Questions
        fetch("http://localhost:3001/questions")
        .then(res => res.json())
        .then(questionsArr => {
            this.setState({
                questions: questionsArr,
            })
        })
     }

    renderTwoQuestions = () => {    //?Slices initial two questions, ends questions when finished
        const {questions, startingIndex} = this.state   
        const twoQuestions = questions.slice(startingIndex, startingIndex + 2)
        return (startingIndex >= 12) ? this.processResults() : twoQuestions
        //72 is the num of choice
    }
    
    nextQuestions = (e) => {    //?Selects next two questions
        this.setState(prevState => {
            return{
                startingIndex: prevState.startingIndex + 2,
                initialResults: [...this.state.initialResults, e.target.value]
            }
        })
        // const {initialResults} = this.state
        // const resultsObj = {}
        // initialResults.map(result => {
        //     !Object.keys(resultsObj).includes(result) ? resultsObj[result] = 1 : resultsObj[result] += 1
        // })
        // this.setState({
        //     countedResults: resultsObj
        // })
        this.renderTwoQuestions()
    }
    
    processResults = () => {     //?Tallys results and passes them to Results.js; renders Results.js
        this.state.finished = true
        this.props.history.push('/results')
        return []
    }
    
    renderResults = () => {this.props.resultsToState(this.state.initialResults)}

    render() { 

        let renderQuestions = this.renderTwoQuestions().map(question => <Questions question={question} id={question.id} nextQuestions={this.nextQuestions} />)


        return(     
            <div>
                <h1>Select One</h1>
                {(this.state.finished) ? this.renderResults() : renderQuestions }
            </div>
        )
    }
}
    
 
export default QuestionsContainer;