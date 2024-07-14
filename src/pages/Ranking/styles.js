import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    width: 85%;
    margin: auto;
    min-height: 100vh;
    position: relative;
    padding-bottom: 100px;

    >button{
        display: flex;
        margin: auto;
        align-items: center;
        justify-content: center;
    }

    .section-select {
        width: 70%;
        margin: 1rem auto;
        display: flex;
        align-items: center;
        justify-content: space-around;

        >span{
            display: flex;
            
            >select{
                border: ${({ theme }) => theme.BORDER_COLOR};
                border-radius: 5px;
                margin: 0 6px;
                background: aliceblue;
                height: 1.375rem;
            }
        }
    }

    .buttons{
        display: flex;
        flex-direction: column;
        margin: auto;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 93%;

        .section-select{
            width: 100%;
        }
    }
`