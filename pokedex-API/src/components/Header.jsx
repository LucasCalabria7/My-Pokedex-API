import pikachu from '../assets/Pikachu-header.svg'
import pokemon from '../assets/pokemon-logo.svg'
import {GlobalHeader, LogoHeader, PokedexButton} from './HeaderStyled.js'
import { goToPokedexPage} from '../routes/coordinator'
import {useNavigate} from 'react-router-dom'



export function Header () {

    const navigate = useNavigate()

    return (
        <>
        <GlobalHeader >
            <LogoHeader src={pikachu} alt='logo-header' />
            <LogoHeader src={pokemon} alt='logo-header' />
            <PokedexButton onClick={()=> goToPokedexPage(navigate)} >Go to Pokedex</PokedexButton>
        </GlobalHeader>
        </>
    )
}