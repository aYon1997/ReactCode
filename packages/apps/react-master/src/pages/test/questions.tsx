import React from 'react';
import Questions from '../../components/questions/index';
import { QUESTIONS_DATA } from './const';
import { useSearchParams } from 'react-router-dom';

export default function questions() {
    // 获取当前 URL 的查询参数
    const [searchParams] = useSearchParams();
    // 从查询参数中获取特定的值
    const type = searchParams.get('type') as string;

    return <Questions data={QUESTIONS_DATA} type={type} />;
}
