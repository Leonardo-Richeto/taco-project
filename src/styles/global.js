import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        background-color: ${({ theme }) => theme.PRIMARY_BACKGROUND};
        color: ${({ theme }) => theme.TEXT_COLOR};
    }

    body, input {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        outline: none;
    }

    h1{
        text-align: center;
        margin-top: 28px;
        font-size: 2.5em;
    }

    a {
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