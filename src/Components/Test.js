import React, { Component } from "react";

class Test extends Component {
  state = {
    text: "",
    increment: 0,
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.text);
    let textLength = this.state.text.length;
    console.log(textLength);
    this.setState({
      increment: this.state.increment + textLength,
    });
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>TEST</h1>
        <form type='submit'>
          <input type='text' onChange={this.handleChange}></input>
          <button placeholder='click me' onClick={this.handleClick}>
            Click Me!!
          </button>
          {this.state.increment}
        </form>
      </div>
    );
  }
}

export default Test;
