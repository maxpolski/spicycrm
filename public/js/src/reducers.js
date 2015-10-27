import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import iniStatus from './reducers/contacts/iniStatus';
import currentActiveView from './reducers/views/currentActiveView';
import contacts from './reducers/contacts/contacts';
import views    from './reducers/views/views';
import addingPane from './reducers/adding/addingPane';
import editingItem from './reducers/editing/editingItem';
import editingStatus from './reducers/editing/editingStatus';

const contactsApp = combineReducers({
  iniStatus,
  currentActiveView,
  contacts,
  views,
  addingPane,
  editingStatus,
  editingItem,
  router
});

export default contactsApp;
