import React from 'react';
import { Header } from 'semantic-ui-react';

import ProductInfoTableRow from './ProductInfoTable.Row';

import './ProductInfoTable.scss';

function ProductInfoTable({
  productParams: { basePrice, weight, rebsorte, land, region, tastes } = {},
}) {
  return (
    <div className="product-info-table-container">
      <Header as="h2">Product Information</Header>
      <div className="product-info-table">
        <ProductInfoTableRow param="Base Price" value={basePrice} />
        <ProductInfoTableRow param="Weight" value={weight} />
        <ProductInfoTableRow param="Grape Variety" value={rebsorte} />
        <ProductInfoTableRow param="Tastes" value={tastes} />
        <ProductInfoTableRow param="Land" value={land} />
        <ProductInfoTableRow param="Region" value={region} />
      </div>
    </div>
  );
}

export default ProductInfoTable;
