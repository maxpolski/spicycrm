import { CALL_API } from 'redux-api-middleware';

export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT';
export const CONTACT_ADDED    = 'CONTACT_ADDED';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export function addNewContact(data) {
  return {[CALL_API]: {
     endpoint: '/addcontact',
     method: 'POST',
     headers: {
       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
     },
     body: 'name=' + data.name + '&company=' + data.company + '&email=' + data.email + '&group=' + data.group + '&phone=' + data.phone,
     types: [
       'REQUEST',
       ADD_NEW_CONTACT,
       'FAILURE'
     ]
   }
 }
}

export function deleteContact(_id) {
  return {[CALL_API]: {
     endpoint: '/deletecontact',
     method: 'POST',
     headers: {
       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
     },
     body: '_id=' + _id,
     types: [
       'REQUEST',
       DELETE_CONTACT,
       'FAILURE'
     ]
   }
 }
}

export function saveEditedContact(data) {
  console.log('saveRdited...', data);
  return {[CALL_API]: {
     endpoint: '/editcontact',
     method: 'POST',
     headers: {
       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
     },
     body: '_id=' + data._id + '&name=' + data.name + '&company=' + data.company + '&email=' + data.email + '&group=' + data.group + '&phone=' + data.phone,
     types: [
       'REQUEST',
       EDIT_CONTACT,
       'FAILURE'
     ]
   }
 }
}
