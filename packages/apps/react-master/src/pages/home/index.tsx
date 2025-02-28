import React from 'react';
import Swiper from '../../components/swiper/index';
import { HOME_CARD_LIST, HOME_CARD_SINGLE } from './const';
import { useNavigate } from 'react-router-dom';
import LazyImg from '../../components/lazyImg/index';

const CardImg = ({
    item,
    index,
}: {
    item: { imgUrl: string; path: string };
    index: number;
}) => {
    const navigate = useNavigate();
    const onHandleClick = (path: string) => {
        navigate(path);
    };
    return (
        <LazyImg
            loading='lazy'
            className='p-2 w-1/2 h-home-card'
            key={`card_img_${index}`}
            src={item.imgUrl}
            alt={`img_${index}`}
            onClick={() => onHandleClick(item.path)}
            loadingconfig={{
                className:
                    'p-2 w-1/2  min-w-1/2  h-home-card flex justify-center items-center flex-col bg-gray-200  rounded-2xl',
            }}
            errorconfig={{
                className: `p-2 w-1/2 min-w-1/2 h-home-card flex justify-center items-center flex-col bg-gray-200 text-gray-400  rounded-2xl`,
                showtext: 1,
            }}
        />
    );
};

const MyCard = () => {
    return (
        <>
            <div className='flex flex-wrap items-center justify-around'>
                {HOME_CARD_LIST.map((item, index) => (
                    <CardImg item={item} index={index} key={'batch_' + index} />
                ))}
            </div>

            {HOME_CARD_SINGLE.map((item, index) => (
                <CardImg item={item} index={index} key={'single' + index} />
            ))}
        </>
    );
};

const Home = () => {
    return (
        <>
            <div className='pt-4 px-4 pb-2 bg-gradient-to-r from-[#689acb] to-[#6fa8d5]'>
                <Swiper />
            </div>
            <MyCard />
        </>
    );
};

export default Home;
