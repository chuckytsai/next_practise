'use client'

import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 8px 16px;
`

export default function ClientButton() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('/api/hello')
            .then((res) => res.json())
            .then((data) => console.log('後端回應：', data))
    }, [])

    return (
        <div>
            <p>123</p>
            <Button onClick={() => setCount(count + 1)}>
                點擊我：{count}
            </Button>
        </div>
    )
}