// import reportWebVitals from './reportWebVitals';
// import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import React, {Component} from 'react';
import Home from './Home'
import Instructions from './Components/Instructions'
import QuestionsContainer from './Containers/QuestionsContainer'
import Questions from './Components/Questions'
import Results from './Components/Results'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class App extends Component {

  state = ({
    initialResults: {}
  })

  resultsToState = (results) => {
    this.setState({
      initialResults: results
    })
  }

  render () {
    return (
  <React.StrictMode>
    <Router>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="instructions">| Instructions </Link> 
          </li>
          <li>
            <Link to="questionsContainer">| Questions </Link>
          </li>
          <li>
            <Link to="results">| Results </Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/instructions" component={Instructions} />
          {/* <Route exact path="/questionsContainer" component={QuestionsContainer} /> */}
          <Route exact path="/questions" component={Questions} />
          {/* <Route exact path="/results" render={Results} /> */}
          <Route exact path='/results' render={(routeProps) => <Results {...routeProps} initialResults={this.state.initialResults} />} />
          <Route exact path='/questionsContainer' render={(routeProps) => <QuestionsContainer {...routeProps} resultsToState={this.resultsToState} />} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>
    )
  }
}

export default App;
