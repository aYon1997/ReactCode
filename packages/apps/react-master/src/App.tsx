import React from 'react';
import { HashRouter, useRoutes } from 'react-router-dom';
import { router } from './router';

type Props = {};

const Routers = () => useRoutes(router);

function App({}: Props) {
    return (
        <HashRouter>
            <Routers />
        </HashRouter>
        // <div className=' bg-red-600'>App</div>
    );
}

export default App;
