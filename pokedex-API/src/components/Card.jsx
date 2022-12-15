import { GlobalCard, PokeInfoArea, PokeId, PokeName, TypeArea, DetailButton, PokeArea, PokeImage, CaptureButton } from './CardStyled.js'

import bulba from '../assets/bulba.svg'

import grass from '../assets/grass-type.svg'
import poison from '../assets/poison-type.svg'
import fire from '../assets/fire-type.svg'
import fly from '../assets/fly-type.svg'
import water from '../assets/water-type.svg'
import bug from '../assets/bug-type.svg'
import normal from '../assets/normal-type.svg'
import dark from '../assets/dark-type.svg'
import dragon from '../assets/dragon-type.svg'
import eletric from '../assets/eletric-type.svg'
import fairy from '../assets/fairy-type.svg'
import fight from '../assets/fight-type.svg'
import ghost from '../assets/ghost-type.svg'
import ground from '../assets/ground-type.svg'
import ice from '../assets/ice-type.svg'
import psych from '../assets/psych-type.svg'
import rock from '../assets/rock-type.svg'
import steel from '../assets/steel-type.svg'

export function Card (props) {

    return (
        <>
        <GlobalCard>
            <PokeInfoArea>
                <PokeId>#{props.idPokemon}</PokeId>
                <PokeName>{props.pokemon.name}</PokeName>
                <TypeArea>
                    <img src={grass} alt='type' />
                    <img src={poison} alt='type' />
                </TypeArea>
                <DetailButton>Details</DetailButton>
            </PokeInfoArea>

            <PokeArea>
                <PokeImage src={bulba} alt='poke-image' />
                <CaptureButton>Capture!</CaptureButton>
            </PokeArea>
        </GlobalCard>
        </>
    )
}