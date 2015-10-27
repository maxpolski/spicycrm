import React, { findDOMNode, Component } from 'react';

var FormInput = {};

export default FormInput = React.createClass ({
  getInitialState() {

    return {
      isError: false,
      errorTextLocal: []
    }
  },
  render() {

    if(this.props.id == '_id' || this.props.id == '__v') {
      return(
        <div>
          <input
            type="hidden"
            className="form-control"
            id={ this.props.id }
            value = {this.props.val}
          />
        </div>
      );
    } else {

      return(
          <div className="form-group">
             <label htmlFor={ this.props.id }>{this.props.id}:</label>
             <input
                type="text"
                className="form-control"
                onChange = { this.handleChange }
                id={ this.props.id  }
                value = {this.props.val}
             />
             <div
                ref="errorNode"
                style={!this.state.isError ? {display: 'none'} : {} }
                className="errors"
                id={this.props.id + "Error"}
            >
              {this.state.errorTextLocal.map( (value, index) => value )}
            </div>
          </div>
      );
    }
  },
  handleChange(event) {
    this.props.setCurrentProps(this.props.id, event.target.value);
  },
  showError(errorText) {

    let errorTextLocal = [];

    for(let i = 0; i < errorText.length; i++) {
      errorTextLocal.push(errorText[i] + ' ');
    }

    this.setState({isError: true, errorTextLocal: errorTextLocal});
  }
});
