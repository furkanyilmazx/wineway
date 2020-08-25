import {
  LOAD_PRODUCTS,
  PRODUCTS_LOADED,
  SEARCH_PRODUCTS,
  SORT_PRODUCTS,
  PRODUCTS_PROCESSED,
  FILTER_PRODUCTS,
} from './HomePage.actionTypes';

const initialState = {
  productsLoading: false,
  products: [],
  processedProductsList: [],
  sortValue: undefined,
  isStockIn: false,
  searchKeyword: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state };
    case PRODUCTS_LOADED:
      return {
        ...state,
        products: action.payload.products,
        processedProductsList: action.payload.products,
      };
    case PRODUCTS_PROCESSED:
      return {
        ...state,
        processedProductsList: [...action.payload.processedProductsList],
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchKeyword: action.keyword,
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        sortValue: action.keyword,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        isStockIn: action.isStockIn,
      };
    default:
      return state;
  }
};
