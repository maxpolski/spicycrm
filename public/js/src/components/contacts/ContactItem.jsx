import React, { findDOMNode, Component } from 'react';

var ContactItem = {};

export default ContactItem = React.createClass ({
  render() {
    return(
      <tr onClick = { this.props.onClick } id="contacts-container" className={ this.props.isEditing ? 'editing' : '' } >
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.company}</td>
        <td>{this.props.contact.email}</td>
        <td>{this.props.contact.phone}</td>
        <td>{this.props.contact.group}</td>
      </tr>
    )
  }
});
