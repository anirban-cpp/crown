import CLOTHING_DATA from './cloth.data.js';

const INITIAL_STATE = {
    clothes: CLOTHING_DATA
};
  
const clothingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
};
  
export default clothingReducer;