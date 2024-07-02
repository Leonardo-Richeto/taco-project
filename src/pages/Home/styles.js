import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 85%;
    margin: auto;
    min-height: 100vh;
    position: relative;
    padding-bottom: 100px;
    font-size: 1rem;

    .unfixed{
        opacity: 0.6;
    }

    .diet-span{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 55%;
        margin: 1.375rem auto 0 auto;

        input{
            background: ${({ theme }) => theme.TERTIARY_BACKGROUND};
            border: none;
            border-radius: 5px;
            width: 60%;
            height: 38px;
            text-align: center;
            color: ${({ theme }) => theme.TEXT_COLOR};
            padding: 0 6px;
        }
    }

    .diet-name{
        font-weight: 400;
        font-size: 2rem;
        text-align: center;
    }

    .save-delete-buttons{
        display: flex;
        justify-content: space-evenly;
    }

    .save-button{
        background: #2E8B57;
    }

    .delete-button{
        background: #FF4136;
    }

    .save-button, .delete-button{
        display: flex;
        font-size: 1.1rem;
        border-radius: 10px;
        border: 1px solid darkgray;
        color: #FFFFFF;
        padding: 0 16px;
        height: 2.5rem;
        align-items: center;
        box-shadow: 1px 1px 2px 0 ${({ theme }) => theme.SHADOW};

        >svg{
            min-width: 26px;
            min-height: 26px;
            margin: auto;
        }
    }

    .section-inputs {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-bottom: 1px solid ${({ theme }) => theme.GRAY_300};
        
        >div:first-child{
            margin: 1.5rem 0;
            width: 40%;
        }
    }

    .section-cards{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
        gap: 1.5rem;
        overflow-y: scroll;
        max-height: 80vh;
        margin-top: .7rem;
        padding: .7rem;
    }

    .section-cards::-webkit-scrollbar{
        background: ${({ theme }) => theme.PRIMARY_BACKGROUND};
        border-radius: 10px;
        width: .5rem;
    }

    .section-cards::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.TERTIARY_BACKGROUND};
        border-radius: 10px;
    }

    .card:hover, .selected-food:hover{
        background-color: ${({ theme }) => theme.HOVER_BACKGROUND};
        transition: background-color 0.3s ease;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {

        .section-cards{
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 93%;

        .section-inputs{
            justify-content: space-between;

            div:first-child{
                width: 50%;
            }
        }
    }
`

export const NewDietButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 3.5rem;
    margin: 2rem auto;
    font-size: 1.375rem;
    border: 2px dashed ${({ theme }) => theme.TEXT_COLOR};
    color: ${({ theme }) => theme.TEXT_COLOR};
    border-radius: 10px;
    background: ${({ theme }) => theme.TERTIARY_BACKGROUND};

    p{
        display: flex;
        
        svg{
            width: 1.75rem;
            height: 1.75rem;
            margin: auto 12px;
        }
    }

    p:hover{
        transition: 0.5s;
        opacity: 0.8;
    }
    
    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 60%;

        svg{
            width: 1.5rem;
            height: 1.5rem;
            margin: auto 6px;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 70%;
    }
`