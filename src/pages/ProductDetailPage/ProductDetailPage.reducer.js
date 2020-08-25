import {
  LOAD_PRODUCT_WITH_ID,
  PRODUCT_LOADED,
} from './ProductDetailPage.actionTypes';

const initialState = {
  productLoading: false,
  product: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT_WITH_ID:
      return { ...state, productLoading: true };
    case PRODUCT_LOADED:
      return {
        ...state,
        productLoading: false,
        product: { ...action.payload.product },
      };
    default:
      return state;
  }
};
