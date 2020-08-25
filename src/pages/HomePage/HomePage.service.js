import { put, takeEvery, select, debounce } from 'redux-saga/effects';

import { ascendingPrice, descendingPrice } from '@wineway/helpers/comparators';
import PRODUCTS from '@wineway/constants/products';

import { productsLoaded, productsProcessed } from './HomePage.action';
import {
  LOAD_PRODUCTS,
  SEARCH_PRODUCTS,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
} from './HomePage.actionTypes';

function* loadProducts() {
  /*   const response = yield fetch(
    'https://example.com/sampleProducts.json'
  );
  let products = yield response.json(); */

  const products = PRODUCTS;

  yield put(productsLoaded({ products }));
}

function* searchProducts() {
  const { products, searchKeyword, isStockIn } = yield select(
    (state) => state.homePageReducer
  );

  const processedProductsList = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchKeyword.toLowerCase()) &&
      (!isStockIn || product.inStock)
  );

  yield put(productsProcessed({ processedProductsList }));
  yield sortProducts();
}

function* sortProducts() {
  let { processedProductsList, sortValue } = yield select(
    (state) => state.homePageReducer
  );

  processedProductsList = processedProductsList.sort(
    sortValue && (sortValue === 'asc' ? ascendingPrice : descendingPrice)
  );

  yield put(productsProcessed({ processedProductsList }));
}

export default function* homePageService() {
  yield takeEvery(LOAD_PRODUCTS, loadProducts);
  yield takeEvery(SORT_PRODUCTS, sortProducts);
  yield takeEvery(FILTER_PRODUCTS, searchProducts);
  yield debounce(300, SEARCH_PRODUCTS, searchProducts);
}
