import { put, takeEvery } from 'redux-saga/effects';

import PRODUCTS from '@wineway/constants/products';

import { productLoaded } from './ProductDetailPage.action';
import { LOAD_PRODUCT_WITH_ID } from './ProductDetailPage.actionTypes';

function* loadProducts(action) {
  /*   const response = yield fetch(
    'https://example.com/sampleProducts.json'
  );
  let products = yield response.json(); */

  const products = PRODUCTS;

  const product = products.find(
    (product) => product.productId === action.productId
  );

  yield put(productLoaded({ product }));
}

export default function* productDetailPageService() {
  yield takeEvery(LOAD_PRODUCT_WITH_ID, loadProducts);
}
