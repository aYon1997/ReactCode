import React from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import Home from '../pages/home';
import Test from '../pages/test';

export interface extraBizObject {
    title?: string;
    // children?: Array<ZHRouter>
}

export type ZHRouter = RouteObject & extraBizObject;

export const router: Array<ZHRouter> = [
    {
        path: '/',
        element: <Home />,
        title: '首页',
    },
    {
        path: '/test',
        element: <Test />,
        title: '轻松一测',
    },
];
