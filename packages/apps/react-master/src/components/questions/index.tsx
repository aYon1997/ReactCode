import React, { useState } from 'react';
import { ProgressCircle, Toast } from 'antd-mobile';
import Footer from './footer';

interface Data {
    ask: string;
    answers: string[];
    value?: number;
}

interface Props {
    data: Data[];
}

const menu = () => {};

export default function Questions(props: Props) {
    const [curPage, setCurPage] = useState(1);

    const [answersList, setAnswersList] = useState(props.data);

    let doneRate =
        (answersList.filter((item) => item.value).length / answersList.length) *
        100;

    const prev = () => {
        if (curPage === 1) {
            Toast.show({
                content: '当前已是第一题',
                maskClickable: false,
            });
            return;
        }
        setCurPage(curPage - 1);
    };

    const next = () => {
        setCurPage(curPage + 1);
    };

    const post = () => {
        Toast.show({
            content: '已提交',
            maskClickable: false,
        });
        return;
    };

    const onAnswerClick = (curIndex: number) => {
        let newAnswersList = answersList.map((item, index) => {
            if (curPage - 1 === index) {
                return {
                    ...item,
                    value: curIndex,
                };
            }
            return item;
        });
        setAnswersList(newAnswersList);

        curPage === answersList.length ? post() : next();
    };

    return (
        <div className='h-full w-full bg-gradient-to-b from-[#99e9a0] to-[#deffca] flex justify-center relative'>
            <div className='w-3/4 h-2/3 mt-24 bg-white rounded-3xl relative px-5'>
                <div className='-mt-12 w-28 h-28 rounded-full bg-white flex justify-center items-center absolute left-0 right-0 m-auto '>
                    <ProgressCircle
                        percent={50}
                        style={{
                            '--size': '6rem',
                            '--fill-color': '#cdcbcb',
                            '--track-width': '0.5rem',
                        }}
                    >
                        <div>
                            <div className='text-[#53b53a]'>完成进度</div>
                            <div className='text-[#53b53a] text-2xl'>
                                {doneRate}%
                            </div>
                        </div>
                    </ProgressCircle>
                </div>
                <div className='text-[#53b53a] mt-16 w-full flex py-2'>
                    <div>问题</div>
                    <div className='ml-1'>
                        {curPage}/{answersList.length}
                    </div>
                </div>
                <div>
                    <div className='font-bold'>
                        {answersList[curPage - 1].ask}
                    </div>
                    {answersList[curPage - 1].answers.map((item, index) => (
                        <div
                            key={index}
                            className={`${answersList[curPage - 1].value === index ? 'bg-green-200 text-white' : 'bg-gray-100 text-black'} my-2 p-2 rounded-sm font-bold`}
                            onClick={() => onAnswerClick(index)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className='absolute left-0 right-0 bottom-4'>
                <Footer
                    prev={prev}
                    menu={menu}
                    next={next}
                    post={post}
                    last={curPage === answersList.length}
                />
            </div>
        </div>
    );
}
