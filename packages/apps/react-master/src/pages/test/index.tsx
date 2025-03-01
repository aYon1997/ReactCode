import React from 'react';
import { Card, Button, Divider } from 'antd-mobile';
import { TEST_CARD_LIST, TEST_HEADER_IMG, TEST_DETAIL_TO_PATH } from './const';
import { useNavigate } from 'react-router-dom';
import LazyImg from '../../components/lazyImg/index';

const Test = () => {
    const navigate = useNavigate();
    const onStartTestClick = (type: string) => {
        const queryString = new URLSearchParams({ type }).toString();
        navigate(TEST_DETAIL_TO_PATH + '?' + queryString);
    };
    return (
        <>
            <LazyImg
                src={TEST_HEADER_IMG}
                alt='img'
                className='w-full h-52'
                loading='lazy'
                loadingconfig={{
                    className:
                        'w-full h-52 flex justify-center items-center flex-col bg-gray-200',
                }}
                errorconfig={{
                    className: `w-full h-52 flex justify-center items-center flex-col bg-gray-200 text-gray-400`,
                    showtext: 1,
                }}
            />
            {TEST_CARD_LIST.map((item, index) => (
                <div key={index}>
                    <Card>
                        <div className='flex'>
                            <LazyImg
                                loading='lazy'
                                src={item.imgUrl}
                                alt='img'
                                className='w-44 min-w-44 h-44 rounded-2xl'
                                loadingconfig={{
                                    className:
                                        'w-44 h-44 min-w-44 flex justify-center items-center flex-col bg-gray-200  rounded-2xl',
                                }}
                                errorconfig={{
                                    className: `w-44 min-w-44 h-44 flex justify-center items-center flex-col bg-gray-200 text-gray-400  rounded-2xl`,
                                    showtext: 1,
                                }}
                            />
                            <div className='flex flex-col justify-between py-6 ml-4'>
                                <div className='text-lg font-bold'>
                                    {item.title}
                                </div>
                                <Button
                                    className='w-28'
                                    color='primary'
                                    block
                                    shape='rounded'
                                    style={{
                                        '--background-color': '#689acd',
                                        '--border-color': '#689acd',
                                        '--text-color': '#f1fefd',
                                    }}
                                    onClick={() => onStartTestClick(item.title)}
                                >
                                    开始测试
                                </Button>
                            </div>
                        </div>
                    </Card>
                    <Divider
                        style={{
                            color: '#ddd',
                            borderColor: '#ddd',
                        }}
                    />
                </div>
            ))}
        </>
    );
};

export default Test;
