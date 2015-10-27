import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import VerticalNavigation from '../../../components/navigation/Vertical';

var MainNavigation = React.createClass({

  render: function() {
    const {
      views,
      onLinkClick
    } = this.props;

    return (
      <VerticalNavigation
        views = {views}
        onLinkClick = { onLinkClick }
      />
    );
  }
});



export default MainNavigation;
