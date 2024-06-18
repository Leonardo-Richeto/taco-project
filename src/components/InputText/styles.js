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
        height: 3.5rem;
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
        margin: 0 1rem;
        min-width: 1.375rem;
        min-height: 1.375rem;
    }

    >p{
        margin-right: 1rem;
    }


    input[type="search"]::-webkit-search-cancel-button{
        -webkit-appearance: none;
        height: 2rem;
        width: 2rem;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23AAA'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
        cursor: pointer;
    }
`