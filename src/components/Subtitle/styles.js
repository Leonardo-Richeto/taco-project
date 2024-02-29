import { styled } from "styled-components";

export const Container = styled.div`
    border-radius: 10px;
    justify-content: center;
    text-align: center;
    padding: 12px;
    font-size: 0.8em;
    font-weight: lighter;
    
    >h3 {
        margin-bottom: 6px;
    }

    >section{
        display: flex;
        justify-content: space-between;
        margin: 12px;
        gap: 6px;
    }

    a{
        color: ${({ theme }) => theme.TEXT_COLOR};
    }

    @media screen and (max-width:600px) {
        section{
            display: block;
        }
    }
`