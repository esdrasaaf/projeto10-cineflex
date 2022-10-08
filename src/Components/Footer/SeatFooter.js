import styled from "styled-components"

export default function SeatFooter ({responseState}) {
    if (responseState.length === 0) {
        return null
    }

    return (
        <Container>
            <PosterImg src={responseState.movie.posterURL} alt="Poster Filme"/>
            <DataSession data-identifier="movie-and-session-infos-preview">
                <span>{responseState.movie.title}</span>
                <span>{responseState.day.weekday} - {responseState.name}</span>
            </DataSession>
        </Container>
    )
}

// Styled Components //
const Container = styled.footer`
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

    @media (max-width: 600px) {
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
    width: 35%;
    height: 89px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    @media (max-width: 600px) {
        width: 100%;
    }
`