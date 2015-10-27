import { EDIT_ITEM, CANCEL_EDITING }    from '../../actions/editing';
import { EDIT_CONTACT, DELETE_CONTACT } from '../../actions/contacts';

export default function editingStatus(state = 'NOT', action) {
  switch(action.type) {
    case EDIT_ITEM:
      return {state: 'EDITING'};
    case EDIT_CONTACT:
      return {state: 'NOT'};
    case DELETE_CONTACT:
      return {state: 'NOT'};
    case CANCEL_EDITING:
      return {state: 'NOT'};
    default:
      return state;
  }
}
