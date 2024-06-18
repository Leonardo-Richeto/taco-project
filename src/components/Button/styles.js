import { styled } from "styled-components";

export const Container = styled.button` 
        font-size: 12px;
        padding: 3px 6px;
        background: none;
        border: none;
        color: ${({ theme }) => theme.TEXT_COLOR};
        cursor: pointer;
`