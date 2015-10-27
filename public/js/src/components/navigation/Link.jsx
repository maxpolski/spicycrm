import React, { findDOMNode, Component } from 'react';
import { Link } from 'react-router';

var CustomLink = {};

export default CustomLink = React.createClass ({
  render() {
    return(
      <li role="presentation">
        <Link to={"/"+this.props.link}>{this.props.text}</Link>
      </li>
    )
  }
});
