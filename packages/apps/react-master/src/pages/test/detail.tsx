import React from 'react';
import { TEST_DETAIL_HEADER_IMG, TEST_DETAIL_BODY } from './const';
import Detail from '../../components/detail/index';
import { useSearchParams } from 'react-router-dom';

const Testdetail = () => {
    // 获取当前 URL 的查询参数
    const [searchParams] = useSearchParams();
    // 从查询参数中获取特定的值
    const type = searchParams.get('type') as string;

    console.log(type, 111);

    return (
        <Detail
            imgUrl={TEST_DETAIL_HEADER_IMG}
            data={TEST_DETAIL_BODY}
            type={type}
        />
    );
};

export default Testdetail;
