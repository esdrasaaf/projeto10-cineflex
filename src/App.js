import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './Components/Header/Header';
import Catalog from "./Pages/CatalogPage";
import SessionsPage from "./Pages/SessionsPage";

export default function App () {
    const [filmId, setFilmId] = useState()

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path='/' element={<Catalog setFilmId={setFilmId}/>}/>
                <Route path={`/sessions/${filmId}`} element={<SessionsPage filmId={filmId} />}/>
            </Routes>
        </BrowserRouter>
    )
}