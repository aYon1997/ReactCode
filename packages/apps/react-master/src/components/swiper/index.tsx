import React from 'react';
import { Swiper, Toast } from 'antd-mobile';

const url = [
    'https://img1.baidu.com/it/u=1998643210,2665525468&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1740589200&t=353455051454b59e76a58eb9fd943649',
    'https://img0.baidu.com/it/u=1552106092,2626691830&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1740589200&t=7e3a75309577d42eb84b54766349b168',
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
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
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
