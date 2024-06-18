import { styled } from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.SECONDARY_BACKGROUND};
    border-radius: 10px;
    margin: auto;
    width: 100%;
    padding: .5rem 1.125rem;
    box-shadow: 1px 1px 5px 0 ${({ theme }) => theme.SHADOW};
    overflow: hidden;
    
    >div {
        text-align: center;
        border-bottom: 1px solid ${({ theme }) => theme.BORDER_GRAY};
        padding: 8px 0;
    }

    >section {
        display: flex;
        gap: 6px;
        justify-content: space-between;

        div {
            text-align: left;
            margin: 28px 2px;
            overflow: hidden;
        }

        div:not(:nth-child(5)){
            p:last-child::after{
                content: 'g';
                opacity: 0.6;
            }
        }

        p:first-child{
            filter: brightness(0.8);
            font-weight: lighter;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    >span {
        display: flex;
        justify-content: space-between;

        a{
            color: ${({ theme }) => theme.TEXT_COLOR};
            text-decoration: none;
            font-size: 12px;
        }

    }
`