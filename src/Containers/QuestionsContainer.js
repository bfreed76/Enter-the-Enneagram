import React, { Component } from 'react';
import Questions from '../Components/Questions';
import Results from '../Components/Results'

class QuestionsContainer extends Component {
    state = { 
        questions: [],
        startingIndex: 0,
        initialResults: [],
        countedResults: {}
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
        return (startingIndex >= 9) ? this.processResults() : twoQuestions
        //72 is the num of choice
    }
    
    nextQuestions = (e) => {    //?Selects next two questions
        this.setState(prevState => {
            return{
                startingIndex: prevState.startingIndex + 2,
                initialResults: [...this.state.initialResults, e.target.value]
            }
        })
        this.renderTwoQuestions()
    }
    
    processResults = () => {     //?Tallys results and passes them to Results.js; renders Results.js
        // console.log("results working!")
        // const {initialResults} = this.state
        // const resultsObj = {}
        // initialResults.map(result => {
        //     !Object.keys(resultsObj).includes(result) ? resultsObj[result] = 1 : resultsObj[result] += 1
        // })
        // this.setState({
        //     countedResults: resultsObj
        // })
        <Results initialResults={this.state.initialResults} />
        // this.props.history.push('/Results')
        return []
        //! how to automatically navigate to Results? 
    }

    render() { 
   
        return(     
            <div>
                <h1>Select one of the following:</h1>
                {this.renderTwoQuestions().map(question => <Questions question={question} id={question.id} nextQuestions={this.nextQuestions} />)}
                <hr></hr>
                {/* <Results initialResults={this.state.initialResults} /> */}
            </div>
            )
        }


}
    
 
export default QuestionsContainer;