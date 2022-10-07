import styled from "styled-components"

export default function Loading () {
    return (
        <LoadingDiv>
            <img src="https://www.supervalemg.com.br/VALESITE/_lib/img/loadingautentica.gif" alt="Loading GIF"/>
        </LoadingDiv>
    )
}

// Styled Components //
const LoadingDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 200px;
        width: 200px;
    }
`