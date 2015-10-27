import { ADD_NEW_CONTACT,
         EDIT_CONTACT,
         DELETE_CONTACT
       } from '../../actions/contacts';

import { IniStatuses } from '../../actions/initialstate';

import * as _ from 'lodash';

const { INITIALIZED, NOT_INITIALIZED } = IniStatuses;

export default function contacts(state = [], action) {
  switch(action.type) {
    case INITIALIZED:
      return action.payload.contacts;
    case ADD_NEW_CONTACT:
      return [...state, {
        _id: action.payload._id,
        name: action.payload.name,
        company: action.payload.company,
        email: action.payload.email,
        phone: action.payload.phone,
        group: action.payload.group
      }];
    case EDIT_CONTACT:
      let _id = action.payload._id;
      let index = _.find(state, function(item) {
        return item._id == _id;
      });

      let contactIndex = state.indexOf(index);

      return [
        ...state.slice(0, contactIndex),
        Object.assign({}, state[contactIndex], {
          _id: action.payload._id,
          name: action.payload.name,
          company: action.payload.company,
          email: action.payload.email,
          phone: action.payload.phone,
          group: action.payload.group
        }),
        ...state.slice(contactIndex + 1)
      ];
    case DELETE_CONTACT:
      _id = action.payload._id;
      index = _.find(state, function(item) {
        return item._id == _id
      });

      index = state.indexOf(index);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];

      return state;
    default:
      return state;
  }
}
