import React from 'react';

import './ProductInfoTable.scss';

function ProductInfoTableRow({ param, value }) {
  return (
    <div className="product-info-row">
      <div className="product-info-param">{param}</div>
      <div className="product-info-value">{value ? value : '-'}</div>
    </div>
  );
}

export default ProductInfoTableRow;
