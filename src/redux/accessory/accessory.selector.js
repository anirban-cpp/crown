import { createSelector } from 'reselect';

const selectAccessory = state => state.accessory;

export const selectAccessories = createSelector(
  [selectAccessory],
  accessory => accessory.accessories
);
