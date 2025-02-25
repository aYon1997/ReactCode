import React from 'react';
import Swiper from '../../components/swiper/index';
import { Card, Toast } from 'antd-mobile';
import { HOME_CARD_LIST } from './const';

const onHandleClick = (idx: number) => {
    Toast.show(`你点击了卡片 ${idx + 1}`);
};

const MyCard = () => {
    return (
        <div className='flex justify-between flex-wrap'>
            {HOME_CARD_LIST.map((item, index) => (
                <Card
                    title={item.title}
                    onClick={() => onHandleClick(index)}
                    key={index}
                    className={item.classConfig}
                >
                    {item.subtitle}
                </Card>
            ))}
        </div>
    );
};

const Home = () => {
    return (
        <>
            <div className=' bg-blue-300 h-60 pt-4 px-4 pb-2'>
                <Swiper />
            </div>
            <MyCard />
        </>
    );
};

export default Home;
