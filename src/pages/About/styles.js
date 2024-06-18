import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 85%;
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

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        .about{
            width: 90%;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 93%;

        .about{
            width: 100%;
        }
    }
`