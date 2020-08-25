import * as actionTypes from './ProductDetailPage.actionTypes';

export const loadProductWithId = (productId) => ({
  type: actionTypes.LOAD_PRODUCT_WITH_ID,
  productId,
});

export const productLoaded = (payload) => ({
  type: actionTypes.PRODUCT_LOADED,
  payload,
});
