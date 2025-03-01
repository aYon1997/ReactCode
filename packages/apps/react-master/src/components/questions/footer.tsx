import React from 'react';
import { Button, Space } from 'antd-mobile';

interface Props {
    prev: () => void | Promise<void>;
    next: () => void | Promise<void>;
    menu: () => void | Promise<void>;
    post: () => void | Promise<void>;
    last?: boolean;
}

export default function footer(props: Props) {
    return (
        <div className='w-full flex justify-center items-center'>
            <Space>
                <Button
                    className='w-24'
                    shape='rounded'
                    style={{
                        '--border-color': '#67ac53',
                        '--text-color': '#67ac53',
                        '--border-width': '2px',
                    }}
                    onClick={() => props.prev()}
                >
                    上一题
                </Button>
                <Button
                    className='w-24 bg-gradient-to-b from-[#59ba43] to-[#80e1b8]'
                    shape='rounded'
                    fill='solid'
                    style={{
                        '--text-color': '#fff',
                        '--background-color': '#59ba43',
                    }}
                    onClick={() => props.menu()}
                >
                    目录
                </Button>
                {props.last ? (
                    <Button
                        className='w-24'
                        shape='rounded'
                        style={{
                            '--border-color': '#67ac53',
                            '--text-color': '#67ac53',
                            '--border-width': '2px',
                        }}
                        onClick={() => props.post()}
                    >
                        提交
                    </Button>
                ) : (
                    <Button
                        className='w-24'
                        shape='rounded'
                        style={{
                            '--border-color': '#67ac53',
                            '--text-color': '#67ac53',
                            '--border-width': '2px',
                        }}
                        onClick={() => props.next()}
                    >
                        下一题
                    </Button>
                )}
            </Space>
        </div>
    );
}
