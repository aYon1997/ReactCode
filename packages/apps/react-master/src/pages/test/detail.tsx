import React from 'react';
import Detail from '../../components/detail/index';
import { useSearchParams } from 'react-router-dom';

const Testdetail = () => {
    // 获取当前 URL 的查询参数
    const [searchParams] = useSearchParams();
    // 从查询参数中获取特定的值
    const data = JSON.parse(searchParams.get('data') as string);

    return data.isClose ? (
        <div className='flex justify-center items-center h-full'>
            敬请期待！
        </div>
    ) : (
        <Detail
            imgUrl={data.imgUrl}
            data={data.infoCard}
            infoData={data.infoData}
            type={data.title}
        />
    );
};

export default Testdetail;
