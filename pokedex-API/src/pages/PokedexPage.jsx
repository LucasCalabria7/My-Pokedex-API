import styled from "styled-components"
import {Card} from '../components/Card'

export function PokedexPage (props) {

    const TitlePage = styled.h1 `
color: #ffff;
font-weight: 700;
font-size: 2.5rem;
margin: 2rem;
`

    return (
        <>
            <TitlePage>Your Pokemons</TitlePage>
            {props.myPokemons.map((mypokemon, index)=>{
                return <Card 
                key={index}
                mypokemon={mypokemon}
                />
            })}
        </>
    )
} 