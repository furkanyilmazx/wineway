import * as actionTypes from './HomePage.actionTypes';

export const loadProducts = () => ({ type: actionTypes.LOAD_PRODUCTS });

export const productsLoaded = (payload) => ({
  type: actionTypes.PRODUCTS_LOADED,
  payload,
});

export const productsProcessed = (payload) => ({
  type: actionTypes.PRODUCTS_PROCESSED,
  payload,
});

export const searchProducts = (keyword) => ({
  type: actionTypes.SEARCH_PRODUCTS,
  keyword,
});

export const filterProducts = (isStockIn) => ({
  type: actionTypes.FILTER_PRODUCTS,
  isStockIn,
});

export const sortProducts = (keyword) => ({
  type: actionTypes.SORT_PRODUCTS,
  keyword,
});
