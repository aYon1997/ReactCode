import React from 'react';
import { Swiper, Toast } from 'antd-mobile';

const url = [
    'https://ayon1997.github.io/ImgCDN/swipter_1.jpeg',
    'https://ayon1997.github.io/ImgCDN/swipter_2.jpeg',
];

const onHandleClick = (idx: number) => {
    Toast.show(`你点击了卡片 ${idx + 1}`);
};

const items = url.map((color, index) => (
    <Swiper.Item key={index}>
        <div
            style={{ overflow: 'hidden' }}
            className='h-52'
            onClick={() => onHandleClick(index)}
        >
            <img
                src={color}
                alt={`Image ${index + 1}`}
                style={{ width: '100%', height: '100%' }}
            />
            {/* objectFit: 'contain' 选用这个样式， 元素内容（如图片）会按其原始的宽高比进行缩放，以完全适应容器的尺寸，同时保证内容不会被裁剪 */}
        </div>
    </Swiper.Item>
));

export default () => {
    return (
        <>
            <Swiper loop autoplay>
                {items}
            </Swiper>
        </>
    );
};
