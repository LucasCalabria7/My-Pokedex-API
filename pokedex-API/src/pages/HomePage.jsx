import { Card } from '../components/Card'
import { TitlePage, GlobalHomePage } from './HomePageStyled.js'
import {useContext} from 'react'
import {Globalcontext} from '../context/GlobalContext'


export function HomePage () { 

    const context = useContext(Globalcontext)
    const {pokemons} = context

    return (
        <>
        <TitlePage>All Pokemons</TitlePage>
        <GlobalHomePage>
            {pokemons.map((pokemon)=> {
                return <Card
                key={pokemon.id}
                pokemon={pokemon}
                />
            })}
        </GlobalHomePage>
        </>
    )
}