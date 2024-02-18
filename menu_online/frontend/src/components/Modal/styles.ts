import styled from "styled-components";

interface ModalProps {
  isVisible: boolean;
}

export const DivModal = styled.div<ModalProps>`
  position: fixed;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8));
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  main {
    z-index: 2;
    opacity: 1;
    display: flex;
    flex-direction: column;
    background-color: beige;
    border-radius: 5%;
    width: 50vw;
    height: 85vh;
    justify-content: center;
    box-shadow: 0px 6px 2px #a9a9a9;

    #close {
      position: absolute;
      top: 10%; 
      right: 28%; 
      color: #ff0f2e;
      z-index: 4; 
      :hover {
        cursor: pointer;
      }
    }

    h3 {
      display: inline-flex;
      color: #ff0f2e;
      width: 100%;
      align-self: center;
      padding-left: 2%;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      gap: 3%;
      height: 90%;

      button {
        height: 3rem;
      }

      label {
        font-size: 1rem;
        font-weight: 600;
        font-family: Georgia, "Times New Roman", Times, serif;
        span{
          color: #ff0f2e;
        }
      }

      #name,
      #qty,
      #price,
      #photo {
        padding: 3%;
        width: 60%;
        height: 5%;
        border: none;
        border-radius: 5%;
      }

      section {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
      }
    }
  }
`;
