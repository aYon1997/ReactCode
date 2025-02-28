import React from 'react';
import { ImgConfigType } from './interface';

function ErrorImg(props: ImgConfigType) {
    return props.src ? (
        <img {...props}>{props.alt || props.text || '图片加载失败'}</img>
    ) : (
        <div {...props}>
            {props.alt || props.text || (props.showtext ? '图片加载失败' : '')}
        </div>
    );
}

export default ErrorImg;
