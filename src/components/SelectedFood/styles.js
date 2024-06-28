import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.span`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr 1fr 0.3fr;
    padding: .3rem .1rem;
    
    background: ${({ theme }) => theme.ALTERNATIVE_COLOR};
    border-top: 1px solid ${({ theme }) => theme.BORDER_COLOR};
    border-bottom: 1px solid ${({ theme }) => theme.BORDER_COLOR};
    animation: fade-in 0.5s ease-in-out;

    >p:nth-child(2){
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    p:not(:nth-child(2)):not(:nth-child(7))::after {
        content: 'g';
        opacity: 0.6;
    }    
   
    input{
        width: 44px;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    >button {
        font-size: 1.2rem;
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.TEXT_COLOR};

        svg{
            pointer-events: none;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        font-size: 1rem;
    }
`
export const InitialAddFood = styled.article`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.ALTERNATIVE_COLOR};
    border-top: 1px dashed ${({ theme }) => theme.TEXT_COLOR};
    border-bottom: 1px dashed ${({ theme }) => theme.TEXT_COLOR};
`