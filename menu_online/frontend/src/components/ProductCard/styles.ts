import styled from "styled-components";

export const ProductCardStyled = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: beige;
    border-radius: 3%;
    padding: 1% 5% 5% 5%;
    min-width: 17vw;
    height: 37vh;
    box-shadow: 0px 6px 2px #a9a9a9;

    ul {
        list-style: none;
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: 1.1rem;

        li{
            font-family: Georgia, 'Times New Roman', Times, serif;            
        }
    }    
    img{
        min-width: 100%;
        border-radius: 5%;
        max-height: 60%;

    }


`
