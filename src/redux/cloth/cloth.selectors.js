import { createSelector } from 'reselect';

const selectItem = state => state.cloth;

export const selectClothes = createSelector(
  [selectItem],
  cloth => cloth.clothes
);
