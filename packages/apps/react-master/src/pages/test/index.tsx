import React from 'react';
import { Card, Button, Divider } from 'antd-mobile';
import { TEST_CARD_LIST, TEST_HEADER_IMG, TEST_DETAIL_TO_PATH } from './const';
import { useNavigate } from 'react-router-dom';
import LazyImg from '../../components/lazyImg/index';
import { MainDataItem } from './interface';

const Test = () => {
    const navigate = useNavigate();
    const onStartTestClick = (data: MainDataItem) => {
        const queryString = new URLSearchParams({
            data: JSON.stringify(data),
        }).toString();
        navigate(TEST_DETAIL_TO_PATH + '?' + queryString);
    };
    return (
        <>
            <LazyImg
                src={TEST_HEADER_IMG}
                alt='img'
                className='w-full h-48'
                loading='lazy'
                loadingconfig={{
                    className:
                        'w-full h-48 flex justify-center items-center flex-col bg-gray-200',
                }}
                errorconfig={{
                    className: `w-full h-48 flex justify-center items-center flex-col bg-gray-200 text-gray-400`,
                    showtext: 1,
                }}
            />
            {TEST_CARD_LIST.map((item, index) => (
                <div
                    key={index}
                    className='flex items-center mx-5 border-b-custom-ccc-1'
                >
                    <Card>
                        <div className='flex'>
                            <LazyImg
                                loading='lazy'
                                src={item.imgUrl}
                                alt='img'
                                className='w-32 min-w-32 h-32 rounded-2xl'
                                loadingconfig={{
                                    className:
                                        'w-32 h-32 min-w-32 flex justify-center items-center flex-col bg-gray-200  rounded-2xl',
                                }}
                                errorconfig={{
                                    className: `w-32 min-w-32 h-32 flex justify-center items-center flex-col bg-gray-200 text-gray-400  rounded-2xl`,
                                    showtext: 1,
                                }}
                            />
                            <div className='flex flex-col justify-between py-6 ml-4'>
                                <div className='text-sm font-bold'>
                                    {item.title}
                                </div>
                                <Button
                                    className='w-24'
                                    color='primary'
                                    size='small'
                                    block
                                    shape='rounded'
                                    style={{
                                        '--background-color': '#689acd',
                                        '--border-color': '#689acd',
                                        '--text-color': '#f1fefd',
                                    }}
                                    onClick={() =>
                                        onStartTestClick(item as MainDataItem)
                                    }
                                >
                                    立即测试
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
