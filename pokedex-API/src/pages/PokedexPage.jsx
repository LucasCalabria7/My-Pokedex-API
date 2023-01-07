import { Card } from '../components/Card'
import { useContext } from 'react'
import { Globalcontext } from '../context/GlobalContext'
import {TitlePage, GlobalHomePage, TitleArea, HomeButton} from './PokedexPageStyled'
import {useNavigate} from 'react-router-dom'
import { goToHomePage} from '../routes/coordinator'

export function PokedexPage() {

    const navigate = useNavigate()
    const context = useContext(Globalcontext)
    const { myPokemons } = context

    return (
        <>
        <TitleArea>
            <TitlePage>Your Pokemons</TitlePage>
            <HomeButton onClick={()=> goToHomePage(navigate)} >Go to Pokemons</HomeButton>
        </TitleArea>
            <GlobalHomePage>
                {myPokemons.map((pokemon) => {
                    return <Card
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                })}
            </GlobalHomePage>
        </>
    )
} 