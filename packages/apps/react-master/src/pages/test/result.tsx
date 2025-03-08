import React from 'react';
import LazyImg from '../../components/lazyImg/index';
import { TEST_RESULT_HEADER_IMG } from './const';
import { useSearchParams } from 'react-router-dom';
import { FormatDate } from '../../util/index';

interface Data {
    answers: string[];
    ask: string;
    right: string;
    value: number;
    explain: string;
}

const SuspendCom = () => {
    return (
        <>
            <div className='rounded-full bg-[#50b83f] w-4 h-4 -my-3'></div>
            <div className='w-2 h-20 bg-white rounded-full z-20'></div>
            <div className='rounded-full bg-[#3bad4b] w-4 h-4 -my-3'></div>
        </>
    );
};

export default function result() {
    // 获取当前 URL 的查询参数
    const [searchParams] = useSearchParams();
    // 从查询参数中获取特定的值
    const type = searchParams.get('type');
    let data: Data[] = [];

    try {
        data = JSON.parse(searchParams.get('data') as string);
    } catch (error) {}

    const rightData = data.filter((item) => {
        return item.answers[item.value].includes(item.right);
    });

    const getRightValue = (str: string) => {
        return str.split('、')[1];
    };

    return (
        <div className='w-full h-full'>
            <LazyImg
                src={TEST_RESULT_HEADER_IMG}
                alt='detail_img'
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
            <div className='relative'>
                <div className='w-5/6 h-24 rounded-2xl -mt-3 bg-white absolute left-0 right-0 mx-auto shadow-lg flex justify-center items-center font-black text-base'>
                    {type}
                </div>
                <div className='flex flex-col z-10 absolute left-16 -top-12 justify-center items-center'>
                    <SuspendCom />
                </div>
                <div className='flex flex-col z-10 absolute right-16 -top-12 justify-center items-center'>
                    <SuspendCom />
                </div>
            </div>
            <div className='mt-24 my-3 px-8 text-[#9f9f9f] text-right'>
                报告生成时间：{FormatDate()}
            </div>
            <div className='text-center text-[#e7e7e7]  break-all'>
                评估结果仅供参考
            </div>
            <div className='text-center my-4  break-all'>
                {type === '寻找适合你的恋爱色彩'
                    ? `共 ${data.length} 题，无标准答案，详情请见报告！`
                    : `共 ${data.length} 题, 答对${rightData.length} 题, 答错
                    ${data.length - rightData.length}题！`}
            </div>
            <div className='text-left my-4 p-8'>
                {data.map((item, index) => {
                    return (
                        <div key={'explain_' + index} className='my-6'>
                            <div className='leading-6  break-all'>
                                {index + 1}、{item.ask}
                                <div
                                    className={
                                        getRightValue(
                                            item.answers[item.value]
                                        ) === item.right
                                            ? 'text-green-500 break-all'
                                            : 'text-red-500 break-all'
                                    }
                                >
                                    （正确答案是：{item.right}， 你的答案是：
                                    {getRightValue(item.answers[item.value])}）
                                </div>
                            </div>
                            <div className='my-2 leading-6 text-gray-400  break-all'>
                                {item.explain}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
