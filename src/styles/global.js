import { createGlobalStyle } from 'styled-components';
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        background-color: ${({ theme }) => theme.PRIMARY_BACKGROUND};
        color: ${({ theme }) => theme.TEXT_COLOR};
        font-size: 16px;

        @media (max-width: ${DEVICE_BREAKPOINTS.XS}){
            font-size: 12px;
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.XL}){
            font-size: 14px;
        }
    }

    body{
        font-family: 'Open Sans', sans-serif;

        >div{
            min-width: 300px;
        }
    }

    input{
        font-family: 'Open Sans', sans-serif;
        outline: none;
        font-size: 1.125rem;
    }

    h1{
        text-align: center;
        margin-top: 1rem;
        font-size: 2.5rem;
    }

    a{
        color: ${({ theme }) => theme.TEXT_COLOR};
        cursor: pointer;
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.8);
    }
`