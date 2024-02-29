import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    margin: 24px auto;
    width: min-content;
    max-width: 105px;
    background: ${({ theme }) => theme.TERTIARY_BACKGROUND};
    box-shadow: 1px 1px 5px 0 ${({ theme }) => theme.SHADOW};
    
    >input {
        height: 56px;
        min-width: 36px;
        width: 100%;
        text-align: right;
        border: none;
        background: transparent;
        color: inherit;
    }

    input::placeholder {
        color: ${({ theme }) => theme.TEXT_COLOR};
        filter: brightness(0.8);
    }

    .weight-svg {
        margin: 0 16px;
        min-width: 22px;
        min-height: 22px;
    }

    .edit-svg{
        margin: 0 6px;
        min-width: 26px;
        min-height: 26px;
        cursor: text;
    }

    @media screen and (max-width:800px) {
        height: 36px;

        input{
            font-size: 14px; 

        }
        
        svg{
            margin: 0 8px;
            min-width: 14px;
            min-height: 14px;
        }
    }
`