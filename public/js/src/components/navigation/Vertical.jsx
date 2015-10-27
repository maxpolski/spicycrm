import React, { findDOMNode, Component } from 'react';
import CustomLink from './Link';

var VerticalNavigation = {};

export default VerticalNavigation = React.createClass ({
  render() {
    return(

      <div>
        <h4>Main Navigation</h4>
        <ul className="nav nav-pills nav-stacked">
            {this.props.views.map((view, index) =>
              <CustomLink {...view}
                onLinkClick = {() =>
                    this.props.onLinkClick(view._id, view.link)
                  }
              />
            )}
        </ul>
      </div>
    )
  }
});
