import { styled } from "styled-components"

export const Container = styled.span`
    background: ${({ theme }) => theme.ALTERNATIVE_COLOR};
    border-top: 1px solid ${({ theme }) => theme.BORDER_COLOR};
    border-bottom: 1px solid ${({ theme }) => theme.BORDER_COLOR};
    animation: fade-in 0.5s ease-in-out;
    
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    >button {
        font-size: 18px;
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.TEXT_COLOR};

        svg{
            pointer-events: none;
        }
    }

    @media screen and (max-width:1200px) {
        >p:nth-child(2){
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    @media screen and (max-width:600px) {
        border: 1px solid ${({ theme }) => theme.BORDER_COLOR};

        p{
            width: 100%;
            margin: 0;
            text-align: center;
        }
    }
`
export const InitialAddFood = styled.article`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.ALTERNATIVE_COLOR};
    min-height: 36px;
    border-top: 1px dashed ${({ theme }) => theme.TEXT_COLOR};
    border-bottom: 1px dashed ${({ theme }) => theme.TEXT_COLOR};
`