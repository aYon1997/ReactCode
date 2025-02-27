import React from 'react';
import { Swiper, Toast } from 'antd-mobile';

const url = [
    {
        from: '#fff2f1',
        to: '#ffcf94',
    },
    {
        from: '#f3f8fe',
        to: '#e4edf4',
    },
];

const onHandleClick = (idx: number) => {
    Toast.show(`你点击了广告位 ${idx + 1}`);
};

const items = url.map((item, index) => (
    <Swiper.Item key={index}>
        <div
            style={{
                background: `linear-gradient(to right, ${item.from},${item.to})`,
            }}
            className='h-52 p-1 cursor-pointer'
            onClick={() => onHandleClick(index)}
        >
            广告位
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
