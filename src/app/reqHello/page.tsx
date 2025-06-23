"use client"

import { useState } from 'react';

export default function Home() {
    const [response, setResponse] = useState<string>('');

    const handleClick = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/postHello', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: '小明' }),
            });

            if (!res.ok) throw new Error('伺服器錯誤');

            const data: { message: string } = await res.json();
            setResponse(data.message);
        } catch (error) {
            console.error(error)
            setResponse('發生錯誤！');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <button onClick={handleClick}>送出請求</button>
            {response && <p>伺服器回應：{response}</p>}
        </div>
    );
}