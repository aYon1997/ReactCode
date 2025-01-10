import React from 'react';
import { Outlet } from 'react-router-dom';

const Question = () => {
    return (
        <div>
            Question
            <Outlet />
        </div>
    );
};

export default Question;
