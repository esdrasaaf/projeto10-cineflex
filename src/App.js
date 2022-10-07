import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './Components/Header/Header';
import CatalogPage from "./Pages/CatalogPage";
import MoviePage from "./Pages/MoviePage";
import SessionsPage from './Pages/SessionPage';
import SuccessPage from './Pages/SuccessPage';
import { useState } from 'react';

export default function App () {
    const [name, setName] = useState ('')
    const [cpf, setCpf] = useState ('')
    const [movieData, setMovieData] = useState (false)
    const [seatsArray, setSeatsArray] = useState ([])
    const [reserveIds, setReserveIds] = useState ([])

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path="/" element={<CatalogPage setSeatsArray={setSeatsArray}/>}/>
                <Route path="/movie/:movieId" element={<MoviePage/>}/>
                <Route 
                    path="/session/:sessionId" 
                    element={
                        <SessionsPage 
                            reserveIds={reserveIds} 
                            setReserveIds={setReserveIds} 
                            setSeatsArray={setSeatsArray} 
                            seatsArray={seatsArray} 
                            setMovieData={setMovieData} 
                            name={name} 
                            cpf={cpf} 
                            setCpf={setCpf} 
                            setName={setName}
                        />
                    }
                />
                <Route 
                    path="/success" 
                    element={
                        <SuccessPage 
                            seatsArray={seatsArray} 
                            movieData={movieData} 
                            name={name} 
                            cpf={cpf}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}