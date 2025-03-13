import React from 'react';
import { ARTICLE_LIST } from './const';

const list = () => {
    return (
        <div className='container mx-auto p-4'>
            {ARTICLE_LIST.map((item, index) => (
                <div
                    key={index}
                    className='bg-white rounded-lg shadow-md mb-4 overflow-hidden'
                >
                    <div className='flex items-start p-4'>
                        <div className='w-1/2'>
                            <p className='text-pink-500 font-bold mb-2'>“</p>
                            <p className='text-lg'>{item.text}</p>
                            <p className='text-pink-500 font-bold mt-2'>”</p>
                        </div>
                        <div className='w-1/2'>
                            <img
                                src={item.img}
                                alt={`article-${index}`}
                                className='w-full h-auto'
                            />
                        </div>
                    </div>
                    <div className='bg-gray-200 p-2'>
                        <p className='text-sm'>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default list;
