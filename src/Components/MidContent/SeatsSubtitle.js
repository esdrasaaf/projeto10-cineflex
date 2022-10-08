import styled from "styled-components"

export default function SeatsSubtitle() {
    return (
        <Subtitle>
            <div data-identifier="seat-selected-subtitle">
                <SeatEx color="#8DD7CF" border="#1AAE9E"/>
                <span>Selecionado</span>
            </div>
            <div data-identifier="seat-available-subtitle">
                <SeatEx color="#FBE192" border="#F7C52B"/> 
                <span>Disponível</span>
            </div>
            <div data-identifier="seat-unavailable-subtitle">
                <SeatEx color="#FA8072" border="#FF6347"/>
                <span>Indisponível</span>
            </div>
        </Subtitle>
    )
}

// Styled Components //
const Subtitle = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    gap: 25px;
    font-family: 'Roboto';
    color: #e0e0e0;

    div {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
`
const SeatEx = styled.li`
    background: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border: 1px solid ${props => props.border};
    border-radius: 12px;
`