import * as _ from 'lodash';

import { OPEN_ADDING_PANE, CANCEL_ADDING } from '../../actions/adding';
import { CONTACT_ADDED } from '../../actions/contacts';
import { EDIT_ITEM } from '../../actions/editing';

export default function addingPane(state = {status: 'closed'}, action) {
  switch(action.type) {
    case OPEN_ADDING_PANE:
      return _.assign({}, state, {status: 'opened'});
    case CONTACT_ADDED:
      return _.assign({}, state, {status: 'closed'});
    case EDIT_ITEM:
      return _.assign({}, state, {status: 'closed'});
    case CANCEL_ADDING:
      return _.assign({}, state, {status: 'closed'});
    default:
      return state;
  }
}
