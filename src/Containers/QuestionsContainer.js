import React, { Component } from "react";
import Questions from "../Components/Questions";
import "../index.css";

class QuestionsContainer extends Component {
  state = {
    questions: [],
    startingIndex: 0,
    initialResults: [],
  };


  componentDidMount() {
    this.fetchQuestions();
  }

  //? GETS QUESTION ARRAY
  fetchQuestions = () => {
    fetch("https://enter-the-enneagram-backend.herokuapp.com/questions")
      .then((res) => res.json())
      .then((questionsArr) => {
        this.setState({
          questions: questionsArr,
        });
      });
  };

  //? SLICES FIRST SET OF TWO QUESTIONS, KILLS PROCESS WHEN FINISHED
  renderTwoQuestions = () => {
    const { questions, startingIndex } = this.state;
    const twoQuestions = questions.slice(startingIndex, startingIndex + 2);
    return startingIndex >= 72 ? this.processResults() : twoQuestions;
    // 72 total questions
  };

  //? COUNTER FOR QUESTION SETS
  nextQuestions = (e) => {
    this.setState((prevState) => {
      return {
        startingIndex: prevState.startingIndex + 2,
        initialResults: [...this.state.initialResults, e.target.value],
      };
    });
    this.renderTwoQuestions();
  };

  //? NAVIGATES TO RESULTS COMPONENT WHEN FINISHED
  processResults = () => {
    this.finished = true;
    this.props.history.push("/results");
    return [];
  };

  //? SENDS RESULTS TO APP.JS WHEN FINISHED
  renderResults = () => {
    this.props.resultsToState(this.state.initialResults);
  };

  render() {
    let renderQuestions = this.renderTwoQuestions().map((question) => (
      <Questions question={question} id={question.id} nextQuestions={this.nextQuestions} />
    ));
    return (
      <div className='App'>
        <br></br>
        <h1>Select One</h1>
        {this.finished ? this.renderResults() : renderQuestions}
      </div>
    );
  }
}

export default QuestionsContainer;
