import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Catalog({setSeatsArray}) {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promisse.then((response) => {
            setMovieList(response.data);
            setSeatsArray([])
        });

        promisse.catch(() => alert("Algo deu errado com a API"))
    }, [setSeatsArray])
    
    return (
        <CatalogContent>
            <h1>Selecione o filme 🎬</h1>

            <MovieList>
                {movieList.map((m, i) => (
                    <Movie key={i} data-identifier="movie-outdoor">
                        <Link to={`/movie/${m.id}`}><MoviePoster src={m.posterURL} alt="Poster do Filme" /></Link>
                    </Movie>
                ))}
            </MovieList>
        </CatalogContent>
    );
}
// Styled Components //
const CatalogContent = styled.div`
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
const MovieList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const Movie = styled.li`
    margin-right: 30px;
    margin-left: 30px;
    margin-bottom: 30px;
`
const MoviePoster = styled.img`
    width: 127px;
    height: 197px;
    box-shadow: 0px 0px 5px 5px rgba(210, 210, 212, 0.8);
`