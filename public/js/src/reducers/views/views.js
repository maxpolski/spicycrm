import { IniStatuses } from '../../actions/initialstate';

const { INITIALIZED, NOT_INITIALIZED } = IniStatuses;

export default function views(state = [], action) {
  switch(action.type) {
    case INITIALIZED:
      // consoe.log('start view', act)
      return action.payload.views;
    default:
      return state;
  }
}
