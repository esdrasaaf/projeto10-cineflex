import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Catalog({setFilmId}) {
    const [filmList, setFilmList] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promisse.then((response) => {
            setFilmList(response.data);
        });

        promisse.catch(() => alert("Algo deu errado com a API"))
    }, [])
    
    return (
        <CatalogContent>
            <h1>Selecione o filme 🎬</h1>

            <FilmList>
                {filmList.map((f, i) => (
                    <Film key={i}>
                        <Link onClick={() => setFilmId(`${f.id}`)} to={`/sessions/${f.id}`}><FilmPoster src={f.posterURL} alt="Poster do Filme" /></Link>
                    </Film>
                ))}
            </FilmList>
        </CatalogContent>
    );
}

const CatalogContent = styled.div`
    background-color: rgb(86,86,96);

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
const FilmList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const Film = styled.li`
    margin-right: 30px;
    margin-left: 30px;
    margin-bottom: 30px;
`
const FilmPoster = styled.img`
    width: 135px;
    height: 196px;
    box-shadow: 0px 0px 5px 5px rgba(210, 210, 212, 0.8);
`