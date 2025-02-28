/**
 * @file 图片占位组件
 * @description 网络环境差的时候加载自定义loading, 图片加载失败时(比如CDN挂了)显示失败图标
 */

import React, { useState, useEffect } from 'react';
import ErrorImg from './ErrorImg';
import LoadingImg from './LoadingImg';
import { ImgConfigType } from './interface';

// 是否进行测试，模拟网络加载延迟
const IS_TEST_MODE = false;

/**
 * 根据测试模式决定是否延迟执行回调函数
 * @param isTest - 是否处于测试模式
 * @param callback - 要执行的回调函数
 */
const executeCallbackWithDelayIfTesting = (
    isTest: boolean,
    callback: () => void
) => {
    if (isTest) {
        // 若处于测试模式，延迟 3 秒后执行回调函数
        setTimeout(() => {
            callback();
        }, 3000);
    } else {
        // 若不处于测试模式，立即执行回调函数
        callback();
    }
};

const ImageWithLoading = (props: ImgConfigType) => {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const [hasImageError, setHasImageError] = useState(false);

    useEffect(() => {
        const img = new Image();

        /**
         * 配置图片的属性和事件监听器
         */
        const configureImageAttributesAndEvents = () => {
            img.src = props.src as string;
            img.onload = () => {
                // 图片加载成功后，根据测试模式决定是否延迟更新加载状态
                executeCallbackWithDelayIfTesting(IS_TEST_MODE, () =>
                    setIsImageLoading(false)
                );
            };
            img.onerror = () => {
                // 图片加载失败后，根据测试模式决定是否延迟更新错误状态
                executeCallbackWithDelayIfTesting(IS_TEST_MODE, () =>
                    setHasImageError(true)
                );
            };
        };

        // 配置图片属性和事件
        configureImageAttributesAndEvents();

        /**
         * 清理图片的事件监听器
         */
        const cleanUpImageEvents = () => {
            img.onload = null;
            img.onerror = null;
        };

        return () => {
            // 组件卸载时清理图片事件
            cleanUpImageEvents();
        };
    }, [props.src]);

    if (hasImageError) {
        // 若图片加载出错，渲染错误提示组件
        return <ErrorImg {...props.errorconfig} />;
    }

    if (isImageLoading) {
        // 若图片正在加载，渲染加载提示组件
        return <LoadingImg {...props.loadingconfig} />;
    }

    // 图片加载成功，渲染图片
    return <img {...props} />;
};

export default ImageWithLoading;
