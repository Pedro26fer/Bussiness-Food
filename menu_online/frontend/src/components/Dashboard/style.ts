import styled from "styled-components";

export const DashboardDiv = styled.div`
  width: 100vw;
  min-height: 70%;
  padding-left: 9%;
  position: relative;
  gap: 2%;

  #buttonsDiv {
    width: 95%;
    padding: 1%;
    button {
      position: absolute;
      z-index: 2;
      height: 4vh;
      background-color: beige;
      color: #ff0f2e;
      box-shadow: 0px 6px 2px #a9a9a9;
      left: 50px;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: auto;
    list-style: none;
    gap: 4%;
  }
`;
