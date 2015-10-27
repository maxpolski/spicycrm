import * as _ from 'lodash';

import { OPEN_ADDING_PANE } from '../../actions/adding';
import { EDIT_CONTACT } from '../../actions/contacts';
import {
         EDIT_ITEM,
         CANCEL_EDITING,
         EDIT_ITEM_ELEMENT
       } from '../../actions/editing';

export default function editingItem(state = {}, action) {
  switch(action.type) {
    case EDIT_ITEM:
      return _.assign({}, action.data);
    case EDIT_ITEM_ELEMENT:
      let tmpObj = {};
      tmpObj[action.data.id] = action.data.value;
      let newState = _.assign({}, state, tmpObj);
      console.log('new state', newState);
      return newState;
    case EDIT_CONTACT:
      return {};
    case OPEN_ADDING_PANE:
      return {};
    case CANCEL_EDITING:
      return {};
    default:
      return state;
  }
}
