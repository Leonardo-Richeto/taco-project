import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 85%;
    margin: auto;
    min-height: 100vh;
    position: relative;
    padding-bottom: 100px;

    span{
        display: flex;
        justify-content: space-between;
        width: 60%;
        margin: 1rem auto;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        span{
            width: 90%;
        }
    }
`

export const Form = styled.form`
    width: 50%;
    margin: auto;
    padding: 2rem 1rem;
    background: ${({ theme }) => theme.SECONDARY_BACKGROUND};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.75rem;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.BORDER_COLOR};
    box-shadow: 1px 1px 5px 0 ${({ theme }) => theme.SHADOW};

    .user{
        font-size: 4em;
        padding: 2px;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.TEXT_COLOR};
    }

    div:not(:first-child){
        width: 80%;
    }
    
    >button{
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

    .login{
        margin-top: 58px;

        p{
            opacity: 0.6;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 80%;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 100%;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: auto;
    width: auto;

    >img {
        height: 7rem;
        width: 7rem;
        border-radius: 50%;
        box-shadow: 1px 1px 5px 0 ${({ theme }) => theme.SHADOW};
        object-fit: cover;
    }

    >label {
        width: 3rem;
        height: 3rem;
        border: 1px solid ${({ theme }) => theme.BORDER_COLOR};

        background: ${({ theme }) => theme.TERTIARY_BACKGROUND};
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        

        position: absolute;
        bottom: 0;
        right: 0;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.TEXT_COLOR};
        }
    }
`

export const Logout = styled.button`
    border: none;
    background: none;
    color: ${({ theme }) => theme.TEXT_COLOR};
    font-size: 16px;
`