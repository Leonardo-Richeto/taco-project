import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    border-radius: 10px;
    overflow: hidden;
    width: 85%;
    margin: 28px auto;
    min-height: 200px;
    background: ${({ theme }) => theme.SECONDARY_BACKGROUND};
    box-shadow: 1px 1px 5px 0 ${({ theme }) => theme.SHADOW};

    >p{
        background: ${({ theme }) => theme.TERTIARY_BACKGROUND};
        border-bottom: 1px solid ${({ theme }) => theme.TEXT_COLOR};
        padding: 8px;
    }

    >section {
        text-align: center;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));
        gap: 1rem 0;
        padding: 1rem 0;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
        >section{
            grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        >section{
            grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
        }
    }

`
export const Nutrient = styled.div`
    margin: auto;

    p:first-child{
        filter: brightness(0.8);
        font-weight: lighter;
    }

    span{
        opacity: 0.6;
    }
`

export const ColoredNutrient = styled.div`
    margin: auto;
    color: #FFA500;

    p:first-child{
        filter: brightness(0.8);
        font-weight: lighter;
    }

    span{
        opacity: 0.6;
    }
`