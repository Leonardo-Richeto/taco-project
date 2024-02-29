import styled from 'styled-components'

export const Container = styled.div`
    width: 70%;
    margin: auto;
    min-height: 100vh;
    position: relative;
    padding-bottom: 100px;

    >span, button{
        display: flex;
        margin: auto;
        align-items: center;
        justify-content: center;
    }

    >.section-select {
        width: 70%;
        margin: auto;
        display: flex;
        align-items: center;

        >select{
            border: ${({ theme }) => theme.BORDER_COLOR};
            border-radius: 5px;
            margin: 0 6px;
            background: aliceblue;
        }
    }

    @media screen and (max-width: 800px){
        width: 95%;

        .section-select{
            display: block;
            margin: 18px auto;
        }

    }

    @media screen and (max-width: 600px){
        h1{
            font-size: 24px;
        }
    }
`