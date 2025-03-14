import React from 'react';

const newsData = [
    {
        newsid: '42551397',
        classname: '国际',
        titleurl: '/p/20250314/42551397.html',
        newstime: '03-14',
        title: '尹锡悦刚重返总统府，不到 5 天，李在明就遭暗杀威胁，生死局来了',
        cateid: '60',
        titlepic:
            '//imgcdn.toutiaoyule.com/20250314/20250314123413286835_uf.jpg?300x200',
        titlepic2: '',
        titlepic3: '',
        titlepic4:
            '//imgcdn.toutiaoyule.com/20250314/20250314123413482328_uf.jpg?300x169',
        befrom: '国际旅游岛商报',
    },
    {
        newsid: '42550882',
        classname: '情感',
        titleurl: '/p/20250314/42550882.html',
        newstime: '03-14',
        title: '人过 50 岁才明白，永远不要让这 3 种人来家里串门，不管关系有多好',
        cateid: '65',
        titlepic:
            '//imgcdn.toutiaoyule.com/20250314/20250314081733626039a_t.jpeg?270x180',
        titlepic2:
            '//imgcdn.toutiaoyule.com/20250314/20250314081734417688a_t.jpeg?270x180',
        titlepic3:
            '//imgcdn.toutiaoyule.com/20250314/20250314081735772550a_t.jpeg?270x180',
        titlepic4:
            '//imgcdn.toutiaoyule.com/20250314/20250314081733626039a_t4.jpeg?300x169',
        befrom: '缘之心',
    },
    {
        newsid: '42551835',
        classname: '娱乐',
        titleurl: '/p/20250314/42551835.html',
        newstime: '03-14',
        title: '为美国庆祝生日，吃着中餐却心系美国的吕丽萍，注定在美国拾荒',
        cateid: '48',
        titlepic:
            '//imgcdn.toutiaoyule.com/20250314/20250314161816733662a_t.jpeg?180x120',
        titlepic2:
            '//imgcdn.toutiaoyule.com/20250314/20250314161817848719a_t.jpeg?300x200',
        titlepic3:
            '//imgcdn.toutiaoyule.com/20250314/20250314161818931259a_t.jpeg?300x200',
        titlepic4:
            '//imgcdn.toutiaoyule.com/20250314/20250314161816733662a_t4.jpeg?180x101',
        befrom: '雪鹰合洺',
    },
    {
        newsid: '42552340',
        classname: '财经',
        titleurl: '/p/20250314/42552340.html',
        newstime: '30 分钟前',
        title: '平安银行 2024 年年报：夯实基础固本培元 整体经营保持稳健',
        cateid: '53',
        titlepic:
            '//imgcdn.toutiaoyule.com/20250314/20250314221812997131a_t.jpeg?270x180',
        titlepic2: '',
        titlepic3: '',
        titlepic4:
            '//imgcdn.toutiaoyule.com/20250314/20250314221812997131a_t4.jpeg?300x169',
        befrom: '财联社',
    },
    {
        newsid: '42551671',
        classname: '国际',
        titleurl: '/p/20250314/42551671.html',
        newstime: '03-14',
        title: '惊魂 36 小时：巴基斯坦火车大劫案始末',
        cateid: '60',
        titlepic:
            '//imgcdn.toutiaoyule.com/20250314/20250314145321810952a_t.jpeg?270x180',
        titlepic2:
            '//imgcdn.toutiaoyule.com/20250314/20250314145322990502a_t.jpeg?270x180',
        titlepic3:
            '//imgcdn.toutiaoyule.com/20250314/20250314145324721856a_t.jpeg?270x180',
        titlepic4:
            '//imgcdn.toutiaoyule.com/20250314/20250314145321810952a_t4.jpeg?300x169',
        befrom: '国际时事讲解',
    },
    {
        newsid: '42550533',
        classname: '社会',
        titleurl: '/p/20250314/42550533.html',
        newstime: '03-14',
        title: '为何住酒店时，有人会选择在马桶中倒入开水？揭秘背后的原因',
        cateid: '47',
        titlepic:
            '//imgcdn.toutiaoyule.com/20250314/20250314012624364396_uf.png?300x200',
        titlepic2: '',
        titlepic3: '',
        titlepic4:
            '//imgcdn.toutiaoyule.com/20250314/20250314012623961337_uf.png?300x169',
        befrom: '光明网',
    },
];

const NewsList = () => {
    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {newsData.map((news) => (
                <li
                    key={news.newsid}
                    style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        marginBottom: '10px',
                        display: 'flex',
                    }}
                >
                    <img
                        src={`https:${news.titlepic}`}
                        alt={news.title}
                        style={{
                            width: '100px',
                            height: 'auto',
                            marginRight: '10px',
                        }}
                    />
                    <div>
                        <h3>{news.title}</h3>
                        <p>时间: {news.newstime}</p>
                        <p>来源: {news.befrom}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default NewsList;
