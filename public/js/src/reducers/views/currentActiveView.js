import { IniStatuses } from '../../actions/initialstate';
import { SWITCH_VIEW } from '../../actions/views';

const { INITIALIZED } = IniStatuses;

export default function currentActiveView(state = {}, action) {
  switch(action.type) {
    case SWITCH_VIEW:
      return {id: action.id, link: action.link};
    case INITIALIZED: {
      return {link: '#contacts'};
    }
    default:
      return state;
  }
}
