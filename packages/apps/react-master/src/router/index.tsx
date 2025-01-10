import React from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import Home from '../pages/home';

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
        // children: [
        //     { path: '', element: <div>test</div> },
        //     { path: 'follow', element: <div>关注Tab</div> },
        //     { path: 'hot', element: <div>热榜</div> },
        //     { path: 'zvideo', element: <div>视频</div> },
        // ],
    },
    {
        path: '/education',
        element: (
            <div>
                知学堂
                <Outlet />
            </div>
        ),
        title: '知乎知学堂',
        children: [{ path: 'learning', element: <div>教育</div> }],
    },
    {
        path: '/explore',
        element: <div>发现</div>,
        title: '发现',
    },
    {
        path: '/question',
        element: <div>等你来答</div>,
        title: '等你来答',
        children: [{ path: 'learning', element: <div>为你推荐</div> }],
    },
];
