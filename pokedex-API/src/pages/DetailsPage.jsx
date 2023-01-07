import { useContext } from 'react'
import {TitlePage, TitleArea, HomeButton} from './DetailsPageStyled'
import { Globalcontext } from '../context/GlobalContext'
import { DetailsCard } from '../components/DetailsCard'
import { useNavigate, useParams } from "react-router-dom";
import { goToHomePage} from '../routes/coordinator'


export function DetailsPage() {

    const params = useParams()
    const pokeName = params.pokemonName
    const context = useContext(Globalcontext)
    const { details } = context
    const navigate = useNavigate()

    return (
        <>
        <TitleArea>
            <TitlePage>Details</TitlePage>
            <HomeButton onClick={()=> goToHomePage(navigate)} >Go to Pokemons</HomeButton>
        </TitleArea>

            {details.filter((pokemon)=> pokemon.name === pokeName)
            .map((pokemon)=> {
                return <DetailsCard 
                pokemon={pokemon}
                key={pokemon}
                />
            })}
        </>
    )
}