import React, { useEffect, useState } from 'react';
import { Card, Badge } from 'antd-mobile';
import axios from 'axios';

// 格式化日期函数
const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString();
};

function App() {
    const [infoData, setInfoData] = useState([]);

    useEffect(() => {
        const arr = [] as any;
        const baseUrl = 'https://api.xygeng.cn/one?' + Date.now();

        let timer = null as any;

        // 定义定时任务函数
        const scheduledTask = () => {
            // 发起接口请求
            axios
                .get(baseUrl)
                .then((response) => {
                    // console.log('接口响应数据:', response?.data?.data || {});
                    // 将移除的元素添加到数组的开头
                    arr.unshift(response?.data?.data || ({} as any));
                    setInfoData([...arr] as any); // 使用扩展运算符创建新数组
                })
                .catch((error) => {})
                .finally(() => {
                    clearTimeout(timer);
                    // 设置下一次定时任务，2 秒后执行
                    timer = setTimeout(scheduledTask, 1000);
                });
        };

        // 启动第一个定时任务
        setTimeout(scheduledTask, 0);

        // 组件卸载时清除可能的定时器（这里较难直接清除，因为是递归调用 setTimeout）
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className='p-4'>
            {/* @ts-ignore */}

            {(infoData as ayn).map((item, index) => (
                <Card key={index} className='my-4'>
                    {/* 卡片头部信息 */}
                    <div
                        className='p-4'
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {/* @ts-ignore */}
                        <Badge text={item.tag} color='blue' />
                        <span style={{ fontWeight: 'bold' }}>{item.name}</span>
                    </div>
                    {/* 卡片主体内容 */}
                    <div style={{ marginTop: 16 }} className='p-4'>
                        <span style={{ color: '#888' }}>
                            来源: {item.origin}
                        </span>
                        <p style={{ marginTop: 8 }}>{item.content}</p>
                    </div>
                    {/* 卡片底部信息 */}
                    <div
                        className='p-4'
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            color: '#888',
                            fontSize: 12,
                        }}
                    >
                        <span>创建时间: {formatDate(item.created_at)}</span>
                        <span>更新时间: {formatDate(item.updated_at)}</span>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default App;
