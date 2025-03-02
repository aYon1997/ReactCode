import React, { useState } from 'react';
import { Space, ProgressCircle, Toast } from 'antd-mobile';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
import { TEST_RESULT_TO_PATH } from './const';

interface Data {
    ask: string;
    answers: string[];
    value?: number;
}

interface Props {
    data: Data[];
    type: string;
}

export default function Questions(props: Props) {
    const navigate = useNavigate();
    const [curPage, setCurPage] = useState(1);

    const [answersList, setAnswersList] = useState(props.data);

    // 定义一个状态来控制显示隐藏
    const [isVisible, setIsVisible] = useState(false);

    let doneRate =
        (answersList.filter((item) => item.value || item.value === 0).length /
            answersList.length) *
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

    const menu = () => {
        setIsVisible(true);
    };

    const post = (newList: Data[]) => {
        // 未完成所有答题时，阻断提交

        if (!newList.every((item) => item.value || item.value === 0)) {
            Toast.show({
                content: '请检查并完成所有的题目',
                maskClickable: false,
            });
            return;
        }
        // 定义要传递的参数
        const params = {
            data: JSON.stringify(newList),
            type: props.type,
        };
        // URLSearchParams是JS内置的，将对象形式的查询参数转换为 URL 可以识别的查询字符串，方便取值，不用这个方法会取值困难，要各种location截取
        const queryString = new URLSearchParams(params).toString();
        navigate(TEST_RESULT_TO_PATH + '?' + queryString);
    };

    // 点击每个问题的其中一个答案选项
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

        // 由于useState是异步，这里如果是满足条件直接跳转，需要给post传最新值
        curPage === answersList.length ? post(newAnswersList) : next();
    };

    // 问题组件
    const QuestionCom = () => {
        return (
            <>
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
            </>
        );
    };

    // 目录组件
    const MenuCom = () => {
        // 填充题目题标
        const arr = Array.from({ length: answersList.length }, (_, i) => i + 1);

        // 把目录页面切回答题页面
        const onHandleMenuClick = (toClickMenu: number) => {
            setIsVisible(false);
            setCurPage(toClickMenu);
        };

        // 根据是否已经答题，来区分题目目录的背景颜色和字体颜色
        const getBgStyle = (bgIndex: number) => {
            if (
                answersList[bgIndex].value ||
                answersList[bgIndex].value === 0
            ) {
                return 'text-white bg-green-400';
            }
            return 'text-green bg-green-100';
        };

        return (
            <div>
                <div className='py-5 font-bold text-xl text-green w-full text-center'>
                    目录
                </div>
                <div className='flex'>
                    <Space>
                        {arr.map((item: number, index: number) => (
                            <div
                                key={index}
                                className={`w-7 h-7 p-1 mt-1 rounded-full flex justify-center items-center ${getBgStyle(index)}`}
                                onClick={() => onHandleMenuClick(index + 1)}
                            >
                                {item}
                            </div>
                        ))}
                    </Space>
                </div>
            </div>
        );
    };

    // 答题完成率组件
    const CircleCom = () => {
        return (
            <div className='-mt-12 w-28 h-28 rounded-full bg-white flex justify-center items-center absolute left-0 right-0 m-auto '>
                <ProgressCircle
                    percent={doneRate}
                    style={{
                        '--size': '6rem',
                        '--fill-color': '#53b53a',
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
        );
    };

    // 底部按钮组件
    const FooterCom = () => {
        return (
            <div className='absolute left-0 right-0 bottom-4'>
                <Footer
                    prev={prev}
                    menu={menu}
                    next={next}
                    post={() => post(answersList)}
                    last={curPage === answersList.length}
                />
            </div>
        );
    };

    return (
        <div className='h-full w-full bg-gradient-to-b from-[#99e9a0] to-[#deffca] flex justify-center relative'>
            <div className='w-3/4 h-2/3 mt-24 bg-white rounded-3xl relative px-5'>
                {isVisible ? <div></div> : <CircleCom />}
                {isVisible ? <MenuCom /> : <QuestionCom />}
            </div>
            {isVisible ? <div></div> : <FooterCom />}
        </div>
    );
}
