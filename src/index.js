import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Instructions from './Components/Instructions'
import QuestionsContainer from './Containers/QuestionsContainer'
import Results from './Components/Results'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="instructions">Instructions</Link>
          </li>
          <li>
            <Link to="questions">QuestionsContainer</Link>
          </li>
          <li>
            <Link to="results">Results</Link>
          </li>
        </ul>
        <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/instructions" component={Instructions} />
        <Route exact path="/questions" component={QuestionsContainer} />
        <Route exact path="/results" component={Results} />
      </Switch>
      </div>
    </Router>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();