import { styled } from "styled-components";

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
        grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
    }

    @media screen and (max-width: 800px){
        font-size: 12px;
        
        >section{
            grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
        }
    }

    @media screen and (max-width: 600px){

        >section{
            grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
        }
    }

    @media screen and (max-width: 550px){

        >section{
            grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
        }
    }
`
export const Nutrient = styled.div`
    padding: 14px;
    min-width: 86px;
    margin: auto;

    p:first-child{
        filter: brightness(0.8);
        font-weight: lighter;
    }
`

export const ColoredNutrient = styled.div`
    padding: 14px;
    min-width: 86px;
    margin: auto;
    color: #FFA500;

    p:first-child{
        filter: brightness(0.8);
        font-weight: lighter;
    }
`