import { styled } from "styled-components";

export const Container = styled.div`
    width: 70%;
    margin: auto;
    min-height: 100vh;
    position: relative;
    padding-bottom: 100px;

    .about{
        width: 60%;
        margin: auto;
        text-align: justify;
        font-weight: lighter;
        
        >h1{
            margin: 32px;
        }

        p{
            margin: 32px;
        }

        a{
            text-decoration: underline;
            color: #FFA500;
        }

        .warning{
            text-decoration: underline;
        }

        .red{
            color: red;
        }
    }

    @media screen and (max-width:800px) {
        width: 95%;
        
        .about{
            width: 100%;

            >h1{
                font-size: 24px;
            }
        }
    }
`