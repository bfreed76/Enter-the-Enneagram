import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import Questions from '../Components/Questions';
import Results from '../Components/Results'

class QuestionsContainer extends Component {
    state = { 
        questions: [],
        startingIndex: 0,
        finished: false,
        initialResults: [],
        countedResults: []
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

    countFreq = (array, value) => array.reduce((a, v) => (v === value ? a + 1 : a), 0);  //?Reduces Results
    

    processResults = () => {     //?Tallys results and passes them to Results.js; renders Results.js
        console.log("results working!")
        const {initialResults, countedResults} = this.state
            const resultsArr = []
                resultsArr.push(this.countFreq(initialResults, "a"))
                resultsArr.push(this.countFreq(initialResults, "b"))
                resultsArr.push(this.countFreq(initialResults, "c"))
                resultsArr.push(this.countFreq(initialResults, "d"))
                resultsArr.push(this.countFreq(initialResults, "e"))
                resultsArr.push(this.countFreq(initialResults, "f"))
                resultsArr.push(this.countFreq(initialResults, "g"))
                resultsArr.push(this.countFreq(initialResults, "h"))
                resultsArr.push(this.countFreq(initialResults, "i"))
            this.setState({
                countedResults: resultsArr
            })           
                debugger

        // console.log(this.countFreq(this.state.initialResults, "e"))

        // this.setState({finished: true}) // for if/then render statement
        // let history = useHistory()
        // history.pushState("/Results")  //! how to automatically navigate to Results? 
    }

    render() { 
        // let renderComponent
        // const finished = this.state.finished
        // if (finished) {
        //     renderComponent = <Results results={this.state.initialResults}/>
        //     } else { 
        //     renderComponent = this.renderTwoQuestions().map(question => <Questions question={question} id={question.id} nextQuestions={this.nextQuestions} />);
            
        return(     
            <div>
                <h1>Select one of the following:</h1>
                {this.renderTwoQuestions().map(question => <Questions question={question} id={question.id} nextQuestions={this.nextQuestions} />)}
                <hr></hr>
                <Results initialResults={this.state.initialResults} />
            </div>
            )
        }


}
    
 
export default QuestionsContainer;