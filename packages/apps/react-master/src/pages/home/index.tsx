import React from 'react';
import Swiper from '../../components/swiper/index';
import { Toast } from 'antd-mobile';
import { HOME_CARD_LIST } from './const';

const onHandleClick = (idx: number) => {
    Toast.show(`你点击了卡片 ${idx + 1}`);
};

const MyCard = () => {
    return (
        <div className='flex flex-wrap items-center justify-between'>
            {HOME_CARD_LIST.map((item, index) => (
                // flex-grow: 1  在有剩余空间时自动扩展，占据剩余的宽度
                <img
                    className='px-8 py-4 flex-grow'
                    key={'card_img_' + index}
                    src={item.imgUrl}
                    alt={'img_' + index}
                    onClick={() => onHandleClick(index)}
                />
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
