import React from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import Home from '../pages/home';
import Test from '../pages/test';
import TestDetail from '../pages/test/detail';
import TestDetailQuestions from '../pages/test/questions';
import TestResult from '../pages/test/result';
import Article from '../pages/article';

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
    {
        path: '/test_detail',
        element: <TestDetail />,
        title: '测试详情',
    },
    {
        path: '/test_detail_questions',
        element: <TestDetailQuestions />,
        title: '测试详情问题',
    },
    {
        path: '/test_result',
        element: <TestResult />,
        title: '测试结果',
    },
    {
        path: '/article',
        element: <Article />,
        title: '心灵文章',
    },
];
