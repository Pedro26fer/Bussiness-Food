import styled from 'styled-components'

export const DivPage = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    

    background-color: #fff;
    color: #ff0f2e;

    header{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    width: 40%;
    height: 60%;
    border: 1px solid #ffa20f;
    border-radius: 2%;
    justify-content: space-around;
    align-items: center;
    span{
        color: #fa0f2e
    }

    label{
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 1.3rem;
    }

    div{
        width: 70%;
        color: #000;
        display: flex;
        flex-direction: column;
        gap: 1em;
        span{
            font-size: 0.8rem;
            color:#ff0f2e;
            font-weight: 500;
        }
        input{
            width: 100%;
            padding: 3%;
            background-color: #eee2e2;
            border: none;
            border-radius: 3%;
        }
    }


`