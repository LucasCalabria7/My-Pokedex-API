import { Card } from '../components/Card'
import { TitlePage, GlobalHomePage } from './HomePageStyled.js'
import { useState, useEffect } from 'react'
import axios from 'axios'


export function HomePage () { 

    const [pokemons, setPokemons] = useState([])

    const getPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then((resp)=> {
            setPokemons(resp.data.results)
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    useEffect(()=> {
        getPokemons()
    },[]);


    return (
        <>
        <TitlePage>All Pokemons</TitlePage>
        <GlobalHomePage>
            {pokemons.map((pokemon)=> {
                return <Card 
                key={pokemon.url}
                pokemon={pokemon}
                />
            })}
        </GlobalHomePage>
        </>
    )
}