import { styled } from "styled-components";

export const Container = styled.header`
    width: 100%;
    min-height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.BORDER_GRAY};

    nav{
        display: flex;
        justify-content: space-between;
        width: 100%;
    
        ul{
            display: flex;
            list-style: none;
            gap: 24px;
            font-size: 1.5em;

            a{
                color: ${({ theme }) => theme.TEXT_COLOR};
                text-decoration: none;
            }
        }

        >div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 124px;

            >svg, a{
                background: transparent;
                border: none;
                color: ${({ theme }) => theme.TEXT_COLOR};
                font-size: 1.5em;
                cursor: pointer;
            }

            >svg:hover{
                filter: brightness(0.6);
            }
        }
    }

    @media screen and (max-width: 600px){
        font-size: 12px;

        nav{
            font-size: 14px;
            
            li{
                margin: 0 12px;
                cursor: pointer;
            }

            div{
                margin: 0 12px;
            }
        }
    }
`