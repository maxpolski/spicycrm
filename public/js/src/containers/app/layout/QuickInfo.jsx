import React, { Component, PropTypes } from 'react';
import AddContact from '../../../components/form/AddContactForm';
import EditContact from '../../../components/form/EditContactForm';

var QuickInfo = React.createClass({
  render: function() {

    const { addingPane,
            editingStatus,
            editingItem,
            onEditClick,
            onDeleteClick,
            onAddClick,
            changeCurrentProps,
            cancelEditing,
            cancelAdding
          } = this.props;

    if(addingPane == 'opened') {

      return (
        <div>
          <AddContact
            onAdd = {onAddClick}
            cancelAdding = {cancelAdding}
          />
        </div>
      );

    } else if(editingStatus == 'EDITING') {
      return (
        <div>
          <EditContact
            data = {editingItem}
            onEdit = {onEditClick}
            onDelete = {onDeleteClick}
            setCurrentProps = {changeCurrentProps}
            cancelEditing = {cancelEditing}
          />
        </div>
      );

    } else {

      return (
        <div>
          <h4>Quick Info</h4>
        </div>
      );

    }
  }
});

export default QuickInfo;
