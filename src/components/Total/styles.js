import { styled } from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr 1fr 0.3fr;
    padding: 6px 12px;
    gap: 6px;
    background: ${({ theme }) => theme.TERTIARY_BACKGROUND};
    border: 1px solid ${({ theme }) => theme.BORDER_COLOR};
    border-radius: 10px;
    margin: 24px 0;

    p:nth-child(2){
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;        
    }

    p:not(:nth-child(2)):not(:nth-child(7))::after {
        content: 'g';
        opacity: 0.6;
    }
`