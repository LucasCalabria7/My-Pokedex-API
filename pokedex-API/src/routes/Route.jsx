import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PokedexPage } from "../pages/PokedexPage";
import { DetailsPage } from "../pages/DetailsPage";
import { ErrorPage } from "../pages/ErrorPage";
import { Header } from '../components/Header'

export function Router () {

    const[myPokemons, setMyPokemons] = useState([])

    return (
        <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={< HomePage />}/>
            <Route path="/pokedex" element={< PokedexPage />}/>
            <Route path="/details" element={< DetailsPage />}/>
            <Route path="*" element={< ErrorPage />}/>
        </Routes>
        </BrowserRouter>
    )
}