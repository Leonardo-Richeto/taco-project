import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    margin: 36px auto;
    border-radius: 10px;
    background: ${({ theme }) => theme.SECONDARY_BACKGROUND};
    box-shadow: 1px 1px 5px 0 ${({ theme }) => theme.SHADOW};
    transition: all 0.5s ease;


    >div, span{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr 1fr 0.3fr;
        padding: 6px 12px;
        gap: 6px;
    }

    >.total{
        
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
    }

    >div:first-child{
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    >div:last-child{
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    >div:first-child, div:last-child{
        background: ${({ theme }) => theme.TERTIARY_BACKGROUND};

        p{
            margin: 0 4px;
            text-align: center;
            border-right: 1px solid ${({ theme }) => theme.PRIMARY_BACKGROUND};
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    @media screen and (max-width:600px) {
        display: flex;

        >div:first-child{
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;

            >p{
                text-align: left;
            }
        }

        >div:last-child{
            margin: 0 0 0 auto;
            border-bottom-right-radius: 10px;
            border-top-right-radius: 10px;
        }

        >div:first-child, div:last-child, span{
            display: flex;
            flex-direction: column;
            width: 14.28%;
            padding: 6px 4px;
        
            >p{
                width: 100%;
                border: none;
                margin: 0;
                border-bottom: 1px solid ${({ theme }) => theme.PRIMARY_BACKGROUND};
            }
        }
    }
`
