import React, { Component, PropTypes } from 'react/addons';
import { connect } from 'react-redux';
import Dashboard from './layout/Dashboard';
import MainNavigation from './layout/MainNavigation';
import QuickInfo from './layout/QuickInfo';

import { openAddingPane, cancelAdding } from '../../actions/adding';

import { getIniState } from '../../actions/initialstate';

import { addNewContact,
         deleteContact,
         saveEditedContact
       } from '../../actions/contacts';

import { editItem,
         changeEditableElementProps,
         cancelEditing
       } from '../../actions/editing';

var Layout = React.createClass({


  render: function() {
    const {
      dispatch,
      views,
      iniStatus,
      addingPane,
      editingStatus,
      editingItem,
      contacts
    } = this.props;

    if(iniStatus != "INITIALIZED") {
      dispatch(getIniState());
    }

    return (
      <div>
        <nav className="navbar navbar-default top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#" >
                        SpicyCrm
                    </a>
                </div>
                <p className="navbar-text navbar-right">Logged in by
                    <a href="#" className="navbar-link"> Some Dude</a> :
                    Messages 23 :
                    Opened tasks 32 |
                    <a href="#" className="navbar-link"> Logout</a>
                </p>
            </div>
        </nav>

        <nav className="navbar navbar-default dashboard" id="dashboard">
          <Dashboard
            onLinkClick = { (_id, link) => dispatch(switchView(_id, link)) }
            views       = { views }
            iniStatus   = { iniStatus }
          />
        </nav>
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-2 main-navigation" id="main-navigation">
                  <MainNavigation
                    views = { views }
                    onLinkClick = { (_id, link) => {
                        dispatch(switchView(_id, link));
                      }
                    }
                  />
                </div>

                <div className="col-md-8 workspace" id="workspace">
                  { React.Children.map(this.props.children, function(child){
                    return React.addons.cloneWithProps(child, {
                      data: {
                        contacts: contacts,
                        editingItemId: editingItem._id
                      },
                      onAddClick: () => dispatch(openAddingPane()),
                      chooseItem: (data) => dispatch(editItem(data))
                    })
                    return child;
                  })}
                </div>

                <div className="col-md-2 quick-info" id="quick-info">
                  <QuickInfo
                    editingItem = {editingItem}
                    editingStatus = {editingStatus}
                    addingPane = {addingPane}
                    onEditClick = { (data) =>  dispatch(saveEditedContact(data))}
                    onDeleteClick = { (_id) => dispatch(deleteContact(_id))}
                    onAddClick = { (data)=> dispatch(addNewContact(data))}
                    changeCurrentProps = { (id, value) => dispatch(changeEditableElementProps(id, value))}
                    cancelEditing      = {() => dispatch(cancelEditing())}
                    cancelAdding       = {() => dispatch(cancelAdding())}
                  />
                </div>

            </div>
        </div>
      </div>

    );
  }
});

function select(state) {
  return {
    views: state.views,
    iniStatus: state.iniStatus,
    addingPane: state.addingPane.status,
    editingStatus: state.editingStatus.state,
    editingItem: state.editingItem,
    contacts: state.contacts
  };
}

export default connect(select)(Layout);
