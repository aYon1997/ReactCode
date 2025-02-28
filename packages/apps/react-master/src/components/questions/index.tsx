import React from 'react';
import { ProgressCircle } from 'antd-mobile';

export default function index() {
    return (
        <div className='h-full w-full bg-gradient-to-b from-[#99e9a0] to-[#deffca] flex justify-center'>
            <div className='w-3/4 mt-24 bg-white rounded-3xl relative px-10'>
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
                            <div className='text-[#53b53a] text-2xl'>50%</div>
                        </div>
                    </ProgressCircle>
                </div>
                <div className='text-[#53b53a] mt-16 w-full flex'>
                    <div>问题</div>
                    <div className='ml-1'>1/1</div>
                </div>
            </div>
        </div>
    );
}
