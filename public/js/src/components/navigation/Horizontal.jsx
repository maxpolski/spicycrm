import React, { findDOMNode, Component } from 'react';
import CustomLink from './Link';

var HorizontalNavigation = {};

export default HorizontalNavigation = React.createClass ({
  render() {
    return(
      <ul className="nav nav-pills">
        {this.props.views.map((view, idnex) =>
          <CustomLink {...view}
            onClick = { () =>
                this.props.onLinkClick(view._id, view.link)
              }
          />
        )}
      </ul>
    );
  }
});
