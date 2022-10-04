import styled from "styled-components"
import Catalog from "./FIlmList"


export default function MidContent () {
    return (
        <MainContent>
            <h1>Selecione o filme 🎬</h1>
            <Catalog/>
        </MainContent>
    )
}

const MainContent = styled.div `
    background-color: rgb(86,86,96);
    display: flex;
    flex-direction: column;

    h1 {
        color: #DFE6ED;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 24px;
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`