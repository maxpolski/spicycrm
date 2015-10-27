import React, { findDOMNode, Component } from 'react';
import ContactItem from './ContactItem';
import { openAddingPane } from '../../actions/adding';

var ContactsList = {};

export default ContactsList = React.createClass ({
  render() {
    return(
      <div>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>Firstname</th>
                <th>Company</th>
                <th>E-mail</th>
                <th>Phone</th>
                <th>Group</th>
            </tr>
            </thead>
            <tbody>

              {this.props.data.contacts.map((contact, index) => {
                  return <ContactItem
                           contact = {contact}
                           onClick = { () => this.props.chooseItem(contact) }
                           isEditing = { this.props.data.editingItemId == contact._id }
                         />
                }
              )}
            </tbody>
        </table>

        <div type="button" onClick = { this.props.onAddClick} className="btn btn-primary btn-lg">
            Add a new contact
        </div>
      </div>
    )
  }
});
