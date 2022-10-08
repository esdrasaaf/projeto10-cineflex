import axios from "axios"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import NiceButton from "./NiceButton"

export default function SeatsForms({reserveIds, setReserveIds, name, cpf, setName, setCpf}) {
    const navigate = useNavigate()

    function postReserve (event) {
        event.preventDefault()
        
        if (reserveIds.length !== 0){
            const promisse = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
                ids: reserveIds,
                name: name,
                cpf: cpf
            });

            promisse.then(() => {
                setReserveIds([])
                navigate("/success")
            });
            promisse.catch(() => alert("Algo deu errado com a API das sessoes"))            
        } else {
            alert("Escolha um assento primeiro!")
        }

    }

    return (
        <FormContainer onSubmit={postReserve}>
            <FormContent>
                <label htmlFor="name">Nome do comprador:</label>
                <input data-identifier="buyer-name-input" id="name" required onChange={(e) => setName(e.target.value)} placeholder="Digite o seu nome..."/>
            </FormContent>

            <FormContent>
                <label htmlFor="cpf">CPF do comprador</label>
                <input data-identifier="buyer-cpf-input" id="cpf" required pattern="\d{3}.?\d{3}.?\d{3}-?\d{2}" onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu CPF..."/>
            </FormContent>

            <ReservButton data-identifier="reservation-btn">
                    <NiceButton content={"Reservar assento(s)"}/>
            </ReservButton>
        </FormContainer>
    )
}

// Styled Components //
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const FormContent = styled.div`
    padding: 0px 25px;
    margin-top: 20px;
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    label {
        height: 25px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #e0e0e0;
    }

    input {
        box-sizing: border-box;
        height: 50px;
        width: 100%;
        padding: 10px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;

        &::placeholder {
            font-style: italic
        }
    }
`
const ReservButton = styled.div`
    margin-top: 50px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    a {text-decoration: none}
`