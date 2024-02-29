import { styled } from "styled-components";

export const Container = styled.footer`
    text-align: center;
    text-decoration: none;
    border-top: 1px solid ${({ theme }) => theme.BORDER_COLOR};
    padding: 8px;
    margin: 18px 0;
    position: absolute;
    bottom: 0%;
    left: 0;
    width: 100%;
    
    a{
        text-decoration: none;
        color: inherit;
    }
    
`