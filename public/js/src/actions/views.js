export const SWITCH_VIEW = 'SWITCH_VIEW';

export function switchView(id, link) {
  return { type: SWITCH_VIEW, id: id, link: link };
}
