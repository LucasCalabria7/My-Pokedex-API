import pikachu from '../assets/Pikachu-header.svg'
import pokemon from '../assets/pokemon-logo.svg'
import {GlobalHeader, LogoHeader, PokedexButton} from './HeaderStyled.js'


export function Header () {


    return (
        <>
        <GlobalHeader>
            <LogoHeader src={pikachu} alt='logo-header' />
            <LogoHeader src={pokemon} alt='logo-header' />
            <PokedexButton>Go to Pokedex</PokedexButton>
        </GlobalHeader>
        </>
    )
}