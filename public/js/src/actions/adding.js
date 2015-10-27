export const OPEN_ADDING_PANE = 'OPEN_ADDING_PANE';
export const CANCEL_ADDING    = 'CANCEL_ADDING';

export function openAddingPane() {
  return { type: OPEN_ADDING_PANE };
}

export function cancelAdding() {
  return { type: CANCEL_ADDING };
}
