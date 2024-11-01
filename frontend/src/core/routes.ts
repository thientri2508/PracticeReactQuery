import { ROUTES } from './constants/constants.router';
import Home from '../pages/Home/Home';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import { FC } from 'react';


interface RouteType {
    path: string;
    element: FC;
    index?: boolean;
}

export const routes: RouteType[] = [
    {
        path: ROUTES.HOME,
        element: Home,
        index: true,
    },
    {
        path: ROUTES.PRODUCTS,
        element: Home,
    },
    {
        path: ROUTES.PRODUCT_DETAIL,
        element: ProductDetail,
    },
];
