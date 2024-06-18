import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;

    div{
        display: flex;
        align-items: center;
        border: none;
        border-radius: 10px;
        max-width: 105px;
        background: ${({ theme }) => theme.TERTIARY_BACKGROUND};
        box-shadow: 1px 1px 5px 0 ${({ theme }) => theme.SHADOW};
    
        >input{
            height: 3.5rem;
            min-width: 36px;
            width: 100%;
            text-align: right;
            border: none;
            background: transparent;
            color: inherit;
        }
        
        input::placeholder {
            color: ${({ theme }) => theme.TEXT_COLOR};
            filter: brightness(0.8);
    }
    
    .weight-svg{
        margin: 0 .7rem;
        min-width: 1.375rem;
        min-height: 1.375rem;
    }
}

    .edit-svg{
        min-width: 1.625rem;
        min-height: 1.625rem;
        cursor: text;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        div{
            max-width: 136px;

        }
    }
`