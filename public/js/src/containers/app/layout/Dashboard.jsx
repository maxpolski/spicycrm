import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HorizontalNavigation from '../../../components/navigation/Horizontal';

var Dashboard = React.createClass({
  render: function() {
    const {
      views,
      onLinkClick
    } = this.props;

    return (
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <span className="glyphicon glyphicon-home"></span>
          </a>
        </div>
        <div className="navbar-text navbar-left">
          <HorizontalNavigation
            views = {views}
            onClick = {onLinkClick}
          />
        </div>
      </div>
    );
  }
});

export default Dashboard;
