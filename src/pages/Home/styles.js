import { styled } from "styled-components";

export const Container = styled.div`
    width: 70%;
    margin: auto;
    min-height: 100vh;
    position: relative;
    padding-bottom: 100px;

    >.section-inputs {
        display: flex;
        align-items: center;
        justify-content: space-around;
        max-height: 10vh;
        padding-bottom: 36px;
        border-bottom: 1px solid ${({ theme }) => theme.GRAY_300};

        .search-div{
            display: flex;
            width: 35%;
            margin: 24px auto;
        }
    }

    .section-cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .card:hover, .selected-food:hover{
        background-color: ${({ theme }) => theme.HOVER_BACKGROUND};
        transition: background-color 0.3s ease;
    }

    @media screen and (max-width:1600px) {
        .section-cards{
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width:1150px) {
        width: 90%;

        .section-cards{
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media screen and (max-width:800px) {
        font-size: 12px;
    }

    @media screen and (max-width:600px) {
        width: 95%;

        >.section-cards{
            grid-template-columns: repeat(1, 1fr);
        }

}
`