import { IniStatuses } from '../../actions/initialstate';

const { INITIALIZED, NOT_INITIALIZED } = IniStatuses;

export default function iniStatus(state = '', action) {
  switch(action.type) {
    case INITIALIZED:
      return action.type;
    default:
      return state;
  }
}
