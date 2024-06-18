import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 85%;
    margin: auto;
    min-height: 100vh;
    position: relative;
    padding-bottom: 100px;
    
    >div{
        margin: auto;
        text-align: center;

        >p{
            font-weight: lighter;
            margin-top: 10vh;
        }

        a{
            color: ${({ theme }) => theme.TEXT_COLOR};
            cursor: pointer;
            font-size: 16px;
        }
    }

    .section-diets{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
        align-items: center;
        justify-content: space-between;
        margin: 24px auto;
        padding: 12px;
        gap: 1.5rem;

        div:hover{
            background-color: ${({ theme }) => theme.HOVER_BACKGROUND};
            transition: background-color 0.3s ease;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {

        .section-diets{
            grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 90%;

        .section-diets{
            grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 93%;
        
        .section-diets{
            grid-template-columns: repeat(auto-fill, minmax(80%, 1fr));
        }
    }
    
`
