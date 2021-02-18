import React from "react";

class Logic extends React.Component {
    constructor (){
        super()
        this.state = {count: 0}

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleMultiply = this.handleMultiply.bind(this);
        this.handleDivide = this.handleDivide.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    
    handleIncrement(){this.setState({count : this.state.count + 1});}
    handleDecrement(){this.setState({count : this.state.count - 1});}
    handleMultiply(){this.setState({count : this.state.count * 2});}
    handleDivide(){this.setState({count : this.state.count / 2});}
    handleClear(){this.setState({count : 0});}
    

    render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button type="button" onClick={this.handleIncrement}> + </button>
        <button type="button" onClick={this.handleDecrement}> - </button>
        <button type="button" onClick={this.handleMultiply}> x </button>
        <button type="button" onClick={this.handleDivide}> /  </button>
        <button type="button" onClick={this.handleClear}> C </button>
      </div>
    );
  }
}

export default Logic;
