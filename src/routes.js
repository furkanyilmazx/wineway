import React, { lazy } from 'react';

const HomePage = lazy(() => import('@wineway/pages/HomePage'));
const ProductDetailPage = lazy(() =>
  import('@wineway/pages/ProductDetailPage')
);

export const routes = [
  {
    id: 'home',
    path: '/',
    exact: true,
    component: HomePage,
    loading: <div />,
  },
  {
    id: 'product-detail',
    path: '/:productId',
    exact: true,
    component: ProductDetailPage,
    loading: <div />,
  },
];
