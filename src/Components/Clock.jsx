import React, { useState } from 'react'
import styled, { ThemeProvider } from "styled-components"
// Understanding React state and styled-components
const MyH3 = styled.h3`
padding: 3rem;
background-color: ${({ theme }) => theme.color};
color:  ${({ theme }) => theme.bgColor};
text-align:center;
`;
const MyButton = styled.button`
padding: 1rem;
background-color: white;
color: black;
text-align:center;
border-radius: 1rem;
cursor: pointer;
`;
// Herenchy
const MyH3Rounded = styled(MyH3)`
border-radius: 1rem;
`
const dark = {
    color: "black",
    bgColor: "white"
}
const light = {
    color: "white",
    bgColor: "black"
}
const Clock = () => {
    const initialDate = new Date()
    const time = initialDate.getHours() + ":" + initialDate.getMinutes() + ":" + initialDate.getSeconds();

    const [count, setCount] = useState(time);
    const [intervalId, setIntervalId] = useState(null);
    const getDate = () => {
        const handleIntrval = setInterval(() => {
            const date = new Date()
            const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            setCount(time)
        }, 1000)
        setIntervalId(handleIntrval)
        return handleIntrval
    }
    const stopDate = () => {
        console.log("stopping clock")
        clearInterval(intervalId)
    }
    return (
        <div>
            <ThemeProvider theme={dark}>
                <MyH3>Clock component dark</MyH3>
            </ThemeProvider>
            <ThemeProvider theme={light}>
                <MyH3Rounded >Clock component light</MyH3Rounded>
            </ThemeProvider>
            <h6>{count}</h6>
            <MyButton onClick={() => getDate()} > Play </MyButton>
            <MyButton onClick={() => stopDate()} > Stop </MyButton>
        </div>
    )
}
export default Clock
