import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';

// 获取public目录下的id是root的div
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className='App'>我是React</div>
        {/* <App /> */}
    </React.StrictMode>
);
