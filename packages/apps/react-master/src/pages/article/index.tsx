import React, { useEffect, useState } from 'react';
import { TabBar } from 'antd-mobile';
import { ARTICLE_HEADER_IMG, TAB_BAR_LIST, TAB_BAR_TYPE } from './const';
import LazyImg from '../../components/lazyImg/index';
import { debounce } from '../../util/index';
import SelfGrowth from './selfGrowth';
import PsychologyScience from './psychologyScience';

const Article = () => {
    const [isFixedTop, setIsFixedTop] = useState(false);
    const [current, setCurrent] = useState(TAB_BAR_TYPE.selfGrowth);

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

    const handleChange = (key: string) => {
        setCurrent(key);
    };

    const renderCurrentComponent = () => {
        if (current === TAB_BAR_TYPE.selfGrowth) {
            return <SelfGrowth />;
        }
        if (current === TAB_BAR_TYPE.psychologyScience) {
            return <PsychologyScience />;
        }
        if (current === TAB_BAR_TYPE.psychologyScience) {
            return <PsychologyScience />;
        }
        if (current === TAB_BAR_TYPE.psychologyScience) {
            return <PsychologyScience />;
        }
    };

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
                    <TabBar className='bg-white' onChange={handleChange}>
                        {TAB_BAR_LIST.map((item) => (
                            <TabBar.Item
                                title={
                                    <span className='text-lg'>
                                        {item.title}
                                    </span>
                                }
                                key={item.name}
                            />
                        ))}
                    </TabBar>
                </div>

                {/* 内容卡片 */}
                {renderCurrentComponent()}
            </div>
        </>
    );
};

export default Article;
