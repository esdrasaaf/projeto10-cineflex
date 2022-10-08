import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SeatFooter from "../Components/Footer/SeatFooter";
import Loading from "../Components/MidContent/Loading";
import SeatsForms from "../Components/MidContent/SeatsForm";
import SeatsSubtitle from "../Components/MidContent/SeatsSubtitle";

export default function SessionPage ({setMovieData, setSeatsArray, seatsArray, reserveIds, setReserveIds, name, cpf, setName, setCpf}) {
    const { sessionId } = useParams ()
    const [seats, setSeats] = useState ([])
    const [responseState, setResponseState] = useState([])

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);
        promisse.then((response) => {
            setSeats(response.data.seats)
            setMovieData(response.data)
            setResponseState(response.data)
            
        });
        
        promisse.catch(() => alert("Algo deu errado com a API das sessoes"))
    }, [sessionId, setMovieData])

    function selectSeat (isAvailable, id, number) {
        if (isAvailable === false) {
            alert("Assento indisponível! Escolha outro..")
        }

        if (isAvailable === true && !reserveIds.includes(id)) {
            let newArray = [...reserveIds, id]
            setReserveIds(newArray)
            let otherNewArray = [...seatsArray, number]
            setSeatsArray(otherNewArray)
        }

        if (isAvailable === true && reserveIds.includes(id)) {
            let newArray = reserveIds.filter(seat => seat !== id)
            setReserveIds(newArray)
            let otherNewArray = seatsArray.filter(seat => seat !== number)
            setSeatsArray(otherNewArray)
        }
    }

    return (
        <>
            <SessionContent>
                <TitlePage>Selecione o(s) assento(s)</TitlePage>

                {seats.length === 0 ? <Loading/> : 
                <SeatsContent>
                    {seats.map((s) => 
                        <Seat
                            data-identifier="seat"
                            onClick={() => selectSeat(s.isAvailable, s.id, s.name)}
                            key={s.id}
                            reserveIds={reserveIds}
                            id={s.id}
                            color={s.isAvailable ? "#FBE192" : "#FA8072"}
                            border={s.isAvailable ? "#F7C52B" : "#FF6347"}
                        >
                            {s.name}
                        </Seat>
                    )}
                </SeatsContent>}

                <SeatsSubtitle/>

                <SeatsForms name={name} cpf={cpf} setName={setName} setCpf={setCpf} reserveIds={reserveIds} setReserveIds={setReserveIds}/>
            </SessionContent>

            <SeatFooter responseState={responseState}/>
        </>
    );
}

// Styled Components //
const SessionContent = styled.div`
    background-color: rgb(86,86,96);
    position: relative;
    margin-bottom: 120px;
    padding-bottom: 30px;
`
const TitlePage = styled.h1`
    height: 100px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;
    color: #e0e0e0;
`
const SeatsContent = styled.ul`
    margin: 10px auto;
    box-sizing: border-box;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 640px) {
        padding: 20px;
        width: auto;
    }
`
const Seat = styled.li`
    background: ${ props => !props.reserveIds.includes(props.id) ? props.color : "#8DD7CF"};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border: 1px solid ${props => !props.reserveIds.includes(props.id) ? props.border : "#1AAE9E"};
    border-radius: 12px;
    cursor: pointer;
`