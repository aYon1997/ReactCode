import React from 'react';
import { TEST_DETAIL_HEADER_IMG, TEST_DETAIL_BODY } from './const';
import Detail from '../../components/detail/index';

const Testdetail = () => {
    return <Detail imgUrl={TEST_DETAIL_HEADER_IMG} data={TEST_DETAIL_BODY} />;
};

export default Testdetail;
