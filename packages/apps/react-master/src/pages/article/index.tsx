import React, { useEffect, useState } from 'react';
import { TabBar } from 'antd-mobile';
import { ARTICLE_HEADER_IMG, ARTICLE_LIST } from './const';
import LazyImg from '../../components/lazyImg/index';
import { debounce } from '../../util/index';

const Article = () => {
    const [isFixedTop, setIsFixedTop] = useState(false);

    const fixedTopClass = 'fixed left-0 right-0 top-0';

    useEffect(() => {
        const handleScroll = () => {
            const scrollY =
                window.scrollY || document.documentElement.scrollTop;
            if (scrollY > 200) {
                setIsFixedTop(true);
            } else {
                setIsFixedTop(false);
            }
        };

        // 创建防抖后的 handleScroll 函数，防抖时间为 300ms
        const debouncedHandleScroll = debounce(handleScroll, 50);

        // 同时监听touchmove和scroll事件
        window.addEventListener('scroll', debouncedHandleScroll);
        window.addEventListener('touchmove', debouncedHandleScroll);

        // 在组件卸载时移除监听器
        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
            window.removeEventListener('touchmove', debouncedHandleScroll);
        };
    }, []);

    return (
        <>
            <LazyImg
                src={ARTICLE_HEADER_IMG}
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
            <div className='bg-gray-100 min-h-screen'>
                {/* 顶部导航栏 */}
                <div className={isFixedTop ? fixedTopClass : ''}>
                    <TabBar className='bg-white'>
                        <TabBar.Item
                            title={<span className='text-lg'>成长狂飙</span>}
                            key='self-growth'
                        />
                        <TabBar.Item
                            title={<span className='text-lg'>迅笔如锋</span>}
                            key='psychology-science'
                        />
                        <TabBar.Item
                            title={<span className='text-lg'>世相沉浮</span>}
                            key='workplace-interpersonal'
                        />
                        <TabBar.Item
                            title={<span className='text-lg'>云中漫步</span>}
                            key='emotion-pressure'
                        />
                    </TabBar>
                </div>

                {/* 内容卡片 */}
                <div className='container mx-auto p-4'>
                    {ARTICLE_LIST.map((item, index) => (
                        <div
                            key={index}
                            className='bg-white rounded-lg shadow-md mb-4 overflow-hidden'
                        >
                            <div className='flex items-start p-4'>
                                <div className='w-1/2'>
                                    <p className='text-pink-500 font-bold mb-2'>
                                        “
                                    </p>
                                    <p className='text-lg'>{item.text}</p>
                                    <p className='text-pink-500 font-bold mt-2'>
                                        ”
                                    </p>
                                </div>
                                <div className='w-1/2'>
                                    <img
                                        src={item.img}
                                        alt={`article-${index}`}
                                        className='w-full h-auto'
                                    />
                                </div>
                            </div>
                            <div className='bg-gray-200 p-2'>
                                <p className='text-sm'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Article;
