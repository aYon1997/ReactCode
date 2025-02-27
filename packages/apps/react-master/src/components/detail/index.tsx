import React from 'react';
import { Divider, Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

interface ContentObj {
    imgUrl: string;
    title: string;
    content: string[];
}

interface Data {
    header: {
        title: string;
        subtitle: string;
    };
    content: ContentObj[];
    path: string;
}

const MyDivider = () => (
    <Divider
        style={{
            color: '#f4f8fb',
            borderColor: '#f4f8fb',
            borderTopWidth: '2px',
        }}
    />
);

const Detail = ({ imgUrl, data }: { imgUrl: string; data: Data }) => {
    const navigate = useNavigate();
    const onHandleClick = (path: string) => {
        navigate(path);
    };
    return (
        <div className='flex flex-col h-full'>
            <img src={imgUrl} alt='detail_img' className='w-full' />
            <div className='flex-1 relative h-96 bg-white'>
                <div className='absolute -top-4 w-full rounded-t-xl bg-white p-4'>
                    <div className='text-gray-700'>{data.header.title}</div>
                    <div className='text-gray-400'>{data.header.subtitle}</div>
                    <MyDivider />

                    {data.content.map((item, index) => (
                        <div
                            key={'title_' + index}
                            className={index ? 'mt-6' : ''}
                        >
                            <div className='flex items-center'>
                                <img src={item.imgUrl} className='w-4' />
                                <div className='text-gray-700'>
                                    {item.title}
                                </div>
                            </div>
                            <div>
                                {item.content.map((subItem, subIndex) => (
                                    <div
                                        key={'subtitle_' + subIndex}
                                        className='text-gray-400'
                                    >
                                        {subItem}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <MyDivider />
                    <div className='flex justify-center items-center'>
                        <Button
                            className='w-3/4'
                            color='primary'
                            block
                            shape='rounded'
                            size='small'
                            style={{
                                '--background-color': '#00c195',
                                '--border-color': '#00c195',
                                '--text-color': '#f1fefd',
                            }}
                            onClick={() => onHandleClick(data.path)}
                        >
                            立即测试
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
