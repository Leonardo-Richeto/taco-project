import { styled } from "styled-components";

export const Container = styled.div`
    width: 70%;
    margin: auto;
    min-height: 100vh;
    position: relative;
    padding-bottom: 100px;

    .input{
        display: flex;
        justify-content: space-between;

        >a{
            border: none;
            background: transparent;
            color: ${({ theme }) => theme.TEXT_COLOR};
            display: flex;
            align-items: center;
            margin: auto;
            gap: 6px;
        }
    }

    .amount-input{
        width: 15%;
        margin-right: 20%;
        min-width: 94px;

        input{
            text-align: right;
        }

        svg{
            width: 36px;
        }
    }

    @media screen and (max-width:800px) {
        width: 95%;
    }
`