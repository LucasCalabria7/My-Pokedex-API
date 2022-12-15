import { Card } from '../components/Card'
import { TitlePage, GlobalHomePage } from './HomePageStyled.js'
import { useState, useEffect } from 'react'
import axios from 'axios'


export function HomePage () {

    const [pokemons, setPokemons] = useState([])
    const [idPokemon, setIdPokemon ] = useState([])
    const [ type, setType ] = useState([])
    const [counter, setCounter] = useState(1)


    const getPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then((resp)=> {
            console.log(resp.data.results)
            setPokemons(resp.data.results)
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    useEffect(()=> {
        getPokemons()
    },[]);


    const getDataPokemons = () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${counter}/`)
            .then((resp)=> {
                
                setIdPokemon(resp.data.id)
                setType(resp.data)
            })
            .catch((error)=> {
                console.log(error)
            })
    }

    useEffect(()=> {
        for(let i = 0; i <= 20; i++){
            getDataPokemons()
            setCounter(+1)
        }
    },[]);


    return (
        <>
        <TitlePage>All Pokemons</TitlePage>
        <GlobalHomePage>
            {pokemons.map((pokemon)=> {
                return <Card 
                key={pokemon.url}
                pokemon={pokemon}
                idPokemon={idPokemon}
                />
            })}
        </GlobalHomePage>
        </>
    )
}