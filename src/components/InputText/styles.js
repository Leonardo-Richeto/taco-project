import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    margin: auto;
    width: min-content;
    width: 100%;
    background: ${({ theme }) => theme.TERTIARY_BACKGROUND};
    box-shadow: 1px 1px 5px 0 ${({ theme }) => theme.SHADOW};
    
    >input {
        height: 56px;
        min-width: 36px;
        width: 100%;
        padding-right: 6px;
        text-align: left;
        border: none;
        background: transparent;
        color: inherit;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    input::placeholder {
        color: ${({ theme }) => theme.TEXT_COLOR};
        filter: brightness(0.8);
        overflow: hidden;
        text-overflow: ellipsis;
    }

    >svg {
        margin: 0 16px;
        min-width: 22px;
        min-height: 22px;
    }

    >p{
        margin-right: 16px;
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