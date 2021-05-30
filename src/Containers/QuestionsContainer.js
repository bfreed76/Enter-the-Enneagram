import React, { Component } from 'react';
import Questions from '../Components/Questions';
import '../index.css';

class QuestionsContainer extends Component {
    state = { 
        questions: [],
        startingIndex: 0,
        initialResults: [],
        finished: false 
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
        return (startingIndex >= 13) ? this.processResults() : twoQuestions
        // 72 total questions
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
        this.state.finished = true
        this.props.history.push('/results')
        return []
    }
    
    renderResults = () => {this.props.resultsToState(this.state.initialResults)}

    render() { 
        let renderQuestions = this.renderTwoQuestions().map(question => <Questions question={question} id={question.id} nextQuestions={this.nextQuestions} />)
        return(     
            <div className="App">
                <br></br>
                <br></br>
                <h1>Select One</h1>
                {(this.state.finished) ? this.renderResults() : renderQuestions }
            </div>
        )
    }
}
    
export default QuestionsContainer;