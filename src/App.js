import enneagram from './enneagram.png';
import React, { Component, Redirect } from 'react';
import Instructions from './Components/Instructions';
import './index.css';


class App extends Component {
  render() {
    return (
    <div className="App">
      <h1>Welcome to the Enneagram</h1>
        <div className="textbox">
        <p>The Enneagram is a model of the human psyche that describes 
          how people interact with the world. It uses behavioral patterns to 
          classify nine interconnected personality types. Each type is defined by
          a particular core belief that anchors your deepest motivations and fears, 
          and shapes your woldview.</p>
          <p>Understanding your Enneagram type (enneatype) can help you better understand your
          own attitudes and habits, and improve your performance under stress. Knowing
          others' enneatypes can provide a foundation for building compassion and
          empathy.
          </p>
          <img id="enne1" src={enneagram}
            alt="enneagram symbol"></img>
          <h3>Identify your enneatype in about five minutes with this simplified
            Enneagram Instute-approved type indicator. When you finish, a description of your
            of your primary personality type will be given with links for futher exploration. 
          </h3>
          <button className='button' onClick={this.handleClick}>Begin</button>
        </div>
    </div>
    );
  }
}

export default App;
