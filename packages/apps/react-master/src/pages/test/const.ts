export const BASE_URL = 'https://ayon1997.github.io/ImgCDN/tinyPngImg/';

export const TEST_HEADER_IMG = BASE_URL + 'card_test_header.jpg';

export const TEST_DETAIL_HEADER_IMG = BASE_URL + '11.jpg';

export const TEST_DETAIL_TO_PATH = '/test_detail';

export const TEST_CARD_LIST = [
    {
        imgUrl: BASE_URL + 'card_test_item1.jpg',
        title: '智商测试',
    },
    {
        imgUrl: BASE_URL + '10.jpg',
        title: '寻找适合你的恋爱色彩',
    },
    {
        imgUrl: BASE_URL + '9.jpg',
        title: 'Know Me',
    },
    {
        imgUrl: BASE_URL + '8.jpg',
        title: '测一测你能感受到多少社会支持',
    },
    {
        imgUrl: BASE_URL + '7.jpg',
        title: '你拥有一个怎样的灵魂？',
    },
    {
        imgUrl: BASE_URL + '6.jpg',
        title: '看图测一测你身上潜在的压力',
    },
    {
        imgUrl: BASE_URL + '5.jpg',
        title: '你的心中困住了什么？',
    },
    {
        imgUrl: BASE_URL + '4.jpg',
        title: 'MBTI人类图鉴',
    },
    {
        imgUrl: BASE_URL + '3.jpg',
        title: '测测你的性格是否很强势',
    },
    {
        imgUrl: BASE_URL + '2.jpg',
        title: '应激能力分析',
    },
    {
        imgUrl: BASE_URL + '1.jpg',
        title: '行事风格小预测',
    },
];

export const TEST_DETAIL_BODY = {
    header: {
        title: '智商测试',
        subtitle: '据说智商150以上的人才能答对这道题',
    },
    content: [
        {
            imgUrl: BASE_URL + '13.jpg',
            title: '该怎么测？',
            content: [
                '1、请尽量在安静环境下做完整个测试。',
                '2、请确保对每一题目都理解清楚后再选出适合您情况的选项。',
            ],
        },
        {
            imgUrl: BASE_URL + '12.jpg',
            title: '能测什么？',
            content: ['答题看看你的智商有多高呢？'],
        },
    ],
    path: '/test_detail_questions',
};
