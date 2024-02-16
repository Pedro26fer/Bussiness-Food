import styled from 'styled-components'

export const Header = styled.header`

    width: 100%;
    height: auto;
    color: #ff0f2e;
    display: flex;
    justify-content: center;
    gap: 60vw;
    padding: 2%;
    box-shadow: 0px 2px 8px #2f2f2f ;
    margin-bottom: 2%;

    div{
        display: flex;
        align-items: center ;
        width: 33%;
        justify-content: center;
        gap: 2px
        div{
            display: flex;
            flex-direction:column
        }
    }

    button{
        background-color: beige;
        padding: 1%;
        color: #ff0f2e
    }

`