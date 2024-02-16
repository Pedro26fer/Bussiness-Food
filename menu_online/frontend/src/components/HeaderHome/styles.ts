import styled from 'styled-components'

export const Header = styled.header`

    width: 100%;
    height: auto;
    color: #ff0f2e;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60vw;
    padding: 2%;
    box-shadow: 0px 2px 8px #2f2f2f ;
    margin-bottom: 2%;

    div{
        display: flex;
        align-items: center ;
        width: 38%;
        height: 100%;
        justify-content: space-around;
        #backHome{
            display: flex;
            height: 50%;
            padding: 2%;
            align-items: center;
        }

        section{
            display: flex;
            flex-direction:column
        }
    }

    button{
        background-color: beige;
        color: #ff0f2e;
        height: 50%;
    }

`