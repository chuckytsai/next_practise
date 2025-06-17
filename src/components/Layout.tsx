'use client'

import styled from "styled-components";
import Sidebar from "@/components/Sidebar"

const Main = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #f1f5fb;
    color: white;
`

export default function Layout() {

    return (
        <Main>
            <Sidebar />
        </Main>
    )
};