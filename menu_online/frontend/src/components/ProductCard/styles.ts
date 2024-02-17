import styled from "styled-components";

export const ProductCardStyled = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: beige;
    border-radius: 3%;
    padding: 1% 5% 5% 5%;
    margin-bottom: 5%;
    width: 17vw;
    height: 37vh;
    box-shadow: 0px 6px 2px #a9a9a9;
    position: relative;

    #Trash{
        position: absolute;
        right:10px;
        bottom: 10px;
        :hover{
            cursor: pointer;
            color: #ff0f2e;
        }
    }

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
        width: 16vw;
        border-radius: 5%;
        height: 60%;

    }


`

