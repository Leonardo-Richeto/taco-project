import backgroundImg from "../../assets/login-background.jpg"
import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: stretch;
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

    button{
            background: #FFA500;
            padding: 12px;
            width: 40%;
            font-size: 16px;
            border-radius: 25px;
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

        div{
            width: 90%;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 90%;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    filter: brightness(75%);

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`