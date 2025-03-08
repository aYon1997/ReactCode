import React from 'react';
import Questions from '../../components/questions/index';
import { useSearchParams } from 'react-router-dom';

export default function questions() {
    // 获取当前 URL 的查询参数
    const [searchParams] = useSearchParams();
    // 从查询参数中获取特定的值
    const type = searchParams.get('type') as string;
    const data = JSON.parse(searchParams.get('infoData') as string);

    return <Questions data={data} type={type} />;
}
