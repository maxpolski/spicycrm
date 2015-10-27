import { CALL_API } from 'redux-api-middleware';

export const EDIT_ITEM = 'EDIT_ITEM';
export const EDITING_FINISHED = 'EDITING_FINISHED';
export const EDIT_ITEM_ELEMENT = 'EDIT_ITEM_ELEMENT';
export const CANCEL_EDITING = 'CANCEL_EDITING';

export function editItem(data) {
  return { type: EDIT_ITEM, data: data };
}

export function changeEditableElementProps(id, value) {
  return { type: EDIT_ITEM_ELEMENT, data: {id: id, value: value} };
}

export function cancelEditing() {
  return { type: CANCEL_EDITING };
}
