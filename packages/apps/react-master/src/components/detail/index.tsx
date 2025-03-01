import React from 'react';
import { Divider, Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import LazyImg from '../lazyImg/index';

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

const Detail = ({
    imgUrl,
    data,
    type,
}: {
    imgUrl: string;
    data: Data;
    type: string;
}) => {
    const navigate = useNavigate();
    const onHandleClick = (path: string) => {
        // URLSearchParams是JS内置的，将对象形式的查询参数转换为 URL 可以识别的查询字符串，方便取值，不用这个方法会取值困难，要各种location截取
        const queryString = new URLSearchParams({
            type,
        }).toString();
        navigate(path + '?' + queryString);
    };
    return (
        <div className='flex flex-col h-full'>
            <LazyImg
                src={imgUrl}
                alt='detail_img'
                className='w-full h-80'
                loading='lazy'
                loadingconfig={{
                    className:
                        'w-full h-80 flex justify-center items-center flex-col bg-gray-200',
                }}
                errorconfig={{
                    className: `w-full h-80 flex justify-center items-center flex-col bg-gray-200 text-gray-400`,
                    showtext: 1,
                }}
            />
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
                                <LazyImg
                                    src={item.imgUrl}
                                    className='w-4'
                                    loading='lazy'
                                    loadingconfig={{
                                        className:
                                            'w-3 h-4 flex justify-center items-center flex-col bg-gray-200 mr-1',
                                        showtext: 1,
                                    }}
                                    errorconfig={{
                                        className: 'w-3 h-4 bg-gray-200 mr-1 ',
                                    }}
                                />
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
                </div>
                <div className='flex justify-center items-center absolute left-0 right-0 bottom-0 pb-3'>
                    <MyDivider />
                    <Button
                        className='w-3/4'
                        color='primary'
                        block
                        shape='rounded'
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
    );
};

export default Detail;
