import React from 'react';
import Questions from '../../components/questions/index';
import { QUESTIONS_DATA } from './const';

export default function questions() {
    return <Questions data={QUESTIONS_DATA} />;
}
