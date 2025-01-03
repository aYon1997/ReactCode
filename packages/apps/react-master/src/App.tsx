// 即使 App 组件函数看起来没有显式地使用 React 相关的内容
//（比如调用 React 的方法、使用 React 特定的对象属性等），
// 但仍然需要引入 React 有以下原因:
// 在 React 项目中，JSX 本质上是一种语法糖，它会被编译工具（比如 Babel 等，
// 在构建过程中会处理 JSX 语法）转换为 React.createElement 形式的函数调用。
// 例如像 <div className='App'>123</div> 这样的 JSX 表达式，
// 最终会被转译为类似 React.createElement('div', { className: 'App' }, '123') 的
// 代码形式来创建虚拟 DOM 节点。所以底层是依赖 React 这个库的，如果没有引入 React，
// 在编译阶段就会出现找不到 React 相关内容的错误，导致无法正确地将 JSX 转换为可执行的 JavaScript 代码。

import React from 'react';

import styles from './App.module.less';

type Props = {};

function App({}: Props) {
    return (
        <div className='App'>
            <div className='bg - blue - 500 text - white p - 4 rounded'>
                Hello world!
            </div>
            <div className={styles.container}>Good morning!</div>
        </div>
    );
}

export default App;
