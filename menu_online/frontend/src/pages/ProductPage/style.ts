import styled from "styled-components";

export const ProductPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: beige;
  position: relative;

  #mainPage {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: black;
    width: 100vw;
    height: 70vh;

    img {
      width: 40vw;
      max-height: 60vh;
      border-radius: 5%;
    }

    figcaption {
      font-size: 1.2rem;
      font-family: Georgia, "Times New Roman", Times, serif;
      color: #ffa20f;
    }

    font-size: 1.6rem;
    color: #070707;

    button{
      position: absolute;
      left: 88vw;
      width:5%;
      height: 5%;
      font-size: 1.1rem;
      :hover{
        box-shadow: none;
      }

    }

    ul {
      list-style: none;
      padding: 2%;
      color: #ff0f2e;
    }

    #info {
      width: 40%;
      height: 60%;
      display: flex;
      align-self: center;
      gap: 12%;
      flex-direction: column;
      border: 1px solid #ffa20f;
      border-radius: 5%;
      padding: 2% 5%;
    }
  }
`;
