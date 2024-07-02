import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    margin: 2rem 0;
    border-radius: 10px;
    background: ${({ theme }) => theme.SECONDARY_BACKGROUND};
    box-shadow: 1px 1px 5px 0 ${({ theme }) => theme.SHADOW};
    transition: all 0.5s ease;

    .meal-title{
        border-bottom: 1px solid ${({ theme }) => theme.BORDER_COLOR};
        background: ${({ theme }) => theme.PRIMARY_BACKGROUND};
        filter: opacity(0.6);
        margin: auto;
        height: 1.75rem;
    }

    input{
        background: ${({ theme }) => theme.TERTIARY_BACKGROUND};
        border: none;
        border-radius: 5px;
        height: 1.5rem;
        width: 40%;
        text-align: center;
        color: ${({ theme }) => theme.TEXT_COLOR};
        padding: 0 6px;
        margin: 4px 0;
    }

    article{
        height: 2.5rem;
    }

    >div{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr 1fr 0.3fr;
        padding: .3rem .1rem;
    }

    .total{

        p:not(:nth-child(2)):not(:nth-child(7))::after {
            content: 'g';
            opacity: 0.6;
        }
        
        p{
            animation: fade-in 0.5s ease-in-out;
    
            @keyframes fade-in {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        }

        p:last-child{
                border: none;
            } 

        button{
            border: none;
            background: transparent;
            color: ${({ theme }) => theme.TEXT_COLOR};
            font-size: 1.2rem;
        }
    }

    .total{
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;

        .pinned{
            color: #FFA500;
        }
    }

    .macros, .total{
        background: ${({ theme }) => theme.TERTIARY_BACKGROUND};

        p{
            text-align: center;
            border-right: 1px solid ${({ theme }) => theme.PRIMARY_BACKGROUND};
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        .macros, .total{
            font-size: 1rem;

            p{
                margin: .2rem;
            }
        }

        article{
            height: 58px;
        }
    }
`
