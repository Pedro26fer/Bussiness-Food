import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: auto;
  color: #ff0f2e;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40vw;
  padding: 2%;
  box-shadow: 0px 2px 8px #2f2f2f;
  h1 {
    font-size: 3rem;
  }



  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;


    #backHome {
      display: flex;
      height: 50%;
      padding: 1%;     
    }

    h1 {
      width: 70%;
      display: inline-flex;
      justify-content: center;
      font-family: cursive;
    }

    section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 4%;
      width: 100%;

      #iconAndButtonDiv{
        justify-content: center;
        width: 50%;
        align-items: center;
        flex-direction: row;
        gap: 3%;
        justify-content: flex-start;

        #boss{
          size: 2px;
        }
      }
    }
  }
`;