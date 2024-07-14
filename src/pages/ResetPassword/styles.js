import backgroundImg from "../../assets/login-background.jpg"
import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: stretch;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        }
`

export const Form = styled.form`
    width: 40%;
    height: 100vh;
    background: ${({ theme }) => theme.SECONDARY_BACKGROUND};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 32px;
    margin: auto;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.BORDER_COLOR};
    box-shadow: 1px 1px 5px 0 ${({ theme }) => theme.SHADOW};

    div{
        margin: 0;
        width: 70%;
    }

    .user{
        font-size: 4em;
        padding: 2px;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.TEXT_COLOR};
    }

    .button{
        background: #FFA500;
        padding: 12px;
        width: 40%;
        font-size: 16px;
        border-radius: 25px;
        border: none;
        cursor: pointer;
        position: relative;
    }

    .button-text {
        transition: all 0.2s;
    }

    .button-loading .button-text {
        visibility: hidden;
        opacity: 0;
        color: red;
    }

    .button-loading::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border: 4px solid transparent;
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: button-loading-spinner 1s ease infinite;
    }

    @keyframes button-loading-spinner{
        from {
            transform: rotate(0turn);
        }

        to {
            transform: rotate(1turn);
        }
    }

    a{
        color: ${({ theme }) => theme.TEXT_COLOR};
        cursor: pointer;
    }

    a:hover{
        filter: opacity(0.8);
    }

    .links{
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin-top: 48px;
    }
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 70%;
        margin: auto;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 90%;
    }
`