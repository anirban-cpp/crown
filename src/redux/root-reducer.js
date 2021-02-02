import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import categoryReducer from './category/category.reducer';
import shopReducer from './shop/shop.reducer';
import accessoryReducer from './accessory/accessory.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  category: categoryReducer,
  accessory: accessoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
