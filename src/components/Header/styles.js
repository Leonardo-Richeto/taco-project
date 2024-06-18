import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
    width: 100%;
    min-height: 4.25rem;
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
            align-items: center;
            list-style: none;
            gap: 1.5rem;
            font-size: 1.5em;

            a{
                color: ${({ theme }) => theme.TEXT_COLOR};
                text-decoration: none;

                svg{
                    font-size: 1.75rem;
                }
            }
        }

        >div{
            display: flex;
            align-items: center;

            .toggle-theme:hover{
                filter: opacity(0.6);
            }

            .toggle-theme{
                margin: auto 1.5rem;
                color: ${({ theme }) => theme.TEXT_COLOR};
                font-size: 1.75em;
                cursor: pointer;
            }

            a{
                font-size: 24px;
            }
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        nav{
            ul{
                gap: 2.5rem;
            }
        }
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 3rem;
        height: 3rem;
        margin: .2rem 1rem;
        border-radius: 50%;
        box-shadow: 1px 1px 5px 0 ${({ theme }) => theme.SHADOW};
        object-fit: cover;
    }

    svg{
        font-size: 2rem;
        color: red;
        cursor: pointer;
    }

    >div{
        display: flex;
        flex-direction: column;
        line-height: 24px;

        strong{
            font-size: 18px;
            color: ${({ theme }) => theme.TEXT_COLOR};
        }

        a:nth-child(2){
            font-size: 14px;
            filter: brightness(0.8);
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        display: block;
        text-align: center;
        align-items: center;

        .welcome{
            display: none;
        }
    }

`