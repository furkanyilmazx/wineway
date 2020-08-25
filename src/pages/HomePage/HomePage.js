import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Header,
  Checkbox,
  Dropdown,
  Item,
  Label,
  Input,
} from 'semantic-ui-react';

import {
  loadProducts,
  searchProducts,
  sortProducts,
  filterProducts,
} from './HomePage.action';
import { SORT_OPTIONS } from './HomePage.contants';

import './HomePage.scss';

function HomePage({
  loadProducts,
  searchProducts,
  processedProductsList,
  sortProducts,
  filterProducts,
  history,
}) {
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  function handleFilterOnChange(e, data) {
    filterProducts(data.checked);
  }

  function handleSortingOnChange(e, data) {
    sortProducts(data.value);
  }

  function handleSearchOnChange(e, data) {
    searchProducts(data.value);
  }

  return (
    <div className="home-page-container">
      <div className="page-left">
        <Header size="small">Search</Header>
        <Input
          icon="search"
          placeholder="Search mail..."
          onChange={handleSearchOnChange}
        />
        <Header size="small">Availability</Header>
        <Checkbox
          label="Exclude Sold Out Items"
          onChange={handleFilterOnChange}
        />
      </div>
      <div className="page-right">
        <div className="header">
          <div className="items-count">
            {processedProductsList.length} items
          </div>
          <div className="sort-side">
            <span className="sort-label">Sort by: </span>
            <Dropdown
              search
              selection
              wrapSelection={false}
              options={SORT_OPTIONS}
              placeholder="Choose an option"
              onChange={handleSortingOnChange}
            />
          </div>
        </div>
        <div className="content">
          <Item.Group divided>
            {processedProductsList.map((product, index) => (
              <Item key={index}>
                <Item.Image size="tiny" src={product.imageS} centered />
                <Item.Content>
                  <Item.Header
                    as="a"
                    className="list-item-name"
                    onClick={() => {
                      history.push(`/${product.productId}`);
                    }}>
                    {product.name}
                  </Item.Header>
                  <Item.Meta>{product.brand}</Item.Meta>
                  <Item.Meta>{`stock ${
                    product.inStock ? 'in' : 'out'
                  }`}</Item.Meta>
                  <Item.Description>
                    <span>{product.priceText}</span>
                    <span className="old-price">{product.oldPriceText}</span>
                  </Item.Description>
                  <Item.Extra>
                    {product.categories.map((category, index) => (
                      <Label key={index}>{category}</Label>
                    ))}
                  </Item.Extra>
                </Item.Content>
              </Item>
            ))}
          </Item.Group>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productsLoading: state.homePageReducer.productsLoading,
  products: state.homePageReducer.products,
  processedProductsList: state.homePageReducer.processedProductsList,
});

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
  sortProducts: (keyword) => dispatch(sortProducts(keyword)),
  filterProducts: (isStockIn) => dispatch(filterProducts(isStockIn)),
  searchProducts: (keyword, sortVal, filterVal) =>
    dispatch(searchProducts(keyword, sortVal, filterVal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomePage));
