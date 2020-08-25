import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Header, Icon, Label, Button } from 'semantic-ui-react';

import ProductInfoTable from '@wineway/components/ProductInfoTable';
import discountRateCalculator from '@wineway/helpers/discountRateCalculator';

import { loadProductWithId } from './ProductDetailPage.action';

import './ProductDetailPage.scss';

function ProductDetailPage({
  loadProductWithId,
  product: {
    image,
    params: { manLogo, taxText, likeCount } = {},
    params,
    productId,
    name,
    brand,
    price,
    priceText,
    oldPrice,
    oldPriceText,
    categories,
    url,
  },
  match: {
    params: { productId: urlProductId },
  },
}) {
  useEffect(() => {
    loadProductWithId(urlProductId);
  }, [loadProductWithId, urlProductId]);

  return (
    <>
      <div className="detail-page-container">
        <Header as="h3" className="back-button">
          <Link to="/" replace>
            <Icon name="arrow left" />
            <Header.Content>Go Back</Header.Content>
          </Link>
        </Header>
        <div className="content-container">
          <div className="image-container">
            <img src={image} alt="product" />
            <img
              src={manLogo}
              className="manufacturer-logo"
              alt="manufacturer logo"
            />
          </div>
          <div className="details-container">
            <div className="brand-name">{brand}</div>
            <div className="product-name">{`${name} - ${productId}`}</div>
            <div className="product-prices">
              <span className="product-prices-wrapper">
                <span className="product-old-price">{oldPriceText}</span>
                <span className="product-price">{priceText}</span>
              </span>
              {oldPrice && price && (
                <Label.Group tag color="red">
                  <Label>%{discountRateCalculator(oldPrice, price)}</Label>
                </Label.Group>
              )}
            </div>
            <div className="tax-text">{taxText}</div>
            <div className="sell-buttons">
              {likeCount && (
                <Button as="div" labelPosition="right">
                  <Button color="red">
                    <Icon name="heart" />
                    Like
                  </Button>
                  <Label basic color="red" pointing="left">
                    {likeCount}
                  </Label>
                </Button>
              )}
              <Button
                animated="vertical"
                className="buy-button"
                as="a"
                href={url}
                target="_blank">
                <Button.Content hidden>Shop</Button.Content>
                <Button.Content visible>
                  <Icon name="shop" />
                </Button.Content>
              </Button>
            </div>
            <ProductInfoTable productParams={params} />
            <div className="product-categories">
              {categories &&
                categories.map((category, index) => (
                  <Label key={index}>{category}</Label>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  product: state.productDetailPageReducer.product,
});

const mapDispatchToProps = (dispatch) => ({
  loadProductWithId: (productId) => dispatch(loadProductWithId(productId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductDetailPage));
