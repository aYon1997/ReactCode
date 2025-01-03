import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 获取public目录下的id是root的div
const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
