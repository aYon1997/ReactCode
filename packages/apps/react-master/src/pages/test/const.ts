export const BASE_URL = 'https://ayon1997.github.io/ImgCDN/tinyPngImg/';

export const TEST_HEADER_IMG = BASE_URL + 'card_test_header.jpg';

export const TEST_DETAIL_HEADER_IMG = BASE_URL + '11.jpg';

export const TEST_DETAIL_TO_PATH = '/test_detail';

export const TEST_RESULT_HEADER_IMG = BASE_URL + '14.jpg';

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

export const QUESTIONS_DATA = [
    {
        ask: '如果5+3=28，9+1=810，8+6=214，5+4=9，那么7+3=？？？',
        answers: ['1、104', '2、140', '3、410', '4、401'],
        right: '410',
        explain: `这是一道寻找数字运算规律的题目。破题点在于分析已知等式中数字组合与结果之间的运算逻辑关系，从而得出通用规律来解释 “\(7 + 3 = 410\)” 中结果 “410” 的由来。分析 “\(5 + 3 = 28\)”：对等式左边的两个数字5和3进行分析，发现\(5 - 3 = 2\)，\(5 + 3 = 8\)。而等式右边的结果28，恰好是将前面得到的差2和和8依次排列组合而成的。分析 “\(9 + 1 = 810\)”：同样对等式左边的9和1进行运算，\(9 - 1 = 8\)，\(9 + 1 = 10\)。等式右边的结果810，也是将差8和和10依次排列组合得到的。验证 “\(7 + 3 = 410\)”：按照前面发现的规律，先计算\(7 - 3 = 4\)，\(7 + 3 = 10\)。然后将差4和和10依次排列，就得到了410，与等式右边的结果一致，说明该规律是正确的。综上，“\(7 + 3 = 410\)” 的答案是410，是因为在这个特殊的运算规律中，等式右边的结果是由等式左边两个数的差和和依次排列组合而成的。`,
    },
    {
        ask: '如果1=5，2=10，3=15，4=20，那么5=？？？',
        answers: ['1、25', '2、35', '3、40', '4、5'],
        right: '5',
        explain: `这是一道关于数字等式规律和逻辑的题目，解题关键在于正确理解题目中所给等式的特殊逻辑关系，不能仅从常规数学运算角度思考。分析所给等式的表面规律：观察 “\(1 = 5\)，\(2 = 10\)，\(3 = 15\)，\(4 = 20\)”，可以发现从数学运算角度看，存在等号左边的数字乘以5得到等号右边数字的规律，即\(1\times5 = 5\)，\(2\times5 = 10\)，\(3\times5 = 15\)，\(4\times5 = 20\) 。关注特殊条件 “\(1 = 5\)”：在数学等式中，等号表示两边的数值或关系是相等的，具有相互性。因为题目一开始就明确给出了 “\(1 = 5\)”，那么按照等式的这一性质，5和1是相等的，所以当问5等于什么时，答案就是1。综上，答案是1，原因是根据题目开头所给的 “\(1 = 5\)” 这一特殊等式，依据等式两边相等且可相互转换的性质，得出\(5 = 1\)。`,
    },
];
