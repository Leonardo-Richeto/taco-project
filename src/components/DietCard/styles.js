import { styled } from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.SECONDARY_BACKGROUND};
    border-radius: 5px;
    width: 100%;
    padding: 12px 0;
    border: 1px solid ${({ theme }) => theme.BORDER_COLOR};
    box-shadow: 1px 1px 5px 0 ${({ theme }) => theme.SHADOW};

    span{
        display: flex;
        margin: 0 1.5rem;
        justify-content: space-between;

        .share{
            font-size: 1.125rem;
            background: none;
            border: none;
            color: ${({ theme }) => theme.TEXT_COLOR};
            opacity: 0.6;
        }
    }

    .macros{
        display: flex;
        justify-content: space-around;
        margin: 22px 0;

        p:first-child{
            opacity: 0.6;
        }
    }

    .dates{
        display: flex;
        justify-content: space-around;
        margin: 22px 0;

        p:first-child{
            opacity: 0.6;
        }        
    }

    .buttons{
        display: flex;
        justify-content: space-around;

        button{
            font-size: 14px;
        }
    }
`