import './index.css';
import React, {Component} from 'react';
import Home from './Home'
import Instructions from './Components/Instructions'
import QuestionsContainer from './Containers/QuestionsContainer'
import ScrollToTop from './Containers/ScrollToTop'
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
      <ScrollToTop />
      <div>
        <ul>
          <li className="navbar">
            <Link to="/" className="links">Home </Link>
          </li>
          <li className="navbar">
            <Link to="instructions" className="links">| Instructions </Link> 
          </li>
          <li className="navbar">
            <Link to="questionsContainer" className="links">| Quiz </Link>
          </li>
          <li className="navbar">
            <Link to="results" className="links">| Results </Link>
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
