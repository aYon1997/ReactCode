import React from 'react';
import { Swiper, Toast } from 'antd-mobile';

const url = ['#e0eaf6', '#f2ebe3'];

const onHandleClick = (idx: number) => {
    Toast.show(`你点击了广告位 ${idx + 1}`);
};

const items = url.map((color, index) => (
    <Swiper.Item key={index}>
        <div
            style={{ background: color }}
            className='h-52 p-1 cursor-pointer'
            onClick={() => onHandleClick(index)}
        >
            广告位
            {/* <img
                src={color}
                alt={`Image ${index + 1}`}
                style={{ width: '100%', height: '100%' }}
            /> */}
            {/* objectFit: 'contain' 选用这个样式， 元素内容（如图片）会按其原始的宽高比进行缩放，以完全适应容器的尺寸，同时保证内容不会被裁剪 */}
        </div>
    </Swiper.Item>
));

export default () => {
    const swiperProps = {
        loop: true,
        autoplay: true,
        autoplayInterval: 6000,
        className: 'relative',
        style: {
            '--border-radius': '8px',
        },
        indicator: (total: number, current: number) => (
            <div className='flex absolute left-0 right-0 top-0 bottom-0 mx-auto justify-center items-end pb-2 w-10'>
                {url.map((item, index) => (
                    <div
                        className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${current === index ? 'bg-black' : 'bg-gray-400'}`}
                        key={index}
                    ></div>
                ))}
            </div>
        ),
    };

    return <Swiper {...swiperProps}>{items}</Swiper>;
};
