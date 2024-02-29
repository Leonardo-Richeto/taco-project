import { styled } from "styled-components";

export const Container = styled.div`
    width: 70%;
    margin: auto;
    min-height: 100vh;
    position: relative;
    padding-bottom: 100px;

    >section{
        display: flex;
        width: 100%;
        min-height: 70vh;
        margin: 32px auto;
        justify-content: space-between;

        .user{
            font-size: 4em;
            padding: 2px;
            border-radius: 50%;
            border: 2px solid ${({ theme }) => theme.TEXT_COLOR};
        }

        button{
            background: #FFA500;
            padding: 12px;
            width: 60%;
            font-size: 16px;
            border-radius: 25px;
        }

        >div{
            background: ${({ theme }) => theme.SECONDARY_BACKGROUND};
            padding: 14px;
            border-radius: 15px;
            box-shadow: 1px 1px 5px 0 ${({ theme }) => theme.SHADOW};
            width: 47%;
            height: 85%;
            margin: auto 0;

            div{
                margin: 24px 0;
            }
        }

        a{
            color: ${({ theme }) => theme.TEXT_COLOR};
            cursor: pointer;
        }

        a:hover{
            filter: opacity(0.8);
        }

        .info{
            margin: 38px;
            width: auto;

            p{
                margin: 8px 0;
            }

            svg{
                margin-top: 24px;
                font-size: 5em;
            }
        }
    }

    @media screen and (max-width: 980px){
        width: 95%;
        
        >section{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 18px;
            height: 100vh;

            >div{
                width: 90%;
                margin: auto;
                
                h1{
                    font-size: 24px;
                }

                form, .info{
                    font-size: 12px;
                }
            }    

            button{
                margin: 24px 0;
            }
        }
    }
`