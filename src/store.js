import { combineReducers } from 'redux';

import homePageReducer from '@wineway/pages/HomePage/HomePage.reducer';
import productDetailPageReducer from '@wineway/pages/ProductDetailPage/ProductDetailPage.reducer';

const combinedReducers = combineReducers({
  homePageReducer,
  productDetailPageReducer,
});

export default combinedReducers;
