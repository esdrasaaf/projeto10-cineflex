import styled from "styled-components"

export default function Footer ({responseState}) {
    console.log(responseState)

    return (
        <FooterContent>
            <PosterImg src={responseState.posterURL} alt="Poster Filme"/>
            <DataSession>
                {responseState.title}
            </DataSession>
        </FooterContent>
    )
}

const FooterContent = styled.div `
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-color: gray;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;

    @media (max-width: 700px) {
        justify-content: flex-start;
    }
`
const PosterImg = styled.img `
    width: 50px;
    height: 74px;
    box-shadow: 0px 0px 5px 5px rgba(210, 210, 212, 0.8);
`
const DataSession = styled.div `
    margin-left: 15px;
    width: 20%;
    height: 89px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 750px) {
        width: 100%;
    }
`