import { Link } from "react-router-dom"
import styled from "styled-components"
import NiceButton from "../Components/MidContent/NiceButton"
import Loading from "../Components/MidContent/Loading"

export default function SuccessPage ({name, cpf, movieData, seatsArray}) {
    if (!movieData) {
        return (
            <ErrorContainer>
                <Loading/>
                <TitlePage>Não foi possível pegar os dados da reserva!</TitlePage>
                <Link to={"/"}><NiceButton content={"Voltar para Home"}/></Link>
            </ErrorContainer>
        )
    }

    let regexCpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
    function( regex, argumento1, argumento2, argumento3, argumento4 ) {
           return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
   })

    return (
        <SuccessContainer>
            <TitlePage>Pedido feito com sucesso!</TitlePage>

            <BuyerContent>
                <h2>Filme e sessão</h2>
                <span data-identifier="movie-session-infos-reserve-finished">{movieData.movie.title}</span>
                <span data-identifier="movie-session-infos-reserve-finished">{movieData.day.date} - {movieData.name}</span>
            </BuyerContent>

            <SeatsContent>
                <h2>Ingressos</h2>
                {seatsArray.map((n, idx) => <span data-identifier="seat-infos-reserve-finished" key={idx}>Assento {n}</span>)}
            </SeatsContent>

            <BuyerContent>
                <h2>Comprador</h2>
                <span data-identifier="buyer-infos-reserve-finished">Nome: {name}</span>
                <span data-identifier="buyer-infos-reserve-finished">CPF: {regexCpf}</span>
            </BuyerContent>

            <ButtonDiv data-identifier="back-to-home-btn">
                <Link to={"/"}><NiceButton content={"Voltar para Home"}/></Link>
            </ButtonDiv>
        </SuccessContainer>
    )
}

// Styled Components //
const ErrorContainer = styled.div`
    height: 500px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    a {text-decoration: none}
`
const SuccessContainer = styled.div `
    height: 100%;
`
const TitlePage = styled.h1`
    height: 100px;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;
    color: #e0e0e0;
`
const BuyerContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 110px;
    padding: 0 30px;
    margin-bottom: 25px;

    h2 {
        margin-bottom: 10px;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 24px;
        color: #FFe000;
    }

    span {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #e0e0e0;
        margin-bottom: 5px;
    }
`
const SeatsContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px;
    margin-bottom: 25px;

    h2 {
        margin-bottom: 10px;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 24px;
        color: #FFe000;
    }

    span {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #e0e0e0;
        margin-bottom: 4px;
    }
`
const ButtonDiv = styled.div`
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    a{text-decoration: none}
`