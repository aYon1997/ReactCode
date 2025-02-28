import React from 'react';
import { ImgConfigType } from './interface';
import { SpinLoading } from 'antd-mobile';

function LoadingImg(props: ImgConfigType) {
    return props.src ? (
        <img {...props} />
    ) : (
        <div {...props}>
            {!!props.showtext ? (
                <div></div>
            ) : (
                <SpinLoading style={{ '--color': '#ccc' }} />
            )}
        </div>
    );
}

export default LoadingImg;
