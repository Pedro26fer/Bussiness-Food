import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: auto;
  color: #ff0f2e;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 40vw;
  padding: 2%;
  box-shadow: 0px 2px 8px #2f2f2f;
  h1 {
    font-size: 3rem;
  }

  div {
    display: flex;
    align-items: center;
    width: 38%;
    height: 100%;
    justify-content: space-around;

    #backHome {
      display: flex;
      height: 50%;
      padding: 2%;
      align-items: center;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 30%;
    }
  }
`;
