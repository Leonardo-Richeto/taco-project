import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 85%;
    margin: auto;
    min-height: 100vh;
    position: relative;
    padding-bottom: 100px;

    .inputs{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 1rem auto;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 93%;
    }
`