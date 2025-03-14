import React, { useEffect, useState } from 'react';
import { Button, Card, DotLoading } from 'antd-mobile';
import axios from 'axios';

export default function emotionPressure() {
    const [jokeData, setJokeData] = useState({} as any);
    const [loading, setLoading] = useState(false);

    const handleRefresh = () => {
        setLoading(true);
        axios
            .get('https://api.chucknorris.io/jokes/random')
            .then((res) => {
                setLoading(false);
                setJokeData(res?.data || ({} as any));
            })
            .catch(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        handleRefresh();
    }, []);

    return (
        <div className='p-4'>
            {loading ? (
                <DotLoading />
            ) : (
                <div>
                    <Card>
                        <div
                            style={{ display: 'flex', alignItems: 'center' }}
                            className='p-2'
                        >
                            <img
                                src={jokeData.icon_url}
                                alt='Chuck Norris'
                                style={{
                                    width: 40,
                                    height: 40,
                                    marginRight: 10,
                                }}
                            />
                            <div>
                                <h3 style={{ margin: 0 }} className='p-2'>
                                    Chuck Norris Joke
                                </h3>
                            </div>
                        </div>
                        <p style={{ marginTop: 10 }} className='p-2'>
                            {jokeData.value}
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: 10,
                            }}
                            className='p-2'
                        >
                            <span>ID: {jokeData.id}</span>
                            <span>Updated at: {jokeData.updated_at}</span>
                        </div>
                    </Card>
                    <div className='p-4'>
                        <Button
                            block
                            color='primary'
                            size='large'
                            onClick={() => handleRefresh()}
                        >
                            刷新
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
