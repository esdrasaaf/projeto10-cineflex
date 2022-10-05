import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from '../Components/Footer/Footer';
import NiceButton from "../NiceButton"

export default function SessionsPage ({filmId}) {
    const [sessionsList, setSessionsList] = useState([])
    const [responseState, setResponseState] = useState([])

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmId}/showtimes`);
        promisse.then((response) => {
            setSessionsList(response.data.days);
            setResponseState(response.data);
        });

        promisse.catch(() => alert("Algo deu errado com a API sessoes"))
    }, [filmId])

    return (
        <>
            <SessionContent>
                <h1>Selecione o horário</h1>

                {sessionsList.map((s) =>
                    <Session key={s.id}>
                        <span>{`${s.weekday} - ${s.date}`}</span>
                        <ButtonSession>
                            {s.showtimes.map((t) => <NiceButton key={t.id} content={t.name}/>)}
                        </ButtonSession>
                    </Session>)}
            </SessionContent>

            <Footer responseState={responseState}/>
        </>
    )
}

// Styled Components //
const SessionContent = styled.div `
    background-color: rgb(86,86,96);
    margin-bottom: 120px;
    
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
const Session = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-left: 24px;
    width: 100%;
    height: 110px;
    margin-top: 23px;

    @media (max-width: 700px) {
        align-items: flex-start;
    }

    span {
        color: lightgray;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 22px;
    }
`
const ButtonSession = styled.div`
    display: flex;
    justify-content: space-between;
    width: 180px;
`